'use client'

// Import styles sheet
import styles from './styles.module.css'

// Import hooks needed and libraries
import { useFormik } from 'formik'

// Import components used on this page
import toast from 'react-hot-toast'
import Image from 'next/image'

// Import utilities used
import validateForgotPassword from '../utils/validateForgotPassword'
import { updateOneUser } from '../services/user.services'

// Main component
function UserProfile(params) {

  // Formik hook
  const formik = useFormik({
    initialValues: {
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
    },
    validate: validateForgotPassword,
    onSubmit,
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

  return (
    <form className='mx-auto mt-8' onSubmit={formik.handleSubmit}>
      <div className='flex flex-col sm:grid sm:grid-cols-12 sm:gap-6'>
        <div className='col-span-3'>
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
          </div>
          <p className='mt-2 text-sm text-gray-500'>
            Click on the image to change it
          </p>
          <p className='mt-2 text-xs text-gray-500'>Max size 1MB</p>
          <p className='text-xs text-gray-500'>Recommended size 600x600</p>
        </div>
        <div className='col-span-9'>
          <div className='flex flex-col sm:grid sm:gap-5 sm:grid-cols-12'>
            {/* firsname */}
            <div className='col-span-12 lg:col-span-5'>
              <span className='ml-2 text-xs text-gray-400'>Firstname</span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  className={styles.input_text}
                  {...formik.getFieldProps('firstName')}
                />
              </div>
            </div>

            {/* lastname */}
            <div className='col-span-12 md:col-span-7'>
              <span className='ml-2 text-xs text-gray-400'>Lastname</span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  className={styles.input_text}
                  {...formik.getFieldProps('lastName')}
                />
              </div>
            </div>

            {/* username */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>Username</span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='username'
                  placeholder='Username'
                  className={styles.input_text}
                  {...formik.getFieldProps('username')}
                />
              </div>
            </div>

            {/* birthday */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>Birthday</span>
              <div className={styles.input_group}>
                <input
                  type='date'
                  name='birthday'
                  placeholder='Birthday'
                  className={styles.input_text}
                  {...formik.getFieldProps('birthday')}
                />
              </div>
            </div>

            {/* gender */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>Gender</span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='gender'
                  placeholder='Gender'
                  className={styles.input_text}
                  {...formik.getFieldProps('gender')}
                />
              </div>
            </div>

            {/* phone number */}
            <div className='col-span-6 md:col-span-4'>
              <span className='ml-2 text-xs text-gray-400'>Phone Number</span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='phoneNumber'
                  placeholder='Phone Number'
                  className={styles.input_text}
                  {...formik.getFieldProps('phoneNumber')}
                />
              </div>
            </div>


            {/* email */}
            <div className='col-span-12 md:col-span-8'>
              <span className='ml-2 text-xs text-gray-400'>
                Email <span className='text-rose-400'>*</span>
              </span>
              <div className={styles.input_group}>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  className={styles.input_text}
                  {...formik.getFieldProps('email')}
                />
              </div>
            </div>

            {/* address line 1 */}
            <div className='col-span-12'>
              <span className='ml-2 text-xs text-gray-400'>
                Street address (e.g. 123 Main St.)
              </span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='addressLine1'
                  placeholder='Address Line 1'
                  className={styles.input_text}
                  {...formik.getFieldProps('addressLine1')}
                />
              </div>
            </div>

            {/* address line 2 */}
            <div className='col-span-12 md:col-span-8'>
              <span className='ml-2 text-xs text-gray-400'>
                Address line 2 (e.g. Apt. 4B or Suite 200)
              </span>
              <div className={styles.input_group}>
                <input
                  type='text'
                  name='addressLine2'
                  placeholder='Address Line 2'
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
