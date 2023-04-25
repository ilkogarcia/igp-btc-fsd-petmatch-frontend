/**
 * @module src/app/pets/[id]/page
 * @description - Pet page
 */

import Image from 'next/image'

const API_URL = 'https://petmatch.up.railway.app/api/v1'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ4LCJ1c2VyRW1haWwiOiJpbGtvLmdhcmNpYUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODI0MzkxODcsImV4cCI6MTY4MjUyNTU4N30.GoOLg4MwRlukZ1hSvcqhc7_Ew3-8Um86z8zJa9zv7nk'

const fetchOnePet = async (id) => {
  return await fetch(`${API_URL}/pets/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function PetPage ({ params }) {
  const { id } = params
  const response = await fetchOnePet(id)
  const { success, message, data } = response
  if (success === false) {
    return <div>{message}</div>
  }
  return (
    <>
      <h1>Name: {data.name}</h1>
      <Image width='150' height='150' alt={data.name} src={`${data.imageUrl}`} />
      <p>Age: {data.age}</p>
      <p>Description: {data.description}</p>
      <p>Vaccination: {data.vaccinationStatus}</p>
      <p>Spayed/Neutered: {data.spayedNeutered}</p>
    </>
  )
}
