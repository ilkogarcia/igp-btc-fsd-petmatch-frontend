import Link from 'next/link'
import styles from './Header.module.css'

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
    label: 'Login',
    route: '/login',
  },
  {
    label: 'Register',
    route: '/register',
  },
]

export default function Header() {
  return (
    <header
      className={`${styles.header} mx-auto flex w-full max-w-4xl items-center justify-between py-3`}
    >
      <h1 className='text-m font-bold'>🐶 PetMatch.es</h1>
      <nav>
        <ul className={`${styles.navigation} flex list-none gap-8`}>
          {mainMenu.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
