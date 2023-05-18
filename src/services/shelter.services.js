const fetchOneShelter = async (id, token) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/shelters/${id}`, {
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

const fetchAllShelters = async (bodyRequest, token) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/shelters/search?limit=${100}&page=${1}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
      body: JSON.stringify(bodyRequest),
    }
  ).then((res) => res.json())
}

module.exports = {
  fetchOneShelter,
  fetchAllShelters,
}
