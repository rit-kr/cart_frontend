import { useContext } from "react";
import "./style.scss";
import { Rate } from "antd";
import { Cartcontext } from "../../contextProvider/cartContext/Cartcontext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utilities/axios";

export default function Productdetails(props) {

    const navigate = useNavigate();
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    // console.log("cartContext", Globalstate);

    const handleAddToCart = async (item) => {
        console.log(item);
        const payload = {
            product: {
                id:item._id,
                count:1,
            }
        }
        try {
            const response = await axiosInstance.post("user/cart", payload);
            console.log("addToCart",response)
            navigate("/cart");
            window.location.reload(true);
        } catch (error) {
            console.error(error.message);
        }
    }



    const item = props.selectedProduct;
    console.log(item);
    return (
        <>
            <div className="product_detils">
                <div className="product_img">
                    <img src={item.image} alt="img" />
                </div>
                <div className="product_detils_">
                    <div>
                        <p>{item.name}</p>
                        <div>
                            <Rate disabled defaultValue={item.stars} />
                        </div>
                        <p>${item.price}</p>
                    </div>
                    <div>
                        <p>{item.brand}</p>
                        <p>{item.varient.color}</p>
                    </div>
                    <div>
                        <p>{item.discription}</p>
                    </div>
                </div>
                <div >
                    <p>${item.price}</p>
                    <button className="add_to_cart_product_btn"
                    // onClick={() => dispatch({type:"ADD", payload:item})}
                    onClick={() => handleAddToCart(item)}
                >Add to cart</button>
                </div>
            </div>
        </>
    )
}