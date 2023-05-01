import '../../styles/globals.css'

export const metadata = {
  title: 'PetMatch. Contact us. Adopt a Pet and Save a Life',
  description: 'The PetMatch platform is designed to make the adoption process as simple and stress-free as possible for both pets and their new families.'
}

export default function ContactPage () {
  return (
    <div className='h-fit bg-green-400'>
    <div className='mt-48 flex w-full flex-wrap content-center justify-center'>
        <h1 className='w-3/4 text-center text-8xl font-extrabold text-white'>
          PetMatch Contact information.
        </h1>
        <p className='mx-auto mt-10 w-3/4 max-w-lg text-center text-2xl text-white opacity-95'>
          "Adopt a Pet and Save a Life"
        </p>
      </div>
    </div>
  )
}
