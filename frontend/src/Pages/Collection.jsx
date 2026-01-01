import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'
import { assets } from '../assets/assets'

const Collection = () => {
  const {products,search,showSearch} = useContext(ShopContext)
    const [filterProduct,setFilterProduct] = useState([])
    const [showFilter,setShowFilter] = useState(false)
    const [category,setCategory] = useState([]);
    const [subCategory,setSubCategory] = useState([])
    const [sortType,setSortType] = useState('relevant')

    const toggleCategory = (e)=>{
      if(category.includes(e.target.value)){
        setCategory(prev => prev.filter((item)=> item !== e.target.value))
      }else{
        setCategory(prev => [...prev,e.target.value])
      }
    }

        const toggleSubCategory = (e)=>{
      if(subCategory.includes(e.target.value)){
        setSubCategory(prev => prev.filter((item)=> item !== e.target.value))
      }else{
        setSubCategory(prev => [...prev,e.target.value])
      }
    }

    const sortProduct = ()=>{
      const fpCopy = filterProduct.slice()

      switch(sortType){

        case 'relevant':
          setFilterProduct(fpCopy)
          break;

        case 'low-high' :
          setFilterProduct(fpCopy.sort((a,b)=> a.price - b.price))
          break;
      
        case 'high-low' :
          setFilterProduct(fpCopy.sort((a,b)=> b.price - a.price))
          break;
      }
    }

    
      useEffect(()=>{
        sortProduct()
      },[sortType])


    const applyFilter = ()=>{

      let productCopy = products.slice()

      if(showSearch && search){
        productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      if(category.length >0){
        productCopy = productCopy.filter(item => category.includes(item.category))
      }
       if(subCategory.length >0){
        productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
      }

      setFilterProduct(productCopy)
    }

    useEffect(()=>{
      applyFilter()
    },[category,subCategory,search,showSearch,products])

 
    const showCategory = ()=>{
      setShowFilter(!showFilter)
    }
  
      useEffect(()=>{
          setFilterProduct(products.slice())
      },[])


  return (
      <div className='flex flex-col sm:flex-row justify-between py-10'>
          <div className='flex flex-col sm:pl-30 pl-5 pt-5' style={{flexBasis:"30%"}}>
            <div className='flex flex-row gap-3 items-center mb-5'>
            <p className='cursor-pointer sm:mb-5 text-2xl font-bold'>FILTERS</p>
            <img onClick={showCategory} src={assets.dropdown_icon}  className={`${showFilter ? 'rotate-90' : ''} h-5 sm:hidden`}  alt="" />
            </div>
            <div className={`${showFilter ? '' : 'hidden'} sm:block`}>
            <div className='flex flex-col border py-5 px-5 w-60 mb-5 rounded-[3px]'>
              <p>CATEGORIES</p>
              <p>
                <input type="checkbox" value={"Men"} onChange={toggleCategory}/> Men
              </p>
               <p>
                <input type="checkbox" value={"Women"} onChange={toggleCategory}/> Women
              </p>
               <p>
                <input type="checkbox" value={"Kids"} onChange={toggleCategory}/> Kids
              </p>
            </div>
            <div className='flex flex-col border py-5 px-5 w-60 rounded-[3px]'>
               <p>TYPE</p>
              <p>
                <input type="checkbox" value={"Topwear"} onChange={toggleSubCategory}/> Topwear
              </p>
               <p>
                <input type="checkbox" value={"Bottomwear"} onChange={toggleSubCategory}/> Bottomwear
              </p>
               <p>
                <input type="checkbox" value={"Winterwear"} onChange={toggleSubCategory}/> Winterwear
              </p>
            </div>
            </div>
          </div>
          <div className='flex flex-col sm:pr-30 px-5 ' style={{flexBasis:"70%"}}>
            <div className='flex flex-col sm:flex-row justify-between mb-10'>

              <Title text1={"ALL"} text2={"COLLECTIONS"}/>
              <select onChange={(e) => setSortType(e.target.value)} name="" id="" className='border w-60 p-5 ouline-none font-bold mt-5 sm:mt-0'>
                <option className='font-bold' value="relevant">Sort By : Relevant</option>
                  <option className='font-bold' value="low-high">Sort By : Low to High</option>
                    <option className='font-bold' value="high-low">Sort By : High to Low</option>
              </select>
            </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 '>
                 {
                    filterProduct.map((item,idx)=>(
                        <ProductItem id={item._id} name={item.name} price={item.price} image={item.image} key={idx}/>
                    ))
                 }
            </div>
          </div>
      </div>
  )
}

export default Collection