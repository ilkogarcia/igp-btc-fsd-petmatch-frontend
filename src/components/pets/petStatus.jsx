async function fetchOnePetStatus (id) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet-statuses/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60,
      },
    })
    .then((res) => res.json())
}

export default async function PetStatus (params) {
  const { id } = params
  const { data: { petStatus } } = await fetchOnePetStatus(id)

  return (
    <div className='flex h-auto w-auto flex-col space-y-2'>
      <p className='uppercase text-xs font-bold text-green-600'>Status</p>
      <p className='text-xl font-semibold text-gray-500'>
        {petStatus.statusName}
      </p>
      <p className='text-normal text-gray-400'>{petStatus.statusDescription}</p>
    </div>
  )
}
