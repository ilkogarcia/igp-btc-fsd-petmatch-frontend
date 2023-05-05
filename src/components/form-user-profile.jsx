'use client'

// Import styles sheet
import styles from './styles.module.css'

// Import hooks needed and libraries
import { Formik, Form } from 'formik'
import { useState } from 'react'

// Import components used on this page
import toast from 'react-hot-toast'
import Image from 'next/image'

// Import utilities used
import * as Yup from 'yup'
import { updateOneUser } from '../services/user.services'
import FormikSelect from './formik-select'
import FormikInput from './formik-input'

// Main component
function UserProfile(params) {
  const [formValues, setFormValues] = useState({})

  const [editMode, setEditMode] = useState(false)

  const countries = [ 
    { key: 'Spain', value: '9' },
    { key: 'United States', value: '1' },
    { key: 'United Kingdom', value: '2' },
    { key: 'France', value: '3' },
    { key: 'Germany', value: '4' },
    { key: 'Italy', value: '5' },
    { key: 'Netherlands', value: '6' },
    { key: 'Belgium', value: '7' },
    { key: 'Portugal', value: '8' },
  ]

  const states = [
    { key: 'Andalusia', value: '40' },
    { key: 'Aragon', value: '41' },
    { key: 'Asturias', value: '42' },
    { key: 'Balearic Islands', value: '43' },
    { key: 'Canary Islands', value: '44' },
    { key: 'Cantabria', value: '45' },
    { key: 'Castile and León', value: '46' },
    { key: 'Castile-La Mancha', value: '47' },
    { key: 'Catalonia', value: '48' },
    { key: 'Ceuta', value: '49' }
  ]

  const cities = [
    { key: 'Almería', value: '2' },
    { key: 'Cádiz', value: '3' },
    { key: 'Córdoba', value: '4' },
    { key: 'Granada', value: '5' },
    { key: 'Huelva', value: '6' },
    { key: 'Jaén', value: '7' },
    { key: 'Málaga', value: '8' },
    { key: 'Seville', value: '9' },
    { key: 'Huesca', value: '10' },
    { key: 'Teruel', value: '11' },
    { key: 'Zaragoza', value: '12' },
    { key: 'Asturias', value: '13' },
    { key: 'Balearic Islands', value: '14' }
  ]

  const initialValues = {
    cityId: '',
    stateProvinceId: '',
    countryId: '',
    username: '',
    email: '',
    profilePicture: '',
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    phoneNumber: '',
    birthday: '',
    gender: '',
  }

  const savedValues = {
    cityId: '2',
    stateProvinceId: '40',
    countryId: '9',
    username: 'ilkogarcia',
    email: 'okli@gmail.com',
    profilePicture: '/assets/blog/authors/ilko.jpeg',
    firstName: 'Ilko',
    lastName: 'Fernández',
    addressLine1: 'Calle de la Palma 73',
    addressLine2: 'Esca. A. Piso 2 Puerta 1',
    postalCode: '37001',
    phoneNumber: '666666666',
    birthday: '2021-09-01',
    gender: 'Male',
  }

  const validationSchema = Yup.object({
    cityId: Yup.string().notRequired(),
    stateProvinceId: Yup.string().notRequired(),
    countryId: Yup.string().notRequired(),
    username: Yup.string()
      .required('Username is required!')
      .matches(
        /^[a-zA-Z0-9-_]*$/,
        'Only alphanumeric characters, hyphens, and underscores are allowed'
      )
      .min(3, 'Must be at least 3 characters!')
      .max(30, 'Must be at most 30 characters!'),
    email: Yup.string()
      .required('Email is required!')
      .email('Invalid email address!'),
    profilePicture: Yup.string().notRequired(),
    firstName: Yup.string()
      .notRequired()
      .matches(
        /^[a-zA-Z\u00C0-\u017F\s]+(?:[-' ][a-zA-Z\u00C0-\u017F\s]+)*$/,
        'Only letters (including accented ones), spaces, hyphens, and apostrophes, with no consecutive special characters'
      ),
    lastName: Yup.string()
      .notRequired()
      .matches(
        /^[a-zA-Z\u00C0-\u017F\s]+(?:[-' ][a-zA-Z\u00C0-\u017F\s]+)*$/,
        'Only letters (including accented ones), spaces, hyphens, and apostrophes, with no consecutive special characters'
      ),
    addressLine1: Yup.string().notRequired(),
    addressLine2: Yup.string().notRequired(),
    postalCode: Yup.string()
      .notRequired()
      .matches(/^\d{5}$/, 'Postal code must be exactly 5 digits'),
    phoneNumber: Yup.string()
      .notRequired()
      .matches(
        /^(?:\+\d{1,3}\s?)?[\d\s\-()]{5,15}$/,
        'Optional country code, digits, spaces, hyphens, and parentheses, between 5 and 15 characters'
      ),
    birthday: Yup.date()
      .notRequired()
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
        'You must be at least 18 years old'
      )
      .min(
        new Date(new Date().setFullYear(new Date().getFullYear() - 100)),
        'Date of birth cannot be more than 100 years ago'
      ),
    gender: Yup.string()
      .oneOf(['Male', 'Female', 'Other', ''], 'Invalid gender')
      .notRequired(),
  })

  // Handle form submission
  async function onSubmit(values) {
    const response = await updateOneUser(values)
    if (response.sucess) {
      toast.success(
        <div>
          <span>User profile updated successfully!</span>
          <span className='block align-baseline text-sm'>
            {response.message}
          </span>
        </div>,
        { duration: 5000 }
      )
    } else {
      toast.error(
        <div>
          <span>Update user profile failed!</span>
          <span className='block align-baseline text-sm'>
            {response.message}
          </span>
        </div>,
        { duration: 5000 }
      )
    }
  }

  // Handle edit mode
  function handleEditMode() {
    setFormValues(savedValues)
    setEditMode(!editMode)
  }

  // Handle reset form
  function handleResetForm() {
    // formik.resetForm()
    setEditMode(false)
  }

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form className='mx-auto mt-8'>
        <div className='flex flex-col sm:grid sm:grid-cols-12 sm:gap-6'>
          {/* left colum */}
          <div className='col-span-4'>
            {/* user image profile */}
            <div className='flex flex-col space-y-4'>
              <Image
                className='square-img rounded-md shadow-md'
                type='file'
                id='profilePicture'
                name='profilePicture'
                src={formValues.profilePicture}
                alt='Picture of the author'
                width={600}
                height={600}
              />
              <p className='mt-2 text-sm text-gray-500'>
                Click on the image to change it
                <span className='mt-2 block align-baseline text-xs text-gray-500'>
                  Max size 1MB
                </span>
                <span className='block align-baseline text-xs text-gray-500'>
                  Recommended size 600x600
                </span>
              </p>
            </div>

            {/* form action buttons */}
            <div className='mx-auto mt-10 flex w-2/3 flex-col gap-4'>
              <button
                type='button'
                id='edit_button'
                disabled={editMode}
                className={styles.edit_button}
                onClick={() => handleEditMode()}
              >
                Edit
              </button>

              <button
                type='submit'
                id='save_button'
                disabled={!editMode}
                className={styles.save_button}
              >
                Save
              </button>

              <button
                type='reset'
                id='cancel_button'
                disabled={!editMode}
                className={styles.cancel_button}
                onClick={() => handleResetForm()}
              >
                Cancel
              </button>
            </div>
          </div>

          {/* right colum */}
          <div className='col-span-8'>
            <div className='flex flex-col sm:grid sm:grid-cols-12 sm:gap-5'>
              {/* firstname */}
              <div className='col-span-12 lg:col-span-5'>
                <FormikInput
                  label='Firstname'
                  name='firstName'
                  type='text'
                  placeholder='e.g. John'
                  disabled={!editMode}
                />
              </div>

              {/* lastname */}
              <div className='col-span-12 md:col-span-7'>
                <FormikInput
                  label='Lastname'
                  name='lastName'
                  type='text'
                  placeholder='e.g. John Doe'
                  disabled={!editMode}
                />
              </div>

              {/* username */}
              <div className='col-span-6 md:col-span-4'>
                <FormikInput
                  label='Username'
                  name='username'
                  type='text'
                  placeholder='e.g. john_doe'
                  disabled={!editMode}
                />
              </div>

              {/* birthday */}
              <div className='col-span-6 md:col-span-4'>
                <FormikInput
                  label='Birthday'
                  name='birthday'
                  type='date'
                  placeholder='Birthday'
                  disabled={!editMode}
                />
              </div>

              {/* gender */}
              <div className='col-span-6 md:col-span-4'>
                <FormikInput
                  label='Gender'
                  name='gender'
                  type='text'
                  placeholder='e.g. Male'
                  disabled={!editMode}
                />
              </div>

              {/* phone number */}
              <div className='col-span-6 md:col-span-4'>
                <FormikInput
                  label='Phone number'
                  name='phoneNumber'
                  type='text'
                  placeholder='e.g. +34 678 987 789'
                  disabled={!editMode}
                />
              </div>

              {/* email */}
              <div className='col-span-12 md:col-span-8'>
                <FormikInput
                  label='Email'
                  name='email'
                  type='email'
                  placeholder='e.g. example@domain.com'
                  disabled={!editMode}
                />
              </div>
                
              {/* address line 1 */}
              <div className='col-span-12'>
                <FormikInput
                  label='Street address'
                  name='addressLine1'
                  type='text'
                  placeholder='e.g. 123 Main St.'
                  disabled={!editMode}
                />
              </div>

              {/* address line 2 */}
              <div className='col-span-12 md:col-span-8'>
                <FormikInput
                  label='Rest of address'
                  name='addressLine2'
                  type='text'
                  placeholder='e.g. Apt. 4B or Suite 200'
                  disabled={!editMode}
                />
              </div>

              {/* postal code */}
              <div className='col-span-6 md:col-span-4'>
                <FormikInput
                  label='Postal/ZIP code'
                  name='postalCode'
                  type='text'
                  placeholder='e.g. 10001'
                  disabled={!editMode}
                />
              </div>

              {/* country */}
              <div className='col-span-6 md:col-span-4'>
                <FormikSelect 
                  label='Country'
                  name='countryId'
                  options={countries}
                  disabled={!editMode}
                />
              </div>

              {/* state */}
              <div className='col-span-6 md:col-span-4'>
              <FormikSelect 
                  label='State or Province'
                  name='stateProvinceId'
                  options={states}
                  disabled={!editMode}
                />
              </div>

              {/* city */}
              <div className='col-span-6 md:col-span-4'>
                <FormikSelect
                  label='City'
                  name='cityId'
                  options={cities}
                  disabled={!editMode}
                />
              </div>

              {/* notes */}
              <div className='col-span-12'>
                <span className='ml-2 text-xs text-gray-400'>
                  Fields marked with an asterisk (
                  <span className='text-rose-400'>*</span>) are mandatory.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default UserProfile
