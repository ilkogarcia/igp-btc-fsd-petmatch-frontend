import Link from 'next/link'
import Image from 'next/image'

const PostPreview = (props) => {
  return (
    <div key={props.slug} className='flex flex-col lg:col-span-6 xl:col-span-4 rounded-md bg-gray-100 shadow-lg'>
      <div className='relative overflow-hidden rounded-t-md'>
        <Image
          alt={props.title}
          src={props.coverImage}
          quality={85}
          width={1200}
          height={768}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>
      <div className='p-6'>
        <Link href={`/blog/${props.slug}`}>
          <h3 className='text-3xl font-extrabold text-gray-600'>
            {props.title}
          </h3>
        </Link>
        <p className='mt-6 text-gray-500'>{props.excerpt}</p>
        <div className='mt-12 flex justify-end'>
          <p className='text-sm text-gray-300'>
            {props.authorName} <span className='italic'>( {props.date} )</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
