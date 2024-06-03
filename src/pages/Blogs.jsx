import React from "react";
import Navbar from "../components/Navbar";
import blogmain from "../assets/home/blogmain.png";
import blog from "../assets/home/blog.png";
import Footer from "../components/Footer";
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.png";
import blog3 from "../assets/blogs/blog3.png";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";

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

const allBlogs = [
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog1,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog2,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog3,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Our top 10 Javascript frameworks to use",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog1,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Our top 10 Javascript frameworks to use",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog2,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
  {
    title: "Bill Walsh leadership lessons",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ...!",
    image: blog3,
    author: "John Dae",
    Date: "22 Jan, 2024",
    topics: ["topic1", "topic2", "topic3"],
  },
];
const recentBlogPost = blogPosts[0];
const otherBlogPosts = blogPosts.slice(1);

const Blogs = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-3 my-10">
        <h1 className="text-lg font-bold text-blue-600">Our Blogs</h1>
        <h1 className="text-4xl font-bold">Stories and Interviews</h1>
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
            <div className="flex items-center gap-2 ">
              <h1 className="text-2xl font-bold mt-2">
                {recentBlogPost.title}
              </h1>
              <GoArrowUpRight color="black" size={20} className="mt-2" />
            </div>
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

      <div className="flex flex-col gap-5 pb-10 px-20">
        <h1 className="text-2xl font-bold">All blog posts</h1>

        <div className="flex justify-between flex-wrap mx-12">
          {allBlogs.map((blog, index) => (
            <div className="bg-white rounded-lg p-6 flex flex-col gap-5 w-[350px] ">
              <img
                src={blog.image}
                alt="blogs"
                className="w-full h-48 object-cover"
              />
              <div className="flex-1">
                <h4 className="text-sm text-blue-600 font-bold">
                  {blog.author} • {blog.Date}
                </h4>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold">{blog.title}</h1>
                  <GoArrowUpRight color="black" size={20} />
                </div>
                <h2 className="text-md">
                  {blog.description.split(" ").slice(0, 10).join(" ")}...
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  {blog.topics.map((topic, idx) => (
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

      <div className="flex justify-between items-center m-8">
        <button className="text-blue-500 flex gap-2 items-center px-4 py-2 rounded hover:text-blue-600">
          <FiArrowLeft /> Previous
        </button>
        <div className="flex gap-1">
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            1
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            2
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            3
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            4
          </span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            5
          </span>
          <span className="text-lg block">...</span>
          <span className="text-lg  w-8 h-8 flex items-center justify-center border rounded">
            20
          </span>
        </div>
        <button className="text-blue-500 flex gap-2 items-center px-4 py-2 rounded hover:text-blue-600">
          Next <FiArrowRight />
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
