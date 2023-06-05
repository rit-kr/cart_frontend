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
            // console.log("res items", response.data);
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

    const handleAddAddress = () =>{
        navigate("/addAddress");
        window.location.reload(true);
    }

    console.log("res items", items);

    return (
        <>
        <button onClick={handleAddAddress}>Add new Address</button>
            <ul>
                {items.map(item =>
                    <li key={item._id}>
                        <div>
                            <p>{item.address.name}</p>
                            <p>{item.address.address1}</p>
                            <p>{item.address.address2}</p>
                            <p>{item.address.district}</p>
                        </div>
                        <div onClick={() => handleDeleteAddress(item._id)} >
                            <AiOutlineDelete/>
                        </div>
                        <span onClick={() => handleEditAddressPage(item)}>Edit</span>
                    </li>
                )
                }
            </ul>
        </>
    )
}