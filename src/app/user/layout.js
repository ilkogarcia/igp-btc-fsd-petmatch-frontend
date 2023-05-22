'use client'

import '../../styles/globals.css'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

import MenuUser from '@/components/menu-left-users'
import MenuAdmin from '@/components/menu-left-admin'

function UserLayout({ children }) {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/auth/login?callbackUrl=/user')
    },
  })

  return (
    <div className='h-fit min-h-screen bg-white pt-20'>
      {/* page top section  */}
      <div className='mx-auto flex w-10/12 flex-col md:grid md:grid-cols-12'>
        <div className='flex flex-col items-start justify-start space-y-6 md:col-span-3'>
          <MenuUser />
          {session?.user.role === 3 && <MenuAdmin />}
        </div>
        <div className='flex flex-col items-start justify-start md:col-span-9'>
          <span className='text-green-600'>{session?.user.username}</span>
          {children}
        </div>
      </div>
    </div>
  )
}

export default UserLayout
