import React, { createContext, useState, useEffect, useContext } from "react";
import axiosInstance from "../../../utilities/axios";


const addressContext = createContext();

export function AddressContextProvider({ children }) {

    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //   console.log("addressUser",JSON.parse(localStorage.getItem('userInfo')))
    //   setUser(JSON.parse(localStorage.getItem('userInfo'))?.user)
    // },[]);

    const addAddress = async (payload) => {
        try {
            const res = await axiosInstance.post('/user/address', payload)
            //    console.log("addAddress",{res})
            //    localStorage.setItem('userInfo', JSON.stringify({...user, address: res.data.address}));
            //    console.log("logafterrespon", localStorage.getItem('userInfo'));

        } catch (error) {
            console.error({ error })
        }
    }

    const editAddress = async (payload) => {
        try {
            const res = await axiosInstance.put('/user/address', payload)
        } catch (error) {
            console.error({ error })
        }
    }

    const showAddress = async () => {
        try {
            const res = await axiosInstance.get('/user/address')
        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <addressContext.Provider
            value={{
                addAddress,
            }}
        >
            {children}
        </addressContext.Provider>
    )
}





export function useAddressContext() {
    const context = useContext(addressContext);
    // console.log(context)
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}