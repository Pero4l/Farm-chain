'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isLoading, setIsLoading] = useState(false)

 
  useEffect(() => {
    setIsLoading(true)
  }, [])

  if (!isLoading) return <p>Loading......</p>

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-1 px-3 rounded border border-gray-300 dark:border-gray-600"
    >
      {theme === 'dark' ? <IoSunnySharp/> : <BsMoonStarsFill/>}
    </button>
  )
}