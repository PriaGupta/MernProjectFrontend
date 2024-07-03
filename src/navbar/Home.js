import React, {  useRef } from 'react'
import banner from '../assest/mernbanner.png';
import Card from '../component/Card';
import { useSelector } from 'react-redux';
import { GrNext,GrPrevious } from "react-icons/gr";
import AllProduct from '../component/AllProduct';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
  const productData= useSelector((state)=> state.product.productList);
  // console.log(productData)
  const homeProductCartforvegetables= productData.filter((obj)=>obj.category === "vegetables",[])
  // console.log(homeProductCartforvegetables)

  const loadingArray= new Array(10).fill(null);
 
  const slideProduct=useRef()
 const nextproduct=()=>{
  slideProduct.current.scrollLeft +=200
 }
 
 const previousproduct=()=>{
  slideProduct.current.scrollLeft -=200
 }


  return (
    <div className='pt-16 min-w[{calc(100vh)}] bg-slate-100  '>
  
      <div className='relative h-full w-full'>
        <img src={banner} alt="banner1" className='w-full h-64 md:h-80 lg:h-96 xl:h-[87vh] object-fill' />
      </div>

    <div className=''>
      <div className='flex w-full items-center'>
      <h2 className='font-bold text-2xl text-slate-800 px-4 mb-4 mt-4'>
        Fresh Vegetables
      </h2>
     
      <div className='ml-auto flex gap-2 px-3' >
        <button onClick={previousproduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded '><GrPrevious /></button>
        <button onClick={nextproduct} className='bg-slate-300 hover:bg-slate-500 text-lg p-1 rounded'><GrNext/></button>
      </div>
      </div>
      <div className='flex px-4 gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProduct}>
        {  homeProductCartforvegetables.length >0 ?
          homeProductCartforvegetables.map((obj,ind) =>
            (
              < Card
                key={obj._id+"vegetables"+ind}
                id={obj._id}
                name={obj.name}
                category={obj.category}
                price={obj.price}
                image={obj.image}
              />
            )
          )

          :
          loadingArray.map ((obj,ind)=>
            <Card loading="loading.." key={ind+"cartLoading"}/>
          )
        
        }
      </div>
    </div>
 
   <AllProduct/>
  
<About/>
<Contact/>
<Footer/>
      </div>
    
    
  
  )
}

export default Home
