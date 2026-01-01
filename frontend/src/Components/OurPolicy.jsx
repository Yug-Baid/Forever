import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='sm:py-15 py-5'>
        <div className='flex flex-col sm:flex-row justify-evenly items-center gap-20'>
        <div className='flex flex-col items-center'>
            <img src={assets.exchange_icon} width={100} alt="" />
            <p>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
         <div className='flex flex-col items-center'>
            <img src={assets.quality_icon} width={100} alt="" />
            <p>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
         <div className='flex flex-col items-center'>
            <img src={assets.support_img} width={100} alt="" />
            <p>Best customer support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
        </div>
        </div>
    </div>
  )
}

export default OurPolicy