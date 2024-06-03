import React from "react";
import Navbar from "../components/Navbar";
import img from "../assets/contact/img.png";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
};

export default ContactUs;
