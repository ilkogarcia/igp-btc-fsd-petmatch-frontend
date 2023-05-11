import '../../styles/globals.css'
import ContactUs from '@/components/form-contact-us'

export const metadata = {
  title: 'PetMatch. Contact us. Adopt a Pet and Save a Life',
  description:
    'The PetMatch platform is designed to make the adoption process as simple and stress-free as possible for both pets and their new families.',
}

function ContactPage() {

  return (
    <div className='h-fit bg-white pb-40'>
      {/* first section with a contact form */}
      <div className='mx-auto flex flex-col pb-40 pt-40 lg:grid w-4/5 gap-20 lg:grid-cols-12'>
        <div className='lg:col-span-5 flex flex-col space-y-6'>
          <span className='text-green-600'>Contact Us</span>
          <h2 className='text-5xl font-extrabold text-gray-600 sm:text-6xl md:text-7xl lg:text-8xl'>
            We would love to{' '}
            <span className='text-green-600'>hear from you!</span>
          </h2>
          <p className='text-xl text-gray-400'>
            If you have any questions, comments, or suggestions, please don't hesitate to contact us using the form below. 
          </p>
        </div>
        <div className='lg:col-span-7 flex flex-col lg:pt-2 items-center justify-items-center'>
          <ContactUs />
        </div>
      </div>

      {/* google map */}
      <div className="relative w-full h-full">
        <iframe
          className="relative"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          style={{border:"0"}}
          allowfullscreen=""
          height="520"
          width="100%"
          loading='lazy'
        />
      </div>

      {/* second section with a map */}
      <div className='mx-auto pt-40 w-4/5'>
        <div className='flex flex-col text-center space-y-6'>
          <span className='text-green-600'>Locations</span>
          <h1 className='text-4xl font-extrabold text-gray-600 sm:text-5xl md:text-6xl lg:text-7xl'>
            Our Offices
          </h1>
          <p className='text-base text-gray-400 md:text-lg lg:text-xl'>
           Find us in cities all across Europe! 
           <span className='baseline inline-block'>Visit us at one of our many locations and find your perfect match today.</span> 
          </p>
        </div>
        <div className='mt-16 h-full grid gap-20 lg:grid-cols-12'>
          <div className='col-span-4 flex flex-col text-center items-center'>
            <h2 className='text-2xl font-bold text-gray-600'>London</h2>
            <p className='text-lg text-gray-500'>123 Main Street. London, UK</p>
            <p className='mt-6 text-sm text-gray-400'>+44 123 456 7890 - london@petmatch.es</p>
          </div>
          <div className='col-span-4 flex flex-col text-center items-center'>
            <h2 className='text-2xl font-bold text-gray-600'>Paris</h2>
            <p className='text-lg text-gray-500'>123 Main Street. Paris, France</p>
            <p className='mt-6 text-sm text-gray-400'>+33 123 456 7890 - paris@petmatch.es</p>
          </div>
          <div className='col-span-4 flex flex-col text-center items-center'>
            <h2 className='text-2xl font-bold text-gray-600'>Berlin</h2>
            <p className='text-lg text-gray-500'>123 Main Street. Berlin, Germany</p>
            <p className='mt-6 text-sm text-gray-400'>+49 123 456 7890 - berlin@petmatch.es</p>
          </div>
          <div className='col-span-4 flex flex-col text-center items-center'>
            <h2 className='text-2xl font-bold text-gray-600'>Madrid</h2>
            <p className='text-lg text-gray-500'>123 Main Street. Madrid, Spain</p>
            <p className='mt-6 text-sm text-gray-400'>+34 123 456 7890 - madrid@petmatch.es</p>
          </div>
          <div className='col-span-4 flex flex-col text-center items-center'>
            <h2 className='text-2xl font-bold text-gray-600'>Rome</h2>
            <p className='text-lg text-gray-500'>123 Main Street. Rome, Italy</p>
            <p className='mt-6 text-sm text-gray-400'>+39 123 456 7890 - rome@petmatch.es</p>
          </div>
          <div className='col-span-4 flex flex-col text-center items-center'>
            <h2 className='text-2xl font-bold text-gray-600'>Lisbon</h2>
            <p className='text-lg text-gray-500'>123 Main Street. Lisbon, Portugal</p>
            <p className='mt-6 text-sm text-gray-400'>+351 123 456 7890 - lisbon@petmatch.es</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ContactPage
