const addOneAdoptionApplication = async (data, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoptions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

const getOneAdoptionApplication = async (id, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoptions/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

const updateOneAdoptionApplication = async (id, data, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoptions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
}

const deleteOneAdoptionApplication = async (id, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoptions/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json())
}

const getAllAdoptionApplications = async (token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adoptions`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

module.exports = {
  addOneAdoptionApplication,
  getOneAdoptionApplication,
  updateOneAdoptionApplication,
  deleteOneAdoptionApplication,
  getAllAdoptionApplications,
}
