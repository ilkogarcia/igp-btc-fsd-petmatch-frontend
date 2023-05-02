'use client'
import Link from 'next/link'

const mainMenu = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Pets',
    route: '/pets',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Contact',
    route: '/contact',
  },
  {
    label: 'Blog',
    route: '/blog',
  },
]

export default function MainMenu() {
  return (
    <nav>
      <ul className='flex list-none gap-8'>
        {mainMenu.map(({ label, route }) => (
          <li key={route}>
            <Link className='hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4 text-green-900 hover:text-white' href={route}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
