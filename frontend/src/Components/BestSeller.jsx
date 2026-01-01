import { useContext, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../Context/ShopContext'
import { useEffect } from 'react'
import ProductItem from './ProductItem'


const BestSeller = () => {
     const {products} = useContext(ShopContext)
        const [bestSeller,setBestSeller] = useState([])
    
        useEffect(()=>{
            const bestseller = products.filter((item)=> item.bestseller)
            setBestSeller(bestseller.slice(0,4))
        },[products])
  return (
     <div className='my-20 lg:mx-30 mx-13'>
            <div className='text-cente flex flex-col items-center gap-4 mb-10'>
                <Title text1={"BEST"} text2={"SELLERS"}/>
                <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, itaque maxime sed</p>
            </div>
            <div className=''>

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
                 {
                    bestSeller.map((item,idx)=>(
                        <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} key={idx}/>
                    ))
                 }
            </div>
        </div>
  )
}

export default BestSeller