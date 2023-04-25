/**
 * @module src/app/pets/[id]/layout
 * @description - This file is used to render the layout of the pets/[id] page
 */

import Link from 'next/link'

const fetchOnePet = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Pet ({ children, params }) {
  const { id } = params
  const pet = await fetchOnePet(id)
  return (
    <>
      <h1>Página de una mascota específica:  {id}</h1>
      <h3>{pet.title}</h3>
      <p>{pet.body}</p>
      <p>Author: {pet.userId}</p>
      <Link href={`/pets/${id}/comments`}>Ver comentarios</Link>
      {children}
    </>
  )
}
