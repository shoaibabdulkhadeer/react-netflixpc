import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 z-30 absolute w-full'>
    <Link to={"/"}>
    <h1 className='text-red-600 text-4xl font-bold'>NETFLIX</h1>
    </Link>
         
          <div className='flex text-xl'>
            <Link to={"signin"}>
              <p className='p-2'>Sign In</p>
              </Link>
 
             <Link to={"/signup"}>
              <p className='p-2 bg-red-700 rounded-lg cursor-pointer'>Sign Up</p>
              </Link>
          </div>
    </div>
  )
}

export default Navbar
