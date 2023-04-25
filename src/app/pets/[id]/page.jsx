/**
 * @module src/app/pets/[id]/page
 * @description - Pet page
 */

import { fetchOnePet } from '../../../services/PetMatch'
import Image from 'next/image'

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
