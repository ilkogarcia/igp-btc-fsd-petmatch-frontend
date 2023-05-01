import Link from 'next/link'
import MainMenu from '../mainmenu/MainMenu'
import UserMenu from '../usermenu/UserMenu'

export default function Header() {

  return (
    <header className='mx-auto max-w-screen-xl bg-transparent py-4'>
      <div className='flex items-center space-y-0 px-6 py-5'>
        <div className='flex flex-grow justify-start'>
          <Link className='text-xl font-bold text-white' href='/'>
            🐶 PetMatch.es
          </Link>
        </div>
        <div className='hidden items-center justify-center space-x-6 pl-28 text-base font-medium md:flex md:pl-16'>
          <MainMenu />
        </div>
        <div className='hidden items-center justify-center space-x-6 pl-28 text-base font-medium md:flex md:pl-16'>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
