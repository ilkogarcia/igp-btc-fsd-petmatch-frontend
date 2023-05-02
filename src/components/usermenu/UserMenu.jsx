'use client'
import Link from 'next/link'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function UserMenu() {
  const { data: session } = useSession()
  console.log('session', session);

  return (
    <div className=' mx-auto flex h-fit w-fit items-center justify-between gap-6'>
      {session?.user ? (
        <div className='flex items-center justify-between space-x-2'>
          {session.user.data.image ? ( 
            <Image
              className='w-10 h-10 rounded-full ring-1 ring-green-900'
              alt={session.user.data.username}
              src={session.user.data.image}
              quality={85}
              width={10}
              height={10}
            />
          ) : (
            <span className='icon flex items-center px-2'>
              <HiOutlineUserCircle size={22} />
            </span>
          )}
          <h2 className='text-gray-900'>
            <Link href='/'>{session.user.data.username || 'Unknow'}</Link>
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
          <Link className='text-green-900 hover:text-white' href='/auth/login'>
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
