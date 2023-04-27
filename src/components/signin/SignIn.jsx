'use client'
import { useState } from 'react'
import { HiOutlineAtSymbol, HiOutlineEye } from 'react-icons/hi2'
import Link from 'next/link'
import styles from './SignIn.module.css'

function initShow() {
  return false
}

const SignIn = () => {
  const [show, setShow] = useState(initShow)

  return (
    <section className='mx-auto w-3/4'>
      <div className='title'>
        <h1 className='py-4 text-4xl font-bold text-gray-800'>
          Login to Your Account
        </h1>
        <p className='mx-auto mb-6 w-3/4 text-gray-400'>
          Welcome back! Please log in to access your account and stay connected
          with all the latest updates from PetMatch.
        </p>

        {/* login form */}
        <form className='flex flex-col gap-5'>
          <div className={styles.input_group}>
            <input
              type='email'
              name='email'
              placeholder='Email address'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow(!show)}
            >
              <HiOutlineEye size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className='input-button'>
            <button type='submit' className={styles.button}>
              Login
            </button>
          </div>
        </form>

        {/* bottom */}
        <div className='mt-2 text-center text-gray-400'>
          <Link
            href='#'
            className='text-green-500 hover:text-green-800'
          >
            Forgot you password?
          </Link>
        </div>
        <div className='mt-2 mx-auto w-3/4 text-center text-gray-400'>
          <p>Don't have an account yet?</p>
          <Link
            href='/register'
            className='text-green-500 hover:text-green-800'
          >
            Sign Up
          </Link>
          {' '}and finding your perfect pet companion.
        </div>
      </div>
    </section>
  )
}

export default SignIn
