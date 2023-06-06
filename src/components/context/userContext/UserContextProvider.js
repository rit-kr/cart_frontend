import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../../utilities/axios";


const userContext = createContext();

export function UserContextProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('userInfo'))?.user)
  }, [])

  const updateUser = async (payload) => {
    try {
      const res = await axiosInstance.put('/user', payload)
      localStorage.setItem('userInfo', JSON.stringify(res.data));
      setUser(res.data)
    } catch (error) {
      console.error({ error })
    }
  }

  const addToCart = async (payload) => {
    try {
      const res = await axiosInstance.post('/user/cart', payload)
      console.log("logafterrespon", localStorage.getItem('userInfo'));

    } catch (error) {
      console.error({ error })
    }
  }

  const showCart = async (payload) => {
    try {
        const res = await axiosInstance.get('/user/cart', payload)
       console.log("logafterrespon", localStorage.getItem('userInfo'));

    } catch (error) {
        console.error({ error })
    }
}

  return (
    <userContext.Provider
      value={{
        user, updateUser, addToCart,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}