// import "./style.scss";
// import { useAddressContext } from "../../context/addressContext/addressContextProvider";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Alert } from "antd";





// export default function EditAddress() {
//     const { address, editAddress } = useAddressContext();

//     const [edit, setEdit] = useState('');
//     const [info, setInfo] = useState({});

//     const navigate = useNavigate();


//     // const [info, setInfo] = useState({
//     //     name: "",
//     //     sonOf: "",
//     //     mobNumber: "",
//     //     address1: "",
//     //     address2: "",
//     //     area: "",
//     //     district: "",
//     //     state: "",
//     //     pinCode: ""
//     // });


//     const handleEditAddress = async (e) => {
//         e.preventDefault();
//         const payload = {
//             address: {
//                 id: "",
//                 address: {
//                     ...info
//                 }
//             }
//         }
//         try {
//             await editAddress(payload)
//             alert("Address updated");
//         } catch (error) {
//             Alert(error.message);
//         }
//     }

//     const handleBackToAddress = () => {
//         navigate("/address");
//         window.location.reload(true);
//     }

//     return (
//         <>
//             <div className="">
//                 <div className="">
//                     <div className="">
//                         <div className="">Edit your address</div>
//                         <div className="">
//                             <div className="">
//                                 <div>
//                                     <h3>Name</h3>
//                                     {
//                                         edit === 'name' ?
//                                             <input
//                                                 type="text" value={address.name}
//                                                 onChange={(e) => setInfo({ name: e.target.value })}
//                                             />
//                                             : <p>{user?.name}</p>
//                                     }
//                                 </div>
//                             </div>
//                             <div className="setting_profile_item">
//                                 <div>
//                                     <h3>Username</h3>
//                                     {
//                                         edit === 'username' ?
//                                             <input
//                                                 type="text"
//                                                 defaultValue={user?.username}
//                                                 onChange={(e) => setInfo({ username: e.target.value })}
//                                             />
//                                             : <p>{user?.username}</p>
//                                     }
//                                 </div>
//                             </div>
//                             <div className="setting_profile_item">
//                                 <div>
//                                     <h3>Mobile Number</h3>
//                                     {
//                                         edit === 'phone' ?
//                                             <input
//                                                 type="Number"
//                                                 defaultValue={user?.phone}
//                                                 onChange={(e) => setInfo({ phone: e.target.value })}
//                                             />
//                                             : <p>{user?.phone}</p>
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <button className="back_to_setting_btn" onClick={handleBackToAddress}>Done</button>
//                 </div>
//             </div>
//         </>
//     )
// }