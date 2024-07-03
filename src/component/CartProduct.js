import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteCartItem,increaseQty,decreaseQty } from '../redux/productSlide';

const CartProduct = ({id,name,image,category,qty,total,price}) => {
    const dispatch=useDispatch();
  return (
    <div className='p-2 bg-slate-300 flex rounded border border-slate-500'>
      <div className='p-3 bg-white rounded overflow-hidden'>
        <img src={image} className='h-28 w-40 object-fill' alt="prodimg"/>
      </div>
      
      <div className="flex flex-col gap-1 px-3 w-full">
        <div className='flex justify-between'>
          <h4 className="font-semibold text-slate-600 capitalize  md:text-2xl" >
            {name}
           </h4>
           <div className='cursor-pointer mt-2 text-slate-700 hover:text-red-400' onClick={()=>dispatch(deleteCartItem(id))} >
            <MdDelete/>
           </div>
           </div>
           <p className=" text-slate-500  font-medium text-sm">{category}</p>
           <p className=" font-bold md:text-1xl">
             <span className="text-red-500 ">₹</span>
             <span>{price}</span>
           </p>
     
           <div className='flex justify-between'>
     <div className="flex gap-3 items-center">
          <button onClick={()=>dispatch(increaseQty(id))} className="bg-slate-400 py-1 mt-2  rounded hover:bg-slate-500 p-1"><IoIosAdd/></button>
         <p className='font-semibold p-1'>{qty}</p>
          <button onClick={()=>dispatch(decreaseQty(id))} className="bg-slate-400 py-1 mt-2 rounded hover:bg-slate-500 p-1"><FiMinus/></button>
          </div>
          
         
          <div className="flex items-center gap-2 font-bold text-slate-700">
            <p>Total :</p>
            <p><span className="text-red-500">₹</span>{total}</p>
          </div>
          </div>
    </div>
    </div>
  )
}

export default CartProduct
