import Link from 'next/link'
import MainMenu from '../mainmenu/MainMenu'
import UserMenu from '../usermenu/UserMenu'

export default function Header () {
  return (
    <header className='mx-auto grid max-w-fit items-center justify-between py-2 lg:grid-cols-4'>
      <div className='flex'>
        <h1 className='text-xl font-extrabold text-gray-900'>
          <Link href='/'>
            🐶 PetMatch.es
          </Link>
        </h1>
      </div>
      <div className='flex'>
        <MainMenu />
      </div>
      <div className='flex'>
        <input className='rounded-md border-gray-300 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50' type='text' placeholder='Search your next loving friend!' />
      </div>
      <div className='flex'>
        <UserMenu />
      </div>
    </header>
  )
}