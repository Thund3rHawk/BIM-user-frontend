import React from "react";
import logo from "../assets/navbar/bim-logo.png";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-screen">
      <div className="flex justify-between items-center p-4 px-10">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10" />
        </Link>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md border border-gray-300 w-[300px]"
          />
          <button className="bg-[#FF006B] text-white  py-2 rounded-md w-[150px]">
            Login
          </button>

          <button className=" text-[#FF006B] border border-[#FF006B] font-semibold px-4 py-2 rounded-md w-[150px]">
            Signup
          </button>
        </div>
      </div>
      <div className="border flex justify-between  border-slate-300">
        <div className="flex justify-between items-center p-1 px-10 w-[80%]">
          <Link to="/services">
            <h1 className="font-bold">BIM Services</h1>
          </Link>
          <Link to="/courses">
            <h1 className="font-bold">BIM Courses</h1>
          </Link>
          <Link to="/">
            <h1 className="font-bold">Projects</h1>
          </Link>
          <Link to="/blogs">
            <h1 className="font-bold">Blogs</h1>
          </Link>
          <Link to="/about">
            <h1 className="font-bold">About Us</h1>
          </Link>

          <Link to="/contact">
            <h1 className="font-bold">Contact</h1>
          </Link>
          <Link className="w-5" to="/">
            <h1 className="text-white">Hello</h1>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white  py-1 rounded-md w-[200px]">
              <h1 className="text-sm font-semibold">Send Enquiry</h1>
            </button>

            <button className=" text-black border border-black font-semibold py-1 rounded-md w-[200px]">
              <h1 className="text-sm font-semibold">Request a Quote</h1>
            </button>
          </div>
        </div>
        {/* <div className="flex items-center justify-center relative">
          <div className="transform rotate-45 bg-blue-500 w-14 h-14 absolute top-3  left-2"></div>
        </div> */}
        <div className="bg-blue-900 px-14 w-72 flex justify-between items-center">
          <IoLogoWhatsapp color="white" size={25} />
          <FaPhoneVolume color="white" size={25} />
          <FaFacebook color="white" size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
