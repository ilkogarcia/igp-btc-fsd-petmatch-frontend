import { FaHome, FaPhone, FaEnvelope } from 'react-icons/fa'

const FooterContact = () => {
  return (
    <div className='flex flex-col justify-center mx-auto text-center text-neutral-600 dark:text-neutral-200 md:text-left'>
      <h6 className='mb-4 flex justify-center font-bold uppercase md:justify-start'>
        Contact
      </h6>
      <div className='flex flex-col justify-center space-y-2 text-sm text-neutral-600 dark:text-neutral-200'>
        <span className='flex items-center gap-2'>
          <FaHome />
          c/ Paloma 1, 28003 Madrid
        </span>
        <span className='flex items-center gap-2'>
          <FaEnvelope />
          adopt@petmatch.es
        </span>
        <span className='flex items-center gap-2'>
          <FaPhone />+ 34 234 567 890
        </span>
      </div>
    </div>
  )
}

export default FooterContact
