import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/about/Image.png";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-3 my-10">
        <h1 className="text-lg font-bold text-blue-600">About Us</h1>
        <h1 className="text-4xl font-bold">
          About the <span className="text-[#FF006B]">Company</span>
        </h1>
        <h1 className="text-xl text-gray-400">
          Learn more about the company and the team behind it.
        </h1>
      </div>
      <div className="px-10 pb-10 flex">
        <div className="w-1/2 flex justify-center items-center">
          <img src={image} alt="image" className="w-[70%]" />
        </div>
        <div className="flex flex-col gap-5 ml-10">
          <h1 className="text-md font-bold text-[#FF006B]">
            We’ve helped hundreds of companies
          </h1>
          <h1 className="text-5xl font-semibold  w-[70%]">
            We’re only just getting started on our journey
          </h1>
          <div className="flex flex-wrap gap-10 mt-10">
            <div className="flex flex-col gap-5 w-1/3">
              <h1 className="text-5xl font-bold text-blue-600">400+</h1>
              <h1 className="font-semibold">Projects Completed</h1>
            </div>
            <div className="flex flex-col gap-5 w-1/3">
              <h1 className="text-5xl font-bold text-blue-600">600%</h1>
              <h1 className="font-semibold">Return on Invesment</h1>
            </div>
            <div className="flex flex-col gap-5 w-1/3">
              <h1 className="text-5xl font-bold text-blue-600">10k</h1>
              <h1 className="font-semibold">Global Downloads</h1>
            </div>

            <div className="flex flex-col gap-5 w-1/3">
              <h1 className="text-5xl font-bold text-blue-600">200+</h1>
              <h1 className="font-semibold">5 star reviews</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
