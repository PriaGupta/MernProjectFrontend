import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import AllProduct from '../component/AllProduct';
import { addCartItem } from '../redux/productSlide';

const Products = () => {
  const {filterby}= useParams();
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const productData= useSelector((state)=> state.product.productList);
  const prodDisplay= productData.filter((obj)=>obj._id === filterby)[0];

  const handleBuy=()=>{
    dispatch(addCartItem(prodDisplay));
    navigate('/cart');
  }
  const handleAddCartProduct=()=>{
    dispatch(addCartItem(prodDisplay));
  
  }
  return (

    <div className='pt-16 min-w[{calc(100vh)}] bg-slate-100'>
      <div className="p-2 md:p-4">
       <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm  overflow-hidden w-full p-5">
          <img
            src={prodDisplay.image}
            className="hover:scale-105 transition-all h-full"
            alt="productimg"
          />
        </div>
        <div className="flex flex-col px-2 gap-1">
          <h4 className="font-semibold text-slate-600 mt-3 capitalize text-1xl md:text-4xl">
            {prodDisplay.name}
           </h4>
           <p className=" text-slate-500  font-medium text-2xl">{prodDisplay.category}</p>
           <p className=" font-bold md:text-2xl">
             <span className="text-red-500 ">₹</span>
             <span>{prodDisplay.price}</span>
           </p>
     

     <div className="flex  gap-3">
          <button onClick={handleBuy} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
          <button onClick={handleAddCartProduct} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Add Cart</button>
          </div>
          <div>
            <p className="text-slate-600 font-medium mt-1">Description : </p>
            <p>{prodDisplay.description}</p>
          </div>
    </div>
    </div>
   
    <AllProduct heading={"Related Products "}/>
    </div>
      </div>  
    
  )
}

export default Products
