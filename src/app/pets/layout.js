/**
 * @module app/pets/layout
 * @description - This file is used to render the layout of the pets page
 */

import { Counter } from '../../components/counter/Counter'

export default function PetsLayout ({ children }) {
  return (
    <div>
      <small>Home &bull; Pets</small>
      <Counter />
      {children}
    </div>
  )
}
