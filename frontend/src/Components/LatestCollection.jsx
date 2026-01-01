import React, { useContext, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../Context/ShopContext'
import { useEffect } from 'react'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const [latestProduct,setLatestProduct] = useState([])

    useEffect(()=>{
        setLatestProduct(products.slice(0,10))
    },[products])
  return (
        <div className='my-20 lg:mx-30 mx-13'>
            <div className='text-cente flex flex-col items-center gap-4 mb-10'>
                <Title text1={"LATEST"} text2={"COLLECTION"}/>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, itaque maxime sed</p>
            </div>
            <div className=''>

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                 {
                    latestProduct.map((item,idx)=>(
                        <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} key={idx}/>
                    ))
                 }
            </div>
        </div>
  )
}

export default LatestCollection