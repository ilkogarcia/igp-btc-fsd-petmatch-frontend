'use client'
import Link from 'next/link'
import MainMenu from './menu-top-main'
import UserMenu from './menu-top-user'
import MobileMenu from './menu-mobile'
import { TbPaw } from 'react-icons/tb'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='mx-auto flex w-full flex-col items-center justify-center bg-green-400'>
      {/* navbar goes here */}
      <nav className='mx-auto my-4 flex w-full items-center justify-between bg-green-400 px-20'>
        {/* logo */}
        <div className='flex items-center space-x-2'>
          <TbPaw className='text-green-100' size={25} />
          <Link className='text-xl font-semibold text-green-100' href='/'>
            PetMatch
          </Link>
        </div>
        {/* primerary nav */}
        <div className='hidden items-center space-x-2 text-base font-medium md:flex'>
          <MainMenu />
        </div>
        {/* secondary nav */}
        <div className='hidden items-center space-x-2 text-base font-medium md:flex'>
          <UserMenu />
        </div>

        {/* mobile button */}
        <div className='flex w-full justify-end space-x-2 text-base font-medium md:hidden'>
          <button
            className='mobile-menu-button text-green-100 hover:text-white'
            onClick={() => {
              setOpen(true)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={() => console.log('click')}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </button>
        </div>
        {open ? <MobileMenu close={() => setOpen(false)} /> : <></>}
      </nav>
    </header>
  )
}
