import '../styles/globals.css'
import PetCard from '../components/petcard/PetCard'

export default function HomePage () {
  return (
    <div>
      <section className='mt-48 flex w-full flex-wrap content-center justify-center px-16'>
        <h1 className='mx-auto w-4/5 text-center text-8xl font-extrabold text-white'>
          Find your new best friend today!
        </h1>
        <p className='opacity-85 mx-auto mt-10 w-4/5 text-center text-2xl text-white'>
          Bringing forever homes and loving pets together. Adopting today can
          make the difference.
        </p>
      </section>
      <section className='mt-48'>
        <h2 className='mb-12 text-center text-6xl font-extralight text-white'>
          Adoptable Pets
        </h2>
        <div className='mt-10 flex flex-wrap justify-center gap-10'>
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
      <section className='mb-48 mt-48'>
        <h2 className='mb-12 text-center text-6xl font-extralight text-white'>
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
