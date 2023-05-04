'use client'
import Image from 'next/image'
import SignIn from '../../../components/form-sign-in'

export default function LoginPage() {  
  const petImage = '/assets/michaelG_V7J3CSg5LY4_1920x2880.jpg'

  return (
      <div className='flex h-screen bg-green-400'>
        <div className='mx-auto mt-20 grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2'>
          <div className='relative overflow-hidden rounded-t-md md:rounded-t-md lg:rounded-l-md lg:rounded-tr-none'>
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
            <div className='py-10 text-center'>
              <SignIn />
            </div>
          </div>
        </div>
    </div>
  )
}
