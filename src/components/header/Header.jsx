
import './style.scss';
import { Select } from 'antd';
import useSelection from "antd/es/table/hooks/useSelection"
// import { formToJSON } from "axios"
import CInput from '../cinput/CInput';
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { BsSearch, BsCart3 } from "react-icons/bs"
export default function Header() {

    const [searchItem, setSearchItem] = useState(null);

    const navigate = useNavigate();

    const handleSearch = () => {

    }

    const handleCart = () => {
        navigate("/cart")
        window.location.reload(true);
    }

    const handleLogout = () => {
            localStorage.clear()
            navigate("/login")
            window.location.reload(true);
    }
    return (
        <>
            <header className='header'>
                <div className='header_main'>
                    <div className='header-logo'>
                        <NavLink to="/">
                            <img src="/assets/image/amz.png" alt="image" />
                        </NavLink>
                    </div>
                    <div className='search-input'>
                        <Select className='select' showSearch placeholder="All" optionFilterProp="children"
                            // onChange={onChange} onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'Cloths',
                                    label: 'Cloths',
                                },
                                {
                                    value: 'Electronics',
                                    label: 'Electronics',
                                },
                                {
                                    value: 'Beauty Products',
                                    label: 'Beauty Products',
                                },
                            ]}
                        />
                        <CInput className={'cinput'} type="text" onChange={(e) => setSearchItem(e.target.value)} placeholder="Search your items"></CInput>
                        <button className='search-btn' onClick={handleSearch} ><BsSearch /></button>
                    </div>
                    <div className='header_cart_section'>
                        {
                            localStorage.getItem('userInfo')
                                ?
                                <>
                                <NavLink className="header_cart" onClick={handleCart} to="/cart"><BsCart3 /></NavLink>
                                <NavLink className="header_login" onClick={handleLogout} to="/login">Logout</NavLink>
                                </>

                                :
                                <NavLink className="header_login" to="/login">SignIn</NavLink>
                        }
                    </div>
                </div>
                <div className="subheader">
                    <div>
                        <p>All</p>
                    </div>
                    <ul className='subheader_product'>
                        <li>Today's Deal</li>
                        <li>Mobiles</li>
                        <li>Best sellers</li>
                        <li>Customer Service</li>
                        <li>Prime</li>
                        <li>Amazon Pay</li>
                    </ul>
                    <div>
                        <p>Shopping made easy | Download the app</p>
                    </div>
                </div>
            </header>
        </>
    )
}