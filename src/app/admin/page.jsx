export default function AdminPage() {
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          App <span className='text-green-600'>Dashboard</span>
        </h1>
        <p className='text-lg text-gray-600'>
          This dashboard is to show a comprehensive overview of data from
          different sources.
        </p>
      </div>

      {/* applications list */}
      <div className='flex flex-col'>
        <h2 className='text-xl font-extrabold text-gray-500'>Dashboard</h2>
        <p className='text-md text-gray-400'>
          Dashboards are useful for monitoring, measuring, and analyzing
          relevant data in key areas of the platform.
        </p>
      </div>
    </div>
  )
}
