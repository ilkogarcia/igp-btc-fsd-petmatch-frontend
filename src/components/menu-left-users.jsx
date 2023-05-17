import Link from 'next/link'

const userMenu = [
  {
    label: 'My Dashboard',
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
    <nav className='hidden md:flex md:flex-col'>
      <h2 className='mb-4 text-xs font-bold text-gray-500 uppercase underline underline-offset-4'>User Menu</h2>
      {userMenu.map(({ label, route }) => (
        <span key={route} className='mb-2 text-sm md:block md:align-baseline'>
        <Link
          className='hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 text-green-600 hover:text-green-800'
          href={route}
        >
          {label}{' '}
        </Link>
        </span>
      ))}
    </nav>
  )
}

export default MenuUser
