import '../styles/globals.css'
import PetCard from '../components/petcard/PetCard'

const HomePage = () => {
  return (
    <main>
      <section className='mt-48 flex flex-wrap w-full'>
        <h1 className='text-center text-8xl font-extrabold text-white'>
          Find your new best friend today!
        </h1>
        <p className='mx-auto mt-10 max-w-lg text-center text-2xl text-white opacity-95'>
          Bringing forever homes and loving pets together. Adopting today can make the difference.
        </p>
      </section>
      <section className='mt-48'>
        <h2 className='text-center text-6xl font-extralight text-white mb-12'>
          Adoptable Pets
        </h2>
        <div className='flex flex-wrap justify-center mt-10'>
          <div className='w-1/5'>
            <PetCard id={18} />
          </div>
          <div className='w-1/5'>
            <PetCard id={2} />
          </div>
          <div className='w-1/5'>
            <PetCard id={13} />
          </div>
        </div>
      </section>
      <section className='mt-48'>
        <h2 className='text-center text-6xl font-extralight text-white mb-12'>
          Happy Tails
        </h2>
      </section>
    </main>
  )
}

export default HomePage