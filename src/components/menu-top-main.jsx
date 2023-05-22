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
    <ul className='flex list-none gap-2 md:gap-4 lg:gap-8'>
      {mainMenu.map(({ label, route }) => (
        <li key={route}>
          <Link
            className='text-green-900 hover:text-white hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
            href={route}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
