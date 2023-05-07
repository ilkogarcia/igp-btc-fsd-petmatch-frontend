const getOneUser = async (id) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

const updateOneUser = async (id, data) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

module.exports = {
  getOneUser,
  updateOneUser,
}
