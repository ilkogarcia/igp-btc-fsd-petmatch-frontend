/**
 * @module app/pets/layout
 * @description - This file is used to render the layout of the pets page
 */
import PetSearch from '@/components/form-pet-search'

export const metadata = {
  title:
    'PetMatch. Pets available for adoption. Find Your Perfect Furry Match!',
  description:
    'PetMatch is a platform that helps you find your perfect furry match. We have a wide variety of pets available for adoption. Find your perfect match today!',
}

function PetsLayout({ children }) {
  return (
    <>
      <div className='h-fit bg-white'>
        {/* page top section  */}
        <div className='mx-auto grid w-4/5 gap-20 py-40 lg:grid-cols-12'>
          <div className='col-span-8 flex flex-col items-start justify-start space-y-6 text-left'>
            <span className='text-green-600'>Available Pets</span>
            <h2 className='text-6xl font-extrabold text-gray-600'>
              Find your perfect{' '}
              <span className='text-green-600'>Furry Match!</span>
            </h2>
            <p className='text-xl text-gray-400'>
              Use the following filters to find your perfect match!
            </p>
          </div>
          <div className='col-span-4 mt-8 grid'>
            <PetSearch />
          </div>
        </div>
      </div>
      <div className='w-full bg-white py-10'>
        <div className='mx-auto flex w-4/5 flex-col text-center'>
          {children}
        </div>
      </div>
    </>
  )
}

export default PetsLayout
