'use client'

// Import styles sheet
import styles from './SignIn.module.css'

// Import hooks needed and libraries
import { useState } from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'

// Import components used on this page
import Link from 'next/link'
import { HiOutlineAtSymbol, HiOutlineEye } from 'react-icons/hi2'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'

// Import utilities used
import validateSignIn from '../../utils/validateSignIn'

// Main component
export default function SignIn() {
  const [show, setShow] = useState(false)
  const router = useRouter()

  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateSignIn,
    onSubmit,
  })

  // Handle form submission
  async function onSubmit(values) {
    const response = await signIn(`credentials`, {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    })
    if (response.ok && !response.error) {
      toast.success('Logged in successfully!', { duration: 3000 })
      router.push('/')
    } else {
      toast.error(<div><span>Something went wrong!</span><br /><span className='text-sm'>{response.error}</span></div>, { duration: 5000 })
    }
  }

  return (
    <div className='mx-auto w-3/4'>
      <div className='title'>
        <h1 className='py-4 text-4xl font-bold text-gray-800'>
          Login to Your Account
        </h1>
        <p className='mx-auto mb-6 w-3/4 text-gray-400'>
          Welcome back! Please log in to access your account and stay connected
          with all the latest updates from PetMatch.
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
            <span className='self-start mt-0.5 text-sm text-rose-500'>
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}

          {/* imput password field */}
          <div className={styles.input_group}>
            <input
              type={`${show ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow(!show)}
            >
              <HiOutlineEye size={25} />
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <span className='self-start mt-0.5 text-sm text-rose-500'>
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}

          {/* login buttons */}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
        </form>

        {/* bottom */}
        <div className='mt-2 text-center text-gray-400'>
          <Link href='#' className='text-green-500 hover:text-green-800'>
            Forgot you password?
          </Link>
        </div>
        <div className='mx-auto mt-2 w-3/4 text-center text-gray-400'>
          <p>Don't have an account yet?</p>
          <Link
            href='/auth/register'
            className='text-green-500 hover:text-green-800'
          >
            Sign Up
          </Link>{' '}
          and finding your perfect pet companion.
        </div>
      </div>
    </div>
  )
}
