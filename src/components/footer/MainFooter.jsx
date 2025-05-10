import React from 'react'
import logo from "../../assets/img/logo.png"
import { FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const MainFooter = () => {
  return (
    <div className='border-t border-gray-300'>
 <div className='w-full md:w-11/12 mx-auto py-5 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0'>
        <div>
            <img src={logo} alt="" />

        </div>
        <div>
       <p className='text-gray-500 font-semibold'> Copyright © 2025 Edumint</p>
        </div>
        <div className='flex gap-2'>
        <FaFacebook className='text-gray-500 text-2xl'/>
        <FaSquareXTwitter  className='text-gray-500 text-2xl'/>
        <FaLinkedin  className='text-gray-500 text-2xl'/>
        <FaInstagramSquare  className='text-gray-500 text-2xl'/>

        </div>

    </div>
    </div>
   
  )
}

export default MainFooter