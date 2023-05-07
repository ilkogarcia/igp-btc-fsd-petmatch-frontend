import { Field, ErrorMessage } from 'formik'
import dynamic from 'next/dynamic'
import 'react-datepicker/dist/react-datepicker.css'
import TextError from './formik-texterror'
import styles from './formik.module.css'
import { HiOutlineCake } from 'react-icons/hi'

// Use dynamic import with 'ssr: false' for the DatePicker component
const DatePicker = dynamic(() => import('react-datepicker'), { ssr: false })

function FormikDatePicker(props) {
  const { label, name, ...rest } = props

  return (
    <>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <div className={styles.input_group}>
        <Field name={name} >
          {
            ({form, field}) => {
              const { setFieldValue } = form
              const { value } = field
              return (
                <>
                  <DatePicker
                    id={name}
                    className={styles.input_date}
                    {...field}
                    {...rest}
                    selected={value ? new Date(value) : null}
                    dateFormat="yyyy-MM-dd"
                    showYearDropdown
                    onChange={(val) => setFieldValue(name, val)}
                  />
                  <span className={styles.input_icon}>
                    <HiOutlineCake size={25} />
                  </span>
                </>
              )
            }
          }
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default FormikDatePicker
