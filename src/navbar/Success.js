import React,{useEffect} from 'react';
import {clearCart} from '../redux/productSlide';
import {useDispatch} from 'react-redux';
import Successfully from '../assest/success.gif';
const Success = () => {
  const dispatch= useDispatch();

  useEffect(()=>{
   dispatch(clearCart());
  },[dispatch])
  return (
    <div className='pt-16 min-w[{calc(100vh)}] '>
       <div className="flex w-full justify-center items-center flex-col">
       <img src={Successfully} className="w-full max-w-sm" alt="emptyimage"/>
      <h1>Payment Successfull</h1>
      </div>
    </div>
  )
}

export default Success
