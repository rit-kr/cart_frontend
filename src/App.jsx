import "./cssreset.css";
import { Routes, Route } from 'react-router-dom';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContextProvider } from "./components/context/userContext/UserContextProvider";
import Register from './components/register';
import Login from './components/login';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import Addproduct from "./components/addproduct/Addproduct";
// import Cart from "./components/cart/Cart";
import Showproduct from "./components/showproduct/Showproduct";
import Productdetails from "./components/productDetails/Productdetails";
import Setting from "./components/setting/Setting";
import EditUserLoginInfo from "./components/editUserLoginInfo/EditUserLoginInfo";
import AddAddress from "./components/address/addAddress/AddAddress";
import { AddressContextProvider } from "./components/context/addressContext/addressContextProvider";
import ShowAddress from "./components/address/showAddress/ShowAddress";
import EditAddress from "./components/address/editAddress/EditAddress";
import Cart from "./components/cart/cart";

// import 'antd/dist/reset.css';


export default function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate();


  const handleProductDetails = (item) => {
    setSelectedProduct(item);
    console.log("selected", item);
    navigate("/productdetails")
  }

  return (
    <UserContextProvider>
      <AddressContextProvider>
        <div className="App">
          {
            localStorage.getItem('userInfo')
              ?
              <>
                <Header />
                <Routes>
                  <Route path='/home' element={<Home handleProductDetails={handleProductDetails}/>} />
                  <Route path='/addproduct' element={<Addproduct />} />
                  {/* <Route path='/cart' element={<Cart />} /> */}
                  <Route path='/setting' element={<Setting  />} />
                  <Route path='editUserLoginInfo' element={<EditUserLoginInfo />} />
                  <Route path='/addAddress' element={<AddAddress />} />
                  <Route path='/editAddress' element={<EditAddress />} />
                  <Route path='/address' element={<ShowAddress />} />
                  <Route path='/cart' element={<Cart />} />

                  <Route path='/products' element={<Showproduct handleProductDetails={handleProductDetails} />} />
                  <Route path='/productdetails' element={<Productdetails selectedProduct={selectedProduct} />} />
                  <Route path='*' element={<Home handleProductDetails={handleProductDetails}/>} />
                </Routes>
              </>
              :
              <>
                <Routes>
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='*' element={<Login />} />
                  <Route path='/products' element={<Showproduct handleProductDetails={handleProductDetails} />} />
                  <Route path='/productdetails' element={<Productdetails selectedProduct={selectedProduct} />} />
                </Routes>
              </>
          }
        </div>
      </AddressContextProvider>
    </UserContextProvider>
  );
};
