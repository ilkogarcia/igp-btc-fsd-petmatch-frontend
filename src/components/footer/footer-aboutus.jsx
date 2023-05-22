import Link from 'next/link'
import { TbPaw } from 'react-icons/tb'

const FooterAboutUs = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2 text-center md:justify-start md:text-left'>
      {/* logo */}
      <div className='flex items-center space-x-2 text-center md:text-left'>
        <TbPaw className='text-gray-400' size={25} />
        <Link className='text-xl font-semibold text-gray-400' href='/'>
          PetMatch
        </Link>
      </div>
      <div className='mt-4 hidden md:block'>
        <p className='text-sm'>
          We are working to connect through PetMatch, one million homeless pets
          with loving forever homes.
        </p>
        <Link
          className='text-xs font-semibold text-green-400'
          href='/auth/register'
        >
          Will you join us?
        </Link>
      </div>
    </div>
  )
}

export default FooterAboutUs
