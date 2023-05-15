'use client'
import { HiXMark } from 'react-icons/hi2'

export default function PetFilter({ close }) {
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') {
          close()
        }
      }
    
  return (
    <div
      id='wrapper'
      onClick={handleClose}
      className='fixed inset-0 top-0 z-10 h-full w-full bg-gray-500 bg-opacity-25 backdrop-blur-sm'
    >
      <div className='inset-0 top-0 p-5'>
        <div className='w-4/5 mx-auto rounded-xl bg-white p-5'>
          <div className='mx-auto flex w-full items-center justify-between px-6'>
            <h1>Filter</h1>
            <HiXMark
              size={25}
              className='h-7 w-7 cursor-pointer transition-all hover:scale-110'
              onClick={close}
            />
          </div>

          <div className='mx-auto mt-5 grid w-full grid-cols-2 gap-20 px-6'>
            Aquí va el contenido
          </div>
        </div>
      </div>
    </div>
  )
}
