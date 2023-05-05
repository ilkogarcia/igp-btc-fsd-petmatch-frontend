'use client'

import '../../styles/globals.css'
import { NextAuthProvider } from '../providers'
import MenuUser from '@/components/menu-left-users'

function UserLayout({ children }) {
  return (
    <NextAuthProvider>
      <div className='flex min-h-fit flex-col bg-white pb-20 pt-10 sm:grid sm:grid-cols-12'>
        <div className='mx-10 flex flex-row sm:col-span-2 sm:grid'>
          <MenuUser />
        </div>
        <div className='mx-10 flex flex-col sm:col-span-10 sm:grid'>
          {children}
        </div>
      </div>
    </NextAuthProvider>
  )
}

export default UserLayout
