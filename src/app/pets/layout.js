/**
 * @module app/pets/layout
 * @description - This file is used to render the layout of the pets page
 */

export default function PetsLayout ({ children }) {
  return (
    <div>
      <small>Home &bull; Pets</small>
      {children}
    </div>
  )
}
