import React from 'react'
import img1 from "../assets/img/about-us/about-us.png"
import img2 from "../assets/img/funAbout/fun-about-1.png";
import img3 from "../assets/img/funAbout/fun-about-2.png";
import img4 from "../assets/img/funAbout/fun-about-3.png";

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
        {/* fun fact */}
        <div className="bg-gray-300 mt-20">
                  <div className="w-full md:w-11/12 mx-auto flex flex-col md:flex-row py-8 px-5  ">
                    <div className="w-full md:w-3/4 space-y-8  md:pr-20 flex flex-col justify-center items-center md:items-start ">
                      <div className="text-[#201654] space-y-3 text-center md:text-start">
                        <p>Funfact</p>
                        <h1 className="text-5xl font-bold">Strength in Numbers</h1>
                      </div>
                      <p className="text-gray-800 text-center md:text-start w-full ">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when
                        MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                        flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!
                        Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy
                      </p>
                      <div className="bg-[#FDC800] flex justify-center item-center gap-5 w-[210px] p-2 text-[#201654] rounded ">
                        <h1 className="text-3xl font-bold mt-2">2.4k+</h1>
                        <p className="font-semibold text-center md:text-start">Successful students</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/4 space-y-3 mt-5 md:mt-0">
                      <div className="bg-white py-3 px-3 rounded flex gap-8 items-center">
                        <div className="bg-[#FDC800] w-16 p-3 rounded">
                          <img src={img2} alt="" />
                        </div>
                        <div className="text-[#201654]">
                          <h2 className="font-bold text-2xl">1200+</h2>
                          <p>Learners & counting</p>
                        </div>
                      </div>
                      <div className="bg-white py-2 px-3 rounded flex gap-8 items-center">
                        <div className="bg-[#FDC800] w-16 p-3 rounded">
                          <img src={img3} alt="" />
                        </div>
                        <div className="text-[#201654]">
                          <h2 className="font-bold text-2xl">320+</h2>
                          <p>Total courses</p>
                        </div>
                      </div>
                      <div className="bg-white py-2 px-3 rounded flex gap-8 items-center">
                        <div className="bg-[#FDC800] w-16 p-3 rounded">
                          <img src={img4} alt="" />
                        </div>
                        <div className="text-[#201654]">
                          <h2 className="font-bold text-2xl">1340+</h2>
                          <p>Successful students</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default About