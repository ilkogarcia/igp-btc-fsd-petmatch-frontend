'use client'

import styles from './styles.module.css'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

function ButtonApply(props) {
  const { buttonType, buttonText, handleClick } = props
  const [isDisabled, toggleIsDisabled] = useState(true)
  const { data: session } = useSession()

  useEffect(() => {
    (session === null) ? toggleIsDisabled(true) : toggleIsDisabled(false)
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
