import styles from './styles.module.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './formik-texterror'

function FormikTextArea(props) {
  const { label, name, ...rest } = props
  return (
    <>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <div className={styles.input_group}>
        <Field
          as='textarea'
          id={name}
          name={name}
          {...rest}
          className={styles.input_text}
        />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default FormikTextArea
