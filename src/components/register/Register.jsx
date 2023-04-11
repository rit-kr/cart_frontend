import './style.scss';
import CInput from '../cinput/CInput';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { AiFillCaretRight } from 'react-icons/ai';
import axiosInstance from '../../utilities/axios';


export default function Register() {
    const [registerInfo, setRegisterInfo] = useState({username:"",email:"",password:""});

    const handleRegister = async (e) => {
        e.preventDefault();
        const payload = {
            user: {
                ...registerInfo
            }
        }

        try {
            const response = await axiosInstance.post("/users", payload);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <>
            <div className='container'>
                <div className='register-logo'>
                    <img src="/assets/image/amazon.png" alt="image" />
                </div>
                <div className='register-container'>
                    <span>Create Account</span>
                    <div className='register-input'>
                        <CInput className={'cinput'} label={'User name'} type="text" onChange={(e) => setRegisterInfo({...registerInfo, username:e})} placeholder="user name"></CInput>
                        <CInput className={'cinput'} label={'Email'} type="email" onChange={(e) => setRegisterInfo({...registerInfo, email:e})} placeholder="Email"></CInput>
                        <CInput className={'cinput'} label={'Password'} type="passport" onChange={(e) => setRegisterInfo({...registerInfo, password:e})} placeholder="Password"></CInput>
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
