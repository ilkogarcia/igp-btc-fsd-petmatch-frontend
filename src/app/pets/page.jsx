/**
 * @file page.jsx
 * @description Page where the list of pets is displayed.
 */

import PetsList from '@/components/pets-list'

async function PetsPage (props) {
  console.log('PetsPage props', props);
  return (
    <>
      <PetsList />
    </>
  )
}

export default PetsPage
