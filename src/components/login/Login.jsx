import './style.scss';
import CInput from '../cinput/CInput';
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosInstance from '../../utilities/axios';



export default function Login() {

    const navigate = useNavigate();

    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
            user: {
                ...loginInfo
            }
        }
        try {
            const response = await axiosInstance.post("/users/login", payload);
            console.log("res",response)
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            navigate("/header");
            window.location.reload(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <div className='container'>
                <div className='login-logo'>
                    <img src="/assets/image/amazon.png" alt="image" />
                </div>
                <div className='login-container'>
                    <span>Sign in</span>
                    <div className='login_input'>
                        <CInput className={'cinput'} label={'Email'} type="email" onChange={(e) => setLoginInfo({ ...loginInfo, email: e })} placeholder="Email"></CInput>
                        <CInput className={'cinput'} label={'Password'} type="passport" onChange={(e) => setLoginInfo({ ...loginInfo, password: e })} placeholder="Password"></CInput>
                        <button className='login-button' onClick={handleLogin} >Continue</button>
                    </div>
                    <div>
                        <p>New to Amazon?</p>
                        <button>
                            <NavLink to="/register">Create your Amazon account</NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
