import TeamPlayer from '@/components/team-player'
import '../../styles/globals.css'
import Image from 'next/image'
import { FaRegHeart, FaRegClock, FaRegHandshake } from 'react-icons/fa'

export const metadata = {
  title: 'PetMatch. About us. Adopt a Pet and Save a Life',
  description:
    'The PetMatch platform is designed to make the adoption process as simple and stress-free as possible for both pets and their new families.',
}

function AboutPage() {
  // Static images used on the page
  const petImage1 = '/assets/pexelsdorte_179221_640x640.jpg'
  const petImage2 = '/assets/pexels_davidbrown_13993706_640x640.jpg'

  // Teams members data
  const teamPlayers = [
    {
      name: 'Gabriel Ramirez',
      role: 'CEO & Founder',
      picture: '/assets/team/pexels-bruno-salvadori-2269872.jpg',
      socialLinks: {
        twitterUrl: 'https://twitter.com/',
        linkedinUrl: 'https://www.linkedin.com/',
      },
    },
    {
      name: 'Sophia García',
      role: 'COO',
      picture: '/assets/team/pexels-mwabonje-1820575.jpg',
      socialLinks: {
        facebookUrl: 'https://www.facebook.com/',
        linkedinUrl: 'https://www.linkedin.com/',
      },
    },
    {
      name: 'Isabella López',
      role: 'CTO & Co-Founder',
      picture: '/assets/team/pexels-yuri-manei-2766408.jpg',
      socialLinks: {
        facebookUrl: 'https://www.facebook.com/',
        twitterUrl: 'https://twitter.com/',
        linkedinUrl: 'https://www.linkedin.com/',
      },
    },
    {
      name: 'Alexander Davis',
      role: 'Designer',
      picture: '/assets/team/pexels-erik-mclean-4061512.jpg',
      socialLinks: {
        twitterUrl: 'https://twitter.com/',
        linkedinUrl: 'https://www.linkedin.com/',
      },
    },
    {
      name: 'Antonio Johnson',
      role: 'Content Creator',
      picture: '/assets/team/pexels-spencer-selover-428328.jpg',
      socialLinks: {
        twitterUrl: 'https://twitter.com/',
        linkedinUrl: 'https://www.linkedin.com/',
      },
    },
    {
      name: 'Benjamin Martinez',
      role: 'Photographer',
      picture: '/assets/team/pexels-waseem-kahlool-673021.jpg',
      socialLinks: {
        facebookUrl: 'https://www.facebook.com/',
        linkedinUrl: 'https://www.linkedin.com/',
      },
    },
  ]

  return (
    <div className='h-fit bg-white pb-40'>
      {/* main section  */}
      <div className='mx-auto flex w-4/5 flex-col gap-20 pb-20 pt-40 lg:grid lg:grid-cols-12'>
        <div className='flex flex-col space-y-6 lg:col-span-8'>
          <span className='text-green-600'>About Us</span>
          <h2 className='text-5xl font-extrabold text-gray-600 sm:text-6xl md:text-7xl lg:text-8xl'>
            Adopt a Pet and <span className='text-green-600'>Save a Life!</span>
          </h2>
          <p className='text-normal text-gray-400 md:text-lg lg:text-xl'>
            At PetMatch, we understand the importance of the bond between humans
            and animals. We believe that every pet deserves a happy and healthy
            life, and we work tirelessly to make this a reality.
          </p>
          <p className='md:text-normal mt-10 text-sm text-gray-400'>
            Thank you for choosing PetMatch and joining us in our mission to
            make the world a better place for animals.
          </p>
        </div>
        <div className='flex flex-col items-center justify-center lg:col-span-4'>
          <Image
            className='aspect-square overflow-clip rounded-full shadow-lg shadow-black/20 dark:shadow-black/40'
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
      <div className='mx-auto flex w-4/6 py-20'>
        <div className='flex flex-col text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>Our Story</span>
            <h1 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>
              We aim to make a change
            </h1>
          </div>
          <div className='flex flex-col space-y-8 text-ellipsis text-left text-normal md:text-lg lg:text-xl italic text-gray-400 antialiased'>
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
      <div className='mx-auto flex flex-col w-4/5 gap-20 pb-20 lg:grid lg:grid-cols-12'>
        <div className='flex flex-col items-center justify-center lg:col-span-4'>
          <Image
            className='aspect-square overflow-clip rounded-full shadow-lg shadow-black/20 dark:shadow-black/40'
            alt='This pet is looking for a home'
            src={petImage2}
            quality={85}
            priority
            width={400}
            height={400}
          />
        </div>
        <div className='flex flex-col space-y-6 text-center lg:text-right lg:col-span-8'>
          <span className='text-green-600'>Our Mission</span>
          <h1 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>Our Mision</h1>
          <p className='text-normal md:text-lg lg:text-xl text-gray-400'>
            Our mission at PetMatch is to connect loving families with pets in
            need, while promoting responsible pet ownership and reducing the
            number of animals in shelters.
          </p>
        </div>
      </div>

      {/* our values */}
      <div className='mx-auto flex w-4/6 py-20'>
        <div className='flex flex-col text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>Our Values</span>
            <h1 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>
              We live by these
            </h1>
            <p className='text-normal md:text-lg lg:text-xl text-gray-400'>
              Our work is guided by a set of core values that reflect{' '}
              <span className='text-green-500'>
                our commitment to animal welfare and responsible pet ownership.
              </span>
            </p>
          </div>
          <div className='mx-auto grid gap-10 lg:grid-cols-12'>
            <div className='col-span-4 flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
              <span className='icon mb-4 flex items-center rounded-full bg-gray-50 p-4 text-green-600'>
                <FaRegHeart size={25} />
              </span>
              <h2 className='text-xl font-bold text-gray-600'>Compassion</h2>
              <p className='text-md text-gray-500'>
                We care deeply about every animal.
              </p>
            </div>
            <div className='col-span-4 flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
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
            <div className='col-span-4 flex cursor-pointer flex-col items-center justify-items-center text-center transition duration-500 hover:scale-125'>
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
      <div className='mx-auto flex w-4/6 pt-20'>
        <div className='flex flex-col text-center'>
          <div className='mb-12 space-y-6'>
            <span className='text-green-600'>Our Team</span>
            <h1 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>
              Meet these fine folks
            </h1>
            <p className='text-normal md:text-lg lg:text-xl text-gray-400'>
              We have a dedicated team of animal welfare experts, software
              engineers, and customer support specialists who are passionate
              about helping pets and families find their perfect matc
            </p>
          </div>
          <div className='grid gap-20 lg:grid-cols-3'>
            {teamPlayers.map((player, index) => (
              <TeamPlayer
                key={index}
                name={player.name}
                role={player.role}
                picture={player.picture}
                socialLinks={player.socialLinks}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
