import Link from 'next/link'
import styles from './Header.module.css'
import { Container } from 'postcss'

const mainMenu = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Pets',
  route: '/pets'
}]

const secondaryMenu = [{
  label: 'Login',
  route: '/login'
}, {
  label: 'Register',
  route: '/register'
}]

export default function Header () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {mainMenu.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav>
        <ul className={styles.navigation}>
          {secondaryMenu.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
