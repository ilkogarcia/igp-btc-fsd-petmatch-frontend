import '../../../styles/globals.css'

export const metadata = {
  title: 'PetMatch. Terms and Conditions',
  description:
    'PetMatch is a web application that helps you find your perfect pet match. We use machine learning to match you with pets that are most likely to be compatible with you.',
}

export default function Terms() {
  return (
    <div className='h-fit bg-white'>
      <div className='mx-auto my-40 w-3/5'>
        <h1 className='text-4xl font-extrabold text-gray-900'>
          Privacy Policy
        </h1>
        <p className='mt-4 text-gray-500'>
          At PetMatch, we are committed to protecting your privacy. This Privacy
          Policy describes how we collect, use, and share information when you
          use our website, located at www.petmatch.com (the “Site”), our mobile
          applications (the “Apps”), and other online services that we offer
          (together with the Site and the Apps, the “Services”).
        </p>
        <h2 className='mt-8 text-xl font-bold text-gray-900'>
          Information We Collect
        </h2>
        <p className='mt-4 text-gray-500'>
          When you use our Services, we may collect certain information from and
          about you, including:
        </p>
        <ul className='mt-4 list-disc pl-6 text-gray-500'>
          <li>
            Name and contact information, such as your email address, phone
            number, and mailing address.
          </li>
          <li>Login credentials, such as your username and password.</li>
          <li>Payment information, such as your credit card details.</li>
          <li>
            Device information, such as your IP address, operating system, and
            browser type.
          </li>
          <li>
            Usage data, such as the pages you visit, the features you use, and
            the time you spend on our Services.
          </li>
        </ul>
        <h2 className='mt-8 text-xl font-bold text-gray-900'>
          How We Use Your Information
        </h2>
        <p className='mt-4 c'>
          We use the information we collect for various purposes, including:
        </p>
        <ul className='mt-4 list-disc pl-6 mt-4 text-gray-500'>
          <li>To provide and improve our Services.</li>
          <li>To communicate with you about your account or our Services.</li>
          <li>To personalize your experience on our Services.</li>
          <li>To process your payments and orders.</li>
          <li>To detect and prevent fraud and other illegal activities.</li>
          <li>To comply with legal obligations.</li>
        </ul>
        <h2 className='mt-8 text-xl font-bold text-gray-900'>
          How We Share Your Information
        </h2>
        <p className='mt-4 text-gray-500'>
          We may share your information with third parties, including:
        </p>
        <ul className='mt-4 list-disc pl-6'>
          <li>
            Service providers, such as payment processors, hosting providers,
            and customer support providers.
          </li>
          <li>
            Marketing partners, such as advertising networks and analytics
            providers.
          </li>
          <li>
            Legal authorities, if required by law or if we believe in good faith
            that disclosure is necessary to protect our rights or the safety of
            others.
          </li>
        </ul>
        <h2 className='mt-8 text-xl font-bold text-gray-900'>Changes to This Privacy Policy</h2>
        <p className='mt-4 text-gray-500'>
            This Privacy Policy is effective as of May 3, 2023 and will remain in
            effect except with respect to any changes in its provisions in the
            future, which will be in effect immediately after being posted on
            this page. We reserve the right to update or change our Privacy
            Policy at any time and you should check this Privacy Policy
            periodically.
          </p>
          <h2 className='mt-8 text-xl font-bold text-gray-900'>Contact Us</h2>
          <p className='mt-4 text-gray-500'>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@petmatch.com.
          </p>
      </div>
    </div>
  )
}
