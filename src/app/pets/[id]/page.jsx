
/**
 * @file page.jsx
 * @description Page where the list of pets is displayed.
 */

import { LikeButton } from '@/components/like/LikeButton'

const fetchOnePet = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function Pet ({ params }) {
  const { id } = params
  const pet = await fetchOnePet(id)
  return (
    <>
      <h1>Página de una mascota específica:  {id}</h1>
      <h3>{pet.title}</h3>
      <p>{pet.body}</p>
      <p>Author: {pet.userId}</p>
      <LikeButton id={pet.id} />
    </>
  )
}
