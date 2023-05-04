'use client'
import ForgotPassword from '@/components/forgotpassword'
import Image from 'next/image'

function forgotPassword() {  
  const petImage = '/assets/michaelG_KuDi137PY4I_1920x2880.jpg'

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
                objectPosition: 'top center',
              }}
            />
          </div>
          <div className='right flex flex-col justify-evenly'>
            <div className='py-10 text-center'>
             <ForgotPassword />
            </div>
          </div>
        </div>
    </div>
  )
}

export default forgotPassword
