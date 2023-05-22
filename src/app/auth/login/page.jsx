'use client'
import Image from 'next/image'
import SignIn from '../../../components/form-sign-in'

export default function LoginPage() {
  const petImage = '/assets/michaelG_V7J3CSg5LY4_1920x2880.jpg'

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='mx-auto mt-10 md:mt-20 flex h-auto w-3/5 max-w-screen-lg flex-col rounded-md bg-gray-50 lg:grid lg:grid-cols-12'>
        <div className='hidden md:flex md:h-96 relative overflow-hidden md:rounded-t-md lg:col-span-6 lg:h-auto lg:rounded-l-md lg:rounded-tr-none'>
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
          <div className='py-10 text-center'>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  )
}
