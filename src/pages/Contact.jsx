import React from "react";
import img1 from "../assets/img/contact/contact-1.png";
import img2 from "../assets/img/contact/contact-2.png";
import img3 from "../assets/img/contact/contact-3.png";
import { FaInstagramSquare, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="w-full md:w-11/12 mx-auto mt-10">
      <div className="flex flex-col md:flex-row gap-5">
        {/* card-1 */}
        <div className="bg-[#F0F4F9] py-3 px-5 w-full md:w-1/2 flex gap-10 items-center rounded">
          <div className="bg-[#FDC800] w-20 px-3 py-2 rounded">
            <img src={img1} alt="" className="p-2" />
          </div>
          <div>
            <h1 className="text-[#201654] font-bold">Our Phone</h1>
            <p className="text-gray-600 font-semibold">000 2324 39493</p>
          </div>
        </div>
        {/* card-2 */}
        <div className="bg-[#F0F4F9] py-3 px-5 w-full md:w-1/2 flex gap-10 items-center rounded">
          <div className="bg-[#FDC800] w-20 px-3 py-2 rounded">
            <img src={img2} alt="" className="p-2" />
          </div>
          <div>
            <h1 className="text-[#201654] font-bold">Our Email</h1>
            <p className="text-gray-600 font-semibold">name@website.com</p>
          </div>
        </div>
        {/* card-3 */}
        <div className="bg-[#F0F4F9] py-3 px-5 w-full md:w-1/2 flex gap-10 items-center rounded">
          <div className="bg-[#FDC800] w-20 px-3 py-2 rounded">
            <img src={img3} alt="" className="p-2" />
          </div>
          <div>
            <h1 className="text-[#201654] font-bold">Our Address</h1>
            <p className="text-gray-600 font-semibold">
              2 St, Loskia, amukara.
            </p>
          </div>
        </div>
      </div>
      {/* form section */}
      <div className="mt-20 flex flex-col md:flex-row justify-between gap-20 px-5 md:px-0">
        {/* form-content */}
        <div className="w-full md:w-1/4 space-y-5">
          <p className="text-[#201654] font-semibold">Write Us a Message</p>
          <h1 className="text-[#201654] font-bold text-5xl">
            Write Us a Message
          </h1>
          <p className="text-gray-600">
            The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
            quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,
          </p>
          <div className="text-gray-700 text-2xl flex gap-8">
            <FaSquareFacebook />
            <FaLinkedin />
            <FaInstagramSquare />
            <FaSquareXTwitter />
            <FaPinterest />

          </div>
        </div>
      {/* form */}
      <div className="w-full md:w-3/4 space-y-8">
        <div className="flex flex-col md:flex-row gap-5">
          <input type="text"  placeholder="Full Name" className="w-full border border-gray-600 outline-none rounded py-5 px-3"/>
          <input type="text"  placeholder="Phone Number" className="w-full border border-gray-600 outline-none rounded py-5 px-3"/>
          
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <input type="email"  placeholder="Email" className="w-full border border-gray-600 outline-none rounded py-5 px-3"/>
          <input type="text"  placeholder="Subject" className="w-full border border-gray-600 outline-none rounded py-5 px-3"/>
          
        </div>
        <div>
          <textarea name="" id="" placeholder="Your Message" rows="4" cols="20" className="w-full border border-gray-600 px-5 py-3 outline-none rounded"></textarea>
        </div>

        <button className="bg-[#FDC800] py-2 px-5 text-xl rounded font-semibold" type="submit">Send</button>
      </div>
      </div>
      {/* map */}
      <div className="w-full mt-20 h-[350px] rounded overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3704443561496!2d90.38940457410484!3d23.876479283926766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c415dabf6e4d%3A0xb9fa0b309dbe4785!2sUttara%20Sector%2011%20No%20Park!5e0!3m2!1sen!2sbd!4v1746710518151!5m2!1sen!2sbd"
       width="100%"
       height="100%"
       allowFullScreen=""
       loading="lazy"
       referrerPolicy="no-referrer-when-downgrade"
       className="w-full h-full border-0"></iframe>
      </div>
    </div>
  );
};

export default Contact;
