'use client'
export default function Loading() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='flex flex-col items-center justify-center'>
        <div className='animate-spin'>
          <svg
            className='w-12 h-12 text-white mx-auto'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
             />
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z'
            />
          </svg>
        </div>
        <div className='text-white py-10 text-center text-2xl'>
          <p>One moment please...</p>
          <p>We are verifying your email address.</p>
        </div>
      </div>
    </div>
  )
}
