"use client"
import { useTheme } from 'next-themes'
import React from 'react'
import { Button } from './button'
import { MoonIcon, SunIcon } from 'lucide-react'

export default function DarkModeButton() {

  const { theme, setTheme } = useTheme()
  return (
    <div className='flex  justify-center items-center gap-x-4 w-full px-3'>
      <Button onClick={()=>setTheme('light')} className={`${theme === 'light' ? 'border bg-brand-100 hover:bg-rose-500 ' : 'bg-gray-100 text-light-100 dark:bg-dark-200 dark:text-light-300 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-800'} transition-colors duration-150 ease-in-out rounded-full shadow-md dark:shadow-gray-800 px-10 py-6 `}>
        <SunIcon/>
        <p>Light Mode</p>
      </Button>
      <Button onClick={()=>setTheme('dark')} className={`${theme === 'dark' ? 'border bg-brand/80 hover:bg-rose-500/75 text-light-300 ' : 'bg-gray-100 text-light-100 dark:bg-dark-200 dark:text-light-300 rounded-lg hover:bg-gray-300/50 dark:hover:bg-gray-800'} transition-colors duration-150 ease-in-out rounded-full shadow-md dark:shadow-gray-800 px-10 py-6 `}>
        <p>Dark Mode</p>
        <MoonIcon/>
      </Button>
    </div>
  )
}
