const logMeIn = async (email, password) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json())
}

const signMeUp = async (email, password) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => res.json())
}

const verifyEmail = async (token) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-email?token=${token}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
}

const forgotMyPassword = async (email) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  ).then((res) => res.json())
}

const resetMyPassword = async (token) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password?token=${token}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
}

module.exports = {
  logMeIn,
  signMeUp,
  verifyEmail,
  forgotMyPassword,
  resetMyPassword,
}
