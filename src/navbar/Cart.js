import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import CartProduct from '../component/CartProduct';
import emptyCartImage from '../assest/empty_cart.gif';
import { toast } from 'react-hot-toast';
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItems = useSelector((state)=>state.product.cartItem);
  // console.log(productCartItems)
  const user = useSelector(state => state.user);
  const navigate = useNavigate()
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState({
    line1: '',
    country:'',
  });

  const totalPrice = productCartItems.reduce((acc,curr)=>acc + parseInt(curr.total),0)
  const totalQty= productCartItems.reduce((acc,curr)=>acc + parseInt(curr.qty),0);

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const handlePayment = async () => {
  if (!customerName || !customerAddress.line1 || !customerAddress.country) {
    toast.error("Please fill out all required fields.");
    return;
  }
  if(user.email){
  const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cartItems:productCartItems,
      customerName,
      customerAddress
   } ), 
  });

  const { url, error } = await res.json();
  if (error) {
    console.error("Error:", error);
  } else {
    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId: url });
  }
}
else{
    toast("You have not Login!")
    setTimeout(()=>{
      navigate("/login")
    },1000)
  }
}


  return (
    <div className='pt-16 min-w[{calc(100vh)}] bg-slate-100  '>
     <div className='p-2 md:p-4'>
        <h2 className='text-lg md:text-2xl font-bold text-slate-600'>
            Your Cart Items
        </h2>

        {productCartItems.length ?
        <div className='my-8 flex flex-col md:flex-row gap-3'>
            {/* display cart items  */}
            <div className='w-full max-w-3xl '>
          { 
            productCartItems.map(el=>{
              return(
                <CartProduct 
                key={el._id}
                id={el._id} 
                name={el.name}
                image={el.image}
                category={el.category}
                price={el.price}
                qty={el.qty}
                total={el.total}
                />
              )
            })
          }
            </div>
            
       

            <div className="w-full md:w-1/3 mt-4 md:mt-0 ml-auto">
            <h2 className="bg-blue-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price:</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
             
     
             <h3 className="bg-blue-500 text-white p-2 text-lg">Proceed to next </h3>
             <div className='flex w-full py-2 text-md border-b'>
            <label >Username:</label>
            <input type="text" name="name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className='ml-auto w-30 bg-slate-200 px-2  
            rounded focus-within:outline-blue-400' placeholder='enter your name'/>
            </div>
            <div className='flex w-full py-2 text-md border-b'>
            <label >Address:</label>
            <input type='text' 
            name='line1'
            value={customerAddress.line1}
            onChange={(e) => setCustomerAddress({ ...customerAddress, line1: e.target.value })}
            className="ml-auto w-30 px-2 rounded bg-slate-200 
            focus-within:outline-blue-400" placeholder=' shipping address'/>
            </div> 
            {/* ///////////////////////////// */}
            <div className='flex w-full py-2 text-md border-b'>
            <label >Country:</label>
            <select type='text' 
            name='country'
            value={customerAddress.country}
            onChange={(e) => setCustomerAddress({ ...customerAddress, country: e.target.value })}
                className="ml-auto w-30 px-2 rounded bg-slate-200 
            focus-within:outline-blue-400" placeholder=' shipping address'>
            <option value='' disabled>Select country</option>
            <option value='IND'>India</option>
            </select>
            </div>
 
            <button className="bg-red-500 w-full text-lg font-bold py-2 text-white" onClick={handlePayment} >
              Payment
            </button>
          </div>
        
        </div>
        : 
        <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCartImage} className="w-full max-w-sm" alt="emptyimage"/>
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        </>
}
        </div>
    </div>
  )
  }

export default Cart
