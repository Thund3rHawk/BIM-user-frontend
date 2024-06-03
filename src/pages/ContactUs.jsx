import React from "react";
import Navbar from "../components/Navbar";
import img from "../assets/contact/img.png";
import Footer from "../components/Footer";
import { CiMail } from "react-icons/ci";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <div className="flex">
        <div className="w-1/2">
          <img src={img} alt="contact" className="h-[90vh] w-full" />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <form className="w-3/4 max-w-md bg-white p-8 rounded">
            <h1 className="text-4xl font-bold">
              Let’s level up your brand, together
            </h1>
            <h2 className="text-lg mb-6">
              You can reach us anytime via{" "}
              <a
                className="text-blue-600"
                href="mailto:services@thebimskills.com"
              >
                services@thebimskills.com
              </a>
            </h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Your phone number"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="bg-gray-100 py-8 mt-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-600">
                <a href="mailto:services@thebimskills.com">
                  services@thebimskills.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Office Address</h3>
              <p>123 Main Street</p>
              <p>City, State, ZIP Code</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p>(123) 456-7890</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col gap-3 justify-center items-center my-20">
        <h1 className="text-lg font-bold text-[#FB1351]">
          Any Problem Contact us
        </h1>
        <h1 className="font-bold text-5xl">We’d love to help you</h1>
        <h1 className="text-xl text-gray-400 mt-8">
          Our friendly team is always here to help.
        </h1>
      </div>

      <div className="flex mx-40 justify-between my-20">
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-100 rounded-full p-2">
            <CiMail size={25} />
          </div>
          <h1 className="font-bold text-xl">Email</h1>
          <h1 className="text-gray-400 text-xl">
            Our friendly team is here to help.
          </h1>
          <h1 className="text-[#FB1351] text-xl font-bold">
            services@thebimskills.com
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className="bg-blue-100 rounded-full p-2">
            <MdOutlineLocationOn size={25} />
          </div>
          <h1 className="font-bold text-xl">Office</h1>
          <h1 className="text-gray-400 text-xl">
            Come say hello at our office HQ.
          </h1>
          <h1 className="text-[#FB1351] text-xl font-bold text-center">
            First Floor, RS Complex, Opp.Bombay Building, Near GND Eng. College,
            Bidar - 585401, Karnataka(INDIA)
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="bg-blue-100 rounded-full p-2">
            <FiPhone size={25} />
          </div>
          <h1 className="font-bold text-xl">Phone</h1>
          <h1 className="text-gray-400 text-xl">Mon-Fri from 8am to 5pm.</h1>
          <h1 className="text-[#FB1351] text-xl font-bold">+91 98102 12345</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
