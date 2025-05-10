import React from 'react'
import img1 from "../assets/img/about-us/about-us.png"

const About = () => {
  return (
    <div className='w-full md:w-11/12 mx-auto mt-10 px-5 md:px-0'>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2'>
            <img src={img1} alt="" /></div>
            <div className='w-full md:w-1/2 flex flex-col justify-center space-y-4 mt-10 md:mt-0'>
                <p className='text-[#201654] font-semibold'>ABOUT US</p>
                <h1 className='text-[#201654] font-bold text-5xl'>Education in continuing a proud tradition.</h1>
                <p className='text-gray-700'>
                    The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
                </p>
            </div>
          
        </div>
    </div>
  )
}

export default About