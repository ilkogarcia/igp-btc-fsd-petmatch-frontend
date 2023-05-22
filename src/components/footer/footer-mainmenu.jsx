import Link from 'next/link'

const mainMenu = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Available pets',
    url: '/pets',
  },
  {
    name: 'About us',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
]

const FooterMainMenu = () => {
  return (
    <div className='flex flex-col text-center text-neutral-600 dark:text-neutral-200 md:text-left'>
      <h6 className='mb-4 flex justify-center font-bold uppercase md:justify-start'>
        Main
      </h6>
      <div className='flex flex-col space-y-2'>
        {mainMenu.map((item, i) => (
          <Link
            key={i}
            className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterMainMenu
