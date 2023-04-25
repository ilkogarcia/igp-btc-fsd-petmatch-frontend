/**
 * @module src/components/petlist/PetsList
 * @description Component to show a list of pets
 */

import { fetchAllPets } from '../../services/PetMatch'
import Link from 'next/link'
import { LikeButton } from '../like/LikeButton'

export async function PetsList () {
  const bodyRequest = {
    filterParams: {
      speciesName: 'Cat'
    },
    orderParams: [
      {
        field: 'updatedAt',
        direction: 'DESC'
      }
    ]
  }

  const fetchData = await fetchAllPets(bodyRequest)
  if (fetchData.success === false) {
    return <div>{fetchData.message}</div>
  }
  const pets = fetchData.data.pets
  return (
    pets.map(pet => (
      <article key={pet.id}>
        <Link href='/pets/[id]' as={`pets/${pet.id}`}>
          <h2 style={{ color: 'blue' }}>{pet.name}</h2>
        </Link>
        <p>{pet.description}</p>
        <LikeButton id={pet.id} />
      </article>
    ))
  )
}
