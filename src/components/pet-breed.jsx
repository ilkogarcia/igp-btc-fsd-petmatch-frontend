'use client'

import { fetchOneBreed } from '@/services/petBreed.services'
import { useEffect, useState } from 'react'
import { TbRulerMeasure, TbWeight, TbCalendar } from 'react-icons/tb'

function PetBreed({ id }) {
  const [breed, setBreed] = useState(null)

  useEffect(() => {
    async function loadBreed() {
      const res = await fetchOneBreed(id)
      console.log(res)
      setBreed(res.data.petBreed)
    }
    loadBreed()
  }, [id])

  return (
    <>
      {breed && (
        <div className='flex h-auto w-auto flex-col space-y-2'>
          <p className='upercase text-xs font-bold text-green-600'>Breed</p>
          <p className='text-xl font-semibold text-gray-500'>
            {breed.breedName}
          </p>
          <p className='text-sm text-gray-400'>{breed.breedDescription}</p>
          <p className='text-sm text-green-300'>
            Standard size, weight and life expectancy
          </p>
          <div className='mx-auto grid h-full w-full grid-cols-3 gap-4'>
            <div className='col-span-1 grid h-full w-full place-items-center rounded-md border-2 border-gray-200 p-4 text-center text-gray-400'>
              <TbRulerMeasure size={35} className='text-gray-200' />
              <span className='text-sm'>{breed.averageHeight}</span>
            </div>
            <div className='col-span-1 grid h-full w-full place-items-center items-center justify-center rounded-md border-2 border-gray-200 p-4 text-center text-gray-400'>
              <TbWeight size={35} className='text-gray-200' />
              <span className='text-sm'>{breed.averageWeight}</span>
            </div>
            <div className='col-span-1 grid h-full w-full place-items-center items-center justify-center rounded-md border-2 border-gray-200 p-4 text-center text-gray-400'>
              <TbCalendar size={35} className='text-gray-200' />
              <span className='text-sm'>{breed.averageLifeExpectancy}</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PetBreed
