import React from 'react'
import BackToTopBtn from './components/BackToTopBtn'

import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Skills from './components/Skills'
import Team from './components/Team'
import Testimonial from './components/Testimonial'

// import components

const App = () => {
  return (
    <div>
      <Banner />
      <Testimonial />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </div>
  )
}

export default App
