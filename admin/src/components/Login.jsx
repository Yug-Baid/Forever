import { useState } from "react";
import axios from 'axios'
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({setToken}) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const submitHandler = async (e)=>{
        try {
            e.preventDefault()
            const response = await axios.post('http://localhost:4000' +'/api/user/admin',{email,password})
            if(response.data.success){
              setToken(response.data.token)
            }else{
              toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gray-50">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        
        {/* Title */}
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
        
        {/* Form */}
        <form onSubmit={submitHandler}>
          {/* Email */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            required
              type="email"
              placeholder="Enter Your Email"
              className="rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            required
              type="password"
              placeholder="Enter your password"
              className="rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
