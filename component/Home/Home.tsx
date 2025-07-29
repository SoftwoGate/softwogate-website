import React from 'react'
import Hero from './Hero/Hero'
import Services from './Service/Services'
import About from './About/About'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <div className=' overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Home
