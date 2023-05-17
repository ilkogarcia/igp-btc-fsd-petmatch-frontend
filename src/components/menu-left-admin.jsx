import Link from 'next/link'

const adminMenu = [
  {
    label: 'Dashboard',
    route: '/admin',
  },
  {
    label: 'Pets Management',
    route: '/admin/pets',
  },
  {
    label: 'Shelters Management',
    route: '/admin/shelters',
  },
  {
    label: 'Users Management',
    route: '/admin/users',
  },
  {
    label: 'Settings',
    route: '/admin/settings',
  },
]

function MenuAdmin() {
  return (
    <nav className='hidden md:flex md:flex-col'>
      <h2 className='mb-4 text-xs font-bold text-gray-500 uppercase underline underline-offset-4'>Admin Menu</h2>
      {adminMenu.map(({ label, route }) => (
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

export default MenuAdmin
