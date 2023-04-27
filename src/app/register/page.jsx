import '../../styles/globals.css'
import Head from 'next/head'
import Image from 'next/image'
import SignUp from '@/components/signup/SignUp'

const RegisterPage = () => {
  const petImage = '/assets/michaelG_kpbHRhlSHHA_1920x2880.jpg'

  return (
      <div className='flex h-screen bg-green-400'>
        <Head>
          <title>PetMatch - Register</title>
        </Head>
        <div className='m-auto grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2'>
          <div className='relative overflow-hidden rounded-l-md'>
            <Image
              alt='This pet is looking for a home'
              src={petImage}
              quality={100}
              fill
              sizes='100vw'
              priority
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className='right flex flex-col justify-evenly'>
            <div className='py-10 text-center'>
              <SignUp />
            </div>
          </div>
        </div>
    </div>
  )
}

export default RegisterPage
