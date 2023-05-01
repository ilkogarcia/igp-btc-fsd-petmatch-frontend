'use client'

// Import styles sheet
import styles from './SignUp.module.css'

// Import hooks needed
import { useState } from 'react'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'

// Import components used on this page
import Link from 'next/link'
import {
  HiOutlineAtSymbol,
  HiOutlineEye,
} from 'react-icons/hi2'
import { signMeUp } from '../../services/PetMatch'
import toast from 'react-hot-toast'

// Import utilities used
import validateSignUp  from '../../utils/validateSignUp'

// Main component
export default function SignUp() {
  const [show, setShow] = useState({ password: false, cpassword: false })
  const router = useRouter()

  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      cpassword: '',
    },
    validate: validateSignUp,
    onSubmit,
  })

  // Handle form submission
  async function onSubmit(values) {
    const email = values.email
    const password = values.password
    const response = await signMeUp(email, password)
    if (response.sucess) {
      toast((t) => (
        <div className='flex flex-col items-center justify-between'>
          <p className='font-bold'>User created successfully!</p>
          <p className='text-sm font-thin mt-2'>{response.message}</p>
          <button
            className='mt-4 self-end bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'
            onClick={() => toast.dismiss(t.id)}
          >
            Dismiss
          </button>
        </div>
      ))
      router.push('/')
    } else {
      toast.error(<div><span>User creation failed!</span><br /><span className='text-sm'>{response.message}</span></div>, { duration: 5000 })
    }
  }

  return (
    <section className='mx-auto w-3/4'>
      <div className='title'>
        <h1 className='w-3/4 py-4 mx-auto text-4xl font-bold text-gray-800'>
          Join the PetMatch Community
        </h1>
        <p className='mx-auto mb-6 w-3/4 text-gray-400'>
          By registering for an account, you can be part of a growing community
          of pet lovers who are committed to helping animals in need.
        </p>

        {/* register form */}
        <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>

          {/* email imput */}
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


          {/* password input */}
          <div className={styles.input_group}>
            <input
              type={`${show.password ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
              {...formik.getFieldProps('password')}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow({...show, password: !show.password})}
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

          {/* confirm password input */}
          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name='password'
              placeholder='Confirm password'
              className={styles.input_text}
              {...formik.getFieldProps('cpassword')}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow({...show, cpassword: !show.cpassword})}
            >
              <HiOutlineEye size={25} />
            </span>
          </div>
          {formik.touched.cpassword && formik.errors.cpassword ? (
            <span className='self-start mt-0.5 text-sm text-rose-500'>
              {formik.errors.cpassword}
            </span>
          ) : (
            <></>
          )}

          {/* login buttons */}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Register
            </button>
          </div>
        </form>

        {/* bottom */}
        <div className='mt-2 text-center text-gray-400'>
          Have an account?{' '}
          <Link
            href='/login'
            className='inline-block align-baseline text-sm text-green-500 hover:text-green-800'
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  )
}
