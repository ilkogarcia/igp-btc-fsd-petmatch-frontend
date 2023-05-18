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
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

const deleteOnePet = async (id, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())
}

const createNewPet = async (bodyRequest, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyRequest),
  }).then((res) => res.json())
}

const updateOnePet = async (id, bodyRequest, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyRequest),
  }).then((res) => res.json())
}

module.exports = {
  fetchAllPets,
  fetchOnePet,
  deleteOnePet,
  createNewPet,
  updateOnePet,
}
