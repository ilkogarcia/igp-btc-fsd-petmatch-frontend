/**
 * @module src/services/pet.services.js
 * @description Service layer for handling pet related requests.
 */

const fetchAllPets = async (bodyRequest, limit, page) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pets/search?limit=${limit}&page=${page}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyRequest),
    }
  ).then((res) => res.json())
}

const fetchOnePet = async (id) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

module.exports = {
  fetchAllPets,
  fetchOnePet,
}
