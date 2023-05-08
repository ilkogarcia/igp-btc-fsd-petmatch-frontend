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
      <div className='h-fit bg-white pb-40'>
        {/* page top section  */}
        <div className='mx-auto grid w-4/5 gap-20 pb-20 pt-40 lg:grid-cols-12'>
          <div className='col-span-8 flex flex-col items-start justify-start space-y-6 text-left'>
            <span className='text-green-600'>Available Pets</span>
            <h2 className='text-6xl font-extrabold text-gray-600'>
              Find your perfect{' '}
              <span className='text-green-600'>Furry Match!</span>
            </h2>
            <p className='text-xl text-gray-400'>
              We have a wide variety of pets available for adoption, from cats
              to dogs, rabbits to birds. Simply use our filter function to
              narrow down your search based on your preferences. With our
              infinite scroll, you can easily find the pet you've been looking
              for. So start browsing now and find your new best friend!
            </p>
          </div>
          <div className='col-span-4 mt-8 grid'>
            <PetSearch />
          </div>
        </div>
        <div className='w-full bg-white'>
          <div className='mx-auto flex w-full flex-col text-center'>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default PetsLayout
