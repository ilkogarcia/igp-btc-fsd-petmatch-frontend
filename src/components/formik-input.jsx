import styles from './styles.module.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './formik-texterror'
import {
  HiOutlineAtSymbol,
  HiOutlinePhone,
  HiOutlineHome,
  HiOutlineUserCircle,
} from 'react-icons/hi'

function FormikInput(props) {
  const { label, name, type, ...rest } = props
  return (
    <>
      <label htmlFor={name} className={styles.input_label}>
        {label}
      </label>
      <div className={styles.input_group}>
        <Field
          id={name}
          name={name}
          type={type}
          className={styles.input_text}
          {...rest}
        />
          {name === 'email' && (
            <span className='flex items-center px-4'>
              <HiOutlineAtSymbol size={25} />
            </span>
          )}
          {name === 'phoneNumber' && (
            <span className='flex items-center px-4'>
              <HiOutlinePhone size={25} />
            </span>
          )}
          {name === 'addressLine1' && (
            <span className='flex items-center px-4'>
              <HiOutlineHome size={25} />
            </span>
          )}
          {name === 'username' && (
            <span className='flex items-center px-4'>
              <HiOutlineUserCircle size={25} />
            </span>
          )}
      </div>
      <ErrorMessage name={name} component={TextError} />
    </>
  )
}

export default FormikInput
