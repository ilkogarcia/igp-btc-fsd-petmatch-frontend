import { TbRulerMeasure, TbWeight, TbCalendar } from 'react-icons/tb'

async function fetchOnePetBreed(id) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet-breeds/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

export default async function PetBreed(params) {
  const { id } = params
  const { data: { petBreed } } = await fetchOnePetBreed(id)

  return (
    <div className='flex h-auto w-auto flex-col space-y-2'>
      <p className='uppercase text-xs font-bold text-green-600'>Breed</p>
      <p className='text-xl font-semibold text-gray-500'>
        {petBreed.breedName}
      </p>
      <p className='text-sm text-gray-400'>{petBreed.breedDescription}</p>
      <p className='text-sm text-green-300'>
        Standard size, weight and life expectancy
      </p>
      <div className='mx-auto grid h-full w-full grid-cols-3 gap-4'>
        <div className='col-span-1 grid h-full w-full place-items-center rounded-md border-2 border-gray-200 p-4 text-center text-gray-400'>
          <TbRulerMeasure size={35} className='text-gray-200' />
          <span className='text-sm'>{petBreed.averageHeight}</span>
        </div>
        <div className='col-span-1 grid h-full w-full place-items-center items-center justify-center rounded-md border-2 border-gray-200 p-4 text-center text-gray-400'>
          <TbWeight size={35} className='text-gray-200' />
          <span className='text-sm'>{petBreed.averageWeight}</span>
        </div>
        <div className='col-span-1 grid h-full w-full place-items-center items-center justify-center rounded-md border-2 border-gray-200 p-4 text-center text-gray-400'>
          <TbCalendar size={35} className='text-gray-200' />
          <span className='text-sm'>{petBreed.averageLifeExpectancy}</span>
        </div>
      </div>
    </div>
  )
}
