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
import { FaQuoteLeft } from "react-icons/fa";
import testimonial from "../assets/home/testimonial.png";
import blogmain from "../assets/home/blogmain.png";
import blog from "../assets/home/blog.png";
import { FaRegHeart } from "react-icons/fa6";
import { TfiArrowTopRight } from "react-icons/tfi";
import one from "../assets/home/1.png";
import two from "../assets/home/2.png";
import three from "../assets/home/3.png";
import four from "../assets/home/4.png";
import five from "../assets/home/5.png";
import six from "../assets/home/6.png";
import seven from "../assets/home/7.png";

const blogPosts = [
  {
    title: "title",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa expedita adipisci rem quibusdam voluptatibus, rerum in corrupti esse enim?",
    image: blogmain,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "title",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptatem dolorem excepturi molestiae alias ex similique necessitatibus, ratione officia nam.",
    image: blog,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "title",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate! Cumque nesciunt officiis soluta aliquid exercitationem adipisci doloribus labore distinctio!",
    image: blog,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
];
const courseData = [
  {
    id: 1,
    image: courses,
    subtitle: "Architecture",
    title: "BIM Professional - Basics to Pro Level",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
  {
    id: 2,
    image: courses,
    subtitle: "Architecture",
    title: "BIM Professional - Basics to Pro Level",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
  {
    id: 3,
    image: courses,
    subtitle: "Architecture",
    title: "BIM Professional - Basics to Pro Level",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
];
const recentBlogPost = blogPosts[0];
const otherBlogPosts = blogPosts.slice(1);
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

            <h1 className=" text-7xl font-bold">
              BECOME <span className="text-white">BIM PRO!</span> WORKING
              REALTIME PROJECTS
            </h1>
            <h1 className=" text-2xl">
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
          <button className=" flex gap-2 items-center justify-center text-xl  text-[#FF006B] bg-white border border-[#FF006B] font-semibold px-4 py-2 rounded-md w-[300px]">
            Explore BIM Training
            <TfiArrowTopRight />
          </button>
          <button className=" flex gap-2 items-center justify-center text-xl text-[#FF006B] bg-white border border-[#FF006B] font-semibold px-4 py-2 rounded-md w-[300px]">
            Explore BIM Services
            <TfiArrowTopRight />
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
      {/* <div className="p-10 px-20">
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
      </div> */}
      <div className="p-10 px-20">
        <h1 className="text-4xl font-bold">
          <span className="text-[#FF006B]">Top BIM</span> Services
        </h1>
        <div className="flex justify-between my-10 mt-16">
          <div className="flex gap-5 items-center w-[20%]">
            <img src={one} alt="one" className="w-6 h-6" />
            <h1 className="text-2xl text-[#FF006B] font-bold ">
              BIM <span className="text-black">TRAINING</span>
            </h1>
          </div>
          <div className="flex gap-5 w-[25%]  items-center">
            <img src={two} alt="one" className="w-6 h-6" />
            <h1 className="text-2xl text-[#FF006B] font-bold ">
              BIM <span className="text-black">CONSULTING</span>
            </h1>
          </div>
          <div className="flex gap-5 items-center  w-[30%]">
            <img src={three} alt="one" className="w-6 h-6" />
            <h1 className="text-2xl font-bold ">
              ARCHITECTURE <span className="text-[#FF006B]">BIM</span> SERVICES
            </h1>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-5 items-center w-[20%]">
            <img src={four} alt="one" className="w-6 h-6" />
            <h1 className="text-2xl font-bold text-[#FF006B]">
              BIM <span className="text-black">SERVICES</span>
            </h1>
          </div>
          <div className="flex gap-5 w-[25%] items-center">
            <img src={five} alt="one" className="w-6 h-6" />
            <h1 className="text-2xl font-bold text-[#FF006B]">
              CAD <span className="text-black">SERVICES</span>
            </h1>
          </div>
          <div className="flex gap-5 items-center w-[30%]">
            <img src={six} alt="one" className="w-6 h-6" />
            <h1 className="text-2xl font-bold  ">
              STRUCTURE <span className="text-[#FF006B]">BIM</span> SERVICES
            </h1>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="flex gap-5  items-center  w-[35%] ">
            <img src={seven} alt="one" className="w-6 h-6" />
            <h1 className="text-2xl text-[#FF006B] font-bold ">
              VISUALIZATION <span className="text-black">SERVICES</span>
            </h1>
          </div>
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
            {courseData.map((course, index) => (
              <CourseCard
                image={course.image}
                subtitle={course.subtitle}
                title={course.title}
                rating={course.rating}
                reviews={course.reviews}
                price={course.price}
                oldPrice={course.oldPrice}
                id={course.id}
              />
            ))}
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

      {/* testimonial */}

      <div className="bg-[#0044ff1b] min-h-[80vh] flex p-20  m-10 rounded-lg">
        <div className="w-1/2 flex flex-col ml-20 gap-10">
          <FaQuoteLeft color="FF006B" size={30} />

          <div className="flex items-center mt-8 ">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="gold"
                className="w-5 h-5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.92c.969 0 1.371 1.24.588 1.81l-3.98 2.892a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.98-2.892a1 1 0 00-1.176 0l-3.98 2.892c-.784.57-1.838-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.92a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            ))}
          </div>
          <h1 className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            voluptate, commodi excepturi cupiditate ab aspernatur, voluptatum
            corrupti aut voluptas et magni totam earum provident laboriosam
            voluptatibus similique hic recusandae eos sunt libero. Porro,
            placeat id obcaecati consequatur, sunt minima sequi illum impedit
            deserunt repudiandae vero, veniam magni laboriosam dicta quis.
          </h1>
          <h1 className="font-bold">
            Maria Botin <span className="text-[#FF006B]"> CEO</span>
          </h1>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={testimonial} alt="testimonial" className="w-[50%]" />
        </div>
      </div>

      {/* blogs */}
      <div className="p-10">
        <h1 className="text-4xl font-bold text-[#FF006B]">BLOGS</h1>
        <h1 className="text-blue-600 text-xl font-bold">
          WHAT BLOGS ARE IN BIM!
        </h1>
      </div>
      <div className="flex flex-col gap-5 pb-10 px-20">
        <h1 className="text-2xl font-bold">Recent blog posts</h1>
        <div className="flex  ">
          {/* large card */}
          <div className="w-1/2 flex flex-col ">
            <img
              src={recentBlogPost.image}
              alt={recentBlogPost.title}
              className="w-full"
            />
            <h1 className="font-bold text-blue-600 mt-2">
              {recentBlogPost.author} • {recentBlogPost.Date}
            </h1>
            <h1 className="text-2xl font-bold mt-2">{recentBlogPost.title}</h1>
            <p className="text-lg">{recentBlogPost.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {recentBlogPost.topics.map((topic, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-800 text-sm px-4 py-1 rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
          {/* small cards */}
          <div className="w-1/2 flex flex-col pl-10 gap-10">
            {otherBlogPosts.map((post, index) => (
              <div key={index} className="flex items-center">
                <img src={post.image} alt={post.title} className="w-[40%]" />

                <div className="pl-4">
                  <h1 className="font-bold text-blue-600 mt-2">
                    {post.author} • {post.Date}
                  </h1>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-md">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-800 text-sm px-4 py-1 rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <button className="bg-[#FF006B] text-white font-semibold px-4 py-2 rounded-md w-[200px]">
          Explore More
        </button>
      </div>

      {/* FAQ */}

      <div className="flex flex-col justify-center items-center gap-3 mb-20">
        <h1 className="text-lg font-bold text-blue-600">FAQs</h1>
        <h1 className="text-4xl font-bold">Frequently asked questions</h1>

        <h1 className="text-xl text-gray-400">
          Have questions? We’re here to help.
        </h1>

        <div className="flex justify-between gap-10 px-20">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="bg-[#F9F5FF] h-10 w-10 flex justify-center items-center rounded-full">
              <FaRegHeart color="FF006B" size={20} />
            </div>
            <h1 className="font-semibold text-lg">
              What services does The BIM Skills Company provide?
            </h1>
            <h1>
              We offer a wide range of services including BIM training and
              certification, consulting, custom BIM development, BIM
              coordination and management, digital twins and data management,
              outsourcing and support services, as well as VR and AR
              integration. 
            </h1>
          </div>
          <div className="flex flex-col items-center text-center gap-5">
            <div className="bg-[#F9F5FF] h-10 w-10 flex justify-center items-center rounded-full">
              <FaRegHeart color="FF006B" size={20} />
            </div>
            <h1 className="font-semibold text-lg">
              What services does The BIM Skills Company provide?
            </h1>
            <h1>
              We offer a wide range of services including BIM training and
              certification, consulting, custom BIM development, BIM
              coordination and management, digital twins and data management,
              outsourcing and support services, as well as VR and AR
              integration. 
            </h1>
          </div>
          <div className="flex flex-col items-center text-center gap-5">
            <div className="bg-[#F9F5FF] h-10 w-10 flex justify-center items-center rounded-full">
              <FaRegHeart color="FF006B" size={20} />
            </div>
            <h1 className="font-semibold text-lg">
              What services does The BIM Skills Company provide?
            </h1>
            <h1>
              We offer a wide range of services including BIM training and
              certification, consulting, custom BIM development, BIM
              coordination and management, digital twins and data management,
              outsourcing and support services, as well as VR and AR
              integration. 
            </h1>
          </div>
        </div>
        <div className="flex justify-between gap-10 px-20 mt-10">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="bg-[#F9F5FF] h-10 w-10 flex justify-center items-center rounded-full">
              <FaRegHeart color="FF006B" size={20} />
            </div>
            <h1 className="font-semibold text-lg">
              What services does The BIM Skills Company provide?
            </h1>
            <h1>
              We offer a wide range of services including BIM training and
              certification, consulting, custom BIM development, BIM
              coordination and management, digital twins and data management,
              outsourcing and support services, as well as VR and AR
              integration. 
            </h1>
          </div>
          <div className="flex flex-col items-center text-center gap-5">
            <div className="bg-[#F9F5FF] h-10 w-10 flex justify-center items-center rounded-full">
              <FaRegHeart color="FF006B" size={20} />
            </div>
            <h1 className="font-semibold text-lg">
              What services does The BIM Skills Company provide?
            </h1>
            <h1>
              We offer a wide range of services including BIM training and
              certification, consulting, custom BIM development, BIM
              coordination and management, digital twins and data management,
              outsourcing and support services, as well as VR and AR
              integration. 
            </h1>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
