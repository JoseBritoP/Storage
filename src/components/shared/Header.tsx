import Image from 'next/image'
import React from 'react'
import Search from './Header/Search'
import FileUplodeader from './Header/FileUplodeader'

export default function Header() {
  return (
    <header className='header'>
      <Search/>
      <div className='header-wrapper'>
        <FileUplodeader/>
        <form action="">
          <button type='submit' className='sign-out-button'>
            <Image alt='logout' src='/assets/icons/logout.svg' height={24} width={24} className='w-6'/>
          </button>
        </form>
      </div>
    </header>
  )
}
