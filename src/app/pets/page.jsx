/**
 * @file page.jsx
 * @description Page where the list of pets is displayed.
 */

import { PetsList } from '../../components/pets-list'

export default async function PetsPage () {
  return (
    <section>
      <PetsList />
    </section>
  )
}
