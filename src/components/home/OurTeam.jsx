import React from "react";
import img1 from "../../assets/img/team/team-1.png";
import img2 from "../../assets/img/team/team-2.png";
import img3 from "../../assets/img/team/team-3.png";
import img4 from "../../assets/img/team/team-4.png";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const OurTeam = () => {
  return (
    <div className="mt-10 md:mt-20 w-11/12 mx-auto ">
      <div className="text-[#201654] text-center">
        <h5 className="font-semibold text-xl">Meet Our team</h5>
        <h1 className="text-4xl font-bold mt-3">Our Creative Team</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mt-10">
        <div className="w-full md:w-[300px] relative">
          <img src={img1} alt="" />
          <div className="absolute w-full bottom-0 ">
            <div className="bg-gray-200 w-full  text-[#201654]  rounded px-3 py-3 flex  flex-col justify-center items-center space-y-2">
              <div className="text-center">
                <h1 className="font-bold text-2xl">Donal Trump</h1>
                <p className="font-semibold">Teacher</p>
              </div>
              <div className="text-[#201654] flex gap-5 text-2xl">
                <FaSquareFacebook />
                <FaLinkedin />
                <FaInstagramSquare />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[300px] relative">
          <img src={img2} alt="" />
          <div className="absolute w-full bottom-0 ">
            <div className="bg-gray-200 w-full  text-[#201654]  rounded px-3 py-3 flex  flex-col justify-center items-center space-y-2">
              <div className="text-center">
                <h1 className="font-bold text-2xl">Alom Mask</h1>
                <p className="font-semibold">Admin</p>
              </div>
              <div className="text-[#201654] flex gap-5 text-2xl">
                <FaSquareFacebook />
                <FaLinkedin />
                <FaInstagramSquare />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[300px] relative">
          <img src={img3} alt="" />
          <div className="absolute w-full bottom-0 ">
            <div className="bg-gray-200 w-full  text-[#201654]  rounded px-3 py-3 flex  flex-col justify-center items-center space-y-2">
              <div className="text-center">
                <h1 className="font-bold text-2xl">Loren D Mori</h1>
                <p className="font-semibold">Seo Expert</p>
              </div>
              <div className="text-[#201654] flex gap-5 text-2xl">
                <FaSquareFacebook />
                <FaLinkedin />
                <FaInstagramSquare />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[300px] relative">
          <img src={img4} alt="" />
          <div className="absolute w-full bottom-0 ">
            <div className="bg-gray-200 w-full  text-[#201654]  rounded px-3 py-3 flex  flex-col justify-center items-center space-y-2">
              <div className="text-center">
                <h1 className="font-bold text-2xl">JongKook</h1>
                <p className="font-semibold">HR</p>
              </div>
              <div className="text-[#201654] flex gap-5 text-2xl">
                <FaSquareFacebook />
                <FaLinkedin />
                <FaInstagramSquare />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
