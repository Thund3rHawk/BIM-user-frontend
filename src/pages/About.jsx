import React from "react";
import Navbar from "../components/Navbar";
import image from "../assets/about/Image.png";
import Footer from "../components/Footer";
import top_img from "../assets/about/top_img.png";
import security from "../assets/about/security.png";
import discipline from "../assets/about/discipline.png";
import services from "../assets/about/services.png";
import courses from "../assets/courses/courses.png";
import { FaArrowCircleRight } from "react-icons/fa";
import solution from "../assets/about/solution.png";
import mission from "../assets/about/mission.png";
import one from "../assets/about/1.png";
import two from "../assets/about/2.png";
import three from "../assets/about/3.png";
import four from "../assets/about/4.png";
import vision from "../assets/about/vision.png";
import icon1 from "../assets/home/icon1.png";
import icon2 from "../assets/home/icon2.png";
import icon3 from "../assets/home/icon3.png";
import icon4 from "../assets/home/icon4.png";
import icon5 from "../assets/home/icon5.png";
import icon6 from "../assets/home/icon6.png";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-3 my-10">
        <h1 className="text-lg font-bold text-blue-600">About Us</h1>
        <h1 className="text-4xl font-bold">
          About the <span className="text-[#FF006B]">Company</span>
        </h1>
        <h1 className="text-xl text-gray-500">
          Learn more about the company and the team behind it.
        </h1>
      </div>
      {/* <div className="px-10 pb-10 flex">
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
      </div> */}

      {/* first section */}
      <div className="flex">
        <div className="flex flex-col gap-10 justify-between w-60 px-16 pb-10 pt-5">
          <div className="">
            <h1 className="text-5xl font-medium">1,391</h1>
            <h1 className="text-lg font-bold">
              Projects completed in last 5 years
            </h1>
          </div>
          <div className="">
            <h1 className="text-5xl font-medium">1,391</h1>
            <h1 className="text-lg font-bold">
              Projects completed in last 5 years
            </h1>
          </div>
          <div className="">
            <h1 className="text-5xl font-medium">1,391</h1>
            <h1 className="text-lg font-bold">
              Projects completed in last 5 years
            </h1>
          </div>
        </div>
        <div>
          <img src={top_img} alt="top_img" />
        </div>
        <div className="w-[40%]  p-16 flex flex-col gap-5">
          <h1 className="text-2xl font-bold ">Explore features</h1>
          <h1 className="text-4xl font-medium">A Leading BIM Company</h1>
          <h1 className=" ">
            "At The BIM Skills, we're more than just a company; we're a team of
            passionate trailblazers, driven by innovation and fueled by
            enthusiasm for cutting-edge technologies. With our dynamic blend of
            creativity and expertise, we're not just active participants in the
            tech realm—we're pioneering the way forward.
          </h1>
          <div className="flex justify-between">
            <div className="w-40 flex flex-col gap-5">
              <img src={discipline} alt="discipline" className="h-20 w-20" />
              <h1 className="font-bold text-lg">
                All discipline under one roof
              </h1>
            </div>
            <div className="w-40 flex flex-col gap-5">
              <img src={security} alt="discipline" className="h-20 w-20" />
              <h1 className="font-bold text-lg">
                100% Data Security and Technical Support
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* services section */}
      <div
        style={{
          backgroundImage: `url(${services})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "110vh",
          width: "100%",
        }}
        className="p-12"
      >
        <h1 className="text-white text-4xl font-bold mb-5">Our BIM Services</h1>
        <div className="flex  gap-20 mb-5">
          <div className="w-72 bg-white rounded-md">
            <img src={courses} alt="courses" className="rounded-t-md" />
            <h1 className="font-bold text-2xl p-2">BIM Consulting</h1>
            <button className="bg-[#ff006b] flex p-2 items-center gap-2 m-2 rounded-md ">
              <FaArrowCircleRight color="white" />
              <h1 className="font-bold text-white">View More</h1>
            </button>
          </div>
          <div className="w-72 bg-white rounded-md">
            <img src={courses} alt="courses" className="rounded-t-md" />
            <h1 className="font-bold text-2xl p-2">BIM Consulting</h1>
            <button className="bg-[#ff006b] flex p-2 items-center gap-2 m-2 rounded-md ">
              <FaArrowCircleRight color="white" />
              <h1 className="font-bold text-white">View More</h1>
            </button>
          </div>
          <div className="w-72 bg-white rounded-md">
            <img src={courses} alt="courses" className="rounded-t-md" />
            <h1 className="font-bold text-2xl p-2">BIM Consulting</h1>
            <button className="bg-[#ff006b] flex p-2 items-center gap-2 m-2 rounded-md ">
              <FaArrowCircleRight color="white" />
              <h1 className="font-bold text-white">View More</h1>
            </button>
          </div>
          <div className="w-72 bg-white rounded-md">
            <img src={courses} alt="courses" className="rounded-t-md" />
            <h1 className="font-bold text-2xl p-2">BIM Consulting</h1>
            <button className="bg-[#ff006b] flex p-2 items-center gap-2 m-2 rounded-md ">
              <FaArrowCircleRight color="white" />
              <h1 className="font-bold text-white">View More</h1>
            </button>
          </div>
        </div>
        <div className="flex  gap-20">
          <div className="w-72 bg-white rounded-md">
            <img src={courses} alt="courses" className="rounded-t-md" />
            <h1 className="font-bold text-2xl p-2">BIM Consulting</h1>
            <button className="bg-[#ff006b] flex p-2 items-center gap-2 m-2 rounded-md ">
              <FaArrowCircleRight color="white" />
              <h1 className="font-bold text-white">View More</h1>
            </button>
          </div>
          <div className="w-72 bg-white rounded-md">
            <img src={courses} alt="courses" className="rounded-t-md" />
            <h1 className="font-bold text-2xl p-2">BIM Consulting</h1>
            <button className="bg-[#ff006b] flex p-2 items-center gap-2 m-2 rounded-md ">
              <FaArrowCircleRight color="white" />
              <h1 className="font-bold text-white">View More</h1>
            </button>
          </div>
          <div className="flex gap-5 justify-center items-center">
            <button className="border-2 border-white p-2 rounded-md">
              <h1 className="font-bold text-white text-lg">
                Explore All Services
              </h1>
            </button>
            <button className=" p-2 rounded-md flex items-center gap-2 bg-black">
              <FaArrowCircleRight color="white" />
              <h1 className="font-bold text-white text-lg">Request a Quote</h1>
            </button>
          </div>
        </div>
      </div>

      {/* solution section */}
      <div className="flex">
        <div className="w-1/3">
          <img src={solution} alt="solution" className="w-full" />
        </div>
        <div className="w-2/3 p-16 flex flex-col gap-5 bg-[#1761B6]">
          <h1 className="text-4xl text-white font-bold w-96">
            Get Solution for all your BIM requirements.
          </h1>
          <h1 className="text-white text-lg">
            What sets us apart is not just our technical prowess, but our
            unwavering passion for what we do. We thrive on challenges, revel in
            exploration, and embrace every opportunity to learn and grow. With
            us, you're not just ge􀆫ng a team of experts; you're gaining a
            dedicated partner on a journey of discovery and transformation.
            <br />
            <br />
            Join us as we harness the power of technology to create solutions
            that inspire, empower, and shape the world of tomorrow. Together,
            let's innovate, let's explore, and let's build a future where
            possibilities are limitless
          </h1>
          <div className="flex">
            <div className="w-1/2 flex flex-col gap-2 p-2">
              <img src={mission} alt="mission" className="w-16 h-16" />
              <h1 className="text-white text-lg font-bold ">Our Mission</h1>
              <h1 className="text-white text-lg">
                At The BIM skills, we're dedicated to revolutionizing the
                construction landscape through innovative BIM services and
                expert consultng. Our mission is simple yet profound: to empower
                our clients with the tools, strategies, and support they need to
                bring their boldest visions to life. We're not just service
                providers; we're partners committed to driving efficiency,
                collaboration, and excellence in every project we undertake.
                Together, we're shaping a future where BIM transforms not just
                buildings, but entire industries.
              </h1>
            </div>
            <div className="w-1/2 flex flex-col gap-2 p-2">
              <img src={vision} alt="vision" className="w-16 h-16" />
              <h1 className="text-white text-lg font-bold ">Our Vision</h1>
              <h1 className="text-white text-lg">
                At The BIM skills, we're dedicated to revolutionizing the
                construction landscape through innovative BIM services and
                expert consultng. Our mission is simple yet profound: to empower
                our clients with the tools, strategies, and support they need to
                bring their boldest visions to life. We're not just service
                providers; we're partners committed to driving efficiency,
                collaboration, and excellence in every project we undertake.
                Together, we're shaping a future where BIM transforms not just
                buildings, but entire industries.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* advantages of bim */}
      <div className="p-10 px-20">
        <h1 className="text-4xl font-bold">
          ADVANTAGES OF <span className="text-[#FF006B]">BIM</span>
        </h1>
        <h1 className="text-blue-600 text-xl font-bold">
          WHAT'S YOU GET FROM BIM!
        </h1>
        <div className="flex flex-wrap gap-16 my-16">
          <div className="flex w-[30%] gap-5">
            <img src={icon1} alt="wave" className="h-10 w-10" />

            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Enhanced Collaboration</h1>
              <h1>
                BIM facilitates better communication and coordination among
                project stakeholders.
              </h1>
            </div>
          </div>
          <div className="flex w-[30%] gap-5">
            <img src={icon2} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Increased Efficiency</h1>
              <h1>
                BIM streamlines workflows by integrating various aspects of the
                design and construction process.
              </h1>
            </div>
          </div>
          <div className="flex w-[30%] gap-5">
            <img src={icon3} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Lifecycle Management</h1>
              <h1>
                BIM supports the en􀆟re lifecycle of a building, from initial
                design and construction to maintenance.
              </h1>
            </div>
          </div>
          <div className="flex w-[30%] gap-5">
            <img src={icon4} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Cost Savings</h1>
              <h1>
                BIM helps in accurate cost es􀆟ma􀆟on and budget management by
                providing detailed quantity take-offs.
              </h1>
            </div>
          </div>
          <div className="flex w-[30%] gap-5">
            <img src={icon5} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Better Visualization</h1>
              <h1>
                The 3D models generated by BIM provide a clear and detailed
                visual representation of the project.
              </h1>
            </div>
          </div>
          <div className="flex w-[30%] gap-5">
            <img src={icon6} alt="wave" className="h-10 w-10" />
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Enhanced Quality Control</h1>
              <h1>
                BIM ensures higher quality construction by enabling precise
                planning and execution, minimizing errors.
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* work section */}
      <div className="p-16 ">
        <h1 className="text-4xl font-bold">How we work</h1>
        <h1 className="text-xl font-bold text-[#4B4B4B] w-[60%]">
          Our work is our Pride. We assist the project holders in knowing the
          key aspect of their project in an informative approach that is
          segregated in form of different steps and processes.
        </h1>
        <div className="flex m-16 border-t-2 border-gray shadow-md">
          <div className="p-8 ">
            <img src={one} alt="one" className="w-12 h-12" />
            <h1 className="text-xl font-bold">Conceptualize</h1>
            <h1 className="text-lg">
              We can helps in assistance, support, and conceptualizing BIM
              layouts for wide range of projects.
            </h1>
          </div>
          <div className="p-8 border-l-2 border-gray ">
            <img src={two} alt="one" className="w-12 h-12" />
            <h1 className="text-xl font-bold">Exploring Indeas</h1>
            <h1 className="text-lg">
              We can helps in assistance, support, and conceptualizing BIM
              layouts for wide range of projects.
            </h1>
          </div>
          <div className="p-8  border-l-2 border-gray ">
            <img src={three} alt="one" className="w-12 h-12" />
            <h1 className="text-xl font-bold">Integration</h1>
            <h1 className="text-lg">
              We can helps in assistance, support, and conceptualizing BIM
              layouts for wide range of projects.
            </h1>
          </div>
          <div className="p-8  border-l-2 border-gray ">
            <img src={four} alt="one" className="w-12 h-12" />
            <h1 className="text-xl font-bold">Implementation</h1>
            <h1 className="text-lg">
              We can helps in assistance, support, and conceptualizing BIM
              layouts for wide range of projects.
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
