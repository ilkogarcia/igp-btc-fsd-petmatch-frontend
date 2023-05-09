'use client'

import { useState, useCallback } from 'react'

function useToggle(initialToggleValue = false) {
  const [value, setToggleValue] = useState(initialToggleValue)

  const toggleValue = useCallback(() => {
    setToggleValue((value) => !value)
  }, [])

  return [value, toggleValue]
}

export default useToggle
