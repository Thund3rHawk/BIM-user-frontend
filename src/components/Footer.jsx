import React from "react";
import logo from "../assets/navbar/bim-logo.png"; // Adjust the path to your logo
import { FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000D82] text-white p-8 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Intro and Logo */}
        <div>
          <img src={logo} alt="Company Logo" className="w-32 mb-4" />
          <p className="text-gray-400">
            The BIM skills is an innovative, Value driven, Real-Time Project
            Oriented, Quality Based BIM Training & Consulting Company. Copyright
            © 2022 . All rights reserved | The BIM skills
          </p>
          <div className="flex items-center gap-2 my-2">
            <FaYoutube color="white" className="h-5 w-5" />
            <ImFacebook2 color="white" className="h-4 w-4" />
            <FaInstagram color="white" className="h-5 w-5" />
            <FaLinkedin color="white" className="h-5 w-5" />
          </div>
        </div>

        {/* Short Links Column 1 */}
        <div className="">
          <h3 className="text-sm text-gray-400 mb-2">Company Info</h3>
          <ul className="space-y-2 pt-5">
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                The BIM Skills for Business
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Teach on The bim Skills
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Get the app
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Short Links Column 2 */}
        <div>
          <h3 className="text-sm text-gray-400 mb-2">Support Zone</h3>
          <ul className="space-y-2 pt-5">
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Unlock Your Potential
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Privacy policy and cookie policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Sitemap
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Featured courses
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Join Us
              </a>
            </li>
          </ul>
        </div>

        {/* Short Links Column 3 */}
        <div>
          <h3 className="text-sm text-gray-400 mb-2">Explore Services</h3>
          <ul className="space-y-2 pt-5">
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Help and Support
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Certificate Verification
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-200 hover:underline">
                Free Course
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
