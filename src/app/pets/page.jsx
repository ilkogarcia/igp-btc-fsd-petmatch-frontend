/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { fetchAllPets } from '@/services/pet.services'
import PetCard from '@/components/pet-card'
import { HiOutlineFunnel } from 'react-icons/hi2'
import PetFilter from '@/components/pets/petFilter'

function PetsPage() {
  const [pets, setPets] = useState([])
  const [page, setPage] = useState(1)
  const [openFilter, setOpenFilter] = useState(false)

  const loadPets = async () => {
    const request = {
      filterParams: {},
      orderParams: [
        {
          field: 'updatedAt',
          direction: 'DESC',
        },
      ],
    }
    const res = await fetchAllPets(request, 10, page)
    console.log(res)
    if (res.sucess) {
      setPets((prev) => [...prev, ...res.data.pets])
    }
  }

  useEffect(() => {
    loadPets()
  }, [page])

  return (
    <div className='h-fit space-y-6 bg-white pb-40'>
      {/* page top section  */}
      <div className='mx-auto grid w-4/5 gap-10 pb-20 pt-40 lg:grid-cols-12'>
        <div className='flex flex-col items-start justify-start space-y-6 text-left lg:col-span-5'>
          <span className='text-green-600'>Available Pets</span>
          <h2 className='text-6xl font-extrabold text-gray-600'>
            Find your perfect{' '}
            <span className='text-green-600'>Furry Match!</span>
          </h2>
        </div>
        <div className='flex flex-col items-start justify-end space-y-6 text-left lg:col-span-7'>
          <p className='text-xl text-gray-400'>
            We have a wide variety of pets available for adoption, from cats to
            dogs, rabbits to birds. Simply use our filter function to narrow
            down your search based on your preferences. With our infinite
            scroll, you can easily find the pet you've been looking for.
          </p>
          <button 
            onClick={() => setOpenFilter(true)}
            className='w-4/5 rounded-md font-semibold bg-green-600 px-3 py-4 text-green-300 shadow-sm transition duration-300 ease-in-out hover:bg-green-300 hover:text-green-600'
          >
            <HiOutlineFunnel className='inline-block mr-3 h-6 w-6'/>
            Filter
          </button>
        </div>
        {openFilter ? <PetFilter close={() => setOpenFilter(false)} /> : <></>}
      </div>

      <div className='w-full bg-white'>
        <div className='mx-auto flex w-full flex-col text-center'>
          <div className='mx-auto grid w-4/5 justify-center gap-10 lg:grid-cols-12'>
            {pets.map((pet, index) => (
              <div key={pet.id} className='col-span-4'>
                <PetCard
                  pet={pet}
                  isLast={index === pets.length - 1}
                  newLimit={() => setPage(page + 1)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetsPage
