function AdoptionPage() {
  return (
    <div className='h-full bg-white pb-40'>
      <div className='mx-auto flex w-4/5 flex-col pt-40'>
        <span className='text-green-600'>Adoption Application</span>
      </div>
      <div className='mx-auto mt-6 flex w-4/5 flex-col lg:grid lg:grid-cols-12'>
        <div className='col-span-12 flex'>
          Here include a progress bar so users can see how far they are in the application process.
        </div>
      </div>
      <div className='mx-auto space-y-12 min-h-screen mt-6 flex w-4/5 flex-col lg:grid lg:grid-cols-12'>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>Contact Information</h2>
          <p className='text-lg text-gray-400'>Please verify your contact information so that we can get in touch with you regarding your adoption application.</p>
          <p className='text-sm text-rose-300'>Note: Please note that you must be at least 18 years old to submit an adoption application.</p>
          <p className='text-normal text-gray-400'>
            Full Name_________
            Phone Number_________
            Email_________
            Address_________
          </p>
        </div>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>Personal Information</h2>
          <p className='text-lg text-gray-400'>Please provide your personal information to help us understand more about you and your lifestyle.</p>
          <p className='text-normal text-gray-400'>
            Occupation_________
            Do you currently have any pets? If yes, please provide details_________
          </p>
        </div>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>Housing Information</h2>
          <p className='text-lg text-gray-400'>Please provide information about your home to ensure that it is a suitable environment for your new pet.</p>
          <p className='text-normal text-gray-400'>
            In this section, we can ask about the user's living arrangements to ensure the pet is a good fit for their home environment. Fields can include:
            Do you own or rent your home?_________
            If renting, does your lease allow pets?_________
            How long have you lived at your current address?_________
            Do you have a yard or outdoor space?_________
            Will the pet be kept indoors or outdoors?_________
            Will there be anyone home during the day?_________
            Do you have a doggy door?._________
          </p>
        </div>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>Pet Information</h2>
          <p className='text-lg text-gray-400'>Please confirm information about the pet that you are interested in adopting.</p>
        </div>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>Lifestyle Information</h2>
          <p className='text-lg text-gray-400'>Please provide information about your lifestyle to ensure that the pet you adopt will be a good match for your needs.</p>
          <p className='text-normal text-gray-400'>
            In this section, we can ask about the user's lifestyle to ensure the pet is a good match for their lifestyle. Fields can include:
            How many hours per day will the pet be left alone?_________
            What kind of exercise will the pet get and how often?_________
            Do you have any plans to move or travel in the near future?_________
            Have you ever surrendered a pet to a shelter or rescue organization?_________
            Are you willing and able to afford veterinary care for the pet?_________
            Are you willing to commit to caring for the pet for its entire life?_________
          </p>
        </div>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>Veterinary Information</h2>
          <p className='text-lg text-gray-400'>Please provide information about your veterinarian or the veterinarian that you plan to use for your new pet.</p>
        </div>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>References</h2>
          <p className='text-lg text-gray-400'>Please provide two references that we can contact to help us learn more about you and your suitability as a pet owner.</p>
          <p className='text-normal text-gray-400'>
            Please provide us with two references who can speak to your ability to care for a pet.
            Name: _________
            Phone number: _________
            Relationship: _________
          </p>
        </div>
        <div className='col-span-12 flex flex-col'>
          <h2 className='text-2xl text-gra-600'>Review and Submit</h2>
          <p className='text-lg text-gray-400'>Please review your application to ensure that all information is accurate and complete. When you are ready, click the submit button to send your application to us for review.</p>
        </div>
      </div>
    </div>
  )
}

export default AdoptionPage
