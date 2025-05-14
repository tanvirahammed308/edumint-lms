import React from 'react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import FunAbout from '../components/home/FunAbout'
import OurTeam from '../components/home/OurTeam'
import OurCourses from '../components/home/OurCourses'
import GoToTopButton from "../components/utils/GoToTopButton"

const Home = () => {
  return (
    <div className='text-amber-600'>
      <Hero/>
      <About/>
      <OurCourses/>
      <FunAbout/>
      <OurTeam/>
      <GoToTopButton/>
    </div>
  )
}

export default Home