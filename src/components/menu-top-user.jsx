'use client'
import Link from 'next/link'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { signOut, useSession } from 'next-auth/react'
import Avatar from './avatar'

export default function UserMenu() {
  const { data: session } = useSession()

  return (
    <div className=' mx-auto flex h-fit w-fit items-center justify-between gap-2 md:gap-4 lg:gap-8'>
      {session?.user ? (
        <div className='flex items-center justify-between space-x-2'>
          {session.user.image ? (
            <Avatar
              src={session.user.image}
              alt={session.user.username}
              size={30}
              className='rounded-full border border-gray-400'
            />
          ) : (
            <span className='icon flex items-center px-2'>
              <HiOutlineUserCircle size={22} />
            </span>
          )}
          <h2 className='text-gray-600'>
            <Link href='/user'>{session.user.username || 'Unknow'}</Link>
          </h2>
        </div>
      ) : (
        <></>
      )}
      {session?.user ? (
        <button
          className='rounded-md bg-green-600 px-3 py-2 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600'
          onClick={() => signOut()}
        >
          Log out
        </button>
      ) : (
        <div className='flex items-center justify-between gap-6'>
          <Link
            className='text-green-900 hover:text-white hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
            href='/auth/login'
          >
            Log in
          </Link>
          <Link
            className='rounded-md bg-green-600 px-3 py-2 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600'
            href='/auth/register'
          >
            Register
          </Link>
        </div>
      )}
    </div>
  )
}
