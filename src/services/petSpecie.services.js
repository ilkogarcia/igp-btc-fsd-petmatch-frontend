const fetchOneSpecie = async (id) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet-species/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

const fetchAllSpecies = async (bodyRequest, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet-species/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyRequest),
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

module.exports = {
  fetchOneSpecie,
  fetchAllSpecies,
}
