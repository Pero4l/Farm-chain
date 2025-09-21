'use client'
import React from 'react'
import { useState } from 'react'
// import ThemeToggle from '../toggle'

const Button = () => {

   const[menu, setMenu] = useState(false)

  return (
    <div>


        {/* <ThemeToggle/> */}

        {/* BUTTONS */}
        <div className='flex  justify-center lg:flex relative lg:left-10'>
          <button className='bg-green-600 text-white lg:px-12 md:px-5 px-12 py-3 rounded-l-full hover:bg-green-700 transition'>Sign Up</button>
          <button className='border border-green-600 text-green-600 lg:px-12 md:px-5 px-10 py-3 rounded-full hover:bg-green-600 hover:text-white transition bg-white relative md:right-4 lg:right-7 right-7'>Sign In</button>
        </div>

    
      
    </div>
  )
}

export default Button
