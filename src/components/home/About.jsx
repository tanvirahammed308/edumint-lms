import React from "react";
import img1 from "../../assets/img/about/home-banner-1.png";
import img2 from "../../assets/img/about/home-banner-2.png";
import img3 from "../../assets/img/about/home-banner-3.png";
import img4 from "../../assets/img/about/home-about-5.jpg";
import img5 from "../../assets/img/about/home-about-4.png"

const About = () => {
  return (
    <div className="bg-[#F0F4F9]  ">
      <div className="w-full md:w-11/12 mx-auto pt-20">
        {/* banner */}
        <div className="bg-[#002147]  rounded flex flex-col md:flex-row justify-between py-8 md:py-0">
          <div className="text-white space-y-4 p-8 text-center md:text-start">
            <h1 className="text-3xl font-bold">Vivamus maximus</h1>
            <p>Lorem ipsum dolor sadipscing elitr, sed diam nonum</p>
            <div>
              <p> Nullam est</p>
              <p>Mattis dictum nunc</p>
            </div>
          </div>
          <div className="md:border-l border-[#373838] md:p-8 text-center flex flex-col items-center justify-center ">
            <img src={img1} alt="" />
            <div className="text-white ">
              <p>Postgraduate</p>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="md:border-l border-[#373838] md:p-8 flex flex-col items-center justify-center ">
            <img src={img2} alt="" />
            <div className="text-white text-center">
              <p>Engineering</p>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
          <div className="md:border-l border-[#373838] md:p-8 text-center flex flex-col items-center justify-center ">
            <img src={img3} alt="" />
            <div className="text-white ">
              <p>Postgraduate
              </p>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>

        {/* about us */}
        <div className="mt-20 flex flex-col md:flex-row gap-10">
            <div className="w-full md:w-6/12 relative px-5 md:px-0">
                <img src={img4} alt="" />
                <img src={img5} alt="" className="absolute -top-5 rounded"/>
                    <div className="bg-white text-[#201654] p-8 rounded absolute -bottom-12 border-b-4 border-amber-500 w-full">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo</p>
                </div>
            </div>
            <div className="w-full md:w-6/12 text-[#201654] space-y-8 mt-8 px-5 md:mt-0 md:px-0">
            <h5 className="font-semibold">ABOUT US</h5>
            <h1 className="text-3xl font-bold">Strength in Numbers</h1>
            <p className="text-gray-800">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,
            </p>
            <div >
                <h1 className="text-[#201654] font-bold text-xl">Ligula molestie</h1>
                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            <div >
                <h1 className="text-[#201654] font-bold text-xl">Rigula rolestie</h1>
                <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
