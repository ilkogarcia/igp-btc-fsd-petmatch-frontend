'use client'

import { useSearchParams } from 'next/navigation'

import Image from 'next/image'
import Link from 'next/link'
import { verifyEmail } from '../../../services/pet.services'

// Main component
export default async function VerifyEmailPage() {
  const petImage = '/assets/michaelG_TJ0LK4iFgNM_1920x2880.jpg'

  // Get token from url
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  // Verify email fetch request
  const verifyEmailResponse = await verifyEmail(token)

  return (
    <div className='flex min-h-screen flex-col'>
      <div className='mx-auto mt-10 flex h-auto w-3/5 max-w-screen-lg flex-col rounded-md bg-gray-50 md:mt-20 lg:grid lg:grid-cols-12'>
        <div className='relative hidden overflow-hidden md:flex md:h-96 md:rounded-t-md lg:col-span-6 lg:h-auto lg:rounded-l-md lg:rounded-tr-none'>
          <Image
            alt='This pet is looking for a home'
            src={petImage}
            quality={85}
            priority
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />
        </div>
        <div className='flex flex-col justify-evenly lg:col-span-6 lg:h-auto'>
          {verifyEmailResponse.sucess ? (
            <div className='mx-auto w-3/4 text-center align-middle'>
              <h2 className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'>
                Email verified!
              </h2>
              <p className='mb-8 mt-2 text-gray-400 text-sm md:text-base'>
                Your email has been{' '}
                <span className='font-bold text-green-500'>successfully</span>{' '}
                verified.
                <span className='inline-block align-baseline text-gray-400'>
                  {verifyEmailResponse.message}
                </span>
                <span className='inline-block align-baseline font-light italic text-gray-400'>
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
              <h2 className='text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl'>
                Email not verified!
              </h2>
              <p className='mb-8 mt-2 text-gray-500 text-sm md:text-base'>
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
