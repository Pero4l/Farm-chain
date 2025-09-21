import React from 'react'
import Image from 'next/image'
import bgImage from "@/public/1.jpeg"

const HomePage = () => {

  return (
    <div className='' >
      <Image src={bgImage} alt="background" className='w-full object-cover'/>

      {/* <div className='text-6xl font-bold  relative bottom-[650p] text-black'>
          <h1>Welcome to FarmChain</h1>
      </div> */}

      <h1>homme</h1>
    </div>
  )
}

export default HomePage
