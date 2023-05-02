'use client'
// Import styles sheet
import styles from './ContactUs.module.css'

// Import hooks needed
import { useFormik } from 'formik'

// Import components used on this page
import { HiOutlineAtSymbol } from 'react-icons/hi2'
import toast from 'react-hot-toast'

// Import utilities used
import validateContactUs from '../../utils/validateContactUs'
import SendEmail from '../../services/SendEmail'

// Main component
export default function SignUp() {
  // Formik hook
  const formik = useFormik({
    initialValues: {
      email: '',
      fullname: '',
      subject: '',
      message: '',
    },
    validate: validateContactUs,
    onSubmit,
  })

  // Handle form submission
  async function onSubmit(values) {
    const bodyEmail = {
      email: values.email,
      fullname: values.fullname,
      subject: values.subject,
      message: values.message,
    }
    console.log(bodyEmail)

    const res = await SendEmail()
    if (res) {
      toast.success(
        <div>
          <span>Thanks for contacting us!</span>
          <br />
          <span className='text-sm'>
            We will get back to you as soon as possible.
          </span>
        </div>,
        { duration: 5000 }
      )
    } else {
      toast.error(
        <div>
          <span>Sorry, we could not send your message.</span>
          <br />
          <span className='text-sm'>Something went wrong.</span>
        </div>,
        { duration: 5000 }
      )
    }
  }

  return (
    <div className='mx-auto w-full'>
      {/* contact us form */}
      <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
        {/* your email address */}
        <div className={styles.input_group}>
          <input
            type='email'
            name='email'
            placeholder='Your email address...'
            className={styles.input_text}
            {...formik.getFieldProps('email')}
          />
          <span className='icon flex items-center px-4'>
            <HiOutlineAtSymbol size={25} />
          </span>
        </div>
        {formik.touched.email && formik.errors.email ? (
          <span className='mt-0.5 self-start text-sm text-rose-500'>
            {formik.errors.email}
          </span>
        ) : (
          <></>
        )}

        {/* full name */}
        <div className={styles.input_group}>
          <input
            type='text'
            name='fullname'
            placeholder='Fullname...'
            className={styles.input_text}
            {...formik.getFieldProps('fullname')}
          />
        </div>
        {formik.touched.fullname && formik.errors.fullname ? (
          <span className='mt-0.5 self-start text-sm text-rose-500'>
            {formik.errors.fullname}
          </span>
        ) : (
          <></>
        )}

        {/* subject */}
        <div className={styles.input_group}>
          <input
            type='text'
            name='subject'
            placeholder='Email subject...'
            className={styles.input_text}
            {...formik.getFieldProps('subject')}
          />
        </div>
        {formik.touched.subject && formik.errors.subject ? (
          <span className='mt-0.5 self-start text-sm text-rose-500'>
            {formik.errors.subject}
          </span>
        ) : (
          <></>
        )}

        {/* your message here */}
        <div className={styles.input_group}>
          <textarea
            name='message'
            rows='10'
            placeholder='Your message here...'
            className={styles.input_text}
            {...formik.getFieldProps('message')}
          />
        </div>
        {formik.touched.message && formik.errors.message ? (
          <span className='mt-0.5 self-start text-sm text-rose-500'>
            {formik.errors.message}
          </span>
        ) : (
          <></>
        )}

        {/* send buttons */}
        <div className='input-button'>
          <button type='submit' className={styles.button}>
            Send
          </button>
        </div>
      </form>

      {/* bottom */}
      <div className='mt-2 text-gray-400'>
        <p className='text-sm text-gray-400'>
          We'll get back to you{' '}
          <span className='text-green-500'>as soon as possible.</span>
        </p>
      </div>
    </div>
  )
}
