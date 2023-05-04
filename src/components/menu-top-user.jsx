'use client'
import Link from 'next/link'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { signOut, useSession } from 'next-auth/react'
import Avatar from './avatar'

export default function UserMenu() {
  const { data: session } = useSession()
  
  return (
    <div className=' mx-auto flex h-fit w-fit items-center justify-between gap-6'>
      {session?.user ? (
        <div className='flex items-center justify-between space-x-2'>
          {session.user.data.image ? ( 
            <Avatar src={session.user.data.image} alt={session.user.data.username} size={10} />
          ) : (
            <span className='icon flex items-center px-2'>
              <HiOutlineUserCircle size={20} />
            </span>
          )}
          <h2 className='text-gray-600'>
            <Link href='/user'>{session.user.data.username || 'Unknow'}</Link>
          </h2>
        </div>
      ) : (
        <></>
      )}
      {session?.user ? (
        <button className='rounded-full border bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-900' onClick={() => signOut()}>
          Log out
        </button>
      ) : (
        <div className='flex items-center justify-between gap-6'>
          <Link className='hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 text-green-900 hover:text-white' href='/auth/login'>
            Log in
          </Link>
          <Link
            className='rounded-full border bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 active:bg-green-900'
            href='/auth/register'
          >
            Register
          </Link>
        </div>
      )}
    </div>
  )
}
