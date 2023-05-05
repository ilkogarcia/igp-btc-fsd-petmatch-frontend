import styles from './formik.module.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './formik-texterror'

function FormikSelect(props) {
  const { label, name, options, ...rest } = props
  return (
    <>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <div className={styles.input_group}>
        <Field
          as='select'
          id={name}
          name={name}
          className={styles.input_select}
          {...rest}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            )
          })}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default FormikSelect
