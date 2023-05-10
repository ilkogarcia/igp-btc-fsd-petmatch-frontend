import Link from 'next/link'

const PostPreview = (props) => {
  return (
    <div className='rounded-md border border-slate-300 bg-white p-4 shadow-sm'>
      <p className='text-sm text-slate-400'>{props.date}</p>
      <Link href={`/blog/${props.slug}`}>
        <h2 className=' mb-4 text-violet-600 hover:underline'>{props.title}</h2>
      </Link>
      <p className='text-slate-700'>{props.authorName}</p>
    </div>
  )
}

export default PostPreview
