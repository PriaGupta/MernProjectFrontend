import React from 'react'
import tryagain from '../assest/cancel.gif';
const Cancel = () => {
  return (
    <div className='pt-10 min-w[{calc(200vh)}] '>
       <div className="flex w-full justify-center items-center flex-col">
       <img src={tryagain} className="w-full max-w-sm" alt="emptyimage"/>
     
      </div>
    </div>
  )
}

export default Cancel
