import '../styles/globals.css'
import PetCard from '../components/petcard/PetCard'

const HomePage = () => {
  return (
    <div>
      <section className='mt-48 flex flex-wrap w-full justify-center content-center'>
        <h1 className='w-3/4 text-center text-8xl font-extrabold text-white'>
          Find your new best friend today!
        </h1>
        <p className='w-3/4 mx-auto mt-10 max-w-lg text-center text-2xl text-white opacity-95'>
          Bringing forever homes and loving pets together. Adopting today can make the difference.
        </p>
      </section>
      <section className='mt-48'>
        <h2 className='text-center text-6xl font-extralight text-white mb-12'>
          Adoptable Pets
        </h2>
        <div className='flex flex-wrap gap-10 justify-center mt-10'>
          <div className='w-1/4'>
            <PetCard id={19} />
          </div>
          <div className='w-1/4'>
            <PetCard id={2} />
          </div>
          <div className='w-1/4'>
            <PetCard id={13} />
          </div>
        </div>
      </section>
      <section className='mt-48 mb-48'>
        <h2 className='text-center text-6xl font-extralight text-white mb-12'>
          Happy Tails
        </h2>
        <p className='mx-auto mt-10 max-w-lg text-center text-2xl text-white'>
          Welcome to PetMatch, your go-to platform for adopting a pet and
          changing a life forever. Our mission is to connect animals in need of
          a loving home with caring and responsible pet parents, while also
          promoting responsible pet ownership and animal welfare.
        </p>
      </section>
    </div>
  )
}

export default HomePage