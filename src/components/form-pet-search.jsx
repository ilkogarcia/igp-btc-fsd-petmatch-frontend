'use client'

// Import stylessheet
import styles from './styles.module.css'

// Import hooks used by the component
import { useEffect, useState } from 'react'

// Import components used
import { Formik, Form } from 'formik'
import FormikInput from './formik-input'
import toast from 'react-hot-toast'

// Import services for API calls
import { fetchAllPets } from '@/services/pet.services'

// Inport other libraries
import * as Yup from 'yup'

// Main component
function PetSearch() {
  const [petsList, setPetsList] = useState([])
  console.log(petsList)

  // Load user profile data when component mounts
  useEffect(() => {
    async function loadSomePets() {
      const bodyRequest = {
        filterParams: {
          speciesName: 'Dog',
          petStatus: 'Available for adoption',
          petGender: 'Female',
        },
        orderParams: [
          {
            field: 'updatedAt',
            direction: 'DESC',
          },
        ],
      }

      const res = await fetchAllPets(bodyRequest, 5, 1)
      if (res.success === false) {
        toast.error(
          <div>
            <span>Sorry, we could not find any pets.</span>
            <span className='block align-baseline text-sm'>
              Something went wrong.
            </span>
          </div>,
          { duration: 5000 }
        )
      } else {
        // toast.success(
        //   <div>
        //     <span>Pets found!</span>
        //     <span className='block align-baseline text-sm'>
        //       We found {res.data.pets.length} pets.
        //     </span>
        //   </div>,
        //   { duration: 5000 }
        // )
        setPetsList(res.data.pets)
      }
    }
    loadSomePets()
  }, [])

  // Form validation schema
  const validationSchema = Yup.object({
    specieCommonName: Yup.string()
      .oneOf(['Dog', 'Cat', 'Bird', ''], 'Invalid specie')
      .notRequired(),
    gender: Yup.string()
      .oneOf(['Male', 'Female', 'Other', ''], 'Invalid gender')
      .notRequired(),
  })

  // Handle form submission
  async function onSubmit(values) {
    const bodyRequest = {
      filterParams: {
        speciesName: values.specieCommonName,
        petStatus: 'Available for adoption',
        petGender: values.gender,
      },
      orderParams: [
        {
          field: 'updatedAt',
          direction: 'DESC',
        },
      ],
    }

    const res = await fetchAllPets(bodyRequest, 5, 1)
    if (res.success === false) {
      toast.error(
        <div>
          <span>Sorry, we could not find any pets.</span>
          <span className='block align-baseline text-sm'>
            Something went wrong.
          </span>
        </div>,
        { duration: 5000 }
      )
    } else {
      toast.success(
        <div>
          <span>Pets found!</span>
          <span className='block align-baseline text-sm'>
            We found {res.data.pets.length} pets.
          </span>
        </div>,
        { duration: 5000 }
      )
      setPetsList(res.data.pets)
    }
  }

  return (
    <Formik
      initialValues={{
        specieCommonName: '',
        gender: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form className='flex flex-col space-y-4'>
        {/* specie common name */}
        <div className='flex flex-col justify-between'>
        <FormikInput
          label='Specie common name'
          name='specieCommonName'
          type='text'
          placeholder='e.g. Dog'
        />
        </div>

        {/* gender */}
        <div className='flex flex-col justify-between'>
        <FormikInput
          label='Gender'
          type='text'
          name='gender'
          placeholder='e.g. Male'
        />
        </div>

        {/* send buttons */}
        <div className='w-full mt-10 flex flex-col'>
          <button type='submit' id='find_pet' className={styles.button}>
            Find me a pet!
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default PetSearch
