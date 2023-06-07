import "./style.scss";
import { useContext, useEffect, useState } from "react";
import axiosInstance from "../../utilities/axios";
import { NavLink, useNavigate } from "react-router-dom";
import { Rate } from 'antd';
import { useUserContext } from "../context/userContext/UserContextProvider";

export default function Showproduct(props) {

    const [items, setItems] = useState([])
    const { addToCart } = useUserContext();

    // const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const getProducts = async () => {
        try {
            const response = await axiosInstance.get("/items");
            setItems(response.data.products)
        } catch (error) {
            console.error(error.message);

        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handleAddToCart = async (item) => {
        // e.preventDefault();
        const payload = {
            product: {
                id: item._id,
                count:1
            }
        }
        try {
            const res = await addToCart(payload);
            alert("New item added");
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <>
            <ul className="item_list">
                {
                    items.map(item =>
                        <li className="item" key={item.id}>
                            <div onClick={() => props.handleProductDetails(item)} >
                                {
                                    item.image == null ?
                                        <img src={"https://picsum.photos/200/300.jpg"} alt="" />
                                        :
                                        <img src={item.image} alt="" />
                                }
                            </div>
                            <p onClick={() => props.handleProductDetails(item)}>{item.name}</p>
                            <div>
                                <Rate disabled defaultValue={item.stars} />
                            </div>
                            <p>${item.price}</p>
                            <button className="add_to_cart_btn"
                                onClick={() => handleAddToCart(item)}
                            >Add to cart</button>
                        </li>
                    )
                }
            </ul>
        </>
    )
}