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
import realWorldProject from "../assets/courses/real-world-projects.png";
import globeIcon from "../assets/courses/globe-icon.png";
import remoteIcon from "../assets/courses/remote-icon.png";
import sideIcon from "../assets/courses/side-icon.png";
import courses from "../assets/courses/courses.png";
import CourseCard from "../components/CourseCard";
import seven from "../assets/home/7.png";
import logo1 from "../assets/courses/logo1.png";
import logo2 from "../assets/courses/logo2.png";
import logo3 from "../assets/courses/logo3.png";
import logo4 from "../assets/courses/logo4.png";
import logo5 from "../assets/courses/logo5.png";
import logo6 from "../assets/courses/logo6.png";
import logo7 from "../assets/courses/logo7.png";
import logo8 from "../assets/courses/logo8.png";
import logo9 from "../assets/courses/logo9.png";
import logo10 from "../assets/courses/logo10.png";
import mentor1 from "../assets/courses/mentor1.png";
import mentor2 from "../assets/courses/mentor2.png";
import mentor3 from "../assets/courses/mentor3.png";
import mentor4 from "../assets/courses/mentor4.png";
import mentor5 from "../assets/courses/mentor5.png";
import mentor6 from "../assets/courses/mentor6.png";
import review1 from "../assets/courses/review1.png";
import review2 from "../assets/courses/review2.png";
import review3 from "../assets/courses/review3.png";
import review4 from "../assets/courses/review4.png";
import bgImage from "../assets/courses/bgImage.png";
import onlinetraining from "../assets/home/onlinetraining.jpg";
import offlinetraining from "../assets/home/offlinetraining.jpg";
import { Slide } from "react-slideshow-image";
import course3 from "../assets/courses/course3.png";
import course4 from "../assets/courses/course4.png";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: offlinetraining,
    caption: "Slide 2",
  },
  {
    url: onlinetraining,
    caption: "Slide 3",
  },
];

const courseData = [
  {
    id: 1,
    image: course4,
    subtitle: "Architects & Civil",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
  {
    id: 2,
    image: course3,
    subtitle: "Mechanical & Electrical",
    title: "International BIM Coordinator Training & Internship",
    rating: 5,
    reviews: 123,
    price: "RS 29,999",
    oldPrice: "RS 1,00,000",
  },
];

const CourseLanding = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {/* hero section */}

      <Slide arrows={false} autoplay={true} duration={3000}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              className="min-h-[90vh] mt-10 mx-10 rounded-xl"
              // style={{
              //   background: `url(${bgImage}), linear-gradient(to right, #0666BD, #D92E68) `,
              // }}
              style={{
                ...divStyle,
                backgroundImage: `url(${slideImage.url})`,
              }}
            >
              <div className="flex justify-between p-20 relative">
                <div className="w-[60%]  flex flex-col gap-6 ">
                  <h1 className=" text-7xl font-extrabold text-transparent ">
                    Empowering <br /> next-gen architects and engineers towards
                    career success
                  </h1>
                  <h1 className=" text-2xl text-transparent">
                    Online certification courses designed for success. Acquire
                    industry-relevant skills through engaging cohort-based
                    learning experiences.
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
          </div>
        ))}
      </Slide>

      {/* impact section */}
      <div className="h-[40vh]  pl-40 relative">
        <div
          className="h-full w-[3px] absolte left-36"
          style={{
            background: `linear-gradient(to bottom, #E5C360, #DA45C2, #6938EF)`,
          }}
        />
        <div className="absolute top-20 left-36 w-1/2 flex items-center gap-10 ">
          <div className="bg-white">
            <img src={sideIcon} className="w-14 h-12" alt="sideIcon" />
          </div>
          <div>
            <h1 className="text-lg">Our Impact</h1>
            <h1 className="text-4xl font-bold">Moving the Needle with</h1>
            <h1 className="text-4xl font-bold text-[#FF006B]">
              Tech-First Education
            </h1>
            <h1 className="text-xl">
              A world of opportunities awaits architecture, engineering, and
              construction (AEC) professionals.
            </h1>
          </div>
        </div>
      </div>

      {/* achievements card */}
      <div className="px-20 pb-20 flex gap-10">
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

      {/* marque text  */}

      <div className="marquee-wrapper overflow-hidden whitespace-nowrap relative mb-10">
        <div className="marquee-content animate-marquee">
          <div className="flex gap-20">
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">Acceleration</h1>
            </div>
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                Expert Mentors
              </h1>
            </div>
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                Industry Knowledge
              </h1>
            </div>
            <div className="flex gap-5 items-center">
              <img src={seven} alt="one" className="w-10 h-10" />
              <h1 className="text-blue-600 text-5xl font-bold">
                Tech-first skills
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* our courses  */}

      <div className="flex flex-col gap-5 items-center">
        <h1 className="text-xl text-blue-600 font-semibold">Our Courses</h1>
        <h1 className="text-4xl font-bold text-[#FF006B]">
          Your Future Starts Here
        </h1>
        <h1 className="text-xl w-1/2 text-center">
          Get closer to your professional goal with online certification courses
          in architecture, engineering, and design.
        </h1>
      </div>

      <div className=" relative min-h-[70vh]  justify-center flex ">
        <div className="flex w-[50%] absolute z-10 space-x-8 py-10  justify-between">
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

        <div className="w-[30%] z-0 -left-10 bottom-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -left-10 bottom-36 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[30%] z-0 -right-10 top-20 absolute h-12 bg-blue-600 transform -rotate-6" />
        <div className="w-[30%] z-0 -right-10 top-40 absolute h-12 bg-blue-600 transform -rotate-6" />

        <div className="w-[60%] z-0 -right-10 top-36 absolute h-12 bg-[#FF006B] transform -rotate-6" />
      </div>

      {/* mentors section  */}

      <div>
        <div className="p-20">
          <div className="flex gap-4 items-center">
            <h1 className="text-xl">Expert Mentors</h1>
            <div className="h-[2px] w-60 bg-black " />
          </div>
          <h1 className="font-semibold text-4xl">
            Learn from the{" "}
            <span className="text-blue-600">Industry's Best</span>
          </h1>
          <h1 className="text-xl w-1/2">
            Our mentors are industry experts with experience at top-tier AEC
            firms and on major projects worldwide.
          </h1>
        </div>

        <div className="marquee-wrapper overflow-hidden whitespace-nowrap relative mb-10">
          <div className="marquee-content animate-marquee">
            <div className="flex gap-20">
              <img src={logo1} alt="logo1" />
              <img src={logo2} alt="logo1" />
              <img src={logo3} alt="logo1" />
              <img src={logo4} alt="logo1" />
              <img src={logo5} alt="logo1" />
              <img src={logo6} alt="logo1" />
              <img src={logo7} alt="logo1" />
              <img src={logo8} alt="logo1" />
              <img src={logo9} alt="logo1" />
              <img src={logo10} alt="logo1" />
            </div>
          </div>
        </div>

        <div className=" overflow-x-scroll m-10 no-scrollbar">
          <div className="flex gap-20">
            <img src={mentor1} alt="logo1" />
            <img src={mentor2} alt="logo1" />
            <img src={mentor3} alt="logo1" />
            <img src={mentor4} alt="logo1" />
            <img src={mentor5} alt="logo1" />
            <img src={mentor6} alt="logo1" />
          </div>
        </div>
        <div className="h-[40vh] pl-40 relative">
          <div
            className="h-full w-[3px] absolte left-36"
            style={{
              background: `linear-gradient(to bottom, #E5C360, #DA45C2, #6938EF)`,
            }}
          />
          <div className="absolute top-20 left-36 w-1/2 flex items-center gap-10 ">
            <div className="bg-white">
              <img src={sideIcon} className="w-14 h-12" alt="sideIcon" />
            </div>
            <div>
              <div className="flex items-center gap-5">
                <h1 className="text-lg">Alumni Voices</h1>
                <div className="h-[1px] w-40 bg-black" />
              </div>
              <h1 className="text-4xl font-semibold">
                Hear our <span className="text-blue-600">community</span> talk
                about their{" "}
                <span className="text-blue-600">upskilling journeys</span>
              </h1>
            </div>
          </div>
        </div>
        <div className=" overflow-x-scroll m-10 no-scrollbar">
          <div className="flex gap-20">
            <img src={review1} alt="logo1" className="rounded-md" />
            <img src={review2} alt="logo1" className="rounded-md" />
            <img src={review3} alt="logo1" className="rounded-md" />
            <img src={review4} alt="logo1" className="rounded-md" />
          </div>
        </div>
      </div>

      {/* training section  */}

      <div
        className="h-[15vh]"
        style={{
          background: "linear-gradient(to right, #0666BD, #D92E68)",
        }}
      ></div>

      <div className="flex shadow-lg">
        <div className="w-1/2 h-full">
          <div className="px-32 py-20">
            <div className="flex items-center gap-5">
              <h1 className="text-lg">Practical Training</h1>
              <div className="bg-black h-[2px] w-32" />
            </div>
            <h1 className="text-3xl font-semibold ">
              Go Ahead with{" "}
              <span className="text-[#FF006B]">Real-World Project</span>
            </h1>
            <h1 className="text-xl">
              How do you learn to build a building? By building a building! Our
              courses include live projects that significantly enhance your
              portfolio.
            </h1>
          </div>

          <div className="flex px-32 ">
            <div className="w-1/2 p-2">
              <img src={globeIcon} />
              <h1 className="text-xl font-semibold my-4">
                International Exposure
              </h1>
              <div className="h-[1px] w-full bg-gray-400" />
              <h1>
                Our live projects are curated in partnership with leading AEC
                firms based in the US, Hong Kong and Portugal.
              </h1>
            </div>
            <div className="w-1/2 p-2">
              <img src={remoteIcon} />
              <h1 className="text-xl font-semibold my-4">
                Gamified Experience
              </h1>
              <div className="h-[1px] w-full bg-gray-400" />
              <h1>
                Take instructions from a client, pitch innovative solutions, and
                see your project unfold – all in a virtual simulation.
              </h1>
            </div>
          </div>
        </div>
        <img src={realWorldProject} />
      </div>

      <div className="h-[40vh] pl-40 relative">
        <div
          className="h-full w-[3px] absolte left-36"
          style={{
            background: `linear-gradient(to bottom, #E5C360, #DA45C2, #6938EF)`,
          }}
        />
        <div className="absolute top-20 left-36 w-1/2 flex items-center gap-10 ">
          <div className="bg-white">
            <img src={sideIcon} className="w-20 h-12" alt="sideIcon" />
          </div>
          <div>
            <h1 className="text-lg">Innovative Learning</h1>
            <h1 className="text-4xl font-semibold">
              An Unforgettable Experience
            </h1>
            <h1 className="text-xl">
              Traditional teaching methods have no place in the modern world.
              That's why we infuse digital tools with new-age pedagogies to
              enhance your learning.
            </h1>
          </div>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default CourseLanding;
