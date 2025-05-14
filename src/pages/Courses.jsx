import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        // Extract unique categories from course data
        const uniqueCategories = [...new Set(data.map(course => course.category))];
        setCategories(uniqueCategories);
      });
  }, []);

  // Filter logic
  const filteredCourses = courses.filter(course => {
    const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    const matchSearch = course.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleCategoryChange = (category) => {
  const updated = selectedCategories.includes(category)
    ? selectedCategories.filter(c => c !== category) // Remove category if it's already selected
    : [...selectedCategories, category];
    
  setSelectedCategories(updated);
};


  return (
    <div className="w-11/12 mx-auto mt-5">
      {/* Search Bar */}
      <div className="flex justify-center">
      <div className="w-full md:w-1/2 px-4 py-2 border rounded-md shadow flex items-center justify-between ">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none"
          
        />
        <IoSearch />

      </div>

      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* Left Sidebar - Categories */}
        <div className="md:w-1/4 bg-gray-200 px-5 py-5 rounded">
          <h2 className="font-bold text-lg mb-2 text-[#201654]">Categories</h2>
          <div className="space-y-2">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label className="capitalize">{category}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Course Cards */}
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded shadow p-4 flex flex-col">
              <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mt-3">{course.title}</h3>
              <p className="text-sm mt-1 text-gray-600 flex-grow">{course.description}</p>
              <p className="mt-2 font-semibold text-[#201654]">Category: {course.category}</p>
              <div className="mt-3 flex justify-between items-center">

              <button className="border-2 border-[#201654] px-3 py-2 font-bold cursor-pointer text-[#2c2c2e] rounded">Enroll Now</button>
              <h2 className="text-[#201654] font-bold">${course.price}</h2>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
