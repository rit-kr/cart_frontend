import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../../utilities/axios";


const userContext = createContext();

export function UserContextProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
      console.log(JSON.parse(localStorage.getItem('userInfo')))
      setUser(JSON.parse(localStorage.getItem('userInfo'))?.user)
    },[])

   const updateUser = async (payload) => {
    try {
       const res = await axiosInstance.put('/user', payload)
       console.log("edit",{res})
       localStorage.setItem('userInfo', JSON.stringify(res.data));
       setUser(res.data)
    } catch (error) {
      console.error({error})
    }
   }

    console.log(user);

    return (
      <userContext.Provider
        value={{
          user, updateUser
        }}
      >
        {children}
      </userContext.Provider>
    );
  }

  export function useUserContext() {
    const context = useContext(userContext);
    console.log(context)
    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }