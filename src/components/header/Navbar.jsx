import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="w-11/12 mx-auto hidden md:flex justify-between py-5 items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div>
          <ul className="flex gap-5 text-[#201654] font-semibold">
            <li><Link to="/">Home</Link></li>
            <li><Link to="#">Courses</Link></li>
            <li><Link to="#">Instructor</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex gap-5 items-center text-[#201654] font-semibold">
          <div>
            <Link>
              <button>Login </button>
            </Link>
          </div>
          <div className="border border-gray-200 py-2 px-5 shadow-md cursor-pointer" onClick={toggleSearch}>
            <button >
              <FaSearch className="mt-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Popup Search Box */}
      {showSearch && (
        <div className="fixed inset-0  bg-opacity-30 flex justify-center items-start z-50 pt-32">
          <div className="bg-white p-5 rounded-md shadow-lg w-11/12 md:w-1/2 relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
              autoFocus
            />
            <button
              onClick={toggleSearch}
              className="absolute top-2 right-1 text-gray-500 hover:text-red-500 text-xl"
            >
             <IoMdClose />

            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
