'use client'

import '../../styles/globals.css'
import { NextAuthProvider } from '../../providers'
import MenuUser from '@/components/menu-left-users'

function UserLayout({ children }) {
  return (
    <NextAuthProvider>
      <div className='grid h-screen w-screen grid-cols-12 bg-white pb-40 pt-10'>
        <div className='col-span-10 grid px-10'>{children}</div>
        <div className='col-span-2 grid pt-10'>
          <MenuUser />
        </div>
      </div>
    </NextAuthProvider>
  )
}

export default UserLayout
