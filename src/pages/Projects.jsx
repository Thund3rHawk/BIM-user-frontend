import React from "react";
import Navbar from "../components/Navbar";
import projectsmain from "../assets/projects/projectsmain.png";
import logo from "../assets/projects/logo.png";
import Footer from "../components/Footer";
import courses from "../assets/courses/courses.png";
import ProjectCard from "../components/ProjectCard";

const projectData = [
  {
    subtitle: "BIM",
    title: "NEOM - LOGISTICS PARK LANDSCAPE PROJECT",
    image: courses,
    courseLink: "#",
  },
  {
    subtitle: "BIM",
    title: "NEOM - LOGISTICS PARK LANDSCAPE PROJECT",
    image: courses,
    courseLink: "#",
  },
  {
    subtitle: "BIM",
    title: "NEOM - LOGISTICS PARK LANDSCAPE PROJECT",
    image: courses,
    courseLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex h-[90vh] my-10">
        <div className="w-1/2 flex justify-center items-center bg-blue-600 relative">
          <img src={logo} alt="logo" className="w-[80%]" />
          <div className="flex flex-col gap-5  m-16 absolute">
            <h1 className="text-5xl font-bold text-white">
              NEOM - LOGISTICS PARK LANDSCAPE PROJECT
            </h1>
            <h1 className="text-lg font-bold text-white">
              A Benchmark in Advanced BIM Implementation
            </h1>
            <h1 className="text-2xl text-white">
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
        <div className=" w-1/2 flex  justify-end ">
          <img src={projectsmain} alt="projectsmain" className="w-full" />
        </div>
      </div>

      <div className="my-1 px-32 mt-20">
        <h1 className="text-3xl font-bold mb-2">Our Top Projects</h1>
      </div>
      <div className="flex space-x-8 px-48 py-5 mb-16 justify-between">
        {projectData.map((project) => (
          <ProjectCard
            subtitle={project.subtitle}
            title={project.title}
            image={project.image}
            courseLink={project.courseLink}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
