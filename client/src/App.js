import './App.css';
import Navbar from './Components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home/home';
import Pcbuild from './Components/pcbuild/pcbuild';
import Account from './Components/account/account';
import Cart from './Components/cart/cart';
import Sign from './Components/session/session';
function  App() {
  return (
    <div>
   
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/Customize' element={<Pcbuild></Pcbuild>}></Route>
        <Route path='/Sign' element={<Sign></Sign>}></Route>
        <Route path="/Account" element={<Account></Account>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
