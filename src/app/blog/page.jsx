import '../../styles/globals.css'
import Image from 'next/image'

export const metadata = {
  title:
    'PetMatch Blog - Discover Tips, News and Stories About Your Furry Friends.',
  description:
    'Read the latest articles on pet care, training, adoption, and more. Our blog offers insights and advice for pet owners and animal lovers.',
}

export default function BlogPage() {
  const imgPost1 = '/assets/michaelG_V7J3CSg5LY4_1920x2880.jpg'
  const imgPost2 = '/assets/michaelG_kpbHRhlSHHA_1920x2880.jpg'
  const imgPost3 = '/assets/michaelG_TJ0LK4iFgNM_1920x2880.jpg'

  return (
    <div className='h-fit bg-white'>
      {/* main section  */}
      <div className='mx-auto my-40 grid w-3/5 gap-20 lg:grid-cols-2'>
        <div className='left flex flex-col space-y-6'>
          <span className='text-green-600'>Blog Posts</span>
          <h1 className='text-6xl font-extrabold text-gray-600'>
            Tips, news and stories about your{' '}
            <span className='text-green-600'>Furry Friends!</span>
          </h1>
        </div>
        <div className='right flex flex-col items-center justify-items-center space-y-6 pt-10'>
          <p className='text-xl text-gray-400'>
            Read the latest articles on pet care, training, adoption, and more.
            Our blog offers insights and advice for pet owners and animal
            lovers.
          </p>
          <p className='text-xl text-gray-400'>
            From pet health and nutrition to behavior and training, our blog
            covers everything you need to know about your furry companions. Get
            expert advice and stay informed with PetMatch.
          </p>
        </div>
      </div>

      {/* blog posts */}
      <div className='mx-auto my-40 grid w-3/5 gap-8 lg:grid-cols-3'>
        
        {/* blog post 1 */}
        <div className='rounded-md bg-gray-100 shadow-lg'>
          <div className='relative overflow-hidden rounded-t-md'>
            <Image
              alt='This pet is looking for a home'
              src={imgPost1}
              quality={85}
              width={640}
              height={480}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-gray-800'>
              Blog Post Title
            </h3>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className='mt-4 flex items-center'>
              <img
                className='h-10 w-10 rounded-full border-2 border-gray-600 object-cover'
                alt='avatar'
                src=''
              />
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Author Name</p>
                <p className='text-gray-600'>Date</p>
              </div>
            </div>
          </div>
        </div>

        {/* blog post 2 */}
        <div className='rounded-md bg-gray-100 shadow-lg'>
          <div className='relative overflow-hidden rounded-t-md'>
            <Image
              alt='This pet is looking for a home'
              src={imgPost2}
              quality={85}
              width={640}
              height={480}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-gray-800'>
              Blog Post Title
            </h3>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className='mt-4 flex items-center'>
              <img
                className='h-10 w-10 rounded-full border-2 border-gray-600 object-cover'
                alt='avatar'
                src=''
              />
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Author Name</p>
                <p className='text-gray-600'>Date</p>
              </div>
            </div>
          </div>
        </div>

        {/* blog post 3 */}
        <div className='rounded-md bg-gray-100 shadow-lg'>
          <div className='relative overflow-hidden rounded-t-md'>
            <Image
              alt='This pet is looking for a home'
              src={imgPost3}
              quality={85}
              width={640}
              height={480}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold text-gray-800'>
              Blog Post Title
            </h3>
            <p className='text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <div className='mt-4 flex items-center'>
              <img
                className='h-10 w-10 rounded-full border-2 border-gray-600 object-cover'
                alt='avatar'
                src=''
              />
              <div className='ml-4'>
                <p className='font-semibold text-gray-800'>Author Name</p>
                <p className='text-gray-600'>Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
