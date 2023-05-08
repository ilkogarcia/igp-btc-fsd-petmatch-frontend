/**
 * @file page.jsx
 * @description Page where the list of pets is displayed.
 */

import PetList from '@/components/pet-list/'

async function PetsPage (props) {
  console.log('PetsPage props', props);
  return (
    <>
      <PetList count={20} />
    </>
  )
}

export default PetsPage
