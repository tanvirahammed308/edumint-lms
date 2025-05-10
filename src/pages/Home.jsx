import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import FunAbout from '../components/home/FunAbout'
import OurTeam from '../components/home/OurTeam'

const Home = () => {
  return (
    <div className='text-amber-600'>
      <Hero/>
      <About/>
      <FunAbout/>
      <OurTeam/>
    </div>
  )
}

export default Home