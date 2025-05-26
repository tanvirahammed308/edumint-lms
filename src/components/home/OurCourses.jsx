import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const OurCourses = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("/topCouse.json")
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
  return (
    <div className="w-full md:w-11/12 mx-auto mt-30">
        <h1 className="text-center text-3xl font-bold text-[#201654] mb-5b">Our Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {
                data.map((item)=>(
                    <div key={item.id} className="bg-white rounded shadow-lg p-4 flex flex-col w-full px-5  md:w-[300px] ">
              <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mt-3">{item.title}</h3>
              <p className="text-sm mt-1 text-gray-600 flex-grow">{item.description}</p>
              <p className="mt-2 font-semibold text-[#201654]">Mentor: {item.mentor}</p>
              <div className="mt-3 flex justify-between items-center">
                <Link to="/courses">
              <button className="border-2 border-[#201654] px-2 py-1 font-bold cursor-pointer text-[#2c2c2e] rounded text-sm">View More</button>
                
                </Link>

              
              </div>

            </div>
                ))
            }
        </div>
    </div>
  )
}

export default OurCourses