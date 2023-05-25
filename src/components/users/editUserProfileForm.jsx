/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
'use client'

import styles from '@/components/styles.module.css'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import FormikControl from '@/components/formik-control'
import Image from 'next/image'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import { updateOneUser } from '@/services/user.services'
import {
  fetchAllCountries,
  fetchAllStateProvinces,
  fetchAllCities,
} from '@/services/address.services'

const UserProfileForm = ({ userProfile }) => {
  const { data: session } = useSession()

  const [countries, setCountries] = useState([])
  const [stateProvinces, setStateProvinces] = useState([])
  const [cities, setCities] = useState([])

  const [stateProvincesEnabled, setStateProvincesEnabled] = useState(false)
  const [citiesEnabled, setCitiesEnabled] = useState(false)

  const loadCountries = async () => {
    const {
      sucess,
      message,
      data: { countries },
    } = await fetchAllCountries()
    console.log(sucess, message, countries)

    if (sucess) {
      countries.map((country) => {
        setCountries((prev) => [
          ...prev,
          { key: country.countryName, value: country.id },
        ])
      })
    } else {
      toast.error(message)
    }
  }

  const loadStatesProvinces = async (countryId) => {
    setStateProvinces([])
    const {
      sucess,
      message,
      data: { stateProvinces },
    } = await fetchAllStateProvinces(countryId)
    console.log(sucess, message, stateProvinces)

    if (sucess) {
      stateProvinces.map((stateProvince) => {
        setStateProvinces((prev) => [
          ...prev,
          { key: stateProvince.stateProvinceName, value: stateProvince.id },
        ])
      })
    } else {
      toast.error(message)
    }
  }

  const loadCities = async (stateProvinceId) => {
    setCities([])
    const {
      sucess,
      message,
      data: { cities },
    } = await fetchAllCities(stateProvinceId)
    console.log(sucess, message, cities)

    if (sucess) {
      cities.map((city) => {
        setCities((prev) => [...prev, { key: city.cityName, value: city.id }])
      })
    } else {
      toast.error(message)
    }
  }

  useEffect(() => {
    loadCountries()
    console.log('Countries un useState:', countries)
  }, [])

  useEffect(() => {
    if (userProfile.countryId) {
      setStateProvincesEnabled(true)
      loadStatesProvinces(userProfile.countryId)
    }
  }, [userProfile.countryId])

  useEffect(() => {
    if (userProfile.stateProvinceId) {
      setCitiesEnabled(true)
      loadCities(userProfile.stateProvinceId)
    }
  }, [userProfile.stateProvinceId])

  const initialValues = {
    firstName: userProfile.firstName || '',
    lastName: userProfile.lastName || '',
    username: userProfile.username || '',
    profilePicture: userProfile.profilePicture || '',
    birthday: userProfile.birthday || null,
    gender: userProfile.gender || '',
    email: userProfile.email || '',
    phoneNumber: userProfile.phoneNumber || '',
    addressLine1: userProfile.addressLine1 || '',
    addressLine2: userProfile.addressLine2 || '',
    postalCode: userProfile.postalCode || '',
    cityId: userProfile.cityId || 1,
    stateProvinceId: userProfile.stateProvinceId || 1,
    countryId: userProfile.countryId || 1,
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
    profilePicture: Yup.string().url('Invalid URL!').notRequired(),
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

  const handleCountryChange = (event) => {
    userProfile.countryId = event.target.value
    loadStatesProvinces(userProfile.countryId)
    console.log(userProfile.countryId)
  }

  const handleStateProvinceChange = (event) => {
    userProfile.stateProvinceId = event.target.value
    loadCities(userProfile.stateProvinceId)
    console.log(userProfile.stateProvinceId)
  }

  const handleCityChange = (event) => {
    userProfile.cityId = event.target.value
    console.log(userProfile.cityId)
  }

  async function onSubmit(values) {
    const res = await updateOneUser(
      session?.user.id,
      values,
      session?.user.token
    )
    if (res.sucess) {
      toast.success(
        <div>
          <span>User profile updated successfully!</span>
          <span className='block align-baseline text-sm'>{res.message}</span>
        </div>,
        { duration: 3000 }
      )
    } else {
      toast.error(
        <div>
          <span>Update user profile failed!</span>
          <span className='block align-baseline text-sm'>{res.message}</span>
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
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form className='mx-auto mt-8'>
            <div className='flex flex-col sm:grid sm:grid-cols-12 sm:gap-6'>
              {/* left colum */}
              <div className='col-span-4'>
                {/* user image profile */}
                <div className='flex flex-col space-y-4'>
                  <Image
                    src={
                      formik.values.profilePicture || '/assets/pets-error.png'
                    }
                    alt={formik.values.username || 'User profile picture'}
                    width={600}
                    height={600}
                    className='square-img rounded-md shadow-md'
                    placeholder='blur'
                    blurDataURL='/assets/pets-error.png'
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
                    type='submit'
                    onClick={formik.handleSubmit}
                    className={styles.save_button}
                  >
                    Save
                  </button>

                  <button
                    type='reset'
                    onClick={formik.handleReset}
                    className={styles.cancel_button}
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
                    <FormikControl
                      control='input'
                      label='Firstname'
                      name='firstName'
                      type='text'
                      placeholder='e.g. John'
                    />
                  </div>

                  {/* lastname */}
                  <div className='col-span-12 md:col-span-7'>
                    <FormikControl
                      control='input'
                      label='Lastname'
                      name='lastName'
                      placeholder='e.g. John Doe'
                    />
                  </div>

                  {/* username */}
                  <div className='col-span-6 md:col-span-4'>
                    <FormikControl
                      control='input'
                      label='Username'
                      name='username'
                      placeholder='e.g. john_doe'
                    />
                  </div>

                  {/* birthday */}
                  <div className='col-span-6 md:col-span-4'>
                    <FormikControl
                      control='date'
                      label='Birthday'
                      name='birthday'
                    />
                  </div>

                  {/* gender */}
                  <div className='col-span-6 md:col-span-4'>
                    <FormikControl
                      control='input'
                      label='Gender'
                      name='gender'
                      placeholder='e.g. Male'
                    />
                  </div>

                  {/* user profile picture */}
                  <div className='col-span-12'>
                    <FormikControl
                      control='input'
                      label='Profile picture'
                      name='profilePicture'
                      placeholder='e.g. https://www.example.com/image.jpg'
                    />
                  </div>

                  {/* phone number */}
                  <div className='col-span-6 md:col-span-5'>
                    <FormikControl
                      control='input'
                      label='Phone number'
                      name='phoneNumber'
                      placeholder='e.g. +34 678 987 789'
                    />
                  </div>

                  {/* email */}
                  <div className='col-span-12 md:col-span-7'>
                    <FormikControl
                      control='input'
                      label='Email'
                      name='email'
                      placeholder='e.g. example@domain.com'
                    />
                  </div>

                  {/* address line 1 */}
                  <div className='col-span-12'>
                    <FormikControl
                      control='input'
                      label='Street address'
                      name='addressLine1'
                      placeholder='e.g. 123 Main St.'
                    />
                  </div>

                  {/* address line 2 */}
                  <div className='col-span-12 md:col-span-8'>
                    <FormikControl
                      control='input'
                      label='Rest of address'
                      name='addressLine2'
                      placeholder='e.g. Apt. 4B or Suite 200'
                    />
                  </div>

                  {/* postal code */}
                  <div className='col-span-6 md:col-span-4'>
                    <FormikControl
                      control='input'
                      label='Postal/ZIP code'
                      name='postalCode'
                      placeholder='e.g. 10001'
                    />
                  </div>

                  {/* country */}
                  <div className='col-span-6 md:col-span-4'>
                    <FormikControl
                      control='select'
                      label='Country'
                      name='countryId'
                      options={countries}
                      onChange={handleCountryChange}
                    />
                  </div>

                  {/* state */}
                  <div className='col-span-6 md:col-span-4'>
                    <FormikControl
                      control='select'
                      label='State or Province'
                      name='stateProvinceId'
                      options={stateProvinces}
                      disabled={!stateProvincesEnabled}
                      onChange={handleStateProvinceChange}
                    />
                  </div>

                  {/* city */}
                  <div className='col-span-6 md:col-span-4'>
                    <FormikControl
                      control='select'
                      label='City'
                      name='cityId'
                      options={cities}
                      disabled={!citiesEnabled}
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
        )
      }}
    </Formik>
  )
}

export default UserProfileForm
