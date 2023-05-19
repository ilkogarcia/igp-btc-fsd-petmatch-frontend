/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

// Import styles sheet
import styles from './styles.module.css'

// Import hooks needed and libraries
import { Formik, Form } from 'formik'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

// Import components used on this page
import toast from 'react-hot-toast'
import Image from 'next/image'

// Import utilities used
import * as Yup from 'yup'
import { getOneUser, updateOneUser } from '../services/user.services'
import FormikSelect from './formik-select'
import FormikInput from './formik-input'
import FormikDatePicker from './formik-datepicker'
import {
  fetchAllCountries,
  fetchAllStateProvinces,
  fetchAllCities,
} from '@/services/address.services'

// Main component
function UserProfile(params) {
  const { data: session } = useSession()

  const [formValues, setFormValues] = useState({})
  const [savedValues, setSavedValues] = useState({})
  const [editMode, setEditMode] = useState(false)

  const [countries, setCountries] = useState([])
  const [statesProvices, setStatesProvinces] = useState([])
  const [cities, setCities] = useState([])

  const loadCountries = async () => {
    const res = await fetchAllCountries()
    if (res.sucess) {
      res.data.countries.map((country) => {
        setCountries((prev) => [
          ...prev,
          { key: country.countryName, value: country.id },
        ])
      })
      console.log('Countries loaded:', countries)
    } else {
      toast.error(res.message)
    }
  }

  const loadStatesProvinces = async (countryId) => {
    const res = await fetchAllStateProvinces(countryId, session?.user?.token)
    if (res.sucess) {
      res.data.stateProvinces.map((stateProvince) => {
        setStatesProvinces((prev) => [
          ...prev,
          { key: stateProvince.stateProvinceName, value: stateProvince.id },
        ])
      })
      console.log('States/Provinces loaded:', statesProvices)
    } else {
      toast.error(res.message)
    }
  }

  const loadCities = async (stateProvinceId) => {
    const res = await fetchAllCities(stateProvinceId, session?.user?.token)
    if (res.sucess) {
      res.data.cities.map((city) => {
        setCities((prev) => [...prev, { key: city.cityName, value: city.id }])
      })
      console.log('Cities loaded:', cities)
    } else {
      toast.error(res.message)
    }
  }

  useEffect(() => {
    const loadUserProfile = async () => {
      const res = await getOneUser(session?.user?.id, session?.user?.token)
      if (res.sucess) {
        setFormValues(res.data)
        console.log('User profile loaded:', formValues)
        setSavedValues(res.data)
      } else {
        toast.error(
          <div>
            <span>Load user profile failed!</span>
            <span className='block align-baseline text-sm'>{res.message}</span>
          </div>,
          { duration: 3000 }
        )
      }
    }  
    loadUserProfile()
  }, [session])

  useEffect(() => {
    setCountries([])
    loadCountries()
  }, [])

  useEffect(() => {
    if (formValues.countryId) {
      setStatesProvinces([])
      loadStatesProvinces(formValues.countryId)
    }
  }, [formValues.countryId])

  useEffect(() => {
    if (formValues.stateProvinceId) {
      setCities([])
      loadCities(formValues.stateProvinceId)
    }
  }, [formValues.stateProvinceId])


  const handleCountryChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      stateProvinceId: '',
      cityId: '',
      countryId: event.target.value,
    }))
  }

  const handleStateProvinceChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      cityId: '',
      stateProvinceId: event.target.value,
    }))
  }

  const handleCityChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      cityId: event.target.value,
    }))
  }

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

  const validationSchema = Yup.object({
    cityId: Yup.number()
      .typeError('Not a number type')
      .integer('Must be an integer')
      .positive('Must be a positive number')
      .notRequired(),
    stateProvinceId: Yup.number()
      .typeError('Not a number type')
      .integer('Must be an integer')
      .positive('Must be a positive number')
      .notRequired(),
    countryId: Yup.number()
      .typeError('Not a number type')
      .integer('Must be an integer')
      .positive('Must be a positive number')
      .notRequired(),
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
    profilePicture: Yup.string()
      .url('Invalid URL!')
      .notRequired(),
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
      .nullable()
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
    console.log('Form data', values)

    const res = await updateOneUser(
      session?.user.id,
      values,
      session?.user.token
    )

    console.log('Update user profile response', res)

    if (res.sucess) {
      toast.success(
        <div>
          <span>User profile updated successfully!</span>
          <span className='block align-baseline text-sm'>
            {res.message}
          </span>
        </div>,
        { duration: 5000 }
      )
    } else {
      toast.error(
        <div>
          <span>Update user profile failed!</span>
          <span className='block align-baseline text-sm'>
            {res.message}
          </span>
        </div>,
        { duration: 5000 }
      )
    }
  }

  // Handle edit mode
  function handleEditMode() {
    setEditMode(!editMode)
  }

  // Handle reset form
  function handleResetForm() {
    setFormValues(savedValues)
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
                disabled={editMode}
                className={styles.edit_button}
                onClick={() => handleEditMode()}
              >
                Edit
              </button>

              <button
                type='button'
                disabled={!editMode}
                onClick={() => onSubmit()}
                className={styles.save_button}
              >
                Save
              </button>

              <button
                type='button'
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
                <FormikDatePicker
                  label='Birthday'
                  name='birthday'
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
              <div className='col-span-6 md:col-span-5'>
                <FormikInput
                  label='Phone number'
                  name='phoneNumber'
                  type='text'
                  placeholder='e.g. +34 678 987 789'
                  disabled={!editMode}
                />
              </div>

              {/* email */}
              <div className='col-span-12 md:col-span-7'>
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
                  onChange={handleCountryChange}
                />
              </div>

              {/* state */}
              <div className='col-span-6 md:col-span-4'>
                <FormikSelect
                  label='State or Province'
                  name='stateProvinceId'
                  options={statesProvices}
                  disabled={!editMode}
                  onChange={handleStateProvinceChange}
                />
              </div>

              {/* city */}
              <div className='col-span-6 md:col-span-4'>
                <FormikSelect
                  label='City'
                  name='cityId'
                  options={cities}
                  disabled={!editMode}
                  onChange={handleCityChange}
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
