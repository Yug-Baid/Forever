import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { ShopContext } from '../Context/ShopContext'
import { toast } from 'react-toastify';


const Login = () => {
  const [currentState,setCurrentState] = useState('Login')
  const {token,setToken,navigate} = useContext(ShopContext)
  const [name,setName] = useState('')
  const [password,setPassword]  = useState('')
  const [email,setEmail] = useState('') 
  
  const formSubmitHandler = async (event)=>{
    event.preventDefault()
    try {

      if(currentState === 'Sign-Up'){

        const response = await axios.post('http://localhost:4000'+'/api/user/register',{name,email,password})
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }else{
            toast.error(response.data.message)
        }

      }else{
        const response = await axios.post(' http://localhost:4000'+'/api/user/login',{email,password})
        console.log(response.data)
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }else{
          toast.error(response.data.message)
        }
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
       navigate('/')
    }
   
  },[token])
  
  return (
      <form onSubmit={formSubmitHandler} className='flex justify-center m-auto w-full my-15'>
        <div className='flex flex-col items-center  sm:w-[400px]'>
          <div className='flex items-center gap-3'>
          <p className='prata-regular text-4xl '>{currentState}</p>
          <hr  className='w-[30px] h-[0.5px]  '/>
          </div>
          {currentState === 'Login' ? '' :  <input type="text"  onChange={(e)=>setName(e.target.value)} value={name} placeholder='Name' className='border p-3 w-full mt-4' required  /> }
          <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='border p-3 w-full mb-4 mt-4' required />
          <input  onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='border p-3 w-full mb-2' required />
          <div className='flex w-full justify-between mb-8'>
            <p>Forgot Your Passowrd ?</p>
            {
              currentState === 'Login' ? <p className='cursor-pointer' onClick={()=>setCurrentState('Sign-Up')}>Create Account</p> : <p className='cursor-pointer' onClick={()=>setCurrentState('Login')}>Login Here</p>
            }
          </div>
            <button type='submit' className='p-3 w-[200px] bg-black text-white'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        </div>
      </form>
  )
}

export default Login