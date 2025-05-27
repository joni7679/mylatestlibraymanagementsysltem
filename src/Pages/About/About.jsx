import React, { Suspense } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AboutHero from '../../Components/AboutHero'
import TeamMember from '../../Components/TeamMember'
import OurMission from '../../Components/OurMission'
import Loader from '../../Components/Loading/Loader'
function About() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <AboutHero />
        <OurMission />
        <TeamMember />
        <Footer />
      </Suspense>

    </>
  )
}

export default About