import React, { useEffect, useState } from "react";
import { FaBookReader, FaCalendarAlt } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="w-full md:w-11/12 mx-auto mt-20">
      <div className="flex flex-col md:flex-row flex-wrap gap-10">
        {blogs.map((item) => (
          <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg w-full"
                src={item.authorImage}
                alt
              />
            </a>
            
            <div className="p-5">
                <div className="flex justify-between">
                   <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt />
                    <h3 className="mt-1">{item.date}</h3>

                   </div>
                   <div className="flex items-center gap-2 text-gray-600">
                   <FaBookReader />

                    <h3 className="mt-1">{item.readingTime}</h3>

                   </div>
                </div>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-5">
                  {item.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
               {item.content}
              </p>
                <button className="bg-[#FDC800] text-[#201654] font-bold px-5 py-2 rounded">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
