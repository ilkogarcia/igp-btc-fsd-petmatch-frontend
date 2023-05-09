function OnePetLayout({ children }) {
  return (
    <div className='h-fit bg-white pb-40'>
      <div className='mx-auto flex w-4/5 flex-col pt-40'>
        <span className='text-green-600'>Available Pets</span>
      </div>
      <div className='mx-auto mt-6 flex w-4/5 flex-col lg:grid lg:grid-cols-12'>
        <div className='col-span-12 flex'>{children}</div>
      </div>
    </div>
  )
}

export default OnePetLayout
