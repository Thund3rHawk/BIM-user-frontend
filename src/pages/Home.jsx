import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import laptop from "../assets/home/laptop.png";
import avatars from "../assets/home/avatars.png";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div
        className="min-h-[80vh] m-10 rounded-xl"
        style={{
          background: "linear-gradient(to bottom, #FF006B, #001AFF)",
        }}
      >
        <div className="flex justify-between p-10 relative">
          <div className="w-[55%]  flex flex-col gap-6 ">
            <h1 className="text-white text-lg font-semibold">
              {" "}
              LET'S START YOUR JOUNEY
            </h1>

            <h1 className="text-white text-7xl font-bold">
              BECOME BIM PRO! WORKING REALTIME PROJECTS
            </h1>
            <h1 className=" text-lg">
              we're dedicated to revolutionizing the construction landscape
              through innovative BIM services and expert consulting. Our mission
              is simple yetprofound: to empower our clients with the tools,
              strategies, and support theyneed to bring their boldest
              visions to life.
            </h1>
          </div>
          <div className="absolute right-10 -top-24">
            <img src={laptop} alt="laptop" className="w-[800px]" />
          </div>
        </div>
        <div className="p-10 flex gap-10">
          <button className=" text-[#FF006B] bg-white border border-[#FF006B] font-semibold px-4 py-2 rounded-md w-[200px]">
            Explore BIM Training
          </button>
          <button className=" text-[#FF006B] bg-white border border-[#FF006B] font-semibold px-4 py-2 rounded-md w-[200px]">
            Explore BIM Services
          </button>
          <img src={avatars} alt="avatars" />
          <div className="w-32">
            <h1 className="text-white">
              100+ <br /> satisfied clients
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
