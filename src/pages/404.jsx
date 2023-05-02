// 404 page
import '../styles/globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundPage() {
  const petImage = '/assets/michaelG_5jsyOKc70UY_1920x2880.jpg'

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
          <div className='mx-auto w-3/4 text-center align-middle'>
            <h1 className='text-4xl font-bold text-gray-800'>
              Page isn&apos;t found! :(
            </h1>
            <p className='mb-8 mt-2 text-gray-500'>
              Sorry, this page is{' '}
              <span className='font-bold text-rose-500'>not found</span> on
              PetMatch.
              <br />
              <span className='font-light italic text-gray-400'>
                Please check the URL or click below to return home.
              </span>
            </p>
            <Link
              className='mx-auto rounded-full bg-rose-500 px-8 py-4 text-lg text-white outline-none ring ring-rose-300 hover:bg-rose-700 active:bg-rose-900'
              href='/'
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
