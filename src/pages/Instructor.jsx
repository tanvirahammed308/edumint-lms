import { useEffect, useState } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded shadow-md overflow-hidden flex flex-col "
          >
            <img src={item.image} alt={item.name} className="w-full h-52 " />
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
  );
};

export default Instructor;
