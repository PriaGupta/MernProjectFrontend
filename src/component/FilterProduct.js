import React from 'react'
import { ImSpoonKnife } from "react-icons/im";

const FilterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
      <div className={` text-2xl p-5 bg-yellow-500 rounded-full cursor-pointer ${isActive ? 'bg-red-400 text-white' : 'bg-slate-500'}`}>
        <ImSpoonKnife/>
        </div>
        <p className='text-center font-medium capitalize mt-1'>{category}</p>
    </div>
  )
}

export default FilterProduct
