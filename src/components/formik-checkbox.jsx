import styles from './formik.module.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './formik-texterror'

function FormikCheckBox(props) {
  const { label, name, options, ...rest } = props
  return (
    <>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <div className={styles.input_group}>
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.key}
                  className={styles.input_select}
                >
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              )
            })
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default FormikCheckBox
