'use client'
import { useState } from 'react'
import {
  HiOutlineAtSymbol,
  HiOutlineEye,
  HiOutlineUserCircle,
} from 'react-icons/hi2'
import Link from 'next/link'
import styles from './SignUp.module.css'

const SignUp = () => {
  const [show, setShow] = useState({ password: false, cpassword: false })

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
        <form className='flex flex-col gap-5'>
          {/* username imput */}
          <div className={styles.input_group}>
            <input
              type='text'
              name='username'
              placeholder='Username'
              className={styles.input_text}
            />
            <span className='icon flex items-center px-4'>
              <HiOutlineUserCircle size={25} />
            </span>
          </div>

          {/* email imput */}
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

          {/* password input */}
          <div className={styles.input_group}>
            <input
              type={`${show.password ? 'text' : 'password'}`}
              name='password'
              placeholder='Password'
              className={styles.input_text}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow({...show, password: !show.password})}
            >
              <HiOutlineEye size={25} />
            </span>
          </div>

          {/* confirm password input */}
          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? 'text' : 'password'}`}
              name='password'
              placeholder='Confirm password'
              className={styles.input_text}
            />
            <span
              className='icon flex items-center px-4'
              onClick={() => setShow({...show, cpassword: !show.cpassword})}
            >
              <HiOutlineEye size={25} />
            </span>
          </div>

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

export default SignUp
