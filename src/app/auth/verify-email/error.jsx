'use client'

import { TbDogBowl } from 'react-icons/tb'
import { useEffect } from 'react'

export default function Error ({ error, reset }) {
  useEffect(() => {
    // Log the error
    console.log(error)
  }, [error])
  
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <TbDogBowl className='mx-auto h-12 w-12 text-white' />
      </div>
      <div className='py-10 text-center text-2xl text-white'>
        <p className=''>
          Something went wrong while trying to verify your email address.
        </p>
        <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      </div>
    </div>
  )
}
