import { fetchOnePet } from '@/services/pet.services'
import Image from 'next/image'

async function PetPage({ params }) {
  const { id } = params
  const response = await fetchOnePet(id)
  const { success, message, data } = response
  if (success === false) {
    return <div>{message}</div>
  }

  return (
    <>
      <div className='col-span-4 flex flex-col'>
        <Image
          width='500'
          height='500'
          alt={data.name}
          src={`${data.imageUrl}`}
          className='rounded-lg shadow-md'
        />
      </div>
      <div className='col-span-8 flex flex-col text-left'>
        <h3 className='text-6xl text-green-600'>{data.name}</h3>
        <p>Age: {data.age}</p>
        <p>Description: {data.description}</p>
        <p>Vaccination: {data.vaccinationStatus}</p>
        <p>Spayed/Neutered: {data.spayedNeutered}</p>
        <p>Specie: {data.specieId}</p>
        <p>Breed: {data.breedId}</p>
        <p>Gender: {data.gender}</p>
        <p>Shelter: {data.shelterId}</p>
        <p>Status: {data.statusId}</p>
        <p>Created At: {data.createdAt}</p>
        <p>Updated At: {data.updatedAt}</p>
      </div>
    </>
  )
}

export default PetPage
