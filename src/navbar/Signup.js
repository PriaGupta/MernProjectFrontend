import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { IoEye,IoEyeOff } from "react-icons/io5";
import {toast} from 'react-hot-toast';
import LoginGifImage from '../assest/loginimage.gif'
import { ImagetoBase64 } from '../utility/imagetobase64';
const Signup = () => {

    const [showPass,setPass]=useState(false);
    const [showConfirmPass,setConfirmPass]=useState(false);
    const navigate=useNavigate();
    const [data,setdata]=useState({
          name:"",
          email:"",
          password:"",
          confirmPassword:"",
          image:"",
    }
    )
    const handleShowPass=()=>{
        setPass(prev => !prev)
    }
    const handleShowConfirmPass=()=>{
        setConfirmPass(prev => !prev)
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
  

  const handleProfileImage= async(e)=>{
        const data =  await ImagetoBase64(e.target.files[0])
        // console.log(data)
         
        setdata((prev)=>{
          return{
            ...prev,
            image: data
          }
        })
  }
    const handleSubmit=async(e)=>{
      e.preventDefault()
      const {name,email,password,confirmPassword}=data
        if(name && email && password && confirmPassword){
           if(password === confirmPassword){
            try{
             const fetchData= await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/api/signup`,{
              method:"POST",
              headers:{
                "content-type" : "application/json"
              },
              body: JSON.stringify(data)
            })

            const result = await fetchData.json();
            console.log(result);
            // alert(result.message)
             toast(result.message)
             if(result.alert){
            navigate("/login");
             }
           } catch (error) {
            console.error("Error:", error);
            toast("Failed to sign up");
          }
        }
           else{
            alert("password and confirm password not equal")
           }
          }
           else{
            alert("Enter the required fields")
           }      
    }
  return (
    <>
    
      <div className="bg-gray-100 flex items-center justify-center h-screen">
  <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-5 rounded-lg shadow-lg'>
 
    <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
      <img src={ data.image ? data.image  :LoginGifImage} alt="gifimage" className='w-full h-full'/>
   
   <label>
    <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer'>
      <p className='text-sm p-1 text-white'>Upload</p>
    </div>
    <input type="file" id="profileimage" accept="image/*" className='hidden' onChange={handleProfileImage}/>
    </label>
    </div>
    <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
        <label >Name</label>
        <input type="text" name="name" className="mt-1 mb-2 w-full bg-slate-200 px-2 py-2 rounded focus-within:outline-blue-400" value={data.name} onChange={handlechangeInput}/>
   
        <label>Email</label>
        <input type="email" name="email" className='mt-1 mb-2 w-full bg-slate-200 px-2 py-2 rounded focus-within:outline-blue-400' value={data.email} onChange={handlechangeInput}/>
    
         <label>Password</label>
         <div className='flex px-2 py-2 bg-slate-200 mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-400'>
         <input type={showPass ? "text":"password"} name="password" className=' w-full bg-slate-200 border-none outline-none ' value={data.password} onChange={handlechangeInput}/>
         <span className="flex text-xl cursor-pointer" onClick={handleShowPass}>{showPass ? <IoEye/> : <IoEyeOff/>}</span> </div>

         <label>Confirm Password</label>
         <div className='flex px-2 py-2 bg-slate-200 mt-1 mb-2 rounded focus-within:outline focus-within:outline-blue-400'>
         <input type={showConfirmPass ? "text":"password"} name="confirmPassword" className=' w-full bg-slate-200 border-none outline-none ' value={data.confirmPassword} onChange={handlechangeInput} />
         <span className="flex text-xl cursor-pointer" onClick={handleShowConfirmPass}>{showConfirmPass ? <IoEye/> : <IoEyeOff/>}</span> </div>
   
       <button type="submit" className='w-full max-w-[150px] m-auto bg-blue-400 hover:bg-blue-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-3'>Sign Up</button>
    </form>
    <p className="text-sm">Already have an account? <Link to="/login" className='text-blue-500 underline'>Login</Link></p>
  </div>
</div>

    </>
  )
}

export default Signup
