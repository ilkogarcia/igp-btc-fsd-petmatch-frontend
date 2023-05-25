const getOneUser = async (id, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())
}

const updateOneUser = async (id, data, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

module.exports = {
  getOneUser,
  updateOneUser,
}
