import React,{useState,useEffect} from 'react'
import FilterProduct from './FilterProduct'
import Card from './Card';
import { useSelector } from 'react-redux';

const AllProduct = ({heading}) => {
    const productData= useSelector((state)=> state.product.productList);
 
    const categoryList = [...new Set(productData.map((obj)=> obj.category))];

    const[filterby,setfilterby]=useState('');
    const [datafilter,setdatafilter]= useState([]);

    useEffect(()=>{
      setdatafilter(productData);
    },[productData])
   
    const handleFilterProduct=(category)=>{
      setfilterby(category);
        const filter= productData.filter((obj)=>obj.category.toLowerCase() === category.toLowerCase());
      
       setdatafilter(filter);
       
     }

     const loadingArray= new Array(10).fill(null);

  return (
    <div>
      <div className='my-5 px-2'>
      <h2 className='font-bold text-2xl text-slate-800 mb-4 mt-4'>
      {heading}
      </h2>
       
       <div className='flex  gap-2 justify-center overflow-scroll scrollbar-none'>
        {
          categoryList[0] ? categoryList.map((el,ind)=>(   
              
              <FilterProduct category={el} onClick={()=>handleFilterProduct(el)} key={el + ind} 
              isActive={el.toLowerCase() === filterby.toLowerCase()}
              />       
            
          ))

          :(
           <div className='min-h-[150px] flex justify-center items-center'>
            <p>Loading...</p>
           </div>
          )

        }
       
       </div>

       <div className="mx-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
            { datafilter[0] ?
          datafilter.map((obj)=>(
           
              <Card
              key={obj._id}
              id={obj._id}
              image={obj.image}
              price={obj.price}
              name={obj.name}
              />
            
            )
          )
          :
          
          loadingArray.map ((obj,ind)=>
            <Card loading="loading.." key={ind+"allproduct"}/>
          )
        }
       </div>
      </div>
    </div>
  )
}

export default AllProduct
