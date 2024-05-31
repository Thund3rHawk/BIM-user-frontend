import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import laptop from "../assets/home/laptop.png";
import info from "../assets/home/info.png";
import wave from "../assets/home/wave.png";
import avatars from "../assets/home/avatars.png";
import { GoCheckCircleFill } from "react-icons/go";
import { IoBookSharp } from "react-icons/io5";
import CourseCard from "../components/CourseCard";
import courses from "../assets/courses/courses.png";
import project1 from "../assets/home/project1.png";
import project2 from "../assets/home/project2.png";
import project3 from "../assets/home/project3.png";
import project4 from "../assets/home/project4.png";
import project5 from "../assets/home/project5.png";
import icon1 from "../assets/home/icon1.png";
import icon2 from "../assets/home/icon2.png";
import icon3 from "../assets/home/icon3.png";
import icon4 from "../assets/home/icon4.png";
import icon5 from "../assets/home/icon5.png";
import icon6 from "../assets/home/icon6.png";
import peoplegroup from "../assets/home/peoplegroup.png";

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
          <button className=" text-[#FF006B] bg-white border border-[#FF006B] font-semibold px-4 py-2 rounded-md w-[300px]">
            Explore BIM Training
          </button>
          <button className=" text-[#FF006B] bg-white border border-[#FF006B] font-semibold px-4 py-2 rounded-md w-[300px]">
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
      {/* BIM Services Section */}
      <div className="p-10 px-20">
        <h1 className="text-[#FF006B] text-6xl font-bold">BIM Services</h1>
        <h1 className="text-blue-600 text-xl font-bold">
          What Services We Provide!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">BIM CONSULTING</h2>
            <ul className="space-y-5">
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Implementation
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Adoption
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Digital Integration
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Execution Planning
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                COBIE Services
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                FM Data
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">BIM SERVICES</h2>
            <ul className="space-y-5">
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                3D Modelling
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                4D Modelling
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                5D Estimation
              </li>

              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                SCAN TO BIM
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Revit Family Creation
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                BIM Automation{" "}
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              ARCHITECTURE BIM SERVICES
            </h2>
            <ul className="space-y-5">
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                24/7 Assistance
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Technical Help
              </li>
              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Community Forums
              </li>

              <li className="flex gap-2 text-lg items-center font-bold text-gray-500">
                <GoCheckCircleFill size={25} color="lightblue" />
                Documentation
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button className="  bg-[#FF006B] text-white font-semibold px-4 py-2 rounded-md w-[200px]">
            Explore More
          </button>
        </div>
      </div>
      {/* target audience */}
      <div className="p-10 px-20">
        <h1 className="text-4xl font-bold">
          Who Can Learn <span className="text-[#FF006B]">BIM?</span>
        </h1>
        <h1 className="text-blue-600 text-xl font-bold">
          Prerequisites for BIM!
        </h1>
        <div className="my-10 flex justify-between">
          <div className="flex gap-2 items-center w-[300px]">
            <IoBookSharp size={25} color="blue" />

            <h1 className="text-xl font-bold">Civil Engineers</h1>
          </div>
          <div className="flex gap-2 items-center w-[300px] ">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-xl font-bold">Architects</h1>
          </div>
          <div className="flex gap-2 items-center w-[300px]">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-xl font-bold">Mehanical Engineers</h1>
          </div>
          <div className="flex gap-2 items-center w-[300px]">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-xl font-bold">Interior Designers</h1>
          </div>
        </div>
        <div className="my-10 flex justify-between">
          <div className="flex gap-2 items-center w-[300px]">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-xl font-bold">Electrical Engineers</h1>
          </div>
          <div className="flex gap-2 items-center w-[300px]">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-xl font-bold">Structural Engineers</h1>
          </div>
          <div className="flex gap-2 items-center w-[300px]">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-xl font-bold">Site Engineers</h1>
          </div>
          <div className="flex gap-2 items-center w-[300px]">
            <IoBookSharp size={25} color="blue" />
            <h1 className="text-xl font-bold">Quantity Surveyors</h1>
          </div>
        </div>
      </div>
      {/* why learn bim */}
      <div className="p-10 flex">
        <div className="w-1/2 flex justify-center items-center">
          <img src={info} alt="info" className="w-[70%]" />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <h1 className="text-6xl font-bold">
            Why Learn <br />
            <span className="text-[#FF006B]">BIM?</span>
          </h1>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            sint voluptatem necessitatibus quidem, cumque exercitationem
            repellendus nihil porro. Doloribus optio, sapiente impedit magni
            commodi ea et praesentium nemo. Mollitia, dignissimos aliquid
            dolorem ad quam fugiat possimus eos eaque veniam enim.
          </h1>
          <div className="flex flex-wrap ">
            <div className="flex w-[50%] gap-5 mb-5">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">title</h1>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  ipsa expedita adipisci rem quibusdam voluptatibus, rerum in
                  corrupti esse enim?
                </h1>
              </div>
            </div>
            <div className="flex w-[50%] gap-5 mb-5">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">title</h1>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ducimus distinctio numquam illo neque quis harum
                  sapiente perspiciatis laudantium facilis!
                </h1>
              </div>
            </div>
            <div className="flex w-[50%] gap-5">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">title</h1>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                  voluptatem dolorem excepturi molestiae alias ex similique
                  necessitatibus, ratione officia nam.
                </h1>
              </div>
            </div>
            <div className="flex w-[50%] gap-5">
              <img src={wave} alt="wave" className="h-10 w-10" />
              <div>
                <h1 className="text-2xl font-bold">title</h1>
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, voluptate! Cumque nesciunt officiis soluta aliquid
                  exercitationem adipisci doloribus labore distinctio!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* online courses */}
      <div className="p-10 py-20 relative min-h-screen  justify-center flex ">
        <h1 className="text-5xl font-bold text-center ">
          TOP ONLINE <span className="text-[#FF006B]">COURSES</span>
        </h1>

        <div className="flex flex-col gap-12  z-10 w-[70%] py-10 absolute top-40">
          <div className="flex justify-between">
            <CourseCard
              image={courses}
              subtitle="Architecture"
              title="BIM Professional - Basics to Pro Level"
              rating={5}
              reviews={123}
              price="RS 29,999"
              oldPrice="RS 1,00,000"
            />
            <CourseCard
              image={courses}
              subtitle="Construction"
              title="Advanced BIM Techniques"
              rating={5}
              reviews={98}
              price="RS 19,999"
              oldPrice="RS 75,000"
            />
            <CourseCard
              image={courses}
              subtitle="Engineering"
              title="BIM for Engineers"
              rating={5}
              reviews={87}
              price="RS 24,999"
              oldPrice="RS 90,000"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-[#FF006B] text-white font-semibold px-4 py-2 rounded-md w-[200px]">
              Explore More
            </button>
          </div>
        </div>

        <div className="w-[30%] z-0 -left-10 top-80 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 top-96 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-56 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-72 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div>

      {/* out top projects  */}
      <div className="p-10 px-20 min-h-[120vh] relative">
        <h1 className="text-4xl font-bold">
          OUR TOP <span className="text-[#FF006B]">PROJECTS</span>
        </h1>
        <h1 className="text-blue-600 text-xl font-bold">
          WHAT PROJECTS WE DO!
        </h1>
        <div className="flex justify-end  h-screen items-center absolute z-10 ">
          <div className="w-1/2 flex flex-col gap-5 mr-20">
            <h1 className="text-3xl font-bold w-[70%]">
              NEOM - LOGISTICS PARK LANDSCAPE PROJECT
            </h1>
            <h1 className="text-lg font-bold text-blue-600">
              A Benchmark in Advanced BIM Implementa􀆟on
            </h1>
            <h1 className="pt-5 text-xl">
              The NEOM Logistics Park project stands as a testament to our
              expertise in handling complex and challenging projects with
              precision and excellence. The successful implementation of
              Building Informa􀆟on Modeling (BIM) at Level of Detail (LOD) 500
              during the as-built stage with all COBie data integra􀆟on is one of
              our significant achievements. This high level of detail
              encompassed various aspects of the project, ensuring unparalleled
              accuracy and integration.
            </h1>
          </div>
        </div>
        <div className="flex gap-5 w-1/2  flex-wrap absolute top-40 z-10">
          <img src={project1} alt="project1" className="w-60 h-80" />
          <img src={project2} alt="project2" className="w-60 h-80" />
          <img src={project3} alt="project3" className="w-60 h-80" />
          <img src={project4} alt="project4" className="w-60 h-80" />
        </div>
        <div className="absolute bottom-[30%] left-[15%] z-20 ">
          <img src={project5} alt="project5" className="w-60 h-80" />
        </div>
        <div className="w-[110%] z-0 -left-10 top-80 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[20%] z-0 -left-10 top-[62%] absolute h-12 bg-[#FF006B] transform -rotate-6" />

        <div className="w-[20%] z-0 -left-10 top-[70%] absolute h-12 bg-[#FF006B] transform -rotate-6" />
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

      {/* company details */}
      <div className="p-10 px-20 relative">
        <div className="flex justify-end min-h-screen">
          <div className="w-1/2 flex flex-col gap-3 ">
            <h1 className="text-3xl font-bold w-[60%]">
              know how everything works and why we work with{" "}
              <span className="text-[#FF006B]">BIM</span>
            </h1>
            <h1 className="font-bold text-blue-600">OUR MISSION</h1>
            <h1 className="text-lg">
              At The BIM skills, we're dedicated to revolutionizing the
              construction landscape through innovative BIM services and expert
              consul􀆟ng. Our mission is simple yet profound: to empower our
              clients with the tools, strategies, and support they need to bring
              their boldest visions to life. We're not just service providers;
              we're partners committed to driving efficiency, collaboration, and
              excellence in every project we undertake. Together, we're shaping
              a future where BIM transforms not just buildings, but entire
              industries.
            </h1>
            <h1 className="font-bold text-[#FF006B]">OUR VISION</h1>
            <h1 className="text-lg">
              Our vision at The BIM skills is clear: to lead the way in BIM
              services and consulting, seeing new standards of excellence and
              innovation. We see a future where every project, large or small,
              benefits from the power of BIM to drive efficiency,
              sustainability, and impact. By harnessing technology, fostering
              creativity, and nurturing talent, we empower our clients to
              achieve their goals beyond imagination. At The BIM skills, we're
              not just building structures; we're building a legacy of
              collaboration, innovation, and progress that will shape the world
              for genera􀆟ons.
            </h1>
          </div>
        </div>
        <div className="flex justify-center w-1/2 absolute left-0 top-0 z-10">
          <img src={peoplegroup} alt="peoplegroup" className="w-[70%]" />
        </div>
        <div className="w-[30%] z-0 -left-10 top-72 absolute h-12 bg-[#FF006B] transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 top-96 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
