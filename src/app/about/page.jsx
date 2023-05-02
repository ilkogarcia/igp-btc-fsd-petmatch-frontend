import '../../styles/globals.css'
import Image from 'next/image'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'

export const metadata = {
  title: 'PetMatch. About us. Adopt a Pet and Save a Life',
  description:
    'The PetMatch platform is designed to make the adoption process as simple and stress-free as possible for both pets and their new families.',
}

export default function AboutPage() {
  const petImage = '/assets/pexelsdorte_179221_640x640.jpg'

  return (
    <div className='h-fit bg-white'>
      {/* main section  */}
      <div className='mx-auto my-40 grid w-3/5 gap-20 lg:grid-cols-2'>
        <div className='left flex flex-col space-y-6'>
          <span className='text-green-600'>About Us</span>
          <h1 className='text-6xl font-extrabold text-gray-600'>
            Adopt a Pet and <span className='text-green-600'>Save a Life!</span>
          </h1>
          <p className='text-xl text-gray-400'>
            At PetMatch, we understand the importance of the bond between humans
            and animals. We believe that every pet deserves a happy and healthy
            life, and we work tirelessly to make this a reality.
          </p>
          <p className='mt-10 text-sm text-gray-400'>
            Thank you for choosing PetMatch and joining us in our mission to
            make the world a better place for animals.
          </p>
        </div>
        <div className='right flex flex-col items-center justify-items-center pt-20'>
          <Image
            className='aspect-square overflow-clip rounded-full shadow'
            alt='This pet is looking for a home'
            src={petImage}
            quality={85}
            priority
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* our story */}
      <div className='mx-auto my-40 w-3/5'>
        <div className='flex flex-col space-y-4 text-center'>
          <span className='text-green-600'>About Us</span>
          <h1 className='text-6xl font-extrabold text-gray-600'>Our Story</h1>
          <p className='text-xl text-gray-400'>
            PetMatch was founded in 2015 by a group of animal lovers who were
            passionate about finding homes for pets in need. After seeing the
            number of animals in shelters and the challenges that come with pet
            ownership, they decided to create a platform that would make it
            easier for families to find the perfect pet for their lifestyle.
          </p>
        </div>
      </div>

      {/* our mission  */}
      <div className='mx-auto my-40 grid w-3/5 gap-20 lg:grid-cols-2'>
        <div className='left flex flex-col items-center justify-items-center pt-20'>
          <Image
            className='aspect-square overflow-clip rounded-full shadow'
            alt='This pet is looking for a home'
            src={petImage}
            quality={85}
            priority
            width={400}
            height={400}
          />
        </div>
        <div className='right flex flex-col space-y-6'>
          <span className='text-green-600'>About Us</span>
          <h1 className='text-6xl font-extrabold text-gray-600'>Our Mision</h1>
          <p className='text-xl text-gray-400'>
            Our mission at PetMatch is to connect loving families with pets in
            need, while promoting responsible pet ownership and reducing the
            number of animals in shelters.
          </p>
        </div>
      </div>

      {/* our values */}
      <div className='mx-auto my-40 w-3/5'>
        <div className='flex flex-col text-center'>
          <div className='mb-12 space-y-6'>          
            <span className='text-green-600'>About Us</span>
            <h1 className='text-6xl font-extrabold text-gray-600'>Our Values</h1>
            <p className='text-xl text-gray-400'>
              Our work is guided by a set of core values that reflect{' '}
              <span className='text-green-500'>
                our commitment to animal welfare and responsible pet ownership.
              </span>
            </p>
          </div>
          <div className='grid gap-20 lg:grid-cols-3'>
            <div className='flex flex-col items-center justify-items-center text-center'>
              <h2 className='text-2xl font-bold text-gray-600'>London</h2>
              <p className='text-lg text-gray-500'>
                123 Main Street. London, UK
              </p>
              <p className='mt-6 text-sm text-gray-400'>
                +44 123 456 7890 - london@petmatch.es
              </p>
            </div>
            <div className='flex flex-col items-center justify-items-center text-center'>
              <h2 className='text-2xl font-bold text-gray-600'>Paris</h2>
              <p className='text-lg text-gray-500'>
                123 Main Street. Paris, France
              </p>
              <p className='mt-6 text-sm text-gray-400'>
                +33 123 456 7890 - paris@petmatch.es
              </p>
            </div>
            <div className='flex flex-col items-center justify-items-center text-center'>
              <h2 className='text-2xl font-bold text-gray-600'>Berlin</h2>
              <p className='text-lg text-gray-500'>
                123 Main Street. Berlin, Germany
              </p>
              <p className='mt-6 text-sm text-gray-400'>
                +49 123 456 7890 - berlin@petmatch.es
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our team */}
      <div className='mx-auto my-40 w-3/5'>
        <div className='flex flex-col text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>About Us</span>
            <h1 className='text-6xl font-extrabold text-gray-600'>Our Team</h1>
            <p className='text-xl text-gray-400'>
              We have a dedicated team of animal welfare experts, software
              engineers, and customer support specialists who are passionate about
              helping pets and families find their perfect matc
            </p>
          </div>
          <div className='grid gap-20 lg:grid-cols-3'>
            <div className='flex flex-col items-center justify-items-center text-center'>
              <Image
                className='aspect-square shadow'
                alt='Brandom Smith'
                src='https://loremflickr.com/400/400/man'
                quality={85}
                width={400}
                height={400}
              />
              <p className='mt-6 text-sm font-bold text-green-500'>CTO</p>
              <h3 className='mt-4 text-2xl text-gray-600'>Brandon Smith</h3>
              <div className='mt-8 flex space-x-4'>
                <FaLinkedinIn className='text-xl text-gray-300' />
                <FaTwitter className='text-xl text-gray-300' />
                <FaFacebookF className='text-xl text-gray-300' />
              </div>
            </div>
            
            <div className='flex flex-col items-center justify-items-center text-center'>
              <Image
                className='aspect-square shadow'
                alt='Jhon Smith'
                src='https://loremflickr.com/400/400/man'
                quality={85}
                width={400}
                height={400}
              />
              <p className='mt-6 text-sm font-bold text-green-500'>CFO/FOUNDER</p>
              <h3 className='mt-4 text-2xl text-gray-600'>Miguel Perez</h3>
              <div className='mt-8 flex space-x-4'>
                <FaLinkedinIn className='text-xl text-gray-300' />
                <FaTwitter className='text-xl text-gray-300' />
                <FaFacebookF className='text-xl text-gray-300' />
              </div>
            </div>
            
            <div className='flex flex-col items-center justify-items-center text-center'>
              <Image
                className='aspect-square shadow'
                alt='Jhon Smith'
                src='https://loremflickr.com/400/400/girl'
                quality={85}
                width={400}
                height={400}
              />
              <p className='mt-6 text-sm font-bold text-green-500'>CEO/FOUNDER</p>
              <h3 className='mt-4 text-2xl text-gray-600'>Dalia Gomez</h3>
              <div className='mt-8 flex space-x-4'>
                <FaLinkedinIn className='text-xl text-gray-300' />
                <FaTwitter className='text-xl text-gray-300' />
                <FaFacebookF className='text-xl text-gray-300' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
