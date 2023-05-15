/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { getOneUser } from '@/services/user.services'

export default function UserInfo() {
  const [user, setUser] = useState(null)
  const { data: session } = useSession()

  useEffect(() => {
    async function loadUser() {
      const res = await getOneUser(
        session?.user?.data.id,
        session?.user?.data.token
      )
      setUser(res.data)
    }
    if (session) {
      loadUser()
    }
  }, [])

  return (
    <>
      {user != null ? (
        <div className='flex h-auto w-auto flex-col space-y-2'>
          <p className='text-xs font-bold uppercase text-green-600'>
            User information
          </p>
          <p className='text-lg font-normal text-gray-400'>
            <span className='font-semibold'>Name:</span> {user.firstName}{' '}
            {user.lastName}
          </p>
          <p className='text-lg font-normal text-gray-400'>
            <span className='font-semibold'>Email:</span> {user.email}
          </p>
          <p className='text-lg font-normal text-gray-400'>
            <span className='font-semibold'>Phone:</span> {user.phoneNumber}
          </p>
          <p className='text-lg font-normal text-gray-400'>
            <span className='font-semibold'>Address:</span> {user.addressLine1}{' '}
            {user.addressLine2} {user.city} {user.state} {user.country}{' '}
            {user.postalCode}
          </p>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
