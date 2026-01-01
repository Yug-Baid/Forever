import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProduct = ({category,subcategory}) => {
    const {products} = useContext(ShopContext)
    const [related,setRelated] = useState([])

    useEffect(()=>{
  
        if(products.length > 0){
              let productCopy = products.slice()
            productCopy = productCopy.filter((item) => category === item.category)
             productCopy = productCopy.filter((item) => subcategory === item.subcategory)
             setRelated(productCopy.slice(0,5))
        }
    },[products])
    
  return (
     <div className='my-20 lg:mx-30 mx-13'>
            <div className='text-cente flex flex-col items-center gap-4 mb-10'>
                <Title text1={"RELATED"} text2={"PRODUCTS"}/>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                 {
                    related.map((item,idx)=>(
                        <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} key={idx}/>
                    ))
                 }
            </div>
        </div>
  )
}

export default RelatedProduct