/**
 * @module PetMatch Service
 * @description This module is responsible off data fetching and manipulation from the PetMatch API.
 */

const API_URL = 'https://petmatch.up.railway.app/api/v1'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQ4LCJ1c2VyRW1haWwiOiJpbGtvLmdhcmNpYUBnbWFpbC5jb20iLCJ1c2VyUm9sZSI6ImFkbWluaXN0cmF0b3IiLCJpYXQiOjE2ODI0MzkxODcsImV4cCI6MTY4MjUyNTU4N30.GoOLg4MwRlukZ1hSvcqhc7_Ew3-8Um86z8zJa9zv7nk'

export const fetchAllPets = async (bodyRequest) => {
  return await fetch(`${API_URL}/pets/search?limit=20&page=1`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(bodyRequest),
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export const fetchOnePet = async (id) => {
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

export const logMeIn = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  const data = await response.json()
  return data
}
