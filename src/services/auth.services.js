/**
 * @module src/services/auth.services.js
 * @description Service layer for handling authentication related requests.
 */

const logMeIn = async (email, password) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }
  )
  const user = await response.json()
  return user
}

const signMeUp = async (email, password) => {
  console.log(
    'process.env.NEXT_PUBLIC_API_URL',
    process.env.NEXT_PUBLIC_API_URL
  )

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }
  )
  const data = await response.json()
  return data
}

const verifyEmail = async (token) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email?token=${token}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  )
  const data = await response.json()
  return data
}

const forgotMyPassword = async (email) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
  )
  const data = await response.json()
  return data
}

const resetMyPassword = async (token) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password?token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }
  )
  const data = await response.json()
  return data
}

module.exports = {
  logMeIn,
  signMeUp,
  verifyEmail,
  forgotMyPassword,
  resetMyPassword,
}
