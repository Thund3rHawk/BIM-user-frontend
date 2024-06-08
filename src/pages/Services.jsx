import React from "react";
import Navbar from "../components/Navbar";
import design from "../assets/services/design-phase.png";
import operation from "../assets/services/operation-phase.png";
import construction from "../assets/services/construction-phase.png";
import projectsmain from "../assets/projects/projectsmain.png";
import courses from "../assets/courses/courses.png";
import Footer from "../components/Footer";
import building from "../assets/services/building.png";
import Contact from "../components/Contact";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="h-64 w-full bg-gradient-to-r from-[#0B64BA] to-[#D1306B] flex justify-center items-center">
        <h1 className="text-white font-bold text-5xl text-center">
          Our <br /> Services
        </h1>
      </div>
      <div className="flex">
        <div className="w-[40%] py-32 pl-32 pr-10">
          <h1 className="font-bold text-lg mt-5">
            Innovative methods for better construction
          </h1>
          <h1 className="font-medium text-4xl">Your Design and BIM Partner</h1>
          <h1 className=" text-lg mt-10">
            Choose us as your offshore design and BIM partner and experience the
            benefits of professional support and cost-effective solutions.
          </h1>
          <h1 className=" text-lg mt-5">
            Our team of highly trained professionals use the latest technology
            and methods to deliver accurate designs and models, so you can
            achieve your project goals with confidence.
          </h1>
        </div>

        <div className="w-[60%] py-32 pr-32 pl-10 flex flex-wrap gap-16">
          <div className="w-[40%] flex flex-col gap-3">
            <img src={design} alt="design" className="w-20 h-20" />
            <h1 className="font-bold text-lg">Design Phase</h1>
            <h1>
              Our BIM services enable virtual design validation and optimization
              prior to physical construction.
            </h1>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <img src={construction} alt="design" className="w-20 h-20" />
            <h1 className="font-bold text-lg">Construction Phase</h1>
            <h1>
              Our BIM services enable virtual design validation and optimization
              prior to physical construction.
            </h1>
          </div>
          <div className="w-[40%] flex flex-col gap-3">
            <img src={operation} alt="design" className="w-20 h-20" />
            <h1 className="font-bold text-lg">Operation Phase</h1>
            <h1>
              Our BIM services enable virtual design validation and optimization
              prior to physical construction.
            </h1>
          </div>
          <div className="w-[40%] bg-[#FF006B] rounded-md p-10">
            <h1 className="text-white text-4xl">280+</h1>
            <h1 className="text-white text-4xl">Organizations</h1>
            <h1 className="text-white text-lg font-bold">
              reply on BIM Services for their BIM needs
            </h1>
          </div>
        </div>
      </div>

      <div className="flex h-full">
        <div className="w-1/2 flex justify-center items-center bg-[#1761B6] relative">
          <div className="flex flex-col gap-5  mx-16 absolute">
            <h1 className="text-5xl font-medium text-white">BIM Services</h1>

            <h1 className="text-xl text-white">
              BIM is extremely valuable as it facilitates all phases of a
              project from design to construction to operation and maintenance.
              We are committed to providing efficient and innovative solutions
              for successful project delivery.
            </h1>
            <h1 className="text-xl text-white">
              We offer BIM services for architectural, structural and MEP
              disciplinary. Our experienced team develops accurate virtual
              models through digitization that accelerate the construction
              process by improving project collaboration, accuracy and cost
              savings. We are well versed in an international standard to
              provide BIM across the globe.
            </h1>

            {/* service cards */}

            <div className="flex gap-2">
              <div className="w-[30%] bg-white rounded-md">
                <img src={courses} alt="courses" className="rounded-t-md" />
                <h1 className="font-bold p-2">BIM Consulting</h1>
              </div>
              <div className="w-[30%] bg-white rounded-md">
                <img src={courses} alt="courses" className="rounded-t-md" />
                <h1 className="font-bold p-2">BIM Services</h1>
              </div>
              <div className="w-[30%] bg-white rounded-md">
                <img src={courses} alt="courses" className="rounded-t-md" />
                <h1 className="font-bold p-2">Architecture BIM Services</h1>
              </div>
            </div>
            <div className="flex gap-5">
              <button className="border-2 p-2 rounded-md border-white">
                <h1 className="text-white font-bold">
                  Explore Our BIM Services
                </h1>
              </button>
              <button className="p-2 rounded-md border-white bg-[#FF006B]">
                <h1 className="text-white font-bold">Request a Qoute</h1>
              </button>
            </div>
          </div>
        </div>
        <div className=" w-1/2 flex  justify-end ">
          <img src={projectsmain} alt="projectsmain" className="w-full" />
        </div>
      </div>

      <div className="flex mt-10">
        <img src={building} alt="building" className="w-1/2" />
        <div className="bg-[#FF006B] flex flex-col gap-3 justify-center px-20 ">
          <h1 className="text-white text-4xl font-bold">
            Sustainable BIM Services
          </h1>
          <h1 className="text-white text-lg">
            We provide sustainable BIM services that are developed using
            environmentally conscious and energy-efficient design principles. We
            cover the entire project lifecycle with energy modeling and
            sustainability consulting. We move forward with customized solutions
            to meet each project's specific sustainability goals, such as LEED
            certification, Net-Zero Energy, and the Living Building Challenge.
            Our team maintains up-to-date knowledge on the latest industry
            standards and technologies to provide innovative and cost-effective
            solutions that result in high-performance and sustainable buildings.
          </h1>
          <button className="border border-white rounded-md p-2 w-52">
            <h1 className="text-white font-bold">
              Explore our Design Services
            </h1>
          </button>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Services;
