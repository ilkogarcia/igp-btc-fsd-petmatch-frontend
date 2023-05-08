import { PropTypes } from 'prop-types'
import Image from 'next/image'

const PetCard = ({ pet }) => {
  const { PetBreed, name, age, imageUrl, description } = pet
  const  { breedName, PetSpecie } = PetBreed
  const { specieCommonName } = PetSpecie

  return (
    <div className='flex w-full flex-col rounded-md bg-white shadow-md'>
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
      <div className='h-2/3 w-full px-6 py-4'>
        <div className='text-md mb-2 space-y-2 font-bold text-gray-400'>
          <p className='text-2xl font-extrabold text-gray-600'>
            {name}{' '}
            <span className='text-base font-light text-gray-400'>({age} years old)</span>
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
  pet: PropTypes.shape({
    specieCommonName: PropTypes.string,
    breedName: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    imageUrl: PropTypes.string,
  }),
}

export default PetCard
