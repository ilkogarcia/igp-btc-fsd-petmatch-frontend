import Copyright from './footer-copyright'
import SocialNetworks from './footer-socialnetworks'
import FooterAboutUs from './footer-aboutus'
import FooterMainMenu from './footer-mainmenu'
import FooterUsefulLinks from './footer-usefullinks'
import FooterLegalMenu from './footer-legalmenu'
import FooterContact from './footer-contact'

const Footer = () => {
  return (
    <footer className='bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left'>
      <SocialNetworks />
      <div className='mx-10 space-y-8 py-10'>
        <div className='flex flex-col gap-4 md:grid md:grid-cols-12'>
          <div className='md:col-span-12 lg:col-span-4'>
            <FooterAboutUs />
          </div>
          <div className='md:col-span-3 lg:col-span-2'>
            <FooterMainMenu />
          </div>
          <div className='md:col-span-3 lg:col-span-2'>
            <FooterUsefulLinks />
          </div>
          <div className='md:col-span-3 lg:col-span-2'>
            <FooterLegalMenu />
          </div>
          <div className='hidden md:block md:col-span-3 lg:col-span-2'>
            <FooterContact />
          </div>
        </div>
      </div>
      <Copyright />
    </footer>
  )
}

export default Footer
