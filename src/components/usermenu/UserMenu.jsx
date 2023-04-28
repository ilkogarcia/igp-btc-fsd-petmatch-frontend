import Link from 'next/link'
import { HiUserCircle } from 'react-icons/hi2'

const userMenu = [
  {
    label: 'Login',
    route: '/login',
  },
  {
    label: 'Register',
    route: '/register',
  },
  {
    label: 'Logout',
    route: '/logout',
  },
]

export default function UserMenu() {
  return (
    <div className='mx-auto grid h-fit w-fit lg:grid-cols-2'>
      <div className='left flex'>
        <span className='icon flex items-center px-4'>
            <HiUserCircle size={28} />
        </span>
        <h1 className='text-xl font-extrabold text-gray-900'>
            <Link href='/'> username</Link>
        </h1>
      </div>
      <nav className='right flex'>
        <ul className='flex list-none gap-8'>
          {userMenu.map(({ label, route }) => (
            <li key={route}>
              <Link className='text-green-500' href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
