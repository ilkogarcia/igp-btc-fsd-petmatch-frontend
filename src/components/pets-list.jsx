import Link from 'next/link'
import { LikeButton } from './likebutton'
import { fetchAllPets } from '../services/pet.services'
import toast from 'react-hot-toast'

async function PetsList() {
  const bodyRequest = {
    filterParams: {
      petStatus: 'Available for adoption',
    },
    orderParams: [
      {
        field: 'updatedAt',
        direction: 'DESC',
      },
    ],
  }

  const fetchData = await fetchAllPets(bodyRequest, 10, 1)
  if (fetchData.success === false) {
    toast.error(
      <div>
        <span>Something went wrong.</span>
        <span className='block align-baseline text-sm'>
          {fetchData.message}
        </span>
      </div>,
      { duration: 5000 }
    )
  }
  const pets = fetchData.data.pets
  
  return (
    (pets != null && pets.length > 0)
      ? (
          pets.map((pet) => (
            <div key={pet.id}>
              <Link href='/pets/[id]' as={`pets/${pet.id}`}>
                <h2 style={{ color: 'blue' }}>{pet.name}</h2>
              </Link>
              <p>{pet.description}</p>
              <LikeButton id={pet.id} />
            </div>
          ))
      ) : (
        <div>Sorry, we could not find any pets.</div>
      )
  )
}

export default PetsList
