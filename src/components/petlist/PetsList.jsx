/**
 * @module src/components/petlist/PetsList
 * @description Component to show a list of pets
 */

import Link from 'next/link'
import { LikeButton } from '../like/LikeButton'

const API_URL = 'https://petmatch.up.railway.app/api/v1'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ4LCJ1c2VyRW1haWwiOiJpbGtvLmdhcmNpYUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODI0MzkxODcsImV4cCI6MTY4MjUyNTU4N30.GoOLg4MwRlukZ1hSvcqhc7_Ew3-8Um86z8zJa9zv7nk'

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

const fetchAllPets = async () => {
  return await fetch(`${API_URL}/pets/search?limit=20&page=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(bodyRequest),
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function PetsList () {
  const fetchData = await fetchAllPets()
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
