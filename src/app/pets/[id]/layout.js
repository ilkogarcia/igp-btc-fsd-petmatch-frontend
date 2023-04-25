/**
 * @module src/app/pets/[id]/layout
 * @description - This file is used to render the layout of the pets/[id] page
 */

export default function PetLayout ({ children }) {
  return (
    <div>
      <h1>Pet Layout</h1>
      {children}
    </div>
  )
}
