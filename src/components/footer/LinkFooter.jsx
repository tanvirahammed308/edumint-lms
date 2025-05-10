import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const LinkFooter = () => {
  return (
    <div className="py-8 w-full md:w-11/12 mx-auto flex flex-col md:flex-row justify-between px-10 md:px-0 space-y-6 md:space-y-0">
        {/* contact us */}
      <div className=" ">
        <div className="flex items-center  gap-2">
          <div className="w-2 h-7 bg-[#FDC800] rounded"></div>
          <h1 className="text-2xl font-semibold text-[#211755]">Contact Us</h1>
        </div>
        <div className="space-y-5 mt-5 text-sm" >
            <div className="flex item-center gap-2 ">
            <FaLocationDot className="text-xl text-[#FDC800] -ml-1.5 "/>

                <p className="text-gray-500 font-semibold">420 Love Sreet 133/2 Street NewYork</p>
            </div>
            <div className="flex item-center gap-2 ">
            <MdEmail  className="text-xl text-[#FDC800] -ml-1.5 "/>

                <p className="text-gray-500 font-semibold">info.contact@gmail.com</p>
            </div>
            <div className="flex item-center gap-2 ">
            <FaPhoneAlt  className="text-xl text-[#FDC800] -ml-1.5 "/>

                <p className="text-gray-500 font-semibold">012 345 678 9101</p>
            </div>
            

        </div>
      </div>
        {/* Quick Links */}
      <div className=" ">
        <div className="flex items-center  gap-2">
          <div className="w-2 h-7 bg-[#FDC800] rounded"></div>
          <h1 className="text-2xl font-semibold text-[#211755]">Quick Links</h1>
        </div>
        <div className="space-y-5 mt-5" >
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Home</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">About us</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Terms & Conditions</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Special</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Privacy Policy</p>
            </div>
           
            
            

        </div>
      </div>
        {/* Course Links */}
      <div className=" ">
        <div className="flex items-center  gap-2">
          <div className="w-2 h-7 bg-[#FDC800] rounded"></div>
          <h1 className="text-2xl font-semibold text-[#211755]">Course</h1>
        </div>
        <div className="space-y-5 mt-5" >
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Photography</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Math</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Marketing</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Health & Fitness</p>
            </div>
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-1">

           </div>

                <p className="text-gray-500 font-semibold text-sm">Development</p>
            </div>
           
            
            

        </div>
      </div>
        {/* News & Blog Links */}
      <div className="  w-[350px]">
        <div className="flex items-center  gap-2">
          <div className="w-2 h-7 bg-[#FDC800] rounded"></div>
          <h1 className="text-2xl font-semibold text-[#211755]">News & Blog</h1>
        </div>
        <div className="space-y-5 mt-5" >
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-3">

           </div>

                <p className="text-gray-500 font-semibold text-xl">Now you can use AI to create your online course</p>
            </div>
            
            <div className="flex item-center gap-2 ">
           <div className="w-2 h-2 bg-[#FDC800] mt-3">

           </div>

                <p className="text-gray-500 font-semibold text-xl">Photography by Creating an Online Course</p>
            </div>
            
           
            
            

        </div>
      </div>
       
        
    </div>
  );
};

export default LinkFooter;
