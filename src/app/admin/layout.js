'use client'

import '../../styles/globals.css'
import { NextAuthProvider } from '../providers'
import { useSession } from 'next-auth/react'
import MenuUser from '@/components/menu-left-users'
import MenuAdmin from '@/components/menu-left-admin'

function AdminLayout({ children }) {
  const { data: session } = useSession()

  return (
    <NextAuthProvider>
      <div className='h-full min-h-screen bg-white pb-40 pt-20'>
        {/* page top section  */}
        <div className='mx-auto flex w-10/12 flex-col md:grid md:grid-cols-12'>
          <div className='flex flex-col items-start justify-start space-y-6 md:col-span-3'>
            {session?.user?.role === 3 && <MenuAdmin />}
            <MenuUser />
          </div>
          <div className='flex flex-col items-start justify-start md:col-span-9'>
            <span className='text-green-600'>{session?.user?.username}</span>
            {children}
          </div>
        </div>
      </div>
    </NextAuthProvider>
  )
}

export default AdminLayout
