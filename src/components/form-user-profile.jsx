'use client'

// Import styles sheet
import styles from './styles.module.css'

// Import hooks needed and libraries
import { useFormik } from 'formik'
import { useState } from 'react'

// Import components used on this page
import toast from 'react-hot-toast'
import Image from 'next/image'
import { HiOutlineAtSymbol } from 'react-icons/hi'

// Import utilities used
import validateUserProfile from '../utils/userprofile.validate'
import { updateOneUser } from '../services/user.services'

// Main component
function UserProfile(params) {
  const [formValues, setFormValues] = useState({})

  const [editMode, setEditMode] = useState(false)

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
  // Formik hook
  const formik = useFormik({
    initialValues: formValues || initialValues,
    validate: validateUserProfile,
    onSubmit,
    enableReinitialize: true,
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
    formik.resetForm()
    setEditMode(false)
  }

  return (
    <form className='mx-auto mt-8' onSubmit={formik.handleSubmit}>
      <div className='flex flex-col sm:grid sm:grid-cols-12 sm:gap-6'>
        {/* left colum */}
        <div className='col-span-4'>
          {/* user image profile */}
          <div className='flex flex-col space-y-4'>
            <Image
              className='square-img rounded-md shadow-md'
              type='file'
              name='profilePicture'
              src={formik.values.profilePicture}
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
          <div className='mt-10 flex flex-col w-2/3 gap-4 mx-auto'>
            <button
              type='button'
              disabled={editMode}
              className={styles.edit_button}
              onClick={() => handleEditMode()}
            >
              Edit
            </button>

            <button
              type='submit'
              disabled={!editMode}
              className={styles.save_button}
              onClick={() => formik.handleSubmit()}
            >
              Save
            </button>

            <button
              type='reset'
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
            {/* firsname */}
            <div className='col-span-12 lg:col-span-5'>
              <label htmlFor='firstName' className={styles.input_label}>
                Firstname
              </label>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('firstName')}
                />
              </div>
            </div>

            {/* lastname */}
            <div className='col-span-12 md:col-span-7'>
              <label htmlFor='firstName' className={styles.input_label}>
                Lastname
              </label>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('lastName')}
                />
              </div>
            </div>

            {/* username */}
            <div className='col-span-6 md:col-span-4'>
              <label htmlFor='firstName' className={styles.input_label}>
                Username
              </label>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('username')}
                />
              </div>
            </div>

            {/* birthday */}
            <div className='col-span-6 md:col-span-4'>
              <label htmlFor='firstName' className={styles.input_label}>
                Birthday
              </label>
              <div className={styles.input_group}>
                <input
                  type='date'
                  name='birthday'
                  placeholder='Birthday'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('birthday')}
                />
              </div>
            </div>

            {/* gender */}
            <div className='col-span-6 md:col-span-4'>
              <label htmlFor='firstName' className={styles.input_label}>
                Gender
              </label>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='gender'
                  placeholder='Gender'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('gender')}
                />
              </div>
            </div>

            {/* phone number */}
            <div className='col-span-6 md:col-span-4'>
              <label htmlFor='firstName' className={styles.input_label}>
                Phone Number
              </label>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('phoneNumber')}
                />
              </div>
            </div>

            {/* email */}
            <div className='col-span-12 md:col-span-8'>
              <label htmlFor='firstName' className={styles.input_label}>
                Email
              </label>
              <div className={styles.input_group}>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('email')}
                />
                <span className='icon flex items-center px-4'>
                  <HiOutlineAtSymbol size={25} />
                </span>
              </div>
              {formik.touched.email && formik.errors.email ? (
                <span className='self-start mt-0.5 ml-2 text-xs text-rose-500'>
                  {formik.errors.email}
                </span>
              ) : (
                <></>
              )}
            </div>

            {/* address line 1 */}
            <div className='col-span-12'>
              <label htmlFor='firstName' className={styles.input_label}>
                Street address (e.g. 123 Main St.)
              </label>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='addressLine1'
                  placeholder='Address Line 1'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('addressLine1')}
                />
              </div>
            </div>

            {/* address line 2 */}
            <div className='col-span-12 md:col-span-8'>
              <label htmlFor='firstName' className={styles.input_label}>
                Address line 2 (e.g. Apt. 4B or Suite 200)
              </label>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='addressLine2'
                  placeholder='Address Line 2'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('addressLine2')}
                />
              </div>
            </div>

            {/* postal code */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>
                Postal/ZIP code (e.g. 10001)
              </span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='postalCode'
                  placeholder='Postal Code'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('postalCode')}
                />
              </div>
            </div>

            {/* country */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>
                Country (e.g. EEUU)
              </span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='countryId'
                  placeholder='Country'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('countryId')}
                />
              </div>
            </div>

            {/* state */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>
                State (e.g. NY)
              </span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='stateProvinceId'
                  placeholder='State'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('stateProvinceId')}
                />
              </div>
            </div>

            {/* city */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>
                City (e.g. New York)
              </span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='cityId'
                  placeholder='City'
                  disabled={!editMode}
                  className={styles.input_text}
                  {...formik.getFieldProps('cityId')}
                />
              </div>
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
    </form>
  )
}

export default UserProfile
