'use client'

import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

function ButtonApply(props) {
  const { buttonType, buttonText, handleClick } = props
  const [isDisabled, toggleIsDisabled] = useState(true)
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      toggleIsDisabled(false)
    } else {
      toggleIsDisabled(true)
    }
  }, [session])

  return (
    <button 
        type={buttonType}
        className={styles.apply_button}
        disabled={isDisabled}
        onClick={handleClick}
    >
        {buttonText}
    </button>
  )
}

export default ButtonApply
