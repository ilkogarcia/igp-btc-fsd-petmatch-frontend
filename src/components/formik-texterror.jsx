'use client'

// Import styles sheet
import styles from './styles.module.css'

function TextError(props) {
  return (
  <div className={styles.error_message}>
    {props.children}
  </div>
  )
}

export default TextError;
