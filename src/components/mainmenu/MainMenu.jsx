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
  }
]

export default function MainMenu() {
  return (
    <nav>
      <ul className='flex list-none gap-8'>
        {mainMenu.map(({ label, route }) => (
          <li key={route}>
            <Link className='text-green-500' href={route}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
