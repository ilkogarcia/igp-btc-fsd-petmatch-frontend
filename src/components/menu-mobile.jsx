/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Link from 'next/link'
import { HiXMark } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

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

const userMenu = [
  {
    label: 'Dashboard',
    route: '/user',
  },
  {
    label: 'My Applications',
    route: '/user/applications',
  },
  {
    label: 'My Favorites',
    route: '/user/favorites',
  },
  {
    label: 'My Messages',
    route: '/user/messages',
  },
  {
    label: 'My Donations',
    route: '/user/donations',
  },
  {
    label: 'My Account',
    route: '/user/account',
  },
]

const adminMenu = [
  {
    label: 'Dashboard',
    route: '/admin',
  },
  {
    label: 'Pets Management',
    route: '/admin/pets',
  },
  {
    label: 'Shelters Management',
    route: '/admin/shelters',
  },
  {
    label: 'Users Management',
    route: '/admin/users',
  },
  {
    label: 'Settings',
    route: '/admin/settings',
  },
]

export default function MobileMenu({ close }) {
  const [animation, setAnimation] = useState(false)
  const { data: session } = useSession()

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

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      close()
    }
  }

  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 top-0 z-10 h-full w-full bg-gray-500 bg-opacity-25 backdrop-blur-sm'
    >
      <div className='inset-0 top-0 p-5'>
        <div
          className={`w-full rounded-xl bg-white p-5 transition-all  ${
            animation ? 'scale-100' : 'scale-90'
          }`}
        >
          <div className='mx-auto flex w-full items-center justify-between px-6'>
            <h3 className='text-sm font-semibold text-gray-400'>
              Navigation...
            </h3>
            <HiXMark
              size={25}
              className='h-7 w-7 cursor-pointer transition-all hover:scale-110'
              onClick={close}
            />
          </div>

          <div className='mx-auto mt-5 grid w-full grid-cols-4 px-2'>
            {/* Main Menu */}
            <div className='col-span-1'>
              <h4 className='text-xs font-semibold uppercase text-gray-400 underline underline-offset-4'>
                Main Menu
              </h4>
              <ul className='list-none gap-2 md:gap-4 lg:gap-8'>
                {mainMenu.map(({ label, route }) => (
                  <li key={route} className='block py-1'>
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

            {/* User Menu */}
            {session?.user ? (
              <div className='col-span-1'>
                <div className='flex flex-col justify-between'>
                  <h4 className='text-xs font-semibold uppercase text-gray-400 underline underline-offset-4'>
                    User Menu
                  </h4>
                  <ul className='list-none gap-2 md:gap-4 lg:gap-8'>
                    {userMenu.map(({ label, route }) => (
                      <li key={route} className='block py-1'>
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
            ) : (
              <></>
            )}

            {/* Admin Menu */}
            {session?.user?.data.role === 3 ? (
              <div className='col-span-1'>
                <h4 className='text-xs font-semibold uppercase text-gray-400 underline underline-offset-4'>
                  Admin Menu
                </h4>
                <ul className='list-none gap-2 md:gap-4 lg:gap-8'>
                  {adminMenu.map(({ label, route }) => (
                    <li key={route} className='block py-1'>
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
            ) : (
              <></>
            )}

            {/* Auth Menu */}
            {session?.user ? (
              <div className='col-span-1 mx-auto'>
                <button
                  className='rounded-md bg-green-600 px-3 py-2 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600'
                  onClick={() => signOut()}
                >
                  Log out
                </button>
              </div>
            ) : (
              <div className='col-span-1'>
                <ul className='list-none gap-2 md:gap-4 lg:gap-8'>
                  <li key='/auth/login' className='block px-4 py-1'>
                    <Link
                      className='text-sm text-green-600 hover:text-green-800 hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                      href='/auth/login'
                    >
                      Log in
                    </Link>
                  </li>
                  <li key='/auth/register' className='block px-4 py-1'>
                    <Link
                      className='text-sm text-green-600 hover:text-green-800 hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                      href='/auth/register'
                    >
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
