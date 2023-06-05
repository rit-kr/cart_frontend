import "./style.scss";
import { useUserContext } from "../context/userContext/UserContextProvider";
// import Imageupload from "../imageupload/ImageUpload";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditUserLoginInfo() {

    const navigate = useNavigate();

    const { user, updateUser } = useUserContext();

    const [edit, setEdit] = useState('');
    const [info, setInfo] = useState({});

    const handleEditUserInfo = async () => {
        // e.preventDefault();
        const payload = {
            user: {
                ...info
            }
        }

        try {
            await updateUser(payload)
            setEdit('')
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleBackToSetting = () => {
        navigate("/setting")
    }

    return (
        <>
            <div className="setting_profile_edit">
                <div className="setting_profile">
                    <div className="setting_profile_container">
                        <div className="setting_profile_header">Login & security</div>
                        {/* <div className="setting_profile_pic">
                            <Imageupload />
                        </div> */}
                        <div className="setting_profile_list">
                            <div className="setting_profile_item">
                                <div>
                                    <h3>Profile Picture</h3>
                                    {
                                        edit === 'image' ?
                                            <input
                                                type="text"
                                                // defaultValue={user?.image}
                                                onChange={(e) => setInfo({ image: e.target.value })}
                                            />
                                            : <div className="setting_img_container">
                                                <img className="setting_img" src={user?.image} alt="" />
                                            </div>
                                    }
                                </div>
                                {
                                    edit === 'image' ?
                                        <button onClick={handleEditUserInfo}>Submit</button>
                                        :
                                        <button onClick={() => {
                                            setEdit('image');
                                        }}>Edit</button>
                                }
                            </div>
                            <div className="setting_profile_item">
                                <div>
                                    <h3>Username</h3>
                                    {
                                        edit === 'username' ?
                                            <input
                                                type="text"
                                                defaultValue={user?.username}
                                                onChange={(e) => setInfo({ username: e.target.value })}
                                            />
                                            : <p>{user?.username}</p>
                                    }
                                </div>
                                {
                                    edit === 'username' ?
                                        <button onClick={handleEditUserInfo}>Submit</button>
                                        :
                                        <button onClick={() => {
                                            setEdit('username');
                                        }}>Edit</button>
                                }
                            </div>
                            <div className="setting_profile_item">
                                <div>
                                    <h3>Email</h3>
                                    <p>{user?.email}</p>
                                </div>
                                <button>Edit</button>
                            </div>
                            <div className="setting_profile_item">
                                <div>
                                    <h3>Mobile Number</h3>
                                    {
                                        edit === 'phone' ?
                                            <input
                                                type="Number"
                                                defaultValue={user?.phone}
                                                onChange={(e) => setInfo({ phone: e.target.value })}
                                            />
                                            : <p>{user?.phone}</p>
                                    }
                                </div>

                                {
                                    edit === 'phone' ?
                                        <button onClick={handleEditUserInfo}>Submit</button>
                                        :
                                        <button onClick={() => {
                                            setEdit('phone');
                                        }}>Edit</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="back_to_setting_btn" onClick={handleBackToSetting}>Done</button>
                </div>
            </div>
        </>
    )
}