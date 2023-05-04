'use client'

import Link from 'next/link'

const mainMenu = [
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

function MenuUser() {
  return (
    <nav>
      <h2 className='mb-2 text-xl font-bold text-green-600'>Menu</h2>
      {mainMenu.map(({ label, route }) => (
        <p key={route} className='mb-2'>
        <Link
          className='hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 text-green-600 hover:text-green-800'
          href={route}
        >
          {label}
        </Link>
        </p>
      ))}
    </nav>
  )
}

export default MenuUser
