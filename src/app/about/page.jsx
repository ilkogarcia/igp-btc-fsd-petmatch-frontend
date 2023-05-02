import '../../styles/globals.css'
import Image from 'next/image'
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaRegHeart,
  FaRegClock,
  FaRegHandshake,
} from 'react-icons/fa'

export const metadata = {
  title: 'PetMatch. About us. Adopt a Pet and Save a Life',
  description:
    'The PetMatch platform is designed to make the adoption process as simple and stress-free as possible for both pets and their new families.',
}

export default function AboutPage() {
  const petImage1 = '/assets/pexelsdorte_179221_640x640.jpg'
  const petImage2 = '/assets/pexels_davidbrown_13993706_640x640.jpg'

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
            src={petImage1}
            quality={85}
            priority
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* our story */}
      <div className='mx-auto my-40 w-3/5'>
        <div className='flex flex-col text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>Our Story</span>
            <h1 className='text-6xl font-extrabold text-gray-600'>
              We aim to make a change
            </h1>
          </div>
          <div className='flex flex-col space-y-8 text-ellipsis text-left text-lg italic text-gray-400 antialiased'>
            <p>
              PetMatch was founded in 2015 by a group of animal lovers who were
              passionate about finding homes for pets in need. After seeing the
              number of animals in shelters and the challenges that come with
              pet ownership, they decided to create a platform that would make
              it easier for families to find the perfect pet for their
              lifestyle.
            </p>
            <p>
              Our platform is designed to make the adoption process as simple
              and stress-free as possible for both pets and their new families.
              We carefully select our partner shelters and rescue organizations
              based on their commitment to animal welfare and responsible
              adoption practices. This means that every pet available for
              adoption on PetMatch has received proper medical care, behavioral
              assessments, and training to ensure a smooth transition to their
              new home.
            </p>
            <p>
              We also believe in supporting pet parents throughout their journey
              with their new companion. Our team is always available to provide
              guidance and advice on everything from pet care and training to
              veterinary care and nutrition. We are committed to ensuring that
              every pet parent feels confident and prepared to provide a loving
              and nurturing home for their new family member.
            </p>
            <p>
              By choosing to adopt a pet through PetMatch, you are not only
              saving the life of an animal in need, but you are also making a
              positive impact on the world. Adopting a pet promotes responsible
              pet ownership, reduces the number of animals in shelters and
              rescues, and creates space for more animals in need to find their
              forever homes.
            </p>
            <p className='text-sm'>
              Thank you for choosing PetMatch and joining us in our mission to
              make the world a better place for animals.
            </p>
          </div>
        </div>
      </div>

      {/* our mission  */}
      <div className='mx-auto my-40 grid w-3/5 gap-20 lg:grid-cols-2'>
        <div className='left flex flex-col items-center justify-items-center pt-20'>
          <Image
            className='aspect-square overflow-clip rounded-full shadow'
            alt='This pet is looking for a home'
            src={petImage2}
            quality={85}
            priority
            width={400}
            height={400}
          />
        </div>
        <div className='right flex flex-col space-y-6 text-right'>
          <span className='text-green-600'>Our Mission</span>
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
            <span className='text-green-600'>Our Values</span>
            <h1 className='text-6xl font-extrabold text-gray-600'>
              We live by these
            </h1>
            <p className='text-xl text-gray-400'>
              Our work is guided by a set of core values that reflect{' '}
              <span className='text-green-500'>
                our commitment to animal welfare and responsible pet ownership.
              </span>
            </p>
          </div>
          <div className='grid gap-20 lg:grid-cols-3'>
            <div className='flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
              <span className='icon mb-4 flex items-center rounded-full bg-gray-50 p-4 text-green-600'>
                <FaRegHeart size={25} />
              </span>
              <h2 className='text-xl font-bold text-gray-600'>Compassion</h2>
              <p className='text-md text-gray-500'>
                We care deeply about every animal.
              </p>
            </div>
            <div className='flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
              <span className='icon mb-4 flex items-center rounded-full bg-gray-50 p-4 text-green-600'>
                <FaRegClock size={25} />
              </span>
              <h2 className='text-xl font-bold text-gray-600'>
                Responsiveness
              </h2>
              <p className='text-md text-gray-500'>
                We act quickly to meet needs.
              </p>
            </div>
            <div className='flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
              <span className='icon mb-4 flex items-center rounded-full bg-gray-50 p-4 text-green-600'>
                <FaRegHandshake size={25} />
              </span>
              <h2 className='text-xl font-bold text-gray-600'>Trust</h2>
              <p className='text-md text-gray-500'>
                We are committed to honesty and transparency
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our team */}
      <div className='mx-auto my-40 w-3/5'>
        <div className='flex flex-col text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>Our Team</span>
            <h1 className='text-6xl font-extrabold text-gray-600'>
              Meet these fine folks
            </h1>
            <p className='text-xl text-gray-400'>
              We have a dedicated team of animal welfare experts, software
              engineers, and customer support specialists who are passionate
              about helping pets and families find their perfect matc
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
              <p className='mt-6 text-sm font-bold text-green-500'>
                CFO/FOUNDER
              </p>
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
              <p className='mt-6 text-sm font-bold text-green-500'>
                CEO/FOUNDER
              </p>
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
