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

module.exports = {
  fetchOneShelter,
}
