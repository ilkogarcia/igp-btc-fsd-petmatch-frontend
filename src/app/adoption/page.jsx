/* eslint-disable react-hooks/exhaustive-deps */
'use client'

// Import styles and icons
import styles from '@/components/styles.module.css'
import { TbAlertTriangle } from 'react-icons/tb'

// Import hooks and context
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'

// Import components used in this page
import { Formik, Form } from 'formik'
import FormikControl from '@/components/formik-control'
import UserInfo from '@/components/userInfo'
import PetInfo from '@/components/pets/petInfo'
import Shelter from '@/components/pet-shelter'
import Link from 'next/link'
import toast from 'react-hot-toast'

// Import services and utils
import * as Yup from 'yup'
import { addOneAdoptionApplication } from '@/services/adoption.services'

export default function AdoptionPage() {
  const router = useRouter()

  // Get the pet ID and shelter ID from the URL
  const searchParams = useSearchParams()
  const petId = searchParams.get('petId')
  const shelterId = searchParams.get('shelterId')

  // Get the user session and user ID
  const { data: session } = useSession()
  const userId = session?.user?.id

  // Adoption application form, initial values
  const initialValues = {
    userId,
    petId,
    shelterId,
    statusId: '1',
    applicationDate: new Date(),
    applicationNotes: '',
  }

  // Form validation schema
  const validationSchema = Yup.object({
    userId: Yup.number().integer().positive().required('User ID is required'),
    petId: Yup.number().integer().positive().required('Pet ID is required'),
    shelterId: Yup.number().integer().positive().required('Shelter ID is required'),
    statusId: Yup.number().integer().positive().required('Status ID is required'),
    applicationDate: Yup.date().required('Application date is required'),
    applicationNotes: Yup.string().required('Application notes are required'),
  })

  // Handle form submission
  async function onSubmit(values) {
    const res = await addOneAdoptionApplication(values, session?.user?.token)
    if (res.status) {
      toast.success(
        <div>
          <span>Thanks for submitting your application!</span>
          <span className='block align-baseline text-sm'>
            We will get back to you as soon as possible.
          </span>
        </div>,
        { duration: 3000 }
      )
      router.replace('/')
    } else {
      toast.error(
        <div>
          <span>Sorry, something went wrong.</span>
          <span className='block align-baseline text-sm'>
            {res.message}
          </span>
        </div>,
        { duration: 5000 }
      )
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='mx-auto h-full w-full bg-white pb-40'>
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
                Please verify your contact information so that we can get in
                touch with you regarding your adoption application.
              </p>
            </div>
            <div className='flex flex-col gap-6 lg:flex-row'>
              <UserInfo />
            </div>
            <div className='space-y-2'>
              <p className='text-base text-gray-400'>
                <TbAlertTriangle className='mr-3 inline h-6 w-6 text-yellow-600' />
                If your contact information is incorrect or incomplete, please{' '}
                <Link
                  href='/user/account'
                  className='italic text-green-400 underline underline-offset-2'
                >
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
              <Shelter id={shelterId} />
            </div>
            <div className='space-y-2'>
              <p className='text-base text-gray-400'>
                <TbAlertTriangle className='mr-3 inline h-6 w-6 text-yellow-600' />
                If this is not the pet you are interested in adopting, please{' '}
                <Link
                  href='/pets'
                  className='italic text-green-400 underline underline-offset-2'
                >
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
            <FormikControl
              control='textarea'
              rows='10'
              label='Application Notes'
              name='applicationNotes'
              placeholder='Please write your adoption application here.'
            />
            <p className='text-sm text-gray-400'>
              Before submitting your application, please review the information is accurate and complete. When you are ready, click the submit button to send your application to us for review.
            </p>
            <button
              type='submit'
              id='submit_button'
              className={styles.save_button}
            >
              Submit Application
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}
