/**
 * @file page.jsx
 * @description Page where the list of pets is displayed.
 */

const fetchAllPets = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function PetsPage () {
  const pets = await fetchAllPets()
  return (
    pets.slice(0, 5).map(pet => (
      <p key={pet.id}>
        <a href={`/pets/${pet.id}`}>{pet.title}</a>
      </p>
    ))
  )
}
