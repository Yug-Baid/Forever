import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const location = useLocation()
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
        if(location.pathname.includes("collections")){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

  return (
    showSearch && visible ? 
    <div className='flex items-center justify-center border-t border-b border-gray-400 bg-gray-50 mx-32 my-5'>
        <div className='flex justify-between border rounded-full my-5 text-sm w-120 px-5 h-10 py-2 mr-5'>
            <input  value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='border-none outline-none font-black w-120'/>
            <img src={assets.search_icon}  alt="" />
        </div>
        <img className='cursor-pointer' onClick={()=>setShowSearch(false)}  src={assets.cross_icon} width={16} />
    </div>
    : null
 )
}

export default SearchBar