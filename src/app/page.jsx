'use client'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri'
import PetList from '@/components/pet-list'

export default function HomePage() {
  const { data: session } = useSession()
  const petImage = '/assets/michaelG_kpbHRhlSHHA_1920x2880.jpg'

  return (
    <main className='relative'>
      <div className='flex w-full flex-col content-center justify-center bg-green-400 py-48'>
        <div className='mx-auto flex w-4/5 flex-col text-center'>
          <h1 className='leading-12 sm:leading-15 md:leading-19 lg:leading-26 text-center text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl'>
            Find your new
            <span className='block bg-gradient-to-br from-green-600 to-green-800 bg-clip-text align-baseline text-transparent'>
              best friend today!
            </span>
          </h1>
        </div>
        <div className='mx-auto mt-8 flex w-4/5 flex-col text-center'>
          <p className='pb-10 text-center text-lg leading-normal tracking-wide text-green-950 md:text-xl md:leading-normal lg:text-2xl lg:leading-9 lg:tracking-tight'>
            <span>
              Let PetMatch's AI algorithm help you find the perfect pet for your
              lifestyle!
            </span>
          </p>
        </div>
        {session?.user === undefined ? (
          <div className='mx-auto mt-10 w-4/5 bg-green-400 text-center'>
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

      {/* Who We Are */}
      <div className='flex w-full bg-white py-10'>
        <div className='mx-auto my-40 flex w-4/5 flex-col gap-20 lg:grid lg:grid-cols-12'>
          <div className='flex flex-col space-y-6 text-left lg:col-span-8'>
            <span className='text-green-600'>Who We Are</span>
            <h2 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>
              We are a trusted intermediary for safe and successful pet
              adoptions.
            </h2>
            <p className='text-base text-gray-400 md:text-lg lg:text-xl'>
              At PetMatch, we believe in making the pet adoption process easier,
              safer, and more reliable. Our AI algorithm uses advanced data
              analysis to match pets with potential adopters based on their
              specific needs and preferences. We work with shelters and rescue
              organizations throughout Europe to ensure that all pets find their
              forever homes with loving families. With PetMatch, you can trust
              that your new furry friend will be the perfect fit for your
              lifestyle and home.
            </p>
            <Link
              className='w-fit rounded-full bg-green-500 px-6 py-3 text-lg text-white outline-none ring ring-green-300 hover:bg-green-700 active:bg-green-900'
              href='/about'
            >
              Learn More About Us!
            </Link>
          </div>
          <div className='flex flex-col h-full col-span-4 lg:col-span-4 items-center justify-start lg:mt-20'>
            <Image
              className='hidden lg:block overflow-clip rounded-md shadow-md shadow-black/10 dark:shadow-black/20'
              alt='This pet is looking for a home'
              src={petImage}
              quality={85}
              priority
              width={640}
              height={480}
            />
          </div>
        </div>
      </div>

      {/* Adoptable pets */}
      <div className='flex w-full flex-col py-40'>
        <div className='mx-auto flex w-4/5 flex-col space-y-6 text-center'>
          <span className='text-gray-50'>Adoptable pets</span>
          <h2 className='text-4xl font-extrabold text-gray-700 sm:text-5xl md:text-6xl lg:text-7xl'>
            One of these pets could be your new best friend!
          </h2>
        </div>
        <div className='mt-10 flex flex-wrap justify-center gap-10'>
          <PetList count={3} />
        </div>
        <div className='mx-auto mt-8 flex w-4/5 flex-col space-y-6 text-center'>
          <p className='text-base text-gray-50 md:text-lg lg:text-xl'>
            We have many more pets available for adoption. Click the button
            below to see them all!
          </p>
          <Link
            className='w-fit self-center rounded-full bg-white px-6 py-3 text-lg text-gray-700 outline-none ring ring-gray-300 hover:bg-gray-700 hover:text-white active:bg-gray-900'
            href='/pets'
          >
            Find Your Perfect Furry Match!
          </Link>
        </div>
      </div>

      {/* Adoption Process Section */}
      <div className='flex w-full bg-white py-10'>
        <div className='mx-auto flex w-4/5 flex-col py-40 text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>Our Adoption Process</span>
            <h2 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>
              Find your perfect match in just a few easy steps
            </h2>
            <p className='text-base text-gray-400 md:text-lg lg:text-xl'>
              PetMatch's adoption process is designed to{' '}
              <span className='text-green-500'>
                be simple, safe, and stress-free.
              </span>
            </p>
          </div>
          <div className='grid gap-20 lg:grid-cols-3'>
            <div className='flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
              <span className='icon mb-4 flex items-center rounded-full bg-gray-50 p-4 text-green-600'>
                <RiNumber1 size={25} />
              </span>
              <h2 className='text-xl font-bold text-gray-600'>
                Create your profile
              </h2>
              <p className='text-md text-gray-500'>
                Answer a few questions about your lifestyle and home
                environment.
              </p>
            </div>
            <div className='flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
              <span className='icon mb-4 flex items-center rounded-full bg-gray-50 p-4 text-green-600'>
                <RiNumber2 size={25} />
              </span>
              <h2 className='text-xl font-bold text-gray-600'>
                Let the AI search for you
              </h2>
              <p className='text-md text-gray-500'>
                Our AI algorithm will suggest the best pet matches for you.
              </p>
            </div>
            <div className='flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
              <span className='icon mb-4 flex items-center rounded-full bg-gray-50 p-4 text-green-600'>
                <RiNumber3 size={25} />
              </span>
              <h2 className='text-xl font-bold text-gray-600'>We conect you</h2>
              <p className='text-md text-gray-500'>
                We connect you with the shelter or rescue organization to start
                the adoption process.
              </p>
            </div>
          </div>
          <div className='mx-auto mt-8 flex w-4/5 flex-col space-y-6 text-center'>
            <p className='text-base text-gray-400 md:text-lg lg:text-xl'>
              We also provide ongoing support throughout the adoption process,
              from legal advice to specialized logistic services, as well as
              resources to help you and your new pet adjust to your new life
              together.
            </p>
            <Link
              className='w-fit self-center rounded-full bg-green-500 px-6 py-3 text-lg text-white outline-none ring ring-green-300 hover:bg-green-700 active:bg-green-900'
              href='/'
            >
              Start Your Adoption Process Now!
            </Link>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className='flex w-full flex-col py-40'>
        <div className='mx-auto flex w-4/5 flex-col space-y-6 text-center'>
          <span className='text-gray-50'>Success Stories</span>
          <h2 className='text-4xl font-extrabold text-gray-700 sm:text-5xl md:text-6xl lg:text-7xl'>
            See how PetMatch has changed lives for pets and families
          </h2>
        </div>
        <div className='mx-auto mt-10 grid w-4/5 gap-10 lg:grid-cols-12'>
          <div className='col-span-4 overflow-clip rounded-xl border border-gray-200 bg-white p-5 shadow-md shadow-black/10 dark:shadow-black/20'>
            <p className='text-md mb-4 font-bold text-gray-600'>
              A Second Chance <span className='text-green-600'>for Max</span>
            </p>
            <p className='text-sm text-gray-400'>
              Max had been bounced around from home to home before finding his
              forever family on PetMatch. Now, he's thriving in his new home and
              has even become a therapy dog, bringing joy and comfort to people
              in need.
            </p>
          </div>

          <div className='col-span-4 overflow-clip rounded-xl border border-gray-200 bg-white p-5 shadow-md shadow-black/10 dark:shadow-black/20'>
            <p className='text-md mb-4 font-bold text-gray-600'>
              Katie and Shadow:{' '}
              <span className='text-green-600'>A Match Made in Heaven!</span>
            </p>
            <p className='text-sm text-gray-400'>
              Katie had been searching for the perfect dog to adopt for months,
              but nothing seemed to click. That was until she met Shadow, a
              sweet and playful pup with a heart of gold. Now, Katie and Shadow
              are inseparable and spend their days exploring new parks and
              cuddling up on the couch together.
            </p>
          </div>

          <div className='col-span-4 overflow-clip rounded-xl border border-gray-200 bg-white p-5 shadow-md shadow-black/10 dark:shadow-black/20'>
            <p className='text-md mb-4 font-bold text-gray-600'>
              The Jones Family{' '}
              <span className='text-green-600'>Finds Their Forever Cat</span>
            </p>
            <p className='text-sm text-gray-400'>
              The Jones family had always wanted a cat, but they never expected
              to find the perfect one on PetMatch. But when they came across a
              little black and white kitten named Luna, they knew she was the
              one. Now, Luna has become a beloved member of the family and
              brings joy to their lives every day.
            </p>
          </div>

          <div className='col-span-4 overflow-clip rounded-xl border border-gray-200 bg-white p-5 shadow-md shadow-black/10 dark:shadow-black/20'>
            <p className='text-md mb-4 font-bold text-gray-600'>
              From Shelter to Showstopper:{' '}
              <span className='text-green-600'>The Story of Bella</span>
            </p>
            <p className='text-sm text-gray-400'>
              Bella was just another dog in a crowded shelter until she was
              discovered by a loving couple on PetMatch. With their help, Bella
              has blossomed into a confident and well-behaved pup who loves
              showing off her tricks at the local dog park.
            </p>
          </div>

          <div className='col-span-4 overflow-clip rounded-xl border border-gray-200 bg-white p-5 shadow-md shadow-black/10 dark:shadow-black/20'>
            <p className='text-md mb-4 font-bold text-gray-600'>
              Sophie and Lily:{' '}
              <span className='text-green-600'>The Best of Friends</span>
            </p>
            <p className='text-sm text-gray-400'>
              Sophie was feeling lonely after her longtime feline companion
              passed away, but she wasn't sure if she was ready for another cat.
              That was until she met Lily, a sweet and affectionate kitten who
              stole her heart. Now, Sophie and Lily are the best of friends and
              keep each other company during the long winter months.
            </p>
          </div>

          <div className='col-span-4 overflow-clip rounded-xl border border-gray-200 bg-white p-5 shadow-md shadow-black/10 dark:shadow-black/20'>
            <blockquote className='mb-8 text-xl text-gray-600'>
              "We are proud of the thousands of successful adoptions that have
              happened through PetMatch. From dogs and cats to rabbits and
              birds, we have helped families find their perfect furry match".
            </blockquote>
            <Link href='/'>Read More...</Link>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className='flex w-full bg-white py-10'>
        <div className='mx-auto flex w-4/5 flex-col py-40 text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>Get in Touch</span>
            <h2 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>
              We're always here to help
            </h2>
            <p className='text-base text-gray-400 md:text-lg lg:text-xl'>
              Do you have questions or need assistance with your adoption
              process?{' '}
              <span className='text-green-500'>
                Our customer support team is available to help you every step of
                the way. Contact us by phone, email, or live chat and we'll be
                happy to assist you."
              </span>
            </p>
          </div>
          <Link
            className='w-fit self-center rounded-full bg-green-500 px-6 py-3 text-lg text-white outline-none ring ring-green-300 hover:bg-green-700 active:bg-green-900'
            href='/contact'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
