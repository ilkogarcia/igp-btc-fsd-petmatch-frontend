/* eslint-disable @next/next/no-img-element */
import '../../styles/globals.css'
import { fetchOnePet } from '../../services/PetMatch'

export default async function PetCard(params) {
  const { id } = params
  const response = await fetchOnePet(id)
  const { success, message, data } = response
  if (success === false) {
    return <div>{message}</div>
  }

  return (
    <div className='max-w-sm overflow-hidden rounded shadow-lg bg-white'>
      <img className='w-full' src={data.imageUrl} alt={data.name} />
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>
          {data.name} ({data.age})
        </div>
        <p className='text-base text-gray-700'>{data.description}</p>
      </div>
      <div className='px-6 pb-2 pt-4'>
        <span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
          #AdoptDontShop
        </span>
        <span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
          #RescuePetLove
        </span>
        <span className='mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700'>
          #HappyTailsAdoption
        </span>
      </div>
    </div>
  )
}
