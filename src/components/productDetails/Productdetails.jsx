import { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Rate } from "antd";
// import { Cartcontext } from "../../contextProvider/cartContext/Cartcontext";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../utilities/axios";
// import Addcomment from "../comment/addcomment/Addcomment";
import CInput from "../cinput/CInput";
import {AiOutlineClose } from "react-icons/ai";

export default function Productdetails(props) {
    const [cartInfo, setCartInfo] = useState({ id: "", count: 1 });
    const [addComment, setAddComment] = useState({ stars: "", body: "", productId: "" })
    const [showComments, setShowComments] = useState([]);

    const navigate = useNavigate();
    // const Globalstate = useContext(Cartcontext);
    // const dispatch = Globalstate.dispatch;
    // console.log("cartContext", Globalstate);

    const handleAddToCart = async (item) => {
        console.log(item);
        const payload = {
            product: {
                ...cartInfo, id: item._id
            }
        }
        try {
            const response = await axiosInstance.post("user/cart", payload);
            console.log("addToCart", response)
            navigate("/cart");
            window.location.reload(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleAddComment = async () => {
        // console.log("productdetails", item);
        const payload = {
            comment: {
                ...addComment, productId: props.selectedProduct._id
            }
        }
        try {
            const response = await axiosInstance.post("comments", payload);
            await getComments();
            setAddComment({ stars: "", body: "", productId: "" });
            console.log("addComments", response)
        } catch (error) {
            console.error(error.message);
        }
    }

    const getComments = async () => {
        try {
            const response = await axiosInstance.get(`/comments/${props.selectedProduct._id}`);
            setShowComments(response.data.comments)
        } catch (error) {
            console.error(error.message);

        }
    }

    const handleDeleteComment = async (singleComment) => {
        try {
            const response = await axiosInstance.delete(`/comments/${singleComment.id}/${singleComment.productId}`);
            await getComments();
        } catch (error) {
            console.error(error.message);
        }
    }
    // }

    useEffect(() => {
        getComments();
    }, []);




    const item = props.selectedProduct;
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
            <div className="comments">
                <ul className="comment">
                    {
                    (showComments.length > 0)
                    ? showComments.map(singleComment =>
                        <li className="show_comments">
                            <div className="comment_display">
                                <div>{singleComment.username}</div>
                                <Rate disabled allowHalf defaultValue={singleComment.stars} />
                                <p>{singleComment.body}</p>
                            </div>
                            <div className="delete_comment" onClick={() => handleDeleteComment(singleComment)}>
                                <span>Delete</span>
                            </div>
                        </li>
                    )
                    :<div>Yor are first to add comment</div>
                    }
                </ul>
            </div>
            <div>
                <div className="add_comment">
                    <div>
                        <div>
                            <p>Add comments</p>
                            <Rate allowHalf  onChange={(e) => setAddComment({ ...addComment, stars: e })} />
                            <CInput className={'cinput'} type="text" onChange={(e) => setAddComment({ ...addComment, body: e })} placeholder="Add comment"></CInput>
                            <button className='Add_Comment_btn' onClick={() => handleAddComment(item)}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}