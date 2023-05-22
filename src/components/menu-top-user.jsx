'use client'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import Avatar from './avatar'

const UserMenu = () => {
  const { data: session } = useSession()

  return (
    <div className=' mx-auto flex h-fit w-fit items-center justify-between gap-2 md:gap-4 lg:gap-8'>
      {session ? (
        <>
          <Avatar />
          <button
            className='rounded-md bg-green-600 px-3 py-2 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600'
            onClick={() => signOut({ callbackUrl: '/'})}
          >
            Log out
          </button>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default UserMenu
