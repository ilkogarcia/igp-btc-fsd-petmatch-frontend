/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import styles from '../styles.module.css'
import { HiXMark } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import FormikControl from '../formik-control'
import * as Yup from 'yup'
import Image from 'next/image'

export default function PetAdd({ onClose, selectedPet }) {
  const [src, setSrc] = useState(
    selectedPet?.imageUrl || '/assets/pets-placeholder.png'
  )

  useEffect(() => {
    console.log('Selected pet', selectedPet)
  }, [])

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose()
    }
  }

  const initialValues = {
    specieId: selectedPet?.specieId || '',
    breedId: selectedPet?.breedId || '',
    shelterId: selectedPet?.shelterId || '',
    statusId: selectedPet?.statusId || '',
    gender: selectedPet?.gender || '',
    name: selectedPet?.name || '',
    age: selectedPet?.age || '',
    description: selectedPet?.description || '',
    imageUrl: selectedPet?.imageUrl || '',
    vaccinationStatus: selectedPet?.vaccinationStatus || '',
    spayedNeutered: selectedPet?.spayedNeutered || '',
  }

  const validationSchema = Yup.object({
    specieId: Yup.number()
      .typeError('Not a number type')
      .integer('Must be an integer')
      .positive('Must be a positive number')
      .required('Required'),
    breedId: Yup.number()
      .typeError('Not a number type')
      .integer('Must be an integer')
      .positive('Must be a positive number')
      .required('Required'),
    shelterId: Yup.number()
      .typeError('Not a number type')
      .integer('Must be an integer')
      .positive('Must be a positive number')
      .required('Required'),
    statusId: Yup.number()
      .typeError('Not a number type')
      .integer('Must be an integer')
      .positive('Must be a positive number')
      .required('Required'),
    name: Yup.string()
      .required('Name is required')
      .matches(
        /^[a-zA-Z\u00C0-\u017F\s]+(?:[-' ][a-zA-Z\u00C0-\u017F\s]+)*$/,
        'Only letters (including accented ones), spaces, hyphens, and apostrophes, with no consecutive special characters'
      ),
    age: Yup.number()
      .integer('Age must be an integer')
      .positive('Age must be a positive number')
      .max(20, 'We dont believe your pet is that old, max age is 20')
      .notRequired(),
    gender: Yup.string()
      .oneOf(['Male', 'Female', 'Other', ''], 'Invalid gender')
      .notRequired(),
    description: Yup.string().notRequired(),
    imageUrl: Yup.string().notRequired(),
    vaccinationStatus: Yup.array().required('Required'),
    spayedNeutered: Yup.array().required('Required'),
  })

  const genderOptions = [
    { key: 'Male', value: 'Male' },
    { key: 'Female', value: 'Female' },
    { key: 'Other', value: 'Other' },
  ]

  const vaccinationStatusOptions = [
    { key: 'Vaccinated', value: 'Vaccinated' },
    { key: 'Not Vaccinated', value: 'Not Vaccinated' },
    { key: 'Unknown', value: 'Unknown' },
  ]

  const spayedNeuteredOptions = [
    { key: 'Yes', value: true },
    { key: 'No', value: false },
  ]

  async function onSubmit(values) {
    console.log('PetAdd onSubmit', values)
    onClose()
  }

  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 top-0 z-10 h-full w-full bg-gray-500 bg-opacity-25 backdrop-blur-sm'
    >
      <div className='inset-0 top-0 p-5'>
        <div className='mx-auto w-4/5 rounded-xl bg-white p-5 max-w-screen-lg'>
          <div className='mx-auto flex w-full items-center justify-between px-6'>
            <h3 className='text-sm font-semibold text-gray-400'>
              Add a new pet
            </h3>
            <HiXMark
              size={25}
              className='h-7 w-7 cursor-pointer transition-all hover:scale-110'
              onClick={onClose}
            />
          </div>

          <div className='mx-auto w-full p-5'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              enableReinitialize
            >
              <Form>
                <div className='flex flex-col md:grid md:grid-cols-12 md:gap-4'>
                  <div className='md:col-span-4 lg:col-span-6'>
                    <Image
                      src={src}
                      alt='Pet image'
                      width={500}
                      height={500}
                      className='rounded-md border-2 border-gray-300 shadow-md'
                      placeholder='blur'
                      blurDataURL='/assets/pets-placeholder.png'
                      onError={() => setSrc('/assets/image-error.png')}
                    />
                  </div>
                  <div className='flex flex-col md:col-span-8 md:grid md:grid-cols-12 md:gap-4 lg:col-span-6'>
                    <div className='md:col-span-12 lg:col-span-4'>
                      <FormikControl
                        control='input'
                        label='Species'
                        name='specieId'
                      />
                    </div>
                    <div className='md:col-span-12 lg:col-span-4'>
                      <FormikControl
                        control='input'
                        label='Breed'
                        name='breedId'
                      />
                    </div>
                    <div className='md:col-span-12 lg:col-span-4'>
                      <FormikControl
                        control='select'
                        label='Gender'
                        name='gender'
                        options={genderOptions}
                      />
                    </div>
                    <div className='md:col-span-12'>
                      <FormikControl
                        control='input'
                        label='Image URL'
                        name='imageUrl'
                        type='text'
                        placeholder='e.g. https://source.unsplash.com/random/300x300/?dog&sig=1'
                      />
                    </div>
                    <div className='md:col-span-9'>
                      <FormikControl
                        control='input'
                        label='Name'
                        name='name'
                        type='text'
                        placeholder='e.g. Popeye'
                      />
                    </div>
                    <div className='md:col-span-3'>
                      <FormikControl
                        control='input'
                        label='Age'
                        name='age'
                        placeholder='e.g. 6'
                      />
                    </div>
                    <div className='md:col-span-12'>
                      <FormikControl
                        control='textarea'
                        label='Description'
                        name='description'
                        rows='3'
                        placeholder='e.g. Lorem ipsum dolor...'
                      />
                    </div>
                    <div className='md:col-span-8'>
                      <FormikControl
                        control='select'
                        label='Vaccination'
                        name='vaccinationStatus'
                        options={vaccinationStatusOptions}
                      />
                    </div>
                    <div className='md:col-span-4'>
                      <FormikControl
                        control='select'
                        label='Neutered'
                        name='spayedNeutered'
                        options={spayedNeuteredOptions}
                      />
                    </div>
                    <div className='md:col-span-8'>
                      <FormikControl
                        control='input'
                        label='Shelter'
                        name='shelterId'
                      />
                    </div>
                    <div className='md:col-span-4'>
                      <FormikControl
                        control='input'
                        label='Status'
                        name='statusId'
                      />
                    </div>
                    <div className='my-2 md:col-span-12'>
                      <hr className='border-0 bg-gray-200 dark:bg-gray-700' />
                    </div>
                    <div className='md:col-span-12 lg:col-span-8'>
                      <button
                        type='submit'
                        id='save_button'
                        className={`w-full ${styles.save_button}`}
                      >
                        Add
                      </button>
                    </div>
                    <div className='md:col-span-12 lg:col-span-4'>
                      <button
                        type='reset'
                        id='cancel_button'
                        className={`w-full ${styles.cancel_button}`}
                        onClick={() => onClose()}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
