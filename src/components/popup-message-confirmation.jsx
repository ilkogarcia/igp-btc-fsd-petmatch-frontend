/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import styles from './styles.module.css'

export default function PopUpMessageConfirmation({
  message,
  onClose,
  onConfirmation,
}) {
  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose()
    }
  }

  const handleConfirmation = () => {
    onConfirmation()
    onClose()
  }

  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 top-0 z-10 h-full w-full bg-gray-500 bg-opacity-25 backdrop-blur-sm'
    >
      <div className='inset-0 top-0 p-5'>
        <div className='mx-auto w-4/5 rounded-xl bg-white p-5'>
          <div className='mx-auto flex w-full items-center justify-between px-6'>
            <h1>Message</h1>
          </div>

          <div className='mx-auto w-full p-5'>
            <div className='grid grid-cols-12 gap-2'>
              <div className='col-span-12'>
                <p className='text-center text-gray-600 dark:text-gray-400'>
                  {message}
                </p>
              </div>
              <div className='col-span-12 my-2'>
                <hr className='border-0 bg-gray-200 dark:bg-gray-700' />
              </div>
              <div className='col-span-12 md:col-span-8'>
                <button
                  type='button'
                  className={`w-3/4 ${styles.save_button}`}
                  onClick={handleConfirmation}
                >
                  Yes
                </button>
              </div>
              <div className='col-span-12 md:col-span-4'>
                <button
                  type='button'
                  className={`w-3/4 ${styles.cancel_button}`}
                  onClick={() => onClose()}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
