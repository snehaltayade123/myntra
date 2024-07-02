import React from 'react'
import Navbar from './navBar'
import LandingPage from './Landing'
import Footer from './footer'

function home() {
  return (
      <>
          <Navbar />
          <LandingPage />
          <Footer/>
      </>
  )
}

export default home