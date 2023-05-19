/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import styles from '../styles.module.css'
import { HiXMark } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { fetchAllSpecies } from '@/services/petSpecie.services'
import { Formik, Form } from 'formik'
import FormikControl from '../formik-control'

export default function PetFilter({ onClose, onFilterChange }) {
  // Get the user's session and token
  const { data: session } = useSession()
  const userToken = session?.user?.token || null

  // Elements to be rendered on the form select input controls
  const [species, setSpecies] = useState([])

  useEffect(() => {
    const bodyRequest = {
      filterParams: {
        isActive: 'Ok',
      },
      orderParams: [
        {
          field: 'specieCommonName',
          direction: 'DESC',
        },
      ],
    }
    async function loadSpecies() {
      const species = [{ key: '...', value: '' }]
      const res = await fetchAllSpecies(bodyRequest, userToken)
      if (res.sucess) {
        const petSpecies = res.data.petSpecies
        petSpecies.forEach((specie) => {
          species.push({ key: specie.specieCommonName, value: specie.id })
        })
        setSpecies(species)
      }
    }
    loadSpecies()
  }, [])

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose()
    }
  }

  const checkboxOptions = [{ key: 'Available for adoption', value: '1' }]
  const initialValues = {
    specie: '',
    checkboxOption: ['1'],
  }

  async function onSubmit(values) {
    // form the species condition for the filter
    const selectedSpecie = species.find(
      ({ value }) => value == values.specie
    ).key
    console.log(selectedSpecie)

    const speciesCondition =
      selectedSpecie !== '...' ? { speciesName: selectedSpecie } : {}
    console.log(speciesCondition)

    // form the status condition for the filter
    const statusCondition =
      (values.checkboxOption.length > 0) ? { petStatus: checkboxOptions[0].key } : {}
    console.log(statusCondition)

    const newFilter = {
      ...speciesCondition,
      ...statusCondition
    }

    onFilterChange(newFilter)
    onClose()
  }

  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 top-0 z-10 h-full w-full bg-gray-500 bg-opacity-25 backdrop-blur-sm'
    >
      <div className='inset-0 top-0 p-5'>
        <div className='mx-auto w-4/5 rounded-xl bg-white p-5'>
          <div className='mx-auto flex w-full items-center justify-between px-6'>
            <h1>Filter</h1>
            <HiXMark
              size={25}
              className='h-7 w-7 cursor-pointer transition-all hover:scale-110'
              onClick={onClose}
            />
          </div>

          <div className='mx-auto w-full p-5'>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className='grid grid-cols-12 gap-2'>
                <div className='col-span-12'>
                  <FormikControl
                    control='select'
                    label='Species'
                    name='specie'
                    options={species}
                  />
                </div>
                <div className='col-span-12'>
                  <FormikControl
                    control='checkbox'
                    label='Status'
                    name='checkboxOption'
                    options={checkboxOptions}
                  />
                </div>
                <div className='col-span-12 my-2'>
                  <hr className='border-0 bg-gray-200 dark:bg-gray-700' />
                </div>
                <div className='col-span-12 md:col-span-8'>
                  <button
                    type='submit'
                    id='save_button'
                    className={`w-full ${styles.save_button}`}
                  >
                    Filter
                  </button>
                </div>
                <div className='col-span-12 md:col-span-4'>
                  <button
                    type='reset'
                    id='cancel_button'
                    className={`w-full ${styles.cancel_button}`}
                    onClick={() => onClose()}
                  >
                    Cancel
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
