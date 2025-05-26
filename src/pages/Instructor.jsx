import { useEffect, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import img1 from "../assets/img/instructions/ins-1.svg"
import img2 from "../assets/img/instructions/ins-2.svg"

const Instructor = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/instructors.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div className="mt-10 md:mt-10 w-11/12 mx-auto ">
      <div className="text-[#201654] text-center">
        <h5 className="font-semibold text-xl">Meet Our team</h5>
        <h1 className="text-4xl font-bold mt-3">Our Creative Instructor</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 ">
        <div className="w-full md:w-1/4 mt-10 ">
         <div className="bg-[#E6F0F9] rounded py-5">
          <img src={img1} alt="" />
          <div className="px-3 py-2 space-y-3">
          <h1 className="text-2xl font-bold text-gray-800">Earn a Certificate</h1>
          <p className="text-gray-800">Get the right professional certificate program for you.</p>

          <button className="bg-[#055AAB] text-white px-3 py-1 rounded">View Courses</button>

          </div>
         </div>
         <div className="bg-[#E6F0F9] rounded py-5 mt-32">
          <img src={img2} alt="" />
          <div className="px-3 py-2 space-y-3">
          <h1 className="text-2xl font-bold text-gray-800">Best Rated Courses</h1>
          <p className="text-gray-800">Enroll now in the most popular and best rated courses.</p>

          <button className="bg-yellow-500 text-white px-3 py-1 rounded">Enroll Now</button>

          </div>
         </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full md:w-3/4 ">
        {data.map((item) => (
          <div
            key={item.id}
            className=" rounded shadow-md overflow-hidden flex flex-col bg-red-600 "
          >
            <img src={item.image} alt={item.name} className="w-full h-full " />
            <div className="bg-gray-200 text-[#201654] px-4 py-4 flex flex-col items-center space-y-2">
              <h1 className="font-bold text-2xl">{item.name}</h1>
              <p className="font-semibold">{item.title}</p>
              <p className="text-center text-sm">{item.bio}</p>
              <div className="flex gap-4 text-2xl">
                <FaSquareFacebook />
                <FaLinkedin />
                <FaInstagramSquare />
                <FaSquareXTwitter />
              </div>
            </div>
          </div>
        ))}
      </div>

      </div>
      
    </div>
  );
};

export default Instructor;
