import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import Image from 'next/image'
import toast from 'react-hot-toast'
import { getOneUser } from '../../services/user.services'
import UserProfileForm from './editUserProfileForm'

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

const UserProfile = async () => {
  // Check if user is logged in
  const session = await getServerSession(authOptions)
  console.log(session)

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

  // Load user profile
  const userProfile = await loadUserProfile(session.user.id, session.user.token)

  return (
    <div className='mx-auto mt-8'>
      <div className='flex flex-col sm:grid sm:grid-cols-12 sm:gap-6'>
        {/* left colum */}
        <div className='col-span-4'>
          {/* user image profile */}
          <div className='flex flex-col space-y-4'>
            <Image
              className='square-img rounded-md shadow-md'
              type='file'
              id='profilePicture'
              name='profilePicture'
              src={userProfile.profilePicture || '/assets/pets-error.png'}
              alt={userProfile.firstName || 'User picture not found'}
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* right colum */}
        <div className='col-span-8'>
          <div className='flex flex-col sm:grid sm:grid-cols-12 sm:gap-5'>
            <div className='col-span-12 lg:col-span-5'>
              Firstname: {userProfile.firstName || 'N/A'}
            </div>
            <div className='col-span-12 md:col-span-7'>
              Lastname: {userProfile.lastName || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-4'>
              Username: {userProfile.username || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-4'>
              Birthday: {userProfile.birthday || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-4'>
              Gender: {userProfile.gender || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-5'>
              Phone number: {userProfile.phoneNumber || 'N/A'}
            </div>
            <div className='col-span-12 md:col-span-7'>
              Email: {userProfile.email || 'N/A'}
            </div>
            <div className='col-span-12'>
              Address: {userProfile.addressLine1  || 'N/A'}
            </div>
            <div className='col-span-12 md:col-span-8'>
              Address line 2: {userProfile.addressLine2 || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-4'>
              Postal code: {userProfile.postalCode || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-4'>
              Country: {userProfile.countryId || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-4'>
              State/Province: {userProfile.stateProvinceId || 'N/A'}
            </div>
            <div className='col-span-6 md:col-span-4'>
              City: {userProfile.cityId || 'N/A'}
            </div>
          </div>
        </div>

      </div>
      {/*  */}
      <UserProfileForm userProfile={userProfile} />

    </div>
  )
}

export default UserProfile
