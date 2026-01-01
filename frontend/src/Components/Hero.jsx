import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 sm:mx-30 mx-5 justify-between'>
        <div className='flex flex-col justify-center items-center px-20 text-2xl gap-4 py-5'>
            <div className='flex items-center gap-2'>
                 <div className='h-0.5 w-11 bg-[#414141]'></div>
                     <p>OUR BESTSELLERS</p>  
            </div>
           
            <h1 className='font-bold text-6xl prata-regular text-center'>Latest Arrivals</h1>
         <div className='flex items-center gap-2'>
                <p>SHOP NOW</p>
                <div className='h-0.5 w-11 bg-[#414141]'></div>
         </div>
        </div>
       <img src={assets.hero_img} className='sm:w-1/2 w-full object-cover'/>
    </div>
  )
}

export default Hero