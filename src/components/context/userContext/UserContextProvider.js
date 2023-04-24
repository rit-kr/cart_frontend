import React, { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../../../utilities/axios";


const userContext = createContext();

export function UserContextProvider({ children }) {

    const [user, setUser] = useState([]);

    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('userInfo')))
    }, [])


    return (
      <userContext.Provider
        value={{
          user
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