export default function MessagePage() {
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          My <span className='text-green-600'>Messages</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Here you can view all of your messages, including their status.
        </p>
      </div>

      {/* applications list */}
      <div className='flex flex-col'>
        <h2 className='text-xl font-extrabold text-gray-500'>Message list</h2>
        <p className='text-md text-gray-400'>
          Here is a list of all of your messages.
        </p>
      </div>
    </div>
  )
}
