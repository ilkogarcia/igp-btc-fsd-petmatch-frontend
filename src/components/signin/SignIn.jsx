'use client'

// Import styles sheet
import styles from './SignIn.module.css'

// Import hooks needed and libraries
import { useState } from 'react'
import { useFormik } from 'formik'
// import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

// Import components used on this page
import Link from 'next/link'
import { HiOutlineAtSymbol, HiOutlineEye } from 'react-icons/hi2'

// Import utilities used
import validateSignIn from '../../utils/validateSignIn'

// Main component
export default function SignIn() {
  const [show, setShow] = useState(false)

  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateSignIn,
    onSubmit,
  })

  async function onSubmit(values) {
    console.log('Form data', values);
    const status = await signIn(`credentials`, {
      redirect: true,
      email: values.email,
      password: values.password,
      callbackUrl: '/'
    })
    console.log('NextAuth Status:', status)
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
            href='/register'
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
