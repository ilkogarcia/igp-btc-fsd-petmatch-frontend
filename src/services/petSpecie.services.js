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

module.exports = {
  fetchOneSpecie,
}