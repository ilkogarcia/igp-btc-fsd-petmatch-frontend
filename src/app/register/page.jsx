import '../../styles/globals.css'
import Image from 'next/image'
import SignUp from '../../components/signup/SignUp'

export const metadata = {
  title: 'PetMatch. Join the PetMatch Community.',
  description: 'By registering for an account, you can be part of a growing community of pet lovers who are committed to helping animals in need.',
}

export default function RegisterPage() {
  const petImage = '/assets/michaelG_kpbHRhlSHHA_1920x2880.jpg'

  return (
      <div className='flex h-screen bg-green-400'>
        <div className='mx-auto mt-20 grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2'>
          <div className='relative overflow-hidden rounded-l-md'>
            <Image
              alt='This pet is looking for a home'
              src={petImage}
              quality={85}
              priority
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
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
