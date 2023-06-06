import "./style.scss";
import { useAddressContext } from "../../context/addressContext/addressContextProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "antd";





export default function AddAddress() {
    const { address, addAddress } = useAddressContext();

    const navigate = useNavigate();


    const [info, setInfo] = useState({
        name: "",
        sonOf: "",
        mobNumber: "",
        address1: "",
        address2: "",
        area: "",
        district: "",
        state: "",
        pinCode: ""
    });


    const handleAddAddress = async (e) => {
        e.preventDefault();
        const payload = {
            address: {
                address: {
                    ...info
                }
            }
        }
        try {
            await addAddress(payload)
            alert("New address added");
        } catch (error) {
            alert(error.message);
        }
    }

    const handleBackToAddress = () =>{
        navigate("/address");
        window.location.reload(true);
    }

    return (
        <>
            <div className="add_address">
                <h3>Add your address</h3>
                <div className="">
                    <form className="addAddress_form"
                        onSubmit={handleAddAddress}
                    >
                        <label htmlFor="country">Country/Region:</label>
                        <select name="country" id="country" onChange={(e) => setInfo({ ...info, area: e.target.value })}>
                            <option value="India" default>India</option>
                            <option value="Nepal">Nepal</option>
                            <option value="USA">USA</option>
                            <option value="Korea">Korea</option>
                        </select>
                        <label htmlFor="fullname">Full name</label>
                        <input onChange={(e) => setInfo({ ...info, name: e.target.value })}
                            type="text" name="" id="fullname" />
                        <label htmlFor="address1">Street Number</label>
                        <input onChange={(e) => setInfo({ ...info, address1: e.target.value })}
                            type="text" name="" id="address1" />
                        <input onChange={(e) => setInfo({ ...info, address2: e.target.value })}
                            type="text" name="" id="address2" />
                        <label htmlFor="district">City</label>
                        <input onChange={(e) => setInfo({ ...info, district: e.target.value })}
                            type="text" name="" id="district" />
                        <label htmlFor="state">State/province/Region</label>
                        <input onChange={(e) => setInfo({ ...info, state: e.target.value })}
                            type="text" name="" id="state" />
                        {/* <label htmlFor="address1">Street Number</label> */}
                        <label htmlFor="pin">PIN Code</label>
                        <input onChange={(e) => setInfo({ ...info, pinCode: e.target.value })}
                            type="number" name="" id="pin" />
                        <label htmlFor="mobNumber">Phone Number</label>
                        <input onChange={(e) => setInfo({ ...info, mobNumber: e.target.value })}
                            type="number" name="" id="mobNumber" />
                        <button>Continue</button>
                    </form>
                </div>
                <button className="back_to_address_button" onClick={handleBackToAddress}>Back to Address</button>
            </div>
        </>
    )
}