/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { PropTypes } from 'prop-types'
import { useEffect, useState } from 'react'
import { fetchAllPets } from '@/services/pet.services'
import PetCard from './pet-card'

function PetList({ count }) {
  const [pets, setPets] = useState([])

  useEffect(() => {
    async function loadPets() {
      const request = {
        filterParams: {
          petStatus: 'Available for adoption',
        },
        orderParams: [
          {
            field: 'updatedAt',
            direction: 'DESC',
          },
        ],
      }

      const res = await fetchAllPets(request, count, 1)
      if (res.sucess) {
        setPets(res.data.pets)
      }
    }
    loadPets()
  }, [])

  return (
    <div className='mx-auto grid w-4/5 justify-center gap-10 lg:grid-cols-12'>
      {
        pets.map((pet, index) => (
          <div key={pet.id} className='col-span-4'>
            <PetCard
              pet={pet}
              isLast={index === pets.length - 1}
              newLimit={() => {}}
            />
          </div>
        ))
      }
    </div>
  )
}

PetList.propTypes = {
  count: PropTypes.number,
}

export default PetList
