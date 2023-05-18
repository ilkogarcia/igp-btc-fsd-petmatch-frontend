/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import styles from '../styles.module.css'
import Image from 'next/image'
import { HiXMark } from 'react-icons/hi2'
import { toast } from 'react-hot-toast'

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

import { Formik, Form } from 'formik'
import FormikControl from '../formik-control'
import * as Yup from 'yup'

import { fetchAllSpecies } from '../../services/petSpecie.services'
import { fetchAllBreeds } from '../../services/petBreed.services'
import { fetchAllPetStatuses } from '../../services/petStatus.services'
import { fetchAllShelters } from '../../services/shelter.services'
import { createNewPet, updateOnePet } from '../../services/pet.services'

export default function PetAddEdit({ onClose, selectedPet, isAdd }) {
  const { data: session } = useSession()

  const [src, setSrc] = useState(
    selectedPet?.imageUrl || '/assets/pets-placeholder.png'
  )

  const [species, setSpecies] = useState([])
  const [breeds, setBreeds] = useState([])
  const [statuses, setStatuses] = useState([])
  const [shelters, setShelters] = useState([])

  const loadSpecies = async () => {
    const speciesQuery = {
      filterParams: {
        isActive: 'Ok',
      },
      orderParams: [
        {
          field: 'specieCommonName',
          direction: 'ASC',
        },
      ],
    }
    const res = await fetchAllSpecies(speciesQuery, session?.user?.data.token)
    if (res.sucess) {
      res.data.petSpecies.map((specie) => {
        setSpecies((prev) => [
          ...prev,
          { key: specie.specieCommonName, value: specie.id },
        ])
      })
    } else {
      toast.error(res.message)
    }
  }

  const loadBreeds = async (specieId) => {
    const breedsQuery = {
      filterParams: {
        specieId,
      },
      orderParams: [
        {
          field: 'breedName',
          direction: 'ASC',
        },
      ],
    }
    const res = await fetchAllBreeds(breedsQuery, session?.user?.data.token)
    if (res.sucess) {
      setBreeds([])
      res.data.petBreeds.map((breed) => {
        setBreeds((prev) => [
          ...prev,
          { key: breed.breedName, value: breed.id },
        ])
      })
    } else {
      toast.error(res.message)
    }
  }

  const loadStatuses = async () => {
    const statusesQuery = {
      filterParams: {
      },
      orderParams: [
        {
          field: 'id',
          direction: 'ASC',
        },
      ],
    }
    const res = await fetchAllPetStatuses(statusesQuery, session?.user?.data.token)
    if (res.sucess) {
      res.data.petStatuses.map((status) => {
        setStatuses((prev) => [
          ...prev,
          { key: status.statusName, value: status.id },
        ])
      })
    } else {
      toast.error(res.message)
    }
  }

  const loadShelters = async () => {
    const sheltersQuery = {
      filterParams: {
        countryId: 9
      },
      searchParams: {},
      orderParams: [
        {
          field: 'id',
          direction: 'ASC',
        },
      ],
    }
    const res = await fetchAllShelters(sheltersQuery, session?.user?.data.token)
    if (res.sucess) {
      res.data.shelters.map((shelter) => {
        setShelters((prev) => [
          ...prev,
          { key: shelter.name, value: shelter.id },
        ])
      })
    } else {
      toast.error(res.message)
    }
  }

  useEffect(() => {
    loadSpecies()
    loadBreeds(selectedPet?.specieId || species[0]?.value)
    loadStatuses()
    loadShelters()
  }, [])

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose()
    }
  }

  const initialValues = {
    specieId: selectedPet?.specieId || species[0]?.value,
    breedId: selectedPet?.breedId || breeds[0]?.value,
    shelterId: selectedPet?.shelterId || shelters[0]?.value,
    statusId: selectedPet?.statusId || statuses[0]?.value,
    gender: selectedPet?.gender || 'Other',
    name: selectedPet?.name || '',
    age: selectedPet?.age || '',
    description: selectedPet?.description || '',
    imageUrl: selectedPet?.imageUrl || '',
    vaccinationStatus: selectedPet?.vaccinationStatus || 'Unknown',
    spayedNeutered: selectedPet?.spayedNeutered || false,
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
      .typeError('Age must be a number')
      .integer('Age must be an integer')
      .positive('Age must be a positive number')
      .max(20, 'We dont believe your pet is that old, max age is 20')
      .notRequired(),
    gender: Yup.string()
      .oneOf(['Male', 'Female', 'Other'], 'Invalid gender')
      .notRequired(),
    description: Yup.string().notRequired(),
    imageUrl: Yup.string().url('Invalid url').notRequired(),
    vaccinationStatus: Yup.string()
      .oneOf(
        ['Vaccinated', 'Not Vaccinated', 'Unknown'],
        'Invalid vaccination status'
      )
      .notRequired(),
    spayedNeutered: Yup.boolean()
      .notRequired(),
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
    console.log('Pet ID:', selectedPet.id)
    console.log('Pet values:', values)

    if (isAdd) {
      const res = await createNewPet(values, session?.user?.data.token)
      if (res.sucess) {
        toast.success('Pet added successfully')
      } else {
        toast.error(res.message)
      }
    } else {
      const res = await updateOnePet(values, selectedPet.id, session?.user?.data.token)
      if (res.sucess) {
        toast.success('Pet edited successfully')
      } else {
        toast.error(res.message)
      }
    }
    onClose()
  }

  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 top-0 z-10 h-full w-full bg-gray-500 bg-opacity-25 backdrop-blur-sm'
    >
      <div className='inset-0 top-0 p-5'>
        <div className='mx-auto w-4/5 max-w-screen-lg rounded-xl bg-white p-5'>
          <div className='mx-auto flex w-full items-center justify-between px-6'>
            <h3 className='text-sm font-semibold text-gray-400'>
             {(isAdd) ? 'Add a new pet' : 'Edit pet'}
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
                      onError={() => setSrc('/assets/pets-error.png')}
                    />
                  </div>
                  <div className='flex flex-col md:col-span-8 md:grid md:grid-cols-12 md:gap-4 lg:col-span-6'>
                    <div className='md:col-span-12 lg:col-span-4'>
                      <FormikControl
                        control='select'
                        label='Species'
                        name='specieId'
                        options={species}
                      />
                    </div>
                    <div className='md:col-span-12 lg:col-span-4'>
                      <FormikControl
                        control='select'
                        label='Breed'
                        name='breedId'
                        options={breeds}
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
                        placeholder='e.g. https://placedog.net/500?r'
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
                    <div className='md:col-span-6'>
                      <FormikControl
                        control='select'
                        label='Shelter'
                        name='shelterId'
                        options={shelters}
                      />
                    </div>
                    <div className='md:col-span-6'>
                      <FormikControl
                        control='select'
                        label='Status'
                        name='statusId'
                        options={statuses}
                      />
                    </div>
                    <div className='my-2 md:col-span-12'>
                      <hr className='border-0 bg-gray-200 dark:bg-gray-700' />
                    </div>
                    <div className='md:col-span-12 lg:col-span-8'>
                      <button
                        type='submit'
                        className={`w-full ${styles.save_button}`}
                      >
                        {isAdd ? 'Add' : 'Save'}
                      </button>
                    </div>
                    <div className='md:col-span-12 lg:col-span-4'>
                      <button
                        type='button'
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
