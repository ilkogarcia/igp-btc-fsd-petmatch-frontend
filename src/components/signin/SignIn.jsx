const SignIn = async () => {
  return (
    <div className='w-full max-w-xs'>
      <form className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'>
        <div className='mb-4'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            for='email'
          >
            Email
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            required
            type='email'
            name='email'
            placeholder='name@example.com'
          />
          <p className='text-xs italic text-red-500'>
            Please provide a valid email.
          </p>
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            for='password'
          >
            Password
          </label>
          <input
            className='focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            required
            name='password'
            type='password'
            placeholder='******************'
          />
          <p className='text-xs italic text-red-500'>
            Please provide a valid password.
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='button'
          >
            Sign In
          </button>
          <a
            className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
            href='#'
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  )
}

export default SignIn
