import React from 'react'
import { FaInstagramSquare, FaPinterest } from 'react-icons/fa'
import { FaFacebook, FaLocationDot, FaSquareXTwitter } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const SubHeader = () => {
  return (
    <div className='hidden md:block bg-[#FDC800] py-3'>
        <div className='w-11/12 mx-auto flex justify-between'>
        {/* left */}
<div className='flex gap-5 items-center'>
    <div className='flex items-center gap-2 text-[#201654]'>
    <FaLocationDot />
    <p className='text-sm font-semibold'>2072 Pinnickinick Street, WA 98370</p>

    </div>
    <div className='flex items-center gap-2 text-[#201654]'>
    <MdEmail />

    <p className='text-sm font-semibold'>Info@website.com</p>

    </div>

</div>
{/* right */}
<div className='text-[#201654] flex gap-5'>
<FaFacebook />
<FaSquareXTwitter />
<FaInstagramSquare />
<FaPinterest />





</div>
        </div>
    </div>
  )
}

export default SubHeader