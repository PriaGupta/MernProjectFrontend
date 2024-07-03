import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { IoEye,IoEyeOff } from "react-icons/io5";
import {toast} from 'react-hot-toast';
import {useDispatch,useSelector} from "react-redux";
import { loginRedux } from '../redux/userSlice';
const Login = () => {

  const navigate=useNavigate();
  const [showPass,setPass]=useState(false);
  const [data,setdata]=useState({
    
        email:"",
        password:"",
  });

  const userData = useSelector(state=> state)
  // console.log(userData)

  const dispatch= useDispatch() 
  const handleShowPass=()=>{
      setPass(prev => !prev)
  }
 
  const handlechangeInput=(e)=>{
    const{name,value}=e.target
    setdata((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {email,password}=data
      if( email && password){
        
        const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/api/login`,{
          method:"POST",
          headers:{
            "content-type" : "application/json"
          },
          body: JSON.stringify(data)
        })

        const data1 = await fetchData.json()
        console.log(data1);
        toast(data1.message)

        if( data1.alert){
          dispatch(loginRedux(data1))
          setTimeout(()=>{
            localStorage.setItem('token', data1.token);
            navigate("/");
          },1000)
        }
        // console.log(userData)
      }    
         else{
          alert("Enter the required fields")       
}
}

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
  <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-5 rounded-lg shadow-lg'>
    <h2 className='text-2xl font-bold mb-2 text-center'>LogIn</h2>
    
    <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
       
        <label>Email</label>
        <input type="email" name="email" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-2 rounded focus-within:outline-blue-400' value={data.email} onChange={handlechangeInput}/>
    
         <label>Password</label>
         <div className='flex px-2 py-2 bg-slate-200 mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-400'>
         <input type={showPass ? "text":"password"} name="password" className=' w-full bg-slate-200 border-none outline-none ' value={data.password} onChange={handlechangeInput}/>
         <span className="flex text-xl cursor-pointer" onClick={handleShowPass}>{showPass ? <IoEye/> : <IoEyeOff/>}</span> </div>

       <button type="submit" className='w-full max-w-[150px] m-auto bg-blue-400 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-3'>LogIn</button>
    </form>
    <p className="text-sm">Don’t have an account? <Link to="/signup" className='text-blue-500 underline'>SignUp</Link></p>
  </div>
</div>
  )
}

export default Login
