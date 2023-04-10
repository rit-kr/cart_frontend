import Register from './components/register';
import Login from './components/login';

import { Routes, Route } from 'react-router-dom';
// import 'antd/dist/reset.css';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </header>
    </div>
  );
};
