import Link from 'next/link'
import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'
import Copyright from './footer-copyright'
import SocialNetworks from './footer-socialnetworks'

const Footer = () => {
  return (
    <footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      {/* social network bar */}
      <SocialNetworks />

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
      <Copyright />
    </footer>
  )
}

export default Footer
