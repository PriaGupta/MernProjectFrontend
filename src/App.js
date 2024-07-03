import './index.css';
import { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './navbar/Home';
import Product from './navbar/Products';
import About from './navbar/About';
import Contact from './navbar/Contact';
import Login from './navbar/Login';
import Signup from './navbar/Signup';
import Success from './navbar/Success';
import Cancel from './navbar/Cancel';
import NewProduct from './navbar/NewProduct';
import Cart from './navbar/Cart';
import  { Toaster } from 'react-hot-toast';
import {setDataProduct} from "./redux/productSlide";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch=useDispatch();
  const productData= useSelector((state)=>state.product)

  useEffect(()=>{
    (async()=>{
      const res= await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData= await res.json()
      // console.log(resData)
      dispatch(setDataProduct(resData));
    })();
  },[dispatch]);
  // console.log(productData)
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Toaster/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:filterby' element={<Product/>} />
    <Route path='/about' element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/newproduct" element={<NewProduct/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="/success" element={<Success/>} />
    <Route path="/cancel" element={<Cancel/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
