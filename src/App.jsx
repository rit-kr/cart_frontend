import "./cssreset.css";
import Register from './components/register';
import Login from './components/login';
import Header from './components/header/Header';
import Addproduct from "./components/addproduct/Addproduct";
// import Cart from "./components/cart/Cart";
import { Routes, Route } from 'react-router-dom';
import Showproduct from "./components/showproduct/Showproduct";
import Productdetails from "./components/productDetails/Productdetails";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home/Home";
import Setting from "./components/setting/Setting";
import { UserContextProvider } from "./components/context/userContext/UserContextProvider";

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
    <div className="App">
      <Routes>
        {
          localStorage.getItem('userInfo')
            ?
            <>
              <Route path='/home' element={<Home handleProductDetails={handleProductDetails}/>} />
              <Route path='/header' element={<Header />} />
              <Route path='/addproduct' element={<Addproduct />} />
              {/* <Route path='/cart' element={<Cart />} /> */}
              <Route path='/setting' element={<Setting />} />
            </>
              :
              <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<Login />} />
            </>
        }
        <>
          <Route path='/products' element={<Showproduct handleProductDetails={handleProductDetails} />} />
          <Route path='/productdetails' element={<Productdetails selectedProduct={selectedProduct} />} />
        </>
      </Routes>
    </div>
        </UserContextProvider>
  );
};
