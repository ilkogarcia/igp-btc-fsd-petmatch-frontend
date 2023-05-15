// Import styles and icons
import { TbReportMedical } from 'react-icons/tb'

// Import components
import Image from 'next/image'
import Link from 'next/link'
import PetSpecie from '@/components/pets/petSpecie'
import PetBreed from '@/components/pets/petBreed'
import PetStatus from '@/components/pets/petStatus'
import Shelter from '@/components/pet-shelter'


// Import services and helpers
import { format } from 'date-fns'

async function fetchOnePet (id) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

export default async function PetPage ({params}) {
  const { id } = params
  const { data } = await fetchOnePet(id)

  // Calculate the days on shelter
  const daysOnShelter = Math.floor(
    (new Date() - new Date(data.createdAt)) / (1000 * 60 * 60 * 24)
  )

  return (
    <div className='mx-auto flex h-full w-full flex-col gap-10 lg:grid lg:grid-cols-12'>
      {/* left colum */}
      <div className='flex flex-col space-y-6 lg:col-span-4'>
        {/* title: pets name */}
        <h2 className='text-6xl font-extrabold text-gray-600'>
          {data.name}
          {/* subtitle: pet age and gender */}
          <span className='block align-baseline text-2xl font-extrabold text-green-600'>
            {data.age} years old - {data.gender}
          </span>
        </h2>

        {/* description */}
        <p className='text-2xl font-thin'>
          {data.description}
        </p>

        {/* pet medical information */}
        <div className='flex flex-col space-y-2'>
          <p className='flex items-center text-sm text-gray-500'>
            <TbReportMedical size={25} className='inline text-gray-300' />
            <span className='font-bold'>Vaccination</span> (
            {data.vaccinationStatus === 'Vaccinated' ? '👍🏼' : '👎🏼'})
          </p>
          <p className='flex items-center text-sm text-gray-500'>
            <TbReportMedical size={25} className='inline text-gray-300' />
            <span className='font-bold'>Spayed/Neutered</span>(
            {data.spayedNeutered ? '👍🏼' : '👎🏼'})
          </p>
        </div>

        {/* apply for adoption */}
        {/* <ButtonApply buttonType='button' buttonText='Adopt Me' handleClick={handleAdoption} /> */}
        <Link href={{
          pathname: '/adoption',
          query: {
            petId: data.id,
            petShelterId: data.shelterId,
          }
          }}
        >
          Adopt Me
        </Link>


        {/* pet statistics */}
        <p className='text-sm text-gray-400'>
          <span className='font-bold overline underline-offset-1'>
            {data.name}
          </span>{' '}
          has been in PetMtach for{' '}
          <span className='font-bold text-rose-400'>{daysOnShelter}</span> days,
          and was update last time on{' '}
          <span className='font-bold'>
            {format(new Date(data.updatedAt), 'yyyy-MMM-d')}
          </span>
        </p>
      </div>

      {/* central colum */}
      <div className='flex flex-col space-y-6 lg:col-span-4'>
        <Image
          width='500'
          height='500'
          alt={data.name}
          src={`${data.imageUrl}`}
          className='rounded-lg border-2 border-green-200 shadow-md'
        />
        <PetSpecie id={data.specieId} />
        <PetBreed id={data.breedId} />
      </div>

      {/* right colum */}
      <div className='flex flex-col space-y-6 lg:col-span-4'>
        {/* pet status */}
        <PetStatus id={data.statusId} />
        {/* shelter */}
        <Shelter id={data.shelterId} />
      </div>
    </div>
  )
}
