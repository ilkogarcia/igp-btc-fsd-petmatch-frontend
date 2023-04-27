import '../../styles/globals.css'
import Image from 'next/image'
import pet from 'public/assets/michael-g_aEtAEp3e0c-unsplash_1920x2880.jpg'

const authLayout = ({ children }) => {
  return (
    <div className='flex h-screen bg-green-400'>
      <div className='m-auto grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2'>
        <div className='relative overflow-hidden rounded-l-md'>
          <Image
            alt='This pet is looking for a home'
            src={pet}
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='right flex flex-col justify-evenly'>
          <div className='py-10 text-center'>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default authLayout
