/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Link from 'next/link'
import { HiXMark } from 'react-icons/hi2'
import { useEffect, useState } from 'react'

const mainMenu = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Pets',
    route: '/pets',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
  {
    label: 'Blog',
    route: '/blog',
  },
]

export default function MobileMenu({ close }) {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    setAnimation(true)
    window.addEventListener('resize', (e) => {
      if (e.target.innerWidth >= 640) {
        close()
      }
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])

  return (
    <>
      <div className='absolute inset-0 top-0 z-10 h-screen w-full bg-gray-500 bg-opacity-60 backdrop-blur-sm '>
        <div className='inset-0 top-0 p-5'>
          <div
            className={`w-full rounded-xl bg-white p-5 transition-all  ${
              animation ? 'scale-100' : 'scale-90'
            }`}
          >
            <div className='flex items-center justify-between'>
              <h1>Navigation</h1>
              <HiXMark
                size={25}
                className='h-7 w-7 cursor-pointer transition-all hover:scale-110'
                onClick={close}
              />
            </div>
            <div className='mt-5 divide-y'>
              <ul className='list-none gap-2 md:gap-4 lg:gap-8'>
                {mainMenu.map(({ label, route }) => (
                  <li key={route} className='block px-4 py-2'>
                    <Link
                      className='text-sm text-green-600 hover:text-green-800 hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                      href={route}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
