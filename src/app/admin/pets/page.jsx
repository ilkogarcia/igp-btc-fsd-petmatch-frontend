'use client'
import { useSession } from 'next-auth/react'
import PetList from "@/components/pets/petsList";

export default function PetsManagementPage () {
  const { status } = useSession()
  if (status === 'unauthenticated') {
    return <div>Access Denied</div>
  }

  return (
    <div className='flex flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          Pets <span className='text-green-600'>Management</span>
        </h1>
        <p className='text-lg text-gray-600'>
          From here you can manage all pets registered on the platform.
        </p>
      </div>

      {/* applications list */}
      <div className='flex flex-col'>
        <PetList />
      </div>
    </div>
  )
}
