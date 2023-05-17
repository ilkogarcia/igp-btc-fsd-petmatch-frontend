'use client'

import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { fetchAllPets, deleteOnePet } from '@/services/pet.services'
import toast from 'react-hot-toast'
import PopUpMessageConfirmation from '../popup-message-confirmation'
import { format } from 'date-fns'

export default function PetsList() {
  const { data: session } = useSession()

  const [pets, setPets] = useState([])
  const [info, setInfo] = useState({})
  const [page, setPage] = useState(1)
  const [lastPage, setLastPage] = useState(false)
  const [selected, setSelected] = useState([])
  const [listUpdated, setListUpdated] = useState(false)

  const [openConfirmation, setOpenConfirmation] = useState(false)
  const [confirmationMessage, setConfirmationMessage] = useState('')

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
    setSelected([])
  }

  const handlePreviousPage = () => {
    if (info.offset === 0) {
      return
    }
    setPage((prev) => prev - 1)
    setSelected([])
  }

  const handleAdd = () => {
    console.log('Add')
  }

  const handleEdit = () => {
    console.log('Edit')
  }

  const handleConfirmation = () => {
    const message = `Are you sure you want to delete pet with the id ${selected[0]}?`
    setConfirmationMessage(message)
    setOpenConfirmation(true)
  }

  const handleDelete = async () => {
    const res = await deleteOnePet(selected, session?.user?.data.token)
    if (res.sucess) {
      toast.success(res.message, { duration: 3000 })
      setSelected([])
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
    if (selected.includes(e.id)) {
      setSelected(selected.filter((id) => id !== e.id))
    } else {
      if (e.id !== selected[0]) {
        if (e.checked) {
          setSelected([e.id])
        }
      }
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
          className='rounded-md bg-green-600 px-4 py-2 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600'
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className='rounded-md bg-rose-600 px-4 py-2 text-rose-300 shadow-sm transition duration-300 ease-in-out hover:bg-rose-300 hover:text-rose-600 disabled:bg-gray-200  disabled:text-gray-300'
          disabled={selected.length === 0}
          onClick={handleConfirmation}
        >
          Delete
        </button>
      </div>

      {/* table */}
      <div className='flex flex-col justify-between'>
        <table className='shadow-lg bg-white border-collapse text-sm font-light table-auto'>
          <tr>
            <th className='bg-green-100 border text-left px-4 py-2'>#</th>
            <th className='bg-green-100 border text-left px-4 py-2'>Name</th>
            <th className='bg-green-100 border text-left px-4 py-2'>Specie</th>
            <th className='bg-green-100 border text-left px-4 py-2'>Breed</th>
            <th className='hidden md:table-cell bg-green-100 border text-left px-4 py-2'>Gender</th>
            <th className='hidden md:table-cell bg-green-100 border text-left px-4 py-2'>Age</th>
            <th className='hidden lg:table-cell bg-green-100 border text-left px-4 py-2'>Status</th>
            <th className='hidden lg:table-cell bg-green-100 border text-left px-4 py-2'>Updated At</th>
          </tr>
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
              <td className='border px-4 py-2'>{pet.PetBreed.PetSpecie.specieCommonName}</td>
              <td className='border px-4 py-2'>{pet.PetBreed.breedName}</td>
              <td className='hidden md:table-cell border px-4 py-2'>{pet.gender}</td>
              <td className='hidden md:table-cell border px-4 py-2'>{pet.age}</td>
              <td className='hidden lg:table-cell border px-4 py-2'>{pet.PetStatus.statusName}</td>
              <td className='hidden lg:table-cell border px-4 py-2'>{format(new Date(pet.updatedAt), 'MM/dd/yyyy')}</td>

            </tr>
          ))}
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
      {/* modal */}
      { openConfirmation && (
        <PopUpMessageConfirmation message={confirmationMessage} onClose={() => setOpenConfirmation(false)} onConfirmation={() => handleDelete()} />
      )}
    </div>
  )
}
