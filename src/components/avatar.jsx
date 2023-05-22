'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineUserCircle } from 'react-icons/hi2'

const Avatar = () => {
  const { data: session } = useSession()

  return (
    <>
      <Link href='/user' className='flex items-center space-x-2'>
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.username}
            width={32}
            height={32}
            className='rounded-full border border-gray-400'
          />
        ) : (
          <span className='icon text-gray-600'>
            <HiOutlineUserCircle size={32} />
          </span>
        )}
        <span className='icon items-center text-gray-600'>
          {session.user.username || 'Unknow'}
        </span>
      </Link>
    </>
  )
}

export default Avatar
