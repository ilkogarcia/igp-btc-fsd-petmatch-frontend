import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function TeamPlayer({
  name,
  role,
  picture,
  socialLinks: { facebookUrl, twitterUrl, linkedinUrl },
}) {
  return (
    <div className='flex flex-col items-center justify-items-center text-center'>
      <Image
        className='aspect-square shadow'
        alt={name}
        src={picture}
        quality={100}
        width={400}
        height={400}
      />
      <p className='mt-6 text-sm font-bold uppercase text-green-500'>
        {role}
      </p>
      <h3 className='mt-4 text-2xl text-gray-600'>{name}</h3>
      <div className='mt-8 flex space-x-4'>
        {facebookUrl && (
          <Link href={facebookUrl}>
            <FaLinkedinIn className='text-xl text-gray-300' />
          </Link>
        )}
        {twitterUrl && (
          <Link href={twitterUrl}>
            <FaTwitter className='text-xl text-gray-300' />
          </Link>
        )}
        {linkedinUrl && (
          <Link href={linkedinUrl}>
            <FaFacebookF className='text-xl text-gray-300' />
          </Link>
        )}
      </div>
    </div>
  )
}

export default TeamPlayer
