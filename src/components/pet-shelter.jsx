'use client'

import { fetchOneShelter } from '@/services/shelter.services'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { TbBrowser, TbPhoneCall, TbMail } from 'react-icons/tb'

function Shelter({ id }) {
  const [shelter, setShelter] = useState(null)
  const { data: session } = useSession()

  useEffect(() => {
    async function loadShelter() {
      const res = await fetchOneShelter(id, session?.user.token)
      setShelter(res.data)
    }
    if (session) {
      loadShelter()
    }
  }, [id, session])

  return (
    <>
      {(shelter != null) ? (
        <div className='flex flex-col space-y-4'>
          <p className='uppercase text-xs font-bold text-green-600'>Location & Contact</p>
          <p className='text-xl font-semibold text-gray-500'>{shelter.name}</p>
          <p className='text-normal text-gray-400'>
            {shelter.addressLine1 && `${shelter.addressLine1}`}
            {shelter.addressLine2 && `, ${shelter.addressLine2}`}
            {shelter.city && `, ${shelter.city}`}
            {shelter.state && `, ${shelter.state}`}
            {shelter.country && `, ${shelter.country}`}
            {shelter.postalCode && `, ${shelter.postalCode}`}
          </p>

          <div className='flex flex-col space-y-2'>
            {shelter.contactEmail && (
              <p className='flex items-center text-sm text-gray-500'>
                <TbMail size={15} className='mr-2 inline text-gray-300' />
                {shelter.contactEmail}
              </p>
            )}
            {shelter.contactPhone && (
              <p className='flex items-center text-sm text-gray-500'>
                <TbPhoneCall size={15} className='mr-2 inline text-gray-300' />
                {shelter.contactPhone}
              </p>
            )}
            {shelter.webUrl && (
              <p className='flex items-center text-sm text-gray-500'>
                <TbBrowser size={15} className='mr-2 inline text-gray-300' />
                {shelter.webUrl}
              </p>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Shelter
