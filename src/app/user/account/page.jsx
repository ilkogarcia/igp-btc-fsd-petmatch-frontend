import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getOneUser } from '@/services/user.services'
import toast from 'react-hot-toast'
import UserProfileForm from '@/components/users/editUserProfileForm'

const loadUserProfile = async (userId, userToken) => {
    const res = await getOneUser(userId, userToken)

    if (!res.sucess) {
      return {}
    }

    return {
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      username: res.data.username,
      profilePicture: res.data.profilePicture,
      birthday: res.data.birthday,
      gender: res.data.gender,
      email: res.data.email,
      phoneNumber: res.data.phoneNumber,
      addressLine1: res.data.addressLine1,
      addressLine2: res.data.addressLine2,
      postalCode: res.data.postalCode,
      cityId: res.data.cityId,
      stateProvinceId: res.data.stateProvinceId,
      countryId: res.data.countryId,
    }
  }

const AccountPage = async () => {
    // Check if user is logged in
    const session = await getServerSession(authOptions)
    if (!session) {
      toast.error(
        <div>
          <span>Load user profile failed!</span>
          <span className='block align-baseline text-sm'>
            User session is not found!
          </span>
        </div>,
        { duration: 3000 }
        )  
        return {}
    }
    console.log(session)

      // Load user profile
      const userProfile = await loadUserProfile(session.user.id, session.user.token)
      console.log(userProfile)
    
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* header */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          My <span className='text-green-600'>Account</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Keeping your information up-to-date is important, and we want to make it as simple as possible for you to do so.
        </p>
      </div>

      {/* user profile */}
      <div className='flex flex-col'>
        <h2 className='text-xl font-extrabold text-gray-500'>User Profile</h2>
        <p className='text-md text-gray-400'>
          Using the form below you can update your profile information.
        </p>
        <UserProfileForm className='w-3/4 mt-8' userProfile={userProfile} />
      </div>
    </div>
  )
}

export default AccountPage
