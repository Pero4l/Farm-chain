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
        <div className={menu ? 'flex justify-center' : 'hidden lg:flex'}>
          <button className='bg-green-600 text-white lg:px-12 md:px-40 px-15 py-3 rounded-l-full hover:bg-green-700 transition'>Sign Up</button>
          <button className='border border-green-600 text-green-600 lg:px-12 md:px-44 px-12 py-3 rounded-full hover:bg-green-600 hover:text-white transition bg-white relative right-7'>Sign In</button>
        </div>

    
      
    </div>
  )
}

export default Button
