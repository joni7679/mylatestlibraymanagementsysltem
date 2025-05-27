import React from 'react'
import Contactleftpart from './Contactleftpart'
import ContactRightPart from './ContactRightPart'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function Contact() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto py-16 px-6 md:px-12'>
        <div className="flex items-start justify-between">
          <Contactleftpart />
          <ContactRightPart />
        </div>

      </div>
      <Footer />

    </>
  )
}

export default Contact