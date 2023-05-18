/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import styles from './styles.module.css'
import { TbAlertTriangle } from 'react-icons/tb'


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
            <h3 className='text-gray-400 font-semibold text-sm'>Confirmation required...</h3>
          </div>

          <div className='mx-auto w-full p-5'>
            <div className='grid grid-cols-12 gap-2'>
              <div className='col-span-12 flex'>
                <TbAlertTriangle size={60} className='text-yellow-500 inline align-middle mr-4' />
                <span className='text-left inline align-middle text-lg font-light text-gray-600 dark:text-gray-400'>
                  {message}
                </span>
              </div>
              <div className='col-span-12 my-2'>
                <hr className='border-0 bg-gray-200 dark:bg-gray-700' />
              </div>
              <div className='col-span-12 md:col-span-8'>
                <button
                  type='button'
                  className={`w-full ${styles.save_button}`}
                  onClick={handleConfirmation}
                >
                  Yes
                </button>
              </div>
              <div className='col-span-12 md:col-span-4'>
                <button
                  type='button'
                  className={`w-full ${styles.cancel_button}`}
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
