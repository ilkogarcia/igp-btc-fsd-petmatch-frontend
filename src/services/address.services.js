const fetchAllCountries = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

const fetchAllStateProvinces = async (countryId, token) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/state-provinces?countryId=${countryId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
    }
  ).then((res) => res.json())
}

const fetchAllCities = async (stateProvinceId, token) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cities?stateProvinceId=${stateProvinceId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
    }
  ).then((res) => res.json())
}

module.exports = {
  fetchAllCountries,
  fetchAllStateProvinces,
  fetchAllCities,
}
