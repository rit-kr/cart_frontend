import "./style.scss";
import { useUserContext } from "../context/userContext/UserContextProvider";
import { FaBoxOpen } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { BsFillBoxFill, BsFillCreditCardFill } from "react-icons/bs";
import { RiMapPinFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";

import { useNavigate } from "react-router-dom";
import Header from "../header/Header";


export default function Setting(props) {
    const navigate = useNavigate();
    const { user } = useUserContext();

    const handleEditUserLoginInfo = () => {
        navigate("/editUserLoginInfo");
        window.location.reload(true);
    }

    return (
        <>
            <div className="setting">
                <div className="setting_container">
                    <div className="setting_header">
                        <h1>Your Account</h1>
                        <p>Manage your profile</p>
                    </div>
                    <div className="setting_list">
                        <div className="setting_items">
                            <div className="icon">
                                <FaBoxOpen />
                            </div>
                            <div>
                                <h4>Your Order</h4>
                                <p>Track, return, or buy things again</p>
                            </div>
                        </div>
                        <div className="setting_items" onClick={handleEditUserLoginInfo}>
                            <div className="icon">
                                <GiPadlock />
                            </div>
                            <div>
                                <h4>Login & Security</h4>
                                <p>Edit login,name and mobile number</p>
                            </div>
                        </div>
                        <div className="setting_items">
                            <div className="icon">
                                <BsFillBoxFill />
                            </div>
                            <div><h4>Prime</h4>
                                <p>Be a prime member</p>
                            </div>
                        </div>
                        <div className="setting_items">
                            <div className="icon">
                                <RiMapPinFill />
                            </div>
                            <div>
                                <h4>Your Address</h4>
                                <p>Add, edit and remove address</p>
                            </div>
                        </div>
                        <div className="setting_items">
                            <div className="icon">
                                <BsFillCreditCardFill />
                            </div>
                            <div>
                                <h4>Payment options</h4>
                                <p>Edit or add payment options</p>
                            </div>
                        </div>
                        <div className="setting_items">
                            <div className="icon">
                                <TfiHeadphoneAlt />
                            </div>
                            <div>
                                <h4>Contact Us</h4>
                                <p>Reach out to us any time</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}