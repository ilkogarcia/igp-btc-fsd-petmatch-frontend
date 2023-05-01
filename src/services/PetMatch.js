/**
 * @module PetMatch Service
 * @description This module is responsible off data fetching and manipulation from the PetMatch API.
 */

const API_URL = 'https://petmatch.up.railway.app/api/v1'

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ4LCJ1c2VyRW1haWwiOiJpbGtvLmdhcmNpYUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODI2MTQ2OTksImV4cCI6MTY4MjcwMTA5OX0.GismXrULlWdrQFFhC1xJERYUiYH_Rxbh_uDerN78-Kc'

const fetchAllPets = async (bodyRequest) => {
  return await fetch(`${API_URL}/pets/search?limit=20&page=1`, {
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
  return await fetch(`${API_URL}/pets/${id}`, {
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
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const user = await response.json()
  return user
}

const signMeUp = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
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
