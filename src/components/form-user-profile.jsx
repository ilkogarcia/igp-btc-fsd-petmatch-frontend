'use client'

// Import styles sheet
import styles from './styles.module.css'

// Import hooks needed and libraries
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'

// Import components used on this page
import Link from 'next/link'
import { HiOutlineAtSymbol } from 'react-icons/hi2'
import toast from 'react-hot-toast'

// Import utilities used
import validateForgotPassword from '../utils/validateForgotPassword'
import { updateOneUser } from '../services/User.services'

// Main component
function UserProfile() {
  const router = useRouter()

  // Formik hook
  const formik = useFormik({
    initialValues: {
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
    },
    validate: validateForgotPassword,
    onSubmit,
  })

  // Handle form submission
  async function onSubmit(values) {
    const response = await updateOneUser(values)
    if (response.sucess) {
      toast((t) => (
        <div className='flex flex-col items-center justify-between'>
          <p className='font-bold'>
            We send you a link to reset your password. Check your inbox and
            follow the instructions.
          </p>
          <p className='mt-2 text-sm font-thin'>{response.message}</p>
          <button
            className='mt-4 self-end rounded border border-green-500 bg-transparent px-4 py-2 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white'
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </div>
      ))
      router.push('/')
    } else {
      toast.error(
        <div>
          <span>Password reset failed!</span>
          <br />
          <span className='text-sm'>{response.message}</span>
        </div>,
        { duration: 5000 }
      )
    }
  }

  return (
    <div className='mx-auto w-3/4'>
      <h1 className='py-4 text-4xl font-bold text-gray-800'>
        Forgot your password?
      </h1>
      <p className='mx-auto mb-6 w-3/4 text-gray-400'>
        Please enter the email address associated with your account and we will
        send you a link to reset your password.
      </p>

      {/* login form */}
      <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
        {/* input email field */}
        <div className={styles.input_group}>
          <input
            type='email'
            name='email'
            placeholder='Email address'
            className={styles.input_text}
            {...formik.getFieldProps('email')}
          />
          <span className='icon flex items-center px-4'>
            <HiOutlineAtSymbol size={25} />
          </span>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span className='mt-0.5 self-start text-sm text-rose-500'>
            {formik.errors.email}
          </span>
        ) : (
          <></>
        )}

        {/* login buttons */}
        <div className='input-button'>
          <button type='submit' className={styles.button}>
            Reset
          </button>
        </div>
      </form>

      {/* bottom */}
      <div className='mx-auto mt-2 w-3/4 text-center text-gray-400'>
        <p>Remember your password?</p>
        <Link
          href='/auth/login'
          className='text-green-500 hover:text-green-800'
        >
          Click here
        </Link>{' '}
        to go back to the login page.
      </div>
    </div>
  )
}

export default UserProfile
