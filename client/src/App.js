import './App.css';
import Navbar from './Components/navbar/navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/home/home';
import Pcbuild from './Components/pcbuild/pcbuild';
import Prebuilt from './Components/prebuilt/prebuilt';
import Account from './Components/account/account';
import Cart from './Components/cart/cart';
import Login from './Components/login/login';
import PrivateComponent from './Components/privatecomponents/privatecomponets';
import ProductDisplay from './Components/productdisplay/productdisplay';
import Products from './Components/products/products';
import Orders from './Components/Orders/orders';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route element={<PrivateComponent></PrivateComponent>}>        <Route path="/" element={<Home></Home>}></Route>
            <Route path='/pcbuild' element={<Pcbuild></Pcbuild>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>
            <Route path='/orders' element={<Orders></Orders>}></Route>
            <Route path='/prebuilt' element={<Prebuilt></Prebuilt>}></Route>
            <Route path="/Account" element={<Account></Account>}></Route>
            <Route path="/Cart" element={<Cart></Cart>}></Route>
            <Route path="/productdisplay" element={<ProductDisplay></ProductDisplay>}></Route>

          </Route>
          <Route path='/Login' element={<Login></Login>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
