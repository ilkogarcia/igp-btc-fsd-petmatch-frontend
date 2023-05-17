import UserProfile from '@/components/form-user-profile'

function AccountPage() {
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          My <span className='text-green-600'>Account</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Here you can easily manage your profile information, update your app
          settings, and customize your preferences.
        </p>
      </div>

      {/* user profile */}
      <div className='flex flex-col'>
        <h2 className='text-xl font-extrabold text-gray-500'>User Profile</h2>
        <p className='text-md text-gray-400'>
        Keeping your information up-to-date is important, and we want to make it as simple as possible for you to do so. Using the form below you can update your profile information, including your name, email address, and many other details.
        </p>
        <UserProfile className='w-3/4 mt-8'/>
      </div>
    </div>
  )
}

export default AccountPage
