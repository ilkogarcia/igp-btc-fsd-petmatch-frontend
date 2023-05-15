async function fetchOneSpecie (id) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet-species/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

export default async function PetSpecie (params) {
  const { id } = params
  const {
    data: { petSpecie },
  } = await fetchOneSpecie(id)

  return (
    <div className='flex h-auto w-auto flex-col space-y-2'>
      <p className='uppercase text-xs font-bold text-green-600'>Specie</p>
      <p className='text-xl font-semibold text-gray-500'>
        {petSpecie.specieScientificName} ({petSpecie.specieCommonName})
      </p>
      <p className='text-normal text-gray-400'>{petSpecie.specieDescription}</p>
    </div>
  )
}
