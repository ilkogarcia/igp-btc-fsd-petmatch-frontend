const OurOffices = () => {
  const offices = [
    {
      id: 1,
      name: 'London',
      address: '123 Main Street. London, UK',
      phone: '+44 123 456 7890',
      email: 'london@petmatch.es',
    },
    {
      id: 2,
      name: 'Paris',
      address: '123 Main Street. Paris, France',
      phone: '+33 123 456 7890',
      email: 'paris@petmatch.es',
    },
    {
      id: 3,
      name: 'Berlin',
      address: '123 Main Street. Berlin, Germany',
      phone: '+49 123 456 7890',
      email: 'berlin@petmatch.es',
    },
    {
      id: 4,
      name: 'Madrid',
      address: '123 Main Street. Madrid, Spain',
      phone: '+34 123 456 7890',
      email: 'madrid@petmatch.es',
    },
    {
      id: 5,
      name: 'Rome',
      address: '123 Main Street. Rome, Italy',
      phone: '+39 123 456 7890',
      email: 'rome@petmatch.es',
    },
    {
      id: 6,
      name: 'Lisbon',
      address: '123 Main Street. Lisbon, Portugal',
      phone: '+351 123 456 7890',
      email: 'lisbon@petmatch.es',
    },
  ]

  return (
    <div className='mt-16 grid h-full gap-20 lg:grid-cols-12'>
      {offices.map((office) => (
        <div
          key={office.id}
          className='col-span-4 flex flex-col items-center text-center'
        >
          <h2 className='text-2xl font-bold text-gray-600'>{office.name}</h2>
          <p className='text-lg text-gray-500'>{office.address}</p>
          <p className='mt-2 text-sm text-gray-400'>
            {office.phone} - {office.email}
          </p>
        </div>
      ))}
    </div>
  )
}

export default OurOffices
