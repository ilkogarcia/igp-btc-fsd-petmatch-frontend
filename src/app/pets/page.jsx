/**
 * @file page.jsx
 * @description Page where the list of pets is displayed.
 */

import { LikeButton } from '@/components/like/LikeButton'
import Link from 'next/link'

const fetchAllPets = async () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function PetsPage () {
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
