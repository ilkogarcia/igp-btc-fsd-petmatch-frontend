function OnePetLayout({ children }) {
  return (
    <div className='mx-auto grid w-4/5 justify-center gap-10 lg:grid-cols-12'>
      {children}
    </div>
  )
}

export default OnePetLayout
