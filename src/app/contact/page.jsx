import '../../styles/globals.css'
import Image from 'next/image'
import ContactUs from '../../components/contactus/ContactUs'

export const metadata = {
  title: 'PetMatch. Contact us. Adopt a Pet and Save a Life',
  description:
    'The PetMatch platform is designed to make the adoption process as simple and stress-free as possible for both pets and their new families.',
}

export default function ContactPage() {
  const catImage = '/assets/reneebigelow_51439_640x640.jpg'

  return (
    <div className='h-fit bg-white'>

      {/* first section with a contact form */}
      <div className='mx-auto my-40 grid w-3/5 gap-20 lg:grid-cols-2'>
        <div className='left flex flex-col space-y-6'>
          <span className='text-green-600'>Contact Us</span>
          <h1 className='text-6xl font-extrabold text-gray-600'>
            We would love to{' '}
            <span className='text-green-600'>hear from you!</span>
          </h1>
          <p className='text-xl text-gray-400'>
            If you have any questions, comments, or suggestions, please don't hesitate to contact us using the form below. 
          </p>
          <ContactUs />
        </div>
        <div className='right flex flex-col pt-20 items-center justify-items-center'>
          <Image
            className='shadow aspect-square overflow-clip rounded-full'
            alt='This pet is looking for a home'
            src={catImage}
            quality={85}
            priority
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* second section with a map */}
      
    </div>
  )
}
