import React, { useState } from 'react'
import logo from '../assest/mernlogo.png';
import {Link,useNavigate} from 'react-router-dom';
import { FaCartPlus,FaCircleUser  } from "react-icons/fa6";
import {toast} from 'react-hot-toast';
import { logoutRedux } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import {clearCart} from '../redux/productSlide';

const Navbar = () => {
  const navigate=useNavigate();
  const [showProd,setProd]=useState(false);
  const userData = useSelector((state)=>state.user);

  //console.log(userData.email);

  const dispatch=useDispatch();

  const handleShowProd=()=>{
    setProd(prev =>!prev)
  }
  const handleLogout=()=>{
  dispatch(logoutRedux());
  dispatch(clearCart());
  localStorage.removeItem('token');
    toast("Logout Successfully")
    navigate('/');
  }
  const cartItemNumber = useSelector((state)=>state.product.cartItem)
  // console.log(process.env.REACT_APP_ADMIN_EMAIL)
  return (<>
   <header className='fixed top-0 left-0 w-full shadow-md bg-white z-50'>
        <div className='flex items-center justify-between h-16 px-3 md:px-4'>
      <div className='h-52 mt-7'>
         <img src={logo}  className='h-full object-cover ' alt='logoimg'/>
      </div>

      <div className='flex items-center gap-4 md:gap-4'>
        <nav className=' flex-wrap gap-4 md:gap-7 text-base md:text-md hidden md:flex'>
          <Link to='/'>Home</Link>
          <Link to='/product/6655929693c2a60995752853'>Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className='text-2xl text-slate-600 relative'>
       <Link to="/cart"><FaCartPlus/></Link> 
        <div className='absolute -top-2 -right-2 text-white bg-red-500 h-5 w-5 rounded-full m-0 p-0 text-sm text-center'>
       {cartItemNumber.length}
        </div>
        </div>
        <div className=' text-slate-600' onClick={handleShowProd}>
        <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md " >
        { userData.image ? <img src={userData.image} className='h-full w-full' alt="userimg"/> :  <FaCircleUser />
          }
        </div>
        {
          showProd && (
            <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md">
           
           {
             userData.email === process.env.REACT_APP_ADMIN_EMAIL &&
           
            <Link to="/newproduct" className='flex flex-wrap whitespace-nowrap'>Product Access</Link>
           }
                       { userData.email ? <p className='cursor-pointer text-black text-lg hover:text-red-500 transition duration-300' onClick={handleLogout}>
                       Logout ({userData.name})</p> :
                      
                        <Link to="/login" className='cursor-pointer text-black text-lg hover:text-red-500 transition duration-300' >Login</Link>

                      }
                    <nav className=' text-base md:text-lg flex flex-col md:hidden '>
          <Link to='/'>Home</Link>
          <Link to='/product/6655929693c2a60995752853'>Product</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          
        </nav>
           </div>
          )
        }
      
        </div>
      </div>
     </div>
     </header>
     </>

  )
}

export default Navbar
