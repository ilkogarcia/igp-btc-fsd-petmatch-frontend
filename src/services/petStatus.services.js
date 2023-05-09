const fetchOnePetStatus = async (id) => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet-statuses/${id}`, {
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
  fetchOnePetStatus,
}
