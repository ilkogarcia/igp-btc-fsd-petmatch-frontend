'use client'

import { useSearchParams } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { verifyEmail } from '../../../services/PetMatch'

// Main component
export default async function VerifyEmailPage() {
  const petImage = '/assets/michaelG_TJ0LK4iFgNM_1920x2880.jpg'

  // Get token from url
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  // Verify email fetch request
  const verifyEmailResponse = await verifyEmail(token)

  return (
    <div className='flex h-screen bg-green-400'>
      <div className='mx-auto mt-20 grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2'>
        <div className='relative overflow-hidden rounded-l-md'>
          <Image
            alt='This pet is looking for a home'
            src={petImage}
            quality={85}
            priority
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
        <div className='right flex flex-col justify-evenly'>
          {verifyEmailResponse.sucess ? (
            <div className='mx-auto w-3/4 text-center align-middle'>
              <h1 className='text-4xl font-bold text-gray-800'>
                Email verified!
              </h1>
              <p className='mb-8 mt-2 text-gray-400'>
                Your email has been{' '}
                <span className='font-bold text-green-500'>successfully</span>{' '}
                verified.
                <br />
                <span className='text-gray-400'>
                  {verifyEmailResponse.message}
                </span>
                <br />
                <span className='font-light italic text-gray-400'>
                  Click below to log into your account.
                </span>
              </p>
              <Link
                className='mx-auto rounded-full bg-green-500 px-8 py-4 text-lg text-white outline-none ring ring-green-300 hover:bg-green-700 active:bg-green-900'
                href='/auth/login'
              >
                Continue
              </Link>
            </div>
          ) : (
            <div className='mx-auto w-3/4 text-center align-middle'>
              <h1 className='text-4xl font-bold text-gray-800'>
                Email not verified!
              </h1>
              <p className='mb-8 mt-2 text-gray-500'>
                Your email has{' '}
                <span className='font-bold text-rose-500'>not</span> been
                verified.
                <br />
                <span className='text-gray-400'>
                  {verifyEmailResponse.message}
                </span>
                <br />
                <span className='font-light italic text-gray-400'>
                  Please check your email for the verification link.
                </span>
              </p>
              <Link
                className='mx-auto rounded-full bg-rose-500 px-8 py-4 text-lg text-white outline-none ring ring-rose-300 hover:bg-rose-700 active:bg-rose-900'
                href='/'
              >
                Continue
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
