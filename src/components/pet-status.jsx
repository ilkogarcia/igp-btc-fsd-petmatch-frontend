'use client'

import { fetchOnePetStatus } from '@/services/petStatus.services'
import { useEffect, useState } from 'react'

function PetStatus({ id }) {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    async function loadStatus() {
      const res = await fetchOnePetStatus(id)
      console.log(res)
      setStatus(res.data.petStatus)
    }
    loadStatus()
  }, [id])

  return (
    <>
      {status && (
        <div className='flex h-auto w-auto flex-col space-y-2'>
          <p className='upercase text-xs font-bold text-green-600'>Staus</p>
          <p className='text-xl font-semibold text-gray-500'>
            {status.statusName}
          </p>
          <p className='text-normal text-gray-400'>
            {status.statusDescription}
          </p>
        </div>
      )}
    </>
  )
}

export default PetStatus
