'use client'
import React from 'react'
import Image from 'next/image'
import bgImage from "@/public/1.jpeg" 
import { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {

   const[menu, setMenu] = useState(false)

  return (
    <div>

        <nav className='flex flex-col p-4 lg:p-7 lg:px-20 lg:flex-row justify-between lg:items-center shadow-2xl'>

          {/* LOGO */}
          <div className='flex items-center gap-32 md:gap-[570px] lg:gap-0'>
            <h1 className='text-4xl font-bold text-green-900'>farmChain</h1>

              {/* HAMBURGER */}

          <div onClick={()=>setMenu(!menu)} className='lg:hidden text-black font-bold cursor-pointer text-3xl'>
             {menu ? <AiOutlineClose/> : <CiMenuBurger/>}
          </div>
          </div>

        

          
          {/* NAVIGATION */}
        <ul className={menu ? 'flex flex-col lg:flex-row lg:gap-10 gap-5 font-bold lg:bg-white lg:shadow-2xl text-black rounded-full lg:p-4 py-5 lg:px-7' : 'hidden lg:flex lg:flex-row lg:gap-10 gap-5 font-bold lg:bg-white lg:shadow-2xl text-black rounded-full lg:p-4 py-5 lg:px-7'}>
          <li className='cursor-pointer hover:text-black text-green-400'>Home</li>
          <li className='cursor-pointer hover:text-green-400'>About</li>
          <li className='cursor-pointer hover:text-green-400'>Feed</li>
          <li className='cursor-pointer hover:text-green-400'>Community</li>
          <li className='cursor-pointer hover:text-green-400'>Market Place</li>
          <li className='cursor-pointer hover:text-green-400'>Services</li>
          <li className='cursor-pointer hover:text-green-400'>Contact</li>
        </ul>

        {/* BUTTONS */}
        <div className={menu ? 'flex justify-center' : 'hidden lg:flex'}>
          <button className='bg-green-600 text-white lg:px-12 px-15 py-3 rounded-l-full hover:bg-green-700 transition'>Sign Up</button>
          <button className='border border-green-600 text-green-600 lg:px-12 px-12 py-3 rounded-full hover:bg-green-600 hover:text-white transition bg-white relative right-5'>Sign In</button>
        </div>

        </nav>
      
    </div>
  )
}

export default Navbar
