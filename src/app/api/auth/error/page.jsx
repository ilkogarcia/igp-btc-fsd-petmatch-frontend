export default function Error({ searchParams }) {
  return (
    <div className='h-fit bg-green-400'>
      <div className='mt-48 flex w-full flex-wrap content-center justify-center'>
      {searchParams?.error && 
        <p className='w-3/4 text-center text-8xl font-extrabold text-white'>
          Error: {searchParams.error} 
        </p>
      }
      </div>
    </div>
  )
}
