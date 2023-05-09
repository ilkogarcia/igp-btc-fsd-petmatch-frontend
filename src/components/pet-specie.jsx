'use client'

import { fetchOneSpecie } from '@/services/petSpecie.services'
import { useEffect, useState } from 'react'

function PetSpecie({ id }) {
  const [specie, setSpecie] = useState(null)

  useEffect(() => {
    async function loadSpecie() {
      const res = await fetchOneSpecie(id)
      console.log(res)
      setSpecie(res.data.petSpecie)
    }
    loadSpecie()
  }, [id])

  return (
    <>
      {specie && (
        <div className='flex h-auto w-auto flex-col space-y-2'>
          <p className='upercase text-xs font-bold text-green-600'>Specie</p>
          <p className='text-xl font-semibold text-gray-500'>
            {specie.specieScientificName} ({specie.specieCommonName})
          </p>
          <p className='text-normal text-gray-400'>
            {specie.specieDescription}
          </p>
        </div>
      )}
    </>
  )
}

export default PetSpecie
