
/**
 * @module login/layout
 * @description Login page layout
 */
'use client'

const API_URL = 'https://petmatch.up.railway.app/api/v1'

const logMeIn = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  const data = await response.json()
  return data
}

export default async function Login () {
  const bodyRequest = {
    email: 'ilko.garcia@gmail.com',
    password: '123456789abcd'
  }
  const loginResponse = await logMeIn(bodyRequest.email, bodyRequest.password)
  return (
    <div>
      <h2>{loginResponse.message}</h2>
      {loginResponse.sucess ? <p>Logged in {loginResponse.data.token}</p> : <p>Not logged in</p>}
    </div>
  )
}
