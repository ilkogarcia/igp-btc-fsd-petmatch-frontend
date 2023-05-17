import styles from './styles.module.css'

function UserPage() {
  return (
    <div className='flex min-h-screen flex-col place-content-start space-y-8'>
      {/* User Dashboard */}
      <div className='flex flex-col'>
        <h1 className='text-4xl font-extrabold text-gray-600'>
          My <span className='text-green-600'>Dashboard</span>
        </h1>
        <p className='text-lg text-gray-600'>
          Here you can manage your account, keep track of your adoption status,
          and explore all the features that PetMatch has to offer.
        </p>
      </div>

      {/* My Favorites */}
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-1 grid place-content-start'>
          <h3 className='text-sm font-bold uppercase text-gray-500'>
            Favorites
          </h3>
          <p className='text-sm text-gray-400'>
            Keep track of your favotites pets.
          </p>
          <button className={styles.button}>
            All favorites
          </button>
        </div>
        <div className='col-span-1 grid place-content-start'>
          <h3 className='text-sm font-bold uppercase text-gray-500'>Saved</h3>
          <p className='text-sm text-gray-400'>
            Keep track of your saved pets.
          </p>
          <button className={styles.button}>
            All saved
          </button>
        </div>
        <div className='col-span-1 grid place-content-start'>
          <h3 className='text-sm font-bold uppercase text-gray-500'>Liked</h3>
          <p className='text-sm text-gray-400'>
            Keep track of your liked pets.
          </p>
          <button className={styles.button}>
            All liked
          </button>
        </div>
      </div>

      {/* My Messages */}
      <div className='flex flex-col'>
        <h2 className='text-2xl font-extrabold text-gray-500'>My Messages</h2>
        <p className='text-md text-gray-400'>
          Communicate with shelters, ask questions about pets, and receive
          updates on adoption status.
        </p>
        <button className={styles.bigButton}>
            Check all messages
          </button>
      </div>

      {/* My Applications */}
      <div className='flex flex-col'>
        <h2 className='text-2xl font-extrabold text-gray-500'>
          Adoption Status
        </h2>
        <p className='text-md text-gray-400'>
          Check the status of your adoption applications and get updates on the
          adoption process. We will keep you informed throughout the adoption
          journey.
        </p>
      </div>

      {/* My Donations */}
      <div className='flex flex-col'>
        <h2 className='text-2xl font-extrabold text-gray-500'>My Donations</h2>
        <p className='text-md text-gray-400'>
          Review you donation history and make new donations to support pet
          welfare causes.
        </p>
      </div>
    </div>
  )
}

export default UserPage
