import React from 'react'
import Hero from './Hero/Hero'
import Services from './Service/Services'
import About from './About/About'

const Home = () => {
  return (
    <div className=' overflow-hidden'>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

export default Home
