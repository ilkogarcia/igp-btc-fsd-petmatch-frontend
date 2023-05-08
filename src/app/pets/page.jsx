/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useState } from 'react'
import { fetchAllPets } from '@/services/pet.services'
import PetCard from '@/components/pet-card'

function PetsPage() {
  const [pets, setPets] = useState([])
  const [page, setPage] = useState(1)

  const loadPets = async () => {
    const request = {
      filterParams: {
      },
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
    <div className='mx-auto grid w-4/5 justify-center gap-10 lg:grid-cols-12'>
      {
        pets.map((pet, index) => (
          <div key={pet.id} className='col-span-4'>
            <PetCard
              pet={pet}
              isLast={index === pets.length - 1}
              newLimit={() => setPage(page + 1)}
            />
          </div>
        ))
      }
    </div>
  )
}

export default PetsPage
