'use client'
import { TbDogBowl } from 'react-icons/tb'

export default function Error() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <TbDogBowl className='mx-auto h-12 w-12 text-white' />
      </div>
      <div className='py-10 text-center text-2xl text-white'>
        <p className=''>
          Something went wrong while trying to verify your email address.
        </p>
      </div>
    </div>
  )
}
