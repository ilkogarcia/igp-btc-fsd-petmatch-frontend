import Link from 'next/link'

const usefulLinks = [
  {
    name: 'Adoption process',
    url: '/help/adoption',
  },
  {
    name: 'Donation Center',
    url: '/donation',
  },
  {
    name: 'Volunteer Opportunities',
    url: '/volunteer',
  },
]
const FooterUsefulLinks = () => {
  return (
    <div className='flex flex-col text-center text-neutral-600 dark:text-neutral-200 md:text-left'>
      <h6 className='mb-4 flex justify-center font-bold uppercase md:justify-start'>
        Useful links
      </h6>
      <div className='flex flex-col space-y-2 text-neutral-600 dark:text-neutral-200'>
        {usefulLinks.map((item, i) => (
          <Link
            key={i}
            className='block text-sm hover:underline hover:decoration-solid hover:decoration-2 hover:underline-offset-4'
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterUsefulLinks
