export default function SettingsPage () {
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
      <h1 className='text-4xl font-extrabold text-gray-600'>
          App <span className='text-green-600'>Settings</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Here you can manage all the settings of the app.
        </p>
      </div>

      {/* applications list */}
      <div className='flex flex-col'>
        <h2 className='text-xl font-extrabold text-gray-500'>
          App settings
        </h2>
        <p className='text-md text-gray-400'>
          Here you can manage all the settings of the app.
        </p>
      </div>
    </div>
  )
}
