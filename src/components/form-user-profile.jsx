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

// Main component
function UserProfile(params) {
  const { data: session } = useSession()

  const [formValues, setFormValues] = useState({})
  const [savedValues, setSavedValues] = useState({})
  const [editMode, setEditMode] = useState(false)

  const countries = [ 
    { 
      key: 'Spain',
      value: '9',
      states: [
        { 
          key: 'Andalusia',
          value: '40',
          cities: [
            { key: 'Almería', value: '1' },
            { key: 'Cádiz', value: '2' },
            { key: 'Córdoba', value: '3' },
            { key: 'Granada', value: '4' },
            { key: 'Huelva', value: '5' },
            { key: 'Jaén', value: '6' },
            { key: 'Málaga', value: '7' },
          ],
        },
        { 
          key: 'Aragon',
          value: '41',
          cities: [
            { key: 'Huesca', value: '8' },
            { key: 'Teruel', value: '9' },
            { key: 'Zaragoza', value: '10' },
          ],
        },
        { 
          key: 'Asturias',
          value: '42',
          cities: [
            { key: 'Oviedo', value: '11' },
            { key: 'Gijón', value: '12' },
            { key: 'Avilés', value: '13' },
          ],
        },
        { 
          key: 'Castile-La Mancha',
          value: '47',
          cities: [
            { key: 'Albacete', value: '12' },
            { key: 'Ciudad Real', value: '13' },
            { key: 'Cuenca', value: '14' },
            { key: 'Guadalajara', value: '15' },
            { key: 'Toledo', value: '16' },
          ],
        },
      ],
    },
    { 
      key: 'Germany',
      value: '4',
      states: [
        {
          key: 'Baden-Württemberg',
          value: '43',
          cities: [
            { key: 'Stuttgart', value: '17' },
            { key: 'Karlsruhe', value: '18' },
            { key: 'Freiburg im Breisgau', value: '19' },
            { key: 'Heidelberg', value: '20' },
            { key: 'Heilbronn', value: '21' },
            { key: 'Pforzheim', value: '22' },
            { key: 'Ulm', value: '23' },
          ],
        },
        {
          key: 'Bavaria',
          value: '44',
          cities: [
            { key: 'Munich', value: '24' },
            { key: 'Augsburg', value: '25' },
            { key: 'Bamberg', value: '26' },
            { key: 'Bayreuth', value: '27' },
            { key: 'Erlangen', value: '28' },
            { key: 'Ingolstadt', value: '29' },
            { key: 'Nuremberg', value: '30' },
            { key: 'Regensburg', value: '31' },
            { key: 'Würzburg', value: '32' },
          ],
        },
      ],
    },
    {
      key: 'United Kingdom',
      value: '10',
      states: [
        {
          key: 'England',
          value: '45',
          cities: [
            { key: 'Bath', value: '33' },
            { key: 'Birmingham', value: '34' },
            { key: 'Bradford', value: '35' },
            { key: 'Brighton & Hove', value: '36' },
            { key: 'Bristol', value: '37' },
            { key: 'Cambridge', value: '38' },
            { key: 'Canterbury', value: '39' },
          ],
        },
        {
          key: 'Scotland',
          value: '46',
          cities: [
            { key: 'Aberdeen', value: '40' },
            { key: 'Dundee', value: '41' },
            { key: 'Edinburgh', value: '42' },
            { key: 'Glasgow', value: '43' },
            { key: 'Inverness', value: '44' },
            { key: 'Stirling', value: '45' },
          ],
        },
      ],
    },
  ]

  const [country, setCountry] = useState('')
  // const [stateProvince, setStateProvince] = useState('')
  // const [city, setCity] = useState('')

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  const handleCountryChange = (event) => {
    const country = countries.find((country) => country.value === event.target.value)
    setCountry(country)
    savedValues.countryId = country.value
    setFormValues(savedValues)

    setStates(country.states)
    // setStateProvince(country.states[0])
    setCities(country.states[0].cities)
    // setCity(country.states[0].cities[0])
  }

  const handleStateProvinceChange = (event) => {
    const stateProvince = country.states.find((stateProvince) => stateProvince.value === event.target.value)
    // setStateProvince(stateProvince)
    setCities(stateProvince.cities)
    // setCity(stateProvince.cities[0])
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

  // Load user profile data when component mounts
  useEffect(() => {
    async function loadUserProfile() {
      const response = await getOneUser(session?.user?.data.id, session?.user?.data.token)
      if (response.sucess) {
        setFormValues(response.data)
        setSavedValues(response.data)
      } else {
        toast.error(
          <div>
            <span>Load user profile failed!</span>
            <span className='block align-baseline text-sm'>
              {response.message}
            </span>
          </div>,
          { duration: 5000 }
        )
      }
    }
    loadUserProfile()
  }, [])


  // Handle form submission
  async function onSubmit(values) {
    const response = await updateOneUser(session?.user.data.id, values, session?.user.data.token)
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
                  onChange={handleCountryChange}
                />
              </div>

              {/* state */}
              <div className='col-span-6 md:col-span-4'>
              <FormikSelect 
                  label='State or Province'
                  name='stateProvinceId'
                  options={states}
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
