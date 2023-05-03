'use client'
import Link from 'next/link'
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      <div className='flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between'>
        <div className='mr-12 hidden lg:block'>
          <span>Get connected with us on social networks:</span>
        </div>

        {/* Social network icons container */}
        <div className='flex justify-center'>
          <a href='#!' className='mr-6 text-neutral-600 dark:text-neutral-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
            </svg>
          </a>
          <a href='#!' className='mr-6 text-neutral-600 dark:text-neutral-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
            </svg>
          </a>
          <a href='#!' className='mr-6 text-neutral-600 dark:text-neutral-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                d='M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z'
                fillRule='evenodd'
                clipRule='evenodd'
              />
            </svg>
          </a>
          <a href='#!' className='mr-6 text-neutral-600 dark:text-neutral-200'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
          </a>
        </div>
      </div>

      {/* main footer container */}
      <div className='mx-10 py-10 text-center md:text-left'>
        <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-6'>
          {/* Page footer brand section */}
          <div className='col-span-2'>
            <h6 className='mb-4 flex items-center justify-center text-xl font-semibold md:justify-start'>
              PetMatch.es
            </h6>
            <p className='text-sm'>
              We are working to connect through PetMatch, one million homeless
              pets with loving forever homes.
            </p>
            <Link
              className='mt-4 block align-baseline text-xs'
              href='/auth/register'
            >
              Will you join us?
            </Link>
          </div>

          {/* MAIN menu */}
          <div className=''>
            <h6 className='mb-4 flex justify-center font-bold uppercase md:justify-start'>
              Main
            </h6>
            <div className='flex flex-col space-y-2 text-neutral-600 dark:text-neutral-200'>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/'
              >
                Home
              </Link>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/pets'
              >
                Available pets
              </Link>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/about'
              >
                About us
              </Link>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/contact'
              >
                Contact
              </Link>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/blog'
              >
                Blog
              </Link>
            </div>
          </div>

          {/* USEFUL LINKS menu */}
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Useful links
            </h6>
            <div className='flex flex-col space-y-2 text-neutral-600 dark:text-neutral-200'>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/'
              >
                Adoption process
              </Link>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/'
              >
                Donation Center
              </Link>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/'
              >
                Volunteer Opportunities
              </Link>
            </div>
          </div>

          {/* LEGAL menu */}
          <div className=''>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Legal
            </h6>
            <div className='flex flex-col space-y-2 text-neutral-600 dark:text-neutral-200'>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/legal/privacy-policy'
              >
                Privacy policy
              </Link>
              <Link
                className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
                href='/legal/terms-conditions'
              >
                Terms and conditions
              </Link>
            </div>
          </div>

          {/* CONTACT info */}
          <div>
            <h6 className='mb-4 flex justify-center font-semibold uppercase md:justify-start'>
              Contact
            </h6>
            <div className='flex flex-col space-y-2 text-sm text-neutral-600 dark:text-neutral-200'>
              <span className='flex items-center gap-2'>
                <FaHome />
                c/ Paloma 1, 28003 Madrid
              </span>
              <span className='flex items-center gap-2'>
                <FaEnvelope />
                adopt@petmatch.es
              </span>
              <span className='flex items-center gap-2'>
                <FaPhone />+ 34 234 567 890
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Page footer copyright section */}
      <div className='bg-neutral-200 p-4 text-center dark:bg-neutral-700'>
        <span>© 2023 Copyright. All rights reserved. </span>
        <a
          className='font-semibold text-neutral-600 dark:text-neutral-400'
          href='https://petmatch.es/'
        >
          PetMatch, S.A.
        </a>
      </div>
    </footer>
  )
}
