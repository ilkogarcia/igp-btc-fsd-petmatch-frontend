import Image from 'next/image'
import Link from 'next/link'

const fetchVerifyEmail = async (token) => {
  // TODO: Remove this timeout when the API is ready
  // console.log(token)
  // await new Promise(resolve => setTimeout(resolve, 1000))
  // TODO: Remove this error when the API is ready
  // throw new Error('API not ready')
  return true
}

export default async function VerifyEmailPage({ params }) {
  const petImage = '/assets/michaelG_TJ0LK4iFgNM_1920x2880.jpg'
  const { token } = params
  const isEmailVerify = await fetchVerifyEmail(token)

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
          {isEmailVerify ? (
            <div className='mx-auto w-3/4 text-center align-middle'>
              <h1 className='text-4xl font-bold text-gray-800'>
                Email verified!
              </h1>
              <p className='mb-6 mt-2 text-gray-400'>
                Your email has been successfully verified.
                <br />
                Click below to log into your account.
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
              <p className='mb-6 mt-2 text-gray-400'>
                Your email has not been verified.
                <br />
                Please check your email for the verification link.
              </p>
              <Link
                className='mx-auto rounded-full bg-green-500 px-8 py-4 text-lg text-white outline-none ring ring-green-300 hover:bg-green-700 active:bg-green-900'
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
