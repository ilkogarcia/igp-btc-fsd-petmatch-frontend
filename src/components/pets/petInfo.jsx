import Image from 'next/image'

async function fetchOnePet(id) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pets/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

export default async function PetInfo(params) {
  const { id } = params
  const { data: pet } = await fetchOnePet(id)

  return (
    <div className='flex h-auto w-auto flex-col space-y-2'>
      <p className='uppercase text-xs font-bold text-green-600'>Pet information</p>
      <Image
        width='500'
        height='500'
        alt={pet.name}
        src={`${pet.imageUrl}`}
        className='rounded-lg border-2 border-green-200 shadow-md'
      />
      <p className='text-lg font-normal text-gray-400'>
        <span className='font-bold text-green-600'>{pet.name}</span> - {pet.age} year old - {pet.gender}
      </p>
    </div>
  )
}
