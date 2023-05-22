const VolunteerCenter = () => {
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          Volunteer <span className='text-green-600'>Center</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Welcome to the volunteer center, here you can participate in the
          adoption process, donate and also volunteer.
        </p>
      </div>
    </div>
  )
}

export default VolunteerCenter
