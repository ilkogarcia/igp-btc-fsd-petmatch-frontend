/**
 * @module /components/counter/Counter
 * @description Counter component
 */

'use client'

import { useState } from 'react'
export function Counter () {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
