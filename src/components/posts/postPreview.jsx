import Link from 'next/link'
import Image from 'next/image'
import Avatar from '@/components/avatar'
import { format } from 'date-fns'

const PostPreview = (props) => {
  return (
    <div
      key={props.slug}
      className='flex flex-col rounded-md bg-gray-100 shadow-lg lg:col-span-6 xl:col-span-4'
    >
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
      <div className='flex flex-col px-4'>
        <Link href={`/blog/${props.slug}`}>
          <h3 className='mt-4 text-lg font-extrabold text-gray-600 md:text-xl lg:text-2xl'>
            {props.title}
          </h3>
        </Link>
        <p className='lg:text-md mt-6 text-base text-gray-400'>
          {props.excerpt}
        </p>
        <div className='mb-6 mt-8 flex items-center px-4'>
          <Avatar
            alt={props.authorName}
            src={props.authorPicture}
            size={35}
            className='rounded-full border-2 border-green-300'
          />
          <p className='ml-2 text-sm text-gray-400'>
            {props.authorName}
            <span className='block align-baseline text-xs italic text-gray-300'>
              {format(new Date(props.date), 'MM/dd/yyyy')}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostPreview
