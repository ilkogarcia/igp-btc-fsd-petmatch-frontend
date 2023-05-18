'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { fetchAllPets, deleteOnePet } from '@/services/pet.services'
import toast from 'react-hot-toast'
import PopUpMessageConfirmation from '../popup-message-confirmation'
import { format } from 'date-fns'
import PetAdd from './petAdd'

export default function PetsList() {
  const { data: session } = useSession()

  // State for the list of pets shows in the table and to update the list
  const [pets, setPets] = useState([])
  const [listUpdated, setListUpdated] = useState(false)

  // States needed to manage list pagination
  const [info, setInfo] = useState({})
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(false)
  
  // States needed to manage the confirmation popup
  const [openConfirmation, setOpenConfirmation] = useState(false)
  const [confirmationMessage, setConfirmationMessage] = useState('')
  
  // States needed to manage the add/edit pet popup
  const [showAddPet, setShowAddPet] = useState(false)
  
  // Array to store the selected pets on the list
  const [selectedPets, setSelectedPets] = useState([])

  useEffect(() => {
    const loadPets = async () => {
      const petsQuery = {
        filterParams: {},
        orderParams: [
          {
            field: 'updatedAt',
            direction: 'DESC',
          },
        ],
      }
      const res = await fetchAllPets(petsQuery, 10, page)
      setPets(res.data.pets)
      setInfo(res.info)
    }
    loadPets()
  }, [page, listUpdated])

  const handleNextPage = () => {
    const newOffset = info.offset + info.limit
    if (newOffset >= info.total) {
      setLastPage(true)
      return
    }
    setPage((prev) => prev + 1)
    setSelectedPets([])
  }

  const handlePreviousPage = () => {
    if (info.offset === 0) {
      return
    }
    setPage((prev) => prev - 1)
    setSelectedPets([])
  }

  const handleAdd = () => {
    setShowAddPet(true)
  }

  const handleEdit = () => {
    if (selectedPets.length === 0) {
      toast.error('Please select at least one pet to edit', { duration: 3000 })
    } else if (selectedPets.length > 1) {
      toast.error('Please select only one pet to edit', { duration: 3000 })
    } else {
      setShowAddPet(true)
    }
  }

  const handleConfirmation = () => {
    if (selectedPets.length === 0) {
      toast.error('Please select at least one pet to delete', { duration: 3000 })
    } else if (selectedPets.length > 1) {
      toast.error('Please select only one pet to delete', { duration: 3000 })
    } else {
      const message = `Please confirm that you want to remove pet with id ${selectedPets[0]}. Are you sure?`
      setConfirmationMessage(message)
      setOpenConfirmation(true)
    }
  }

  const handleDelete = async () => {
    const res = await deleteOnePet(selectedPets[0], session?.user?.data.token)
    if (res.sucess) {
      toast.success(res.message, { duration: 3000 })
      setSelectedPets([])
      setListUpdated((prev) => !prev)
    } else {
      toast.error(
        <div>
          <span>Something went wrong!</span>
          <br />
          <span className='text-sm'>{res.message}</span>
        </div>,
        { duration: 3000 }
      )
    }
  }

  const handleSelect = (e) => {
    const indexToRemove = selectedPets.indexOf(e.id)
    const isOnArray = (indexToRemove !== -1)
    
    if (e.checked && !isOnArray) {
      setSelectedPets([...selectedPets, e.id])
    } else if (!e.checked && isOnArray) {
      setSelectedPets(selectedPets.filter((_, i) => i !== indexToRemove))
    }
  }

  return (
    <div className='w-full'>
      {/* header */}
      <div className='flex-roy mb-6 flex justify-end space-x-4'>
        <button
          className='rounded-md bg-green-600 px-4 py-2 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600'
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className='rounded-md bg-green-600 px-4 py-2 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600 disabled:bg-gray-200  disabled:text-gray-300'
          disabled={selectedPets.length === 0}
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className='rounded-md bg-rose-600 px-4 py-2 text-rose-300 shadow-sm transition duration-300 ease-in-out hover:bg-rose-300 hover:text-rose-600 disabled:bg-gray-200  disabled:text-gray-300'
          disabled={selectedPets.length === 0}
          onClick={handleConfirmation}
        >
          Delete
        </button>
      </div>

      {/* table */}
      <div className='flex flex-col justify-between'>
        <table className='table-auto border-collapse bg-white text-sm font-light shadow-lg'>
          <thead>
            <tr className='bg-green-100 text-left text-gray-400'>
              <th className='border px-4 py-4'>#</th>
              <th className='border px-4 py-4'>Name</th>
              <th className='border px-4 py-4'>Specie</th>
              <th className='border px-4 py-4'>Breed</th>
              <th className='hidden border bg-green-100 px-4 py-2 text-left md:table-cell'>
                Gender
              </th>
              <th className='hidden border bg-green-100 px-4 py-2 text-left md:table-cell'>
                Age
              </th>
              <th className='hidden border bg-green-100 px-4 py-2 text-left lg:table-cell'>
                Status
              </th>
              <th className='hidden border bg-green-100 px-4 py-2 text-left lg:table-cell'>
                Updated At
              </th>
            </tr>
          </thead>
          <tbody>
            {pets.map((pet) => (
              <tr key={pet.id}>
                <td className='border px-4 py-2'>
                  <input
                    type='checkbox'
                    id={pet.id}
                    className='mr-2 inline align-middle'
                    onChange={(e) => handleSelect(e.target)}
                  />
                </td>
                <td className='border px-4 py-2'>{pet.name}</td>
                <td className='border px-4 py-2'>
                  {pet.PetBreed.PetSpecie.specieCommonName}
                </td>
                <td className='border px-4 py-2'>{pet.PetBreed.breedName}</td>
                <td className='hidden border px-4 py-2 md:table-cell'>
                  {pet.gender}
                </td>
                <td className='hidden border px-4 py-2 md:table-cell'>
                  {pet.age}
                </td>
                <td className='hidden border px-4 py-2 lg:table-cell'>
                  {pet.PetStatus.statusName}
                </td>
                <td className='hidden border px-4 py-2 lg:table-cell'>
                  {format(new Date(pet.updatedAt), 'MM/dd/yyyy')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination controls */}
      <div className='mt-6 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'>
        <div className='flex flex-1 justify-between sm:hidden'>
          <a
            href='#'
            className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
            onClick={handlePreviousPage}
          >
            Previous
          </a>
          <a
            href='#'
            className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
            onClick={handleNextPage}
          >
            Next
          </a>
        </div>
        <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
          <div>
            <p className='text-sm text-gray-700'>
              Showing <span className='font-medium'>{info.offset + 1}</span> to{' '}
              <span className='font-medium'>{info.offset + info.limit}</span> of{' '}
              <span className='font-medium'>{info.total}</span> results
            </p>
          </div>
          <div>
            <div className='isolate inline-flex -space-x-px rounded-md shadow-sm'>
              <button
                disabled={info.offset === 0}
                onClick={handlePreviousPage}
                className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <button
                disabled={lastPage}
                onClick={handleNextPage}
                className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <svg
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modals */}
      {openConfirmation && (
        <PopUpMessageConfirmation
          message={confirmationMessage}
          onClose={() => setOpenConfirmation(false)}
          onConfirmation={() => handleDelete()}
        />
      )}
      {showAddPet && (
        <PetAdd
          onClose={() => setShowAddPet(false)}
          selectedPet={pets.find((pet) => pet.id === parseInt(selectedPets[0]))}
        />
      )}
    </div>
  )
}
