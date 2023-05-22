import Link from 'next/link'
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandTwitter,
  TbBrandYoutube,
} from 'react-icons/tb'

const SocialNetworks = () => {
  return (
    <div className='flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 md:justify-between'>
      <div className='mr-12 hidden md:block'>
        <span className='text-xs text-gray-600 dark:text-gray-400 md:text-sm lg:text-base'>
          Get connected with us on social networks:
        </span>
      </div>

      <div className='flex justify-center space-x-6 text-neutral-600 dark:text-neutral-200'>
        <Link href='#' className=''>
          <TbBrandFacebook className='h-6 w-6' />
        </Link>
        <Link href='#' className=''>
          <TbBrandInstagram className='h-6 w-6' />
        </Link>
        <Link href='#' className=''>
          <TbBrandTwitter className='h-6 w-6' />
        </Link>
        <Link href='#' className=''>
          <TbBrandYoutube className='h-6 w-6' />
        </Link>
      </div>
    </div>
  )
}

export default SocialNetworks
