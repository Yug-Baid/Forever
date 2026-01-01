import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Orders from './Pages/Orders'
import Product from './Pages/Product'
import About from './Pages/About'
import PlaceOrder from './Pages/PlaceOrder'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'

import { ToastContainer, toast } from 'react-toastify';
import Verify from './Pages/Verify'

const App = () => {
  return (
    <>
         <Navbar/>
         <SearchBar/>
         <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collection/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
      <Footer/>
      </>
  )
}

export default App