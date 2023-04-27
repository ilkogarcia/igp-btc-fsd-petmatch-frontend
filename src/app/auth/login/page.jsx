import '../../../styles/globals.css'
import styles from './Login.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>PetMatch - Login to your account</title>
      </Head>
      <section className='mx-auto w-3/4'>
        <div className='title'>
          <h1 className='py-4 text-4xl font-bold text-gray-800'>Login</h1>
          <p className='mx-auto w-3/4 text-gray-400'>
            Esse consectetur fugiat quidem quis quibusdam officiis, nam at
            voluptatem, nisi harum dignissimos!
          </p>

          {/* login form */}
          <form className='flex flex-col gap-5'>
            <div className={styles.input_group}>
              <input
                type='email'
                name='email'
                placeholder='account@domain.com'
                className={styles.input_text}
              />
            </div>
            <div className={styles.input_group}>
              <input
                type='password'
                name='password'
                placeholder='************'
                className={styles.input_text}
              />
            </div>

            {/* login buttons */}
            <div className='input-button'>
              <button type='submit' className={styles.button}>
                Login
              </button>
            </div>
          </form>

          {/* bottom */}
          <p className='text-center text-gray-400 mt-4'>
            Don't have an account?{' '}
            <Link
              href='/auth/register'
              className='text-green-500 hover:text-green-800'
            >
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
