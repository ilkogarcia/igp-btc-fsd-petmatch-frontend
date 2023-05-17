export default function PetsManagementPage () {
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          Pets <span className='text-green-600'>Management</span>
        </h1>
        <p className='text-lg text-gray-600'>
          From here you can manage all pets registered on the platform.
        </p>
      </div>

      {/* applications list */}
      <div className='flex flex-col'>
        <h2 className='text-xl font-extrabold text-gray-500'>
          Pets detailed list
        </h2>
        <p className='text-md text-gray-400'>
          On this list you can add, delete, update and also view the detailed info of pets registered on the platform.
        </p>
      </div>
    </div>
  )
}
