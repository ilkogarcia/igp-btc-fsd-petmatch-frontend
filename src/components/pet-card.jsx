/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types'
import Image from 'next/image'

function PetCard({ pet, newLimit, isLast }) {
  const { PetBreed, name, age, imageUrl, description } = pet
  const  { breedName, PetSpecie } = PetBreed
  const { specieCommonName } = PetSpecie

  const cardRef = useRef()

  useEffect(() => {
    if (!cardRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && isLast) {
        newLimit()
        observer.unobserve(entry.target)
      }
    })

    observer.observe(cardRef.current)
  }, [isLast])

  return (
    <div className='flex h-full w-full flex-col rounded-md bg-white shadow-md' ref={cardRef}>
      <div className='relative h-80 w-full overflow-hidden rounded-t-md'>
        <Image
          alt={name + ' ' + specieCommonName + ' ' + breedName}
          src={imageUrl}
          quality={85}
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />
      </div>
      <div className='w-full px-6 py-4'>
        <div className='text-md mb-2 space-y-2 font-bold text-gray-400 text-left'>
          <p className='text-2xl font-extrabold text-gray-600'>
            {name}{' '}
            <span className='text-sm font-light text-gray-400'>({age} years old)</span>
            <span className='block align-baseline text-sm font-bold text-green-400 uppercase'>
              {breedName + ' / ' + specieCommonName}
            </span>
          </p>
          <p className='text-lg text-gray-400 font-extralight'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

PetCard.propTypes = {
  pet: PropTypes.array,
  newLimit: PropTypes.func,
  isLast: PropTypes.bool,
}

export default PetCard
