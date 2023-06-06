import "./style.scss";
import { useEffect, useState } from "react";
import axiosInstance from "../../../utilities/axios";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ShowAddress() {

    const [items, setItems] = useState([])

    const navigate = useNavigate();

    const getAddressess = async () => {
        try {
            const response = await axiosInstance.get("/user/address");
            setItems(response.data.address)
        } catch (error) {
            console.error(error);

        }
    }

    const handleEditAddressPage = (singleAddress) => {
        navigate("/editAddress");
        window.location.reload(true);
    }

    const handleDeleteAddress = async (address_id) => {
        console.log("singleAdd", address_id);
        try {
            const response = await axiosInstance.delete(`/user/address/${address_id}`);
            await getAddressess();
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getAddressess();
    }, []);

    const handleAddAddress = () => {
        navigate("/addAddress");
        window.location.reload(true);
    }

    console.log("res items", items);

    return (
        <>
            <div className="address">
                <h4>Your Address</h4>
                <div className="show_address">
                    <div className="add_new_address" onClick={handleAddAddress}>Add new Address</div>
                    <ul className="">
                        {items.map(item =>
                            <li className="new_address" key={item._id}>
                                <div className="address_items">
                                    <p className="name">{item.address.name}</p>
                                    <p className="address">{item.address.address1} {item.address.address2}</p>
                                    {/* <p className="">{item.address.address2}</p> */}
                                    <p className="">{item.address.district}</p>
                                    <p className="">{item.address.pinCode}</p>
                                    <p className="">{item.address.area}</p>
                                    <p className="">{item.address.mobNumber}</p>

                                </div>
                                <div onClick={() => handleDeleteAddress(item._id)} >
                                    <AiOutlineDelete />
                                </div>
                                {/* <span onClick={() => handleEditAddressPage(item)}>Edit</span> */}
                            </li>
                        )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}