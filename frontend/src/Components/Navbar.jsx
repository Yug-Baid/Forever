import { Link, NavLink } from "react-router-dom"
import { assets } from "../assets/assets"
import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"


const Navbar = () => {

    const {setShowSearch,getCartCount,setToken,navigate,setCartItems,token} = useContext(ShopContext)
    const [isVisible,setIsVisible] = useState(false)

    const logout = ()=>{
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
         navigate('/login')
    }

  return (

    <div className="flex justify-between items-center px-5 md:px-[5vw] lg:px-[8vw] py-7 font-medium ">
        <Link to="/">
                <img src={assets.logo} className="sm:w-50 w-35" alt="logo" />
        </Link>

        <ul className="flex gap-10 lg:flex hidden">
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <p className="text-[22px]">Home</p>
                <hr className="w-2/4 h-[1.7px] hidden border-none bg-gray-700" />
            </NavLink>
             <NavLink to="/collections" className="flex flex-col items-center gap-1">
                <p className="text-[22px]">Collections</p>
                <hr className="w-2/4 h-[1.7px] hidden border-none bg-gray-700" />
            </NavLink>
             <NavLink to="about" className="flex flex-col items-center gap-1">
                <p className="text-[22px] ">About</p>
                <hr className="w-2/4 h-[1.7px] hidden border-none bg-gray-700" />
            </NavLink>
             <NavLink to="contact" className="flex flex-col items-center gap-1">
                <p className="text-[22px]">Contact</p>
                <hr className="w-2/4 h-[1.7px] hidden border-none bg-gray-700" />
            </NavLink>
        </ul>
<div className="flex gap-7 items-center">
  <Link to={"/collections"}>
    <img
      src={assets.search_icon}
      onClick={() => setShowSearch(true)}
      className="w-7 cursor-pointer"
      alt="search"
    />
  </Link>

  {token ? (
    <button
      onClick={logout}
      className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full hover:bg-gray-700 transition"
    >
      Logout
    </button>
  ) : (
    <Link to="/login">
      <img
        src={assets.profile_icon}
        className="w-7 cursor-pointer"
        alt="login"
      />
    </Link>
  )}

  <Link to="/cart" className="relative">
    <img src={assets.cart_icon} className="w-7 cursor-pointer" alt="cart" />
    <div className="bg-black rounded-full w-6 h-6 absolute bottom-0 left-3 top-3.5 flex items-center justify-center">
      <p style={{ color: "white", fontSize: "10px" }}>{getCartCount()}</p>
    </div>
  </Link>

  <img
    src={assets.menu_icon}
    className="w-7 lg:hidden"
    onClick={() => setIsVisible(true)}
    alt="menu"
  />
</div>


     <div className={`${isVisible ? "w-full" : "w-0"} absolute top-0 right-0 bottom-0 transition-all overflow-hidden bg-white `}>
        <div className="flex flex-col">
            <div className="flex items-center">
                <img onClick={()=>setIsVisible(false)} src={assets.dropdown_icon} className="p-5" />
                <p className="text-2xl font-bold">BACK</p>
            </div>
            <div className="flex flex-col text-5xl px-5 py-10 gap-20 ">
                <NavLink to="/" className="font-bold border-b" onClick={()=>setIsVisible(false)}>HOME</NavLink>
                   <NavLink to="/collections" className="font-bold border-b" onClick={()=>setIsVisible(false)}>COLLECTIONS</NavLink>
                      <NavLink to="/about" className="font-bold border-b" onClick={()=>setIsVisible(false)}>ABOUT</NavLink>
                         <NavLink to="/contact" className="font-bold border-b" onClick={()=>setIsVisible(false)}>CONTACT</NavLink>

            </div>
        </div>
           
        </div>
        
    </div>
        
       

  )
}

export default Navbar