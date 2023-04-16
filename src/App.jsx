import "./cssreset.css";
import Register from './components/register';
import Login from './components/login';
import Header from './components/header/Header';
import Addproduct from "./components/addproduct/Addproduct";
import Cart from "./components/cart/Cart";
import { Routes, Route } from 'react-router-dom';
import Showproduct from "./components/showproduct/Showproduct";
import Productdetails from "./components/productDetails/Productdetails";
// import 'antd/dist/reset.css';


export default function App() {
  return (
    <div className="App">
      <Routes>
        {
          localStorage.getItem('userInfo')
            ?
            <>
              <Route path='/header' element={<Header />} />
              <Route path='/products' element={<Showproduct />} />
              <Route path='/productdetails' element={<Productdetails />} />

              <Route path='/addproduct' element={<Addproduct />} />
              <Route path='/cart' element={<Cart />} />

            </>
            :
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<Login />} />
            </>
        }
      </Routes>
    </div>
  );
};
