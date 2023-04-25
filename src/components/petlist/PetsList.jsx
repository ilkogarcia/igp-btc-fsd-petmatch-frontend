/**
 * @module src/components/petlist/PetsList
 * @description Component to show a list of pets
 */

import Link from 'next/link'
import { LikeButton } from '../like/LikeButton'

const fetchAllPets = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function PetsList () {
  const pets = await fetchAllPets()

  return (
    pets.slice(0, 5).map(pet => (
      <article key={pet.id}>
        <Link href='/pets/[id]' as={`pets/${pet.id}`}>
          <h2 style={{ color: 'blue' }}>{pet.title}</h2>
        </Link>
        <p>{pet.body}</p>
        <LikeButton id={pet.id} />
      </article>
    ))
  )
}
