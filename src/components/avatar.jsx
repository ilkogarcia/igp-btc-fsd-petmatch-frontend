import Image from 'next/image'

const Avatar = ({ src, alt, size, ...props }) => {
  return (
    <div className='flex items-center'>
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        {...props}
      />
    </div>
  )
}

export default Avatar
