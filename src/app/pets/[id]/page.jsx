import { fetchOnePet } from '@/services/pet.services'
import Image from 'next/image'
import { format } from 'date-fns'
import { TbReportMedical } from 'react-icons/tb'
import styles from './styles.module.css'
import PetSpecie from '@/components/pet-specie'
import PetBreed from '@/components/pet-breed'
import PetStatus from '@/components/pet-status'
import Shelter from '@/components/pet-shelter'

async function PetPage({ params }) {
  const { id } = params
  const response = await fetchOnePet(id)
  const { success, message, data } = response
  if (success === false) {
    return <div>{message}</div>
  }

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
        <div className=''>
          <button type='button' className={styles.apply_button}>
            Apply for adoption
          </button>
        </div>

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

export default PetPage
