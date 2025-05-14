import React from 'react'
import hero from "../../assets/img/hero-12.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div >
        <div className='bg-[#F0F4F9]'>
        <div className='w-full md:w-11/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-5 md:px-0'>
        <div className='space-y-4  mt-8 md:mt-14 text-center md:text-start'>
            <div>
            <p className='text-[#201654] font-bold'>DISCOVER RESEARCH</p>
            <div className='bg-[#201654] w-full md:w-36 h-1 '></div>

            </div>
            <h1 className='text-[#201654] font-bold text-4xl md:text-6xl'>A better learning future starts here</h1>
            <div className='flex justify-center md:justify-start gap-5'>
              <Link to="/about">
              <button className=' py-2 px-2 text-[#201654] border font-semibold rounded'>Read More</button>
              </Link>
                <Link to="/courses">
                <button className=' py-2 px-2 text-[#201654] border font-semibold rounded'>Enroll Now</button>
                
                </Link>
            </div>
        </div>
        <div>
            <img src={hero} alt="" />
        </div>

        </div>
        </div>
       
    </div>
  )
}

export default Hero