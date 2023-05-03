'use client'
import '../styles/globals.css'
import PetCard from '../components/petcard/PetCard'
import Link from 'next/link'
import { useSession } from 'next-auth/react'


export default function HomePage() {
  const { data: session } = useSession()

  return (
    <main className='relative'>
      <div className='mt-48 flex w-full flex-wrap content-center justify-center px-16'>
        <div className='mx-auto w-4/5 text-center'>
          <h1 className='font-headline tracking-snug leading-12 sm:leading-15 md:leading-19 lg:leading-26 pb-6 text-center text-4xl font-black sm:text-5xl md:text-6xl lg:text-8xl'>
            <span className='text-white'>Find your new</span>
            <br className='hidden sm:block' />
            <span className='bg-gradient-to-br from-green-600 to-green-800 bg-clip-text text-transparent'>
              best friend today!
            </span>
          </h1>
        </div>
        <div className='mx-auto mt-10 w-4/5 text-center'>
          <p className='pb-10 text-center text-lg leading-normal tracking-wide text-green-950 md:text-xl md:leading-normal lg:text-2xl lg:leading-9 lg:tracking-tight'>
            <span>
              Register for a PetMatch account, and be part of a growing
              community of pet lovers who are committed to helping animals in
              need.
            </span>
            <br className='hidden md:block' />
            <span>
              Join us today and help make a difference in the lives of animals!
            </span>
          </p>
        </div>
        {session?.user === undefined  ? (
          <div className='mx-auto mt-10 w-4/5 text-center'>
            <Link
              className='mx-auto rounded-full bg-green-500 px-10 py-5 text-lg text-white outline-none ring ring-green-300 hover:bg-green-700 active:bg-green-900'
              href='/auth/register'
            >
              Register now. It's free!
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className='mt-48'>
        <h2 className='mb-12 text-center text-6xl font-extralight text-white'>
          Adoptable Pets
        </h2>
        <div className='mt-10 flex flex-wrap justify-center gap-10'>
          <div className='w-1/4'>
            <PetCard id={19} />
          </div>
          <div className='w-1/4'>
            <PetCard id={2} />
          </div>
          <div className='w-1/4'>
            <PetCard id={13} />
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-screen-xl px-12 pt-16 lg:pt-28 pb-16 md:pb-24'>
        <h2 className='mb-12 text-center text-6xl font-extralight text-white'>
          Happy Tails
        </h2>
        <p className='mx-auto mt-10 text-center text-2xl text-white'>
          Welcome to PetMatch, your go-to platform for adopting a pet and
          changing a life forever. Our mission is to connect animals in need of
          a loving home with caring and responsible pet parents, while also
          promoting responsible pet ownership and animal welfare.
        </p>
      </div>
    </main>
  )
}
