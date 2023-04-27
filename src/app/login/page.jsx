import '../../styles/globals.css'
import Image from 'next/image'
import SignIn from '@/components/signin/SignIn'

export const metadata = {
  title: 'PetMatch. Login to your account.',
  description: 'Welcome back! Please log in to access your account and stay connected with all the latest updates from PetMatch.',
}

const LoginPage = () => {  
  const petImage = '/assets/michaelG_aEtAEp3e0c_1920x2880.jpg'

  return (
      <div className='flex h-screen bg-green-400'>
        <div className='m-auto grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2'>
          <div className='relative overflow-hidden rounded-l-md'>
            <Image
              alt='This pet is looking for a home'
              src={petImage}
              quality={85}
              fill
              sizes='100vw'
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className='right flex flex-col justify-evenly'>
            <div className='py-10 text-center'>
              <SignIn />
            </div>
          </div>
        </div>
    </div>
  )
}

export default LoginPage
