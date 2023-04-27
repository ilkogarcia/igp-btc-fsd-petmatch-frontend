/**
 * @module PetMatch Service
 * @description This module is responsible off data fetching and manipulation from the PetMatch API.
 */

const API_URL = 'https://petmatch.up.railway.app/api/v1'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ4LCJ1c2VyRW1haWwiOiJpbGtvLmdhcmNpYUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODI1Mjc0MDQsImV4cCI6MTY4MjYxMzgwNH0.mji5eLQUpADbGbgp7JxI3U8v4vfoj7M8o6TAR91AGqM'

const fetchAllPets = async (bodyRequest) => {
  return await fetch(`${API_URL}/pets/search?limit=20&page=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
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
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

const signIn = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  const data = await response.json()
  return data
}

const signUp = async (email, password) => {
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
  signIn,
  signUp,
}
