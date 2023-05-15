import Shelter from '@/components/pet-shelter'
import PetInfo from '@/components/pets/petInfo'
import Link from 'next/link'
import { TbAlertTriangle } from 'react-icons/tb'
import UserInfo from '@/components/userInfo'

export default async function AdoptionPage({ searchParams }) {
  const petId = searchParams?.petId
  const petShelterId = searchParams?.petShelterId

  return (
    <div className='h-full bg-white pb-40'>
      <div className='mx-auto flex w-4/5 flex-col space-y-2 pt-40'>
        <span className='text-green-600'>Adoption Application</span>
        <h2 className='text-3xl font-extrabold text-gray-600 sm:text-4xl md:text-5xl lg:text-6xl'>
          Adopt a Pet and <span className='text-green-600'>Save a Life!</span>
        </h2>
        <p className='text-base text-gray-400 md:text-lg lg:text-xl'>
          You are one step closer to adopting a pet! Please read the following
          information carefully before proceeding with your application.
        </p>
      </div>

      <div className='mx-auto mt-10 flex min-h-screen w-4/5 flex-col space-y-12 lg:grid lg:grid-cols-12'>
        {/* Adoption process step 1: Contact information */}
        <div className='col-span-12 flex flex-col space-y-6'>
          <div className='space-y-2'>
            <h3 className='text-2xl font-semibold text-gray-500'>
              Step 1. Verify your contact information.
            </h3>
            <p className='text-lg text-gray-400'>
              Please verify your contact information so that we can get in touch
              with you regarding your adoption application.
            </p>
          </div>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <UserInfo />
          </div>
          <div className='space-y-2'>
            <p className='text-base text-gray-400'>
              <TbAlertTriangle className='inline mr-3 w-6 h-6 text-yellow-600' />
              If your contact information is incorrect or incomplete, please{' '}
              <Link href='/user/account' className='italic text-green-400 underline underline-offset-2'>
                go to your profile page to update your information.
              </Link>
            </p>
          </div>

        </div>

        {/* Adoption process step 2: Pet selection */}
        <div className='col-span-12 flex flex-col space-y-6'>
          <div className='space-y-2'>
            <h3 className='text-2xl font-semibold text-gray-500'>
              Step 2. Confirm your pet selection.
            </h3>
            <p className='text-lg text-gray-400'>
              Please confirm information about the pet that you are interested
              in adopting.
            </p>
          </div>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <PetInfo id={petId} />
            <Shelter id={petShelterId} />
          </div>
          <div className='space-y-2'>
            <p className='text-base text-gray-400'>
              <TbAlertTriangle className='inline mr-3 w-6 h-6 text-yellow-600' />
              If this is not the pet you are interested in adopting, please{' '}
              <Link href='/pets' className='italic text-green-400 underline underline-offset-2'>
                click here to return to the pet search page.
              </Link>
            </p>
          </div>
        </div>

        {/* Adoption process step 3: Aplication notes */}
        <div className='col-span-12 flex flex-col space-y-2'>
          <div className='space-y-2'>
            <h3 className='text-2xl font-semibold text-gray-500'>
              Step 3. Write your adoption application.
            </h3>
            <p className='text-lg text-gray-400'>
              This is your chance to tell us why you'd be a great pet owner.
              Provide personal information, details about your home, your
              veterinarian, and references.
            </p>
          </div>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <p className='text-lg text-gray-400'>
              aquí va un formulario donde el usuario debe rellenar su solicitud
            </p>
          </div>
        </div>

        <div className='col-span-12 flex flex-col'>
          <p className='text-lg text-gray-400'>
            Please review your application to ensure that all information is
            accurate and complete. When you are ready, click the submit button
            to send your application to us for review.
          </p>
        </div>
      </div>
    </div>
  )
}
