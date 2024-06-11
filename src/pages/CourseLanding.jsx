import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { TfiArrowTopRight } from "react-icons/tfi";
import { GoArrowRight } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import group from "../assets/courses/group.png";
import sticker1 from "../assets/courses/sticker1.png";
import sticker2 from "../assets/courses/sticker2.png";
import { HiOutlineGlobe } from "react-icons/hi";
import { GiGraduateCap } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CourseLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* hero section */}
      <div
        className="min-h-[80vh] m-10 rounded-xl"
        style={{
          background: "linear-gradient(to right, #0666BD, #D92E68)",
        }}
      >
        <div className="flex justify-between p-20 relative">
          <div className="w-[60%]  flex flex-col gap-6 ">
            <h1 className=" text-7xl font-extrabold text-white ">
              Empowering <br /> next-gen architects and engineers towards career
              success
            </h1>
            <h1 className=" text-2xl text-white">
              Online certification courses designed for success. Acquire
              industry-relevant skills through engaging cohort-based learning
              experiences.
            </h1>
            <div className="flex gap-10">
              <button
                onClick={() => navigate("/allcourses")}
                className=" flex gap-2 items-center justify-center text-xl  text-[#FF006B] bg-white border border-[#FF006B] font-semibold p-2 rounded-md w-[250px]"
              >
                Explore Courses
                <GoArrowRight />
              </button>
              <button className=" flex gap-2 items-center justify-center text-xl bg-[#FF006B] text-white border border-[#FF006B] font-semibold p-2 rounded-md w-[250px]">
                Request a Call Back
                <FiPhoneCall />
              </button>
            </div>
          </div>
          <div className="absolute right-10 ">
            <img src={group} alt="group" className="w-[100%]" />
          </div>
          <div className="absolute right-[30%] top-10 ">
            <img src={sticker1} alt="sticker" className="w-[100%]" />
          </div>
          <div className="absolute right-[30%] bottom-28 ">
            <img src={sticker2} alt="sticker" className="w-[100%]" />
          </div>
        </div>
      </div>

      {/* impact section */}

      <div className="px-20">
        <h1 className="text-xl">Our Impact</h1>
        <h1 className="text-4xl font-bold">Moving the Needle with</h1>
        <h1 className="text-4xl font-bold text-[#FF006B]">
          Tech-First Education
        </h1>
        <p className="text-xl w-1/2 ">
          A world of opportunities awaits architecture, engineering, and
          construction (AEC) professionals.{" "}
        </p>
      </div>

      {/* achievements card */}
      <div className="p-20 flex gap-10">
        <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">45+</h1>
          <h1 className="text-xl">Countries Represented</h1>
          <HiOutlineGlobe size={30} color="FF006B" className="" />
        </div>
        <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">5000+</h1>
          <h1 className="text-xl">Successful Graduates</h1>
          <GiGraduateCap size={30} color="FF006B" className="" />
        </div>
        <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">100+</h1>
          <h1 className="text-xl">Projects Completed</h1>
          <MdWorkOutline size={30} color="FF006B" className="" />
        </div>
        <div className="pr-14 pl-10 pb-5 pt-10 w-[300px] border border-blue-200  flex flex-col gap-6 shadow-xl rounded-xl">
          <h1 className="text-7xl text-blue-600 ">4.8/5</h1>
          <h1 className="text-xl">Learner Rating</h1>
          <FaRegStar size={30} color="FF006B" className="" />
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default CourseLanding;
