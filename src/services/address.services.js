const fetchAllCountries = async () => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/countries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
}

const fetchAllStateProvinces = async (countryId) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/state-provinces?countryId=${countryId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
}

const fetchAllCities = async (stateProvinceId) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cities?stateProvinceId=${stateProvinceId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => res.json())
}

module.exports = {
  fetchAllCountries,
  fetchAllStateProvinces,
  fetchAllCities,
}
