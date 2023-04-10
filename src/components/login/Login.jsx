// import CButton from './cbutton';
import './style.scss';
import CInput from '../cinput/CInput';
import { NavLink, useNavigate } from "react-router-dom";
import CButton from '../cbutton/CButton';
import { useState, useEffect } from "react";
import axiosInstance from '../../utilities/axios';



export default function Login() {

    // const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
            user: {
                email,
                password
            }
        }
        console.log(payload)
        try {
            const response = await axiosInstance.post("/users/login", payload);
            console.log("respon", response);
            localStorage.setItem('userInfo', JSON.stringify(response));
            // navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleLogin();
    }, []);

    return (
        <>
            <div className='container'>
                <div className='login-logo'>
                    <img src="/assets/image/amazon.png" alt="image" />
                </div>
                <div className='login-container'>
                    <span>Sign in</span>
                    <div className='login-input'>
                        <CInput className={'cinput'} label={'Email'} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></CInput>
                        <CInput className={'cinput'} label={'Password'} type="passport" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></CInput>
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
