import React from "react";
import logo from "../assets/navbar/bim-logo.png";
import { Link } from "react-router-dom";

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
      <div className="border flex  border-slate-300">
        <div className="flex justify-between items-center p-1 px-10 w-[80%]">
          <div>
            <h1 className="font-bold">BIM Services</h1>
          </div>
          <Link to="/courses">
            <h1 className="font-bold">BIM Courses</h1>
          </Link>
          <div>
            <h1 className="font-bold">Projects</h1>
          </div>
          <div>
            <h1 className="font-bold">Blogs</h1>
          </div>
          <div>
            <h1 className="font-bold">About Us</h1>
          </div>
          <div>
            <h1 className="font-bold">Contact</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-black text-white  py-1 rounded-md w-[200px]">
              <h1 className="text-sm font-semibold">Send Enquiry</h1>
            </button>

            <button className=" text-black border border-black font-semibold py-1 rounded-md w-[200px]">
              <h1 className="text-sm font-semibold">Request a Quote</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
