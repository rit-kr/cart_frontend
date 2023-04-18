import "./style.scss";
import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../../contextProvider/cartContext/Cartcontext";
import axiosInstance from "../../utilities/axios";

export default function Cart(props) {

    const [cartProducts, setCartProducts] = useState([]);
    // const Globalstate = useContext(Cartcontext);
    // const state = Globalstate.state;
    // console.log(state)
    // const dispatch = Globalstate.dispatch;

    const getProducts = async () => {
        try {
            const response = await axiosInstance.get("/user/cart");
            console.log("cart items", response);
            setCartProducts(response.data.cart.product)
            console.log("cart res", response.data.cart.product)
        } catch (error) {
            console.error(error.message);

        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    console.log("cartProducts", cartProducts)


    return (
        <>
            <div>
                <h4>Shopping Cart</h4>
                <h4>Price</h4>
            </div>
            <ul className="">
                {
                    cartProducts.map(item =>
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt="cart_img" />
                            </div>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <div>
                                <h3>${item.price * item.count}</h3>
                                <button
                                onClick={() => props.handleDecrease({ ...item })}
                                >-</button>
                                <button
                                onClick={() => props.handleIncrement({ ...item })}
                                >+</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </>
    )
}