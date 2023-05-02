/**
 * @module PetMatch Service
 * @description This module is responsible off data fetching and manipulation from the PetMatch API.
 */

const fetchAllPets = async (bodyRequest) => {
  return await fetch(`${process.env.API_URL}/pets/search?limit=20&page=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(bodyRequest),
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

const fetchOnePet = async (id) => {
  return await fetch(`${process.env.API_URL}/pets/${id}`, {
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

const logMeIn = async (email, password) => {
  const response = await fetch(`${process.env.API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const user = await response.json()
  return user
}

const signMeUp = async (email, password) => {
  const response = await fetch(`${process.env.API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await response.json()
  return data
}

module.exports = {
  fetchAllPets,
  fetchOnePet,
  logMeIn,
  signMeUp,
}
