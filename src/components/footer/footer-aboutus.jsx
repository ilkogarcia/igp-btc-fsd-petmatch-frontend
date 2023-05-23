import Link from 'next/link'
import { TbPaw } from 'react-icons/tb'

const FooterAboutUs = () => {
  return (
    <div className='flex flex-col gap-4 items-center justify-center text-center md:flex-row lg:flex-col md:items-start'>
      {/* logo */}
      <div className='flex flex-row space-x-2 md:text-left md:justify-start md:justify-items-start'>
        <TbPaw className='text-gray-400 min-w-min' size={25} />
        <Link className='text-xl font-semibold text-gray-400' href='/'>
          PetMatch
        </Link>
      </div>
      <div className='flex flex-col w-3/4 md:w-full text-center md:text-left md:justify-start md:justify-items-start'>
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
