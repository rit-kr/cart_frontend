import './style.scss';
import CInput from '../cinput/CInput';
import CButton from '../cbutton/CButton';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { AiFillCaretRight } from 'react-icons/ai';

import axiosInstance from '../../utilities/axios';


export default function Register() {
    const [username, setUserName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleRegister = async (e) => {
        e.preventDefault();
        const payload = {
            user: {
                username,
                email,
                password
            }
        }
        console.log(payload)
        try {
            const response = await axiosInstance.post("/users", payload);
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleRegister();
    }, []);


    return (
        <>
            <div className='container'>
                <div className='register-logo'>
                    <img src="/assets/image/amazon.png" alt="image" />
                </div>
                <div className='register-container'>
                    <span>Create Account</span>
                    <div className='register-input'>
                        <CInput className={'cinput'} label={'User name'} type="text" onChange={(e) => setUserName(e.target.value)} placeholder="user name"></CInput>
                        <CInput className={'cinput'} label={'Email'} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"></CInput>
                        <CInput className={'cinput'} label={'Password'} type="passport" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></CInput>
                        <button className='register-button' onClick={handleRegister} >Continue</button>
                    </div>
                    <div>Already have a account?
                        <NavLink to="/login">SignIn<AiFillCaretRight /></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};
