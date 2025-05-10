import React from "react";
import img1 from "../../assets/img/funAbout/fun-about-1.png";
import img2 from "../../assets/img/funAbout/fun-about-2.png";
import img3 from "../../assets/img/funAbout/fun-about-3.png";
import img4 from "../../assets/img/funAbout/fun-about-4.png";
import img5 from "../../assets/img/funAbout/fun-about-5.png";
import img6 from "../../assets/img/funAbout/fun-about-6.png";
import img7 from "../../assets/img/funAbout/fun-about-7.png";

const FunAbout = () => {
  return (
    <div className="mt-30 ">
      <div className="">
        {/* fun fact */}
        <div className="bg-gray-300">
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
                  <img src={img1} alt="" />
                </div>
                <div className="text-[#201654]">
                  <h2 className="font-bold text-2xl">1200+</h2>
                  <p>Learners & counting</p>
                </div>
              </div>
              <div className="bg-white py-2 px-3 rounded flex gap-8 items-center">
                <div className="bg-[#FDC800] w-16 p-3 rounded">
                  <img src={img2} alt="" />
                </div>
                <div className="text-[#201654]">
                  <h2 className="font-bold text-2xl">320+</h2>
                  <p>Total courses</p>
                </div>
              </div>
              <div className="bg-white py-2 px-3 rounded flex gap-8 items-center">
                <div className="bg-[#FDC800] w-16 p-3 rounded">
                  <img src={img3} alt="" />
                </div>
                <div className="text-[#201654]">
                  <h2 className="font-bold text-2xl">1340+</h2>
                  <p>Successful students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* what we do */}
        <div className="w-full md:w-11/12 mx-auto mt-20">
          <div className="flex flex-col md:flex-row items-center justify-between px-5 md:px-0">
            <div className=" w-full md:w-1/2">
              <p className="text-[#201654] font-semibold">What we do</p>
              <h1 className="text-5xl text-[#201654] font-bold">
                How it works?
              </h1>
            </div>
            <div className=" w-full md:w-1/2">
              <p className="text-gray-600">
                The quick, brown fox jumps over a lazy dog. DJs flock by when
                MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
                flick quartz, vex nymphs when MTV ax quiz
              </p>
            </div>
          </div>
          {/* card-section */}
          <div className="mt-10 flex flex-col justify-between md:flex-row px-5 md:px-0 gap-8">
            {/* card-1 */}
            <div className="bg-[#F0F4F9] w-full md:w-[280px] flex flex-col justify-center items-center py-8 px-5 space-y-3 rounded border-3 border-transparent hover:border-amber-300 transition-all duration-300">
              <div className="bg-[#FDC800] w-22 p-5 rounded">
                <img src={img4} alt="" />
              </div>
              <h2 className="font-semibold text-[#201654] text-center text-xl">
                Sign up
              </h2>
              <p className="text-center text-gray-500">
                Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
              </p>
              <button className="text-[#0c023a] font-bold">
                Read More &gt;
              </button>
            </div>
            {/* card-2 */}
            <div className="bg-[#F0F4F9] w-full md:w-[280px] flex flex-col justify-center items-center py-8 px-5 space-y-3 rounded border-3 border-transparent hover:border-amber-300 transition-all duration-300">
              <div className="bg-[#FDC800] w-22 p-5 rounded">
                <img src={img5} alt="" />
              </div>
              <h2 className="font-semibold text-[#201654] text-center text-xl">
              Select course
              </h2>
              <p className="text-center text-gray-500">
                Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
              </p>
              <button className="text-[#0c023a] font-bold">
                Read More &gt;
              </button>
            </div>
            {/* card-3 */}
            <div className="bg-[#F0F4F9] w-full md:w-[280px] flex flex-col justify-center items-center py-8 px-5 space-y-3 rounded border-3 border-transparent hover:border-amber-300 transition-all duration-300">
              <div className="bg-[#FDC800] w-22 p-5 rounded">
                <img src={img6} alt="" />
              </div>
              <h2 className="font-semibold text-[#201654] text-center text-xl">
              Start Learning

              </h2>
              <p className="text-center text-gray-500">
                Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
              </p>
              <button className="text-[#0c023a] font-bold">
                Read More &gt;
              </button>
            </div>
            {/* card-4 */}
            <div className="bg-[#F0F4F9] w-full md:w-[280px] flex flex-col justify-center items-center py-8 px-5 space-y-3 rounded border-3 border-transparent hover:border-amber-300 transition-all duration-300">
              <div className="bg-[#FDC800] w-22 p-5 rounded">
                <img src={img7} alt="" />
              </div>
              <h2 className="font-semibold text-[#201654] text-center text-xl">
              Get Certificate

              </h2>
              <p className="text-center text-gray-500">
                Ipsum yorem dolor amet sit elit. Duis at est id leosco for it
              </p>
              <button className="text-[#0c023a] font-bold">
                Read More &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunAbout;
