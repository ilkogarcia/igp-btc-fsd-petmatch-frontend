import Image from 'next/image'

const Avatar = ({ src, alt, size }) => {
  return (
    <div className='flex items-center'>
      <Image
        className={`w-${size} h-${size} rounded-full`}
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </div>
  )
}

export default Avatar
