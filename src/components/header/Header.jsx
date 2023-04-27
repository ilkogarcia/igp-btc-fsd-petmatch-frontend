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
    label: 'Login',
    route: '/auth/login',
  },
  {
    label: 'Register',
    route: '/auth/register',
  },
]

const Header = () => {
  return (
    <header className='mx-auto flex w-full max-w-4xl items-center justify-between py-3'>
      <h1 className='text-xl font-extrabold text-green-50'>
        <Link href='/'>
          🐶 PetMatch.es
        </Link>
      </h1>
      <nav>
        <ul className='flex list-none gap-8'>
          {mainMenu.map(({ label, route }) => (
            <li key={route}>
              <Link className='text-green-50' href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
