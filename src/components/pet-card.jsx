/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

function PetCard({ pet, newLimit, isLast }) {
  const { PetBreed, name, age, imageUrl, description } = pet
  const { breedName, PetSpecie } = PetBreed
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
    <div
      className='flex h-full w-full flex-col rounded-md bg-white shadow-md'
      ref={cardRef}
    >
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
      <div className='mb-2 flex h-auto w-full flex-col space-y-2 px-6 py-4 text-left font-bold text-gray-400'>
        <p className='text-2xl font-extrabold text-gray-600'>
          {name}{' '}
          <span className='text-sm font-light text-gray-400'>
            ({age} years old)
          </span>
          <span className='block align-baseline text-sm font-bold uppercase text-green-400'>
            {breedName + ' / ' + specieCommonName}
          </span>
        </p>
        <p className='text-lg font-extralight text-gray-400'>{description}</p>
      </div>
      <div className='mb-4 mt-auto px-6 flex h-auto w-full text-left'>
        <Link
          className='text-sm text-green-400 hover:text-green-700 active:text-green-900'
          href={`/pets/${pet.id}`}
        >
          View more...
        </Link>
      </div>
    </div>
  )
}

PetCard.propTypes = {
  pet: PropTypes.object,
  newLimit: PropTypes.func,
  isLast: PropTypes.bool,
}

export default PetCard
