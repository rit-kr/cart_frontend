import "./cssreset.css";
import Register from './components/register';
import Login from './components/login';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
// import 'antd/dist/reset.css';


export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path='/' element={<Header />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};
