import '../../styles/globals.css'

export default function AdminLayout({ children }) {
  return (
    <div className='flex h-screen w-screen bg-green-200'>
      <div className='m-auto grid h-3/4 w-3/5 rounded-md bg-slate-50 lg:grid-cols-2'>
        <div className='left flex'>{children}</div>
        <div className='right flex'>
          <div className='py-10 text-center'>
            <h1 className='text-3xl font-bold text-gray-700'>
              Lateral panel for menu and more info...
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
