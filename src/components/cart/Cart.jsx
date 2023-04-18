import "./style.scss";
import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../../contextProvider/cartContext/Cartcontext";
import axiosInstance from "../../utilities/axios";

export default function Cart() {

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
                        <li>{item.name}</li>

                    )
                }
            </ul>
        </>
    )
}