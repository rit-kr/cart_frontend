import "./style.scss";
import { useEffect, useState } from "react";
import axiosInstance from "../../utilities/axios";
import { NavLink, useNavigate } from "react-router-dom";

import { Rate } from 'antd';

export default function Showproduct() {

    const [items, setItems] = useState([])
    const navigate = useNavigate();
    const getProducts = async () => {
        try {
            const response = await axiosInstance.get("/items");
            console.log("res items", response);
            setItems(response.data.products)
        } catch (error) {
            console.error(error.message);

        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handleDetails =(item) => {
        // navigate("/productdetails")
    }

    console.log("items", items)

    return (
        <>
            <ul className="item_list">
                {
                    items.map(item =>
                        <li className="item" key={item.id}>
                            <div onClick={() => handleDetails(item)}>
                                <img src={item.image} alt="" />
                            </div>
                            <p onClick={() => handleDetails(item)}>{item.name}</p>
                            <div>
                                <Rate disabled defaultValue={item.stars} />
                            </div>
                            <p>${item.price}</p>
                        </li>
                    )
                }
            </ul>
        </>
    )
}