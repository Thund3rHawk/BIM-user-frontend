import React, { useState } from "react";
import logo from "../assets/navbar/bim-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import AuthCard from "./AuthCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      {/* Top section with logo and actions */}
      <div className="relative z-50 flex justify-between items-center p-4 px-2 md:px-10 bg-white">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10" />
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex gap-2 border border-gray-300 bg-[#EBEDFF] items-center pr-2 pl-1 rounded-md">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-transparent outline-none w-[120px] md:w-[200px]"
            />
            <IoSearch size={20} />
          </div>          
          
          {/* Login and Signup buttons hidden on mobile */}
          {/* <button className="bg-[#FF006B] text-white hidden md:block py-2 rounded-md w-[150px]">
            Login
          </button>

          <button className="text-[#FF006B] border border-[#FF006B] hidden md:block font-semibold px-4 py-2 rounded-md w-[150px]">
            Signup
          </button> */}
          <AuthCard />

          {/* Hamburger Menu for Mobile */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? (
              <IoCloseSharp size={30} color="gray" />
            ) : (
              <GiHamburgerMenu size={30} color="gray" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex justify-between items-center p-1 px-10 border-t border-b border-slate-300 bg-white relative z-50">
        <div className="flex space-x-4">
          <Link to="/services">
            <h1 className="font-bold text-lg">BIM Services</h1>
          </Link>
          <Link to="/courses">
            <h1 className="font-bold text-lg">BIM Courses</h1>
          </Link>
          <Link to="/projects">
            <h1 className="font-bold text-lg">Projects</h1>
          </Link>
          <Link to="/blogs">
            <h1 className="font-bold text-lg">Blogs</h1>
          </Link>
          <Link to="/about">
            <h1 className="font-bold text-lg">About Us</h1>
          </Link>
          <Link to="/contact">
            <h1 className="font-bold text-lg">Contact</h1>
          </Link>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center space-x-4 ">
            <button
              onClick={() => {
                navigate("/enquiry");
              }}
              className="bg-black text-white shadow-xl rounded-md w-[200px] py-2"
            >
              <h1 className="text-lg font-semibold">Send Enquiry</h1>
            </button>
            <button
              onClick={() => {
                navigate("/quote");
              }}
              className="bg-black text-white shadow-xl font-semibold rounded-md w-[200px] py-2"
            >
              <h1 className="text-lg font-semibold">Request a Quote</h1>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/918197029799"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon />
            </a>
            <a href="tel:+918197029799">
              <CallIcon />
            </a>
            <a
              href="https://www.youtube.com/@thebimskills814"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com/thebimskills/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/the-bim-skills-tbs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Animated Drawer for Mobile Navigation */}
      <div
        className={`transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden fixed top-16 left-0 right-0 z-40 bg-white shadow-lg p-4`}
      >
        <div className="flex flex-col space-y-4">
          <Link to="/services" onClick={toggleMenu}>
            <h1 className="font-bold text-lg">BIM Services</h1>
          </Link>
          <Link to="/courses" onClick={toggleMenu}>
            <h1 className="font-bold text-lg">BIM Courses</h1>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <h1 className="font-bold text-lg">Projects</h1>
          </Link>
          <Link to="/blogs" onClick={toggleMenu}>
            <h1 className="font-bold text-lg">Blogs</h1>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <h1 className="font-bold text-lg">About Us</h1>
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            <h1 className="font-bold text-lg">Contact</h1>
          </Link>
          <button
            onClick={() => {
              navigate("/enquiry");
              toggleMenu(); // Close menu after navigation
            }}
            className="bg-black text-white shadow-xl rounded-md w-full py-2"
          >
            <h1 className="text-lg font-semibold">Send Enquiry</h1>
          </button>
          <button
            onClick={() => {
              navigate("/quote");
              toggleMenu(); // Close menu after navigation
            }}
            className="bg-black text-white shadow-xl font-semibold rounded-md w-full py-2"
          >
            <h1 className="text-lg font-semibold">Request a Quote</h1>
          </button>

          {/* Social Media Icons for Smaller Screens */}
          <div className="flex justify-around items-center space-x-4">
            <a
              href="https://wa.me/918197029799"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon />
            </a>
            <a href="tel:+918197029799">
              <CallIcon />
            </a>
            <a
              href="https://www.youtube.com/@thebimskills814"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://www.instagram.com/thebimskills/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/company/the-bim-skills-tbs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
const WhatsappIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.0014 2.83333C24.8257 2.83333 31.1681 9.17575 31.1681 17C31.1681 24.8243 24.8257 31.1667 17.0014 31.1667C14.9694 31.1699 12.9663 30.7341 11.1275 29.8955C10.3066 29.5211 9.38529 29.3809 8.51491 29.6183C6.0053 30.3031 3.70228 27.9996 4.38538 25.4896C4.62223 24.6192 4.48171 23.6979 4.10724 22.8773C3.26767 21.0375 2.83134 19.0333 2.83474 17C2.83474 9.17575 9.17715 2.83333 17.0014 2.83333ZM12.1734 10.3417L11.8901 10.353C11.7066 10.3642 11.5274 10.4124 11.3631 10.4947C11.2094 10.5817 11.0691 10.6905 10.9466 10.8177C10.7766 10.9778 10.6802 11.1166 10.5768 11.2512C10.0528 11.9324 9.7707 12.7689 9.77499 13.6283C9.77782 14.3225 9.95915 14.9983 10.2425 15.6301C10.8219 16.9079 11.7753 18.2608 13.0333 19.5146C13.3365 19.8163 13.634 20.1195 13.9542 20.4014C15.5173 21.7777 17.38 22.7701 19.3942 23.2999L20.1988 23.4232C20.4609 23.4373 20.723 23.4175 20.9865 23.4047C21.3991 23.3835 21.8019 23.2717 22.1666 23.0775C22.3297 22.9935 22.4894 22.9029 22.6453 22.806C22.688 22.7795 22.7302 22.7521 22.7712 22.7229C22.7999 22.7025 22.8384 22.6745 22.8862 22.6383C23.0775 22.4967 23.1951 22.3961 23.3537 22.2303C23.4713 22.1085 23.5733 21.9654 23.6512 21.8025C23.7617 21.5716 23.8722 21.131 23.9176 20.7641C23.9516 20.4836 23.9417 20.3306 23.9374 20.2357C23.9317 20.0841 23.8057 19.9268 23.6682 19.8603L22.9171 19.5234C22.8682 19.5015 22.8198 19.4801 22.7707 19.4586C22.4951 19.3383 21.5015 18.9037 20.8576 18.6108C20.7787 18.5763 20.6942 18.5566 20.6082 18.5527C20.5113 18.5427 20.4134 18.5536 20.321 18.5847C20.1525 18.6413 19.9914 18.8102 19.8747 18.9443C19.7188 19.1238 19.4409 19.4525 18.9465 20.0515C18.8877 20.1305 18.8067 20.1902 18.7139 20.223C18.621 20.2558 18.5205 20.2602 18.4252 20.2357C18.3329 20.2109 18.2424 20.1797 18.1546 20.1422C17.9789 20.0685 17.918 20.0402 17.7976 19.9892C16.9845 19.6344 16.2317 19.155 15.5663 18.5683C15.3878 18.4124 15.2221 18.2424 15.0521 18.0781C14.4947 17.5443 14.009 16.9405 13.6071 16.2818L13.5235 16.1472C13.4635 16.0567 13.4149 15.9592 13.379 15.8568C13.3718 15.8288 13.368 15.8016 13.367 15.7755C13.3586 15.5648 13.537 15.4039 13.6766 15.2458C13.7784 15.1306 13.8944 14.9964 13.9697 14.9005C14.1256 14.7022 14.2573 14.5095 14.3423 14.3721C14.5095 14.1029 14.5619 13.8267 14.4741 13.6128C14.0774 12.6438 13.6666 11.679 13.2444 10.7213C13.1608 10.5315 12.9129 10.3955 12.6877 10.3686C12.6112 10.3601 12.5347 10.3516 12.4582 10.3459C12.2679 10.3365 12.0773 10.3384 11.8872 10.3516L12.1734 10.3417Z"
      fill="url(#paint0_linear_8_1036)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8_1036"
        x1="16.4732"
        y1="2.83333"
        x2="17.5636"
        y2="31.1339"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0067BF" />
        <stop offset="1" stopColor="#DD2D66" />
      </linearGradient>
    </defs>
  </svg>
);
const CallIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30.2175 26.9662C30.0396 27.7639 29.5985 28.4784 28.9652 28.9949C28.2733 29.6966 27.4488 30.2538 26.5398 30.6341C25.6307 31.0145 24.6551 31.2104 23.6697 31.2106H23.2093C21.1432 31.0994 19.1202 30.577 17.2587 29.6738C17.2544 29.6717 17.2497 29.6707 17.245 29.6707C17.2404 29.6707 17.2359 29.6697 17.2317 29.6677C16.8016 29.4675 16.3576 29.2671 15.9276 29.0232C13.7535 27.8016 11.7584 26.2856 9.99886 24.5182C7.71724 22.3755 5.84501 19.835 4.47386 17.0213C3.74489 15.4793 3.25843 13.8341 3.0317 12.1437C2.69628 10.3743 2.89706 8.54512 3.60828 6.89067C4.05661 6.14432 4.60366 5.46194 5.23461 4.862C5.51834 4.54037 5.86557 4.28094 6.25444 4.10004C6.64331 3.91913 7.06542 3.82067 7.4942 3.81083C7.96022 3.86312 8.4113 4.00707 8.82147 4.2344C9.23163 4.46173 9.59278 4.76794 9.88411 5.13542C10.5315 5.8395 11.322 6.57333 11.9709 7.2505L12.8634 8.12883C13.3875 8.5935 13.7119 9.24233 13.77 9.94217C13.77 10.5839 13.5334 11.203 13.107 11.6832C12.8306 12.0189 12.5375 12.3404 12.2287 12.6466L11.9411 12.9483C11.7739 13.1042 11.6464 13.2968 11.5671 13.5107C11.4268 13.9233 11.546 14.3731 11.756 14.7549C11.8573 14.9392 11.9714 15.1164 12.0973 15.2849C12.361 15.6379 12.6602 15.9637 12.9289 16.3129C13.5171 17.0775 14.1064 17.7816 14.705 18.5328C16.0324 20.0738 17.6076 21.3823 19.3659 22.4046C19.5458 22.5363 19.7526 22.6242 19.9722 22.6624C20.3521 22.6908 20.7045 22.4889 21.0089 22.2599C21.3209 22.0251 21.6049 21.7549 21.8564 21.454C22.3597 20.8385 23.0815 20.4416 23.8709 20.3462C24.6305 20.3569 25.3552 20.6675 25.8868 21.2103C26.1744 21.454 26.4903 21.7855 26.7934 22.1028L27.2241 22.5477L27.6704 22.9797L28.4339 23.7561C28.8887 24.1598 29.3165 24.5919 29.7146 25.0523C30.1141 25.6048 30.294 26.2891 30.2175 26.9662ZM25.0524 17.1077C24.7672 17.104 24.4948 16.9891 24.2931 16.7874C24.0914 16.5858 23.9765 16.3133 23.9729 16.0282C23.9744 15.2133 23.815 14.4061 23.5038 13.6529C23.1926 12.8998 22.7358 12.2155 22.1596 11.6392C21.5834 11.063 20.8991 10.6062 20.1459 10.2951C19.3928 9.98391 18.5856 9.82451 17.7707 9.826C17.4844 9.826 17.2098 9.71227 17.0074 9.50982C16.8049 9.30738 16.6912 9.0328 16.6912 8.7465C16.6912 8.4602 16.8049 8.18562 17.0074 7.98318C17.2098 7.78073 17.4844 7.667 17.7707 7.667C18.8692 7.66532 19.9572 7.88044 20.9724 8.30004C21.9875 8.71963 22.9099 9.33544 23.6867 10.1122C24.4634 10.8889 25.0792 11.8113 25.4988 12.8265C25.9184 13.8417 26.1335 14.9297 26.1319 16.0282C26.1319 16.1699 26.1039 16.3103 26.0497 16.4413C25.9954 16.5722 25.9159 16.6912 25.8157 16.7915C25.7154 16.8917 25.5964 16.9712 25.4655 17.0255C25.3345 17.0797 25.1941 17.1077 25.0524 17.1077Z"
      fill="url(#paint0_linear_8_1038)"
    />
    <path
      d="M30.046 16.6033C29.7611 16.5997 29.4889 16.485 29.2873 16.2836C29.0857 16.0823 28.9706 15.8102 28.9665 15.5252C28.9688 14.1368 28.6972 12.7615 28.1674 11.4781C27.6375 10.1947 26.8598 9.02835 25.8787 8.04583C24.8977 7.0633 23.7325 6.28387 22.4499 5.75214C21.1672 5.22041 19.7924 4.94681 18.4039 4.947C18.2589 4.95225 18.1144 4.92824 17.9789 4.87639C17.8434 4.82454 17.7198 4.74592 17.6154 4.64523C17.511 4.54454 17.428 4.42383 17.3712 4.29033C17.3145 4.15683 17.2853 4.01326 17.2853 3.86821C17.2853 3.72315 17.3145 3.57959 17.3712 3.44609C17.428 3.31258 17.511 3.19188 17.6154 3.09119C17.7198 2.99049 17.8434 2.91187 17.9789 2.86002C18.1144 2.80818 18.2589 2.78416 18.4039 2.78942C20.0757 2.78942 21.7311 3.11894 23.2755 3.75915C24.8199 4.39936 26.223 5.3377 27.4045 6.52051C28.586 7.70333 29.5227 9.10743 30.1612 10.6525C30.7997 12.1976 31.1274 13.8534 31.1255 15.5252C31.1255 15.667 31.0976 15.8074 31.0434 15.9384C30.9891 16.0693 30.9096 16.1883 30.8094 16.2886C30.7091 16.3888 30.5901 16.4683 30.4592 16.5226C30.3282 16.5768 30.1878 16.6033 30.046 16.6033Z"
      fill="url(#paint1_linear_8_1038)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8_1038"
        x1="16.0441"
        y1="3.81083"
        x2="17.1001"
        y2="31.1787"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0067BF" />
        <stop offset="1" stopColor="#DD2D66" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_8_1038"
        x1="23.9474"
        y1="2.78871"
        x2="24.4782"
        y2="16.5888"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0067BF" />
        <stop offset="1" stopColor="#DD2D66" />
      </linearGradient>
    </defs>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="34"
    height="27"
    viewBox="0 0 34 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 0C18.4535 0 19.9444 0.0371252 21.3894 0.0978751L23.0962 0.178875L24.7299 0.275063L26.2599 0.378L27.6573 0.486C29.174 0.600567 30.6014 1.24273 31.6879 2.29939C32.7745 3.35605 33.4506 4.75942 33.5971 6.26231L33.6651 6.9795L33.7926 8.51512C33.9116 10.1064 34 11.8412 34 13.5C34 15.1588 33.9116 16.8936 33.7926 18.4849L33.6651 20.0205L33.5971 20.7377C33.4505 22.2408 32.7742 23.6444 31.6873 24.7011C30.6004 25.7578 29.1726 26.3998 27.6556 26.514L26.2616 26.6203L24.7316 26.7249L23.0962 26.8211L21.3894 26.9021C19.9271 26.965 18.4637 26.9976 17 27C15.5363 26.9976 14.0729 26.965 12.6106 26.9021L10.9038 26.8211L9.2701 26.7249L7.7401 26.6203L6.3427 26.514C4.82598 26.3994 3.39864 25.7573 2.31207 24.7006C1.22551 23.644 0.549424 22.2406 0.4029 20.7377L0.3349 20.0205L0.2074 18.4849C0.0779157 16.8263 0.00873739 15.1636 0 13.5C0 11.8412 0.0884 10.1064 0.2074 8.51512L0.3349 6.9795L0.4029 6.26231C0.549367 4.75968 1.22521 3.35653 2.31143 2.2999C3.39764 1.24328 4.82459 0.600946 6.341 0.486L7.7367 0.378L9.2667 0.275063L10.9021 0.178875L12.6089 0.0978751C14.0718 0.0349771 15.5358 0.00234492 17 0ZM13.6 9.40781V17.5922C13.6 18.3718 14.45 18.8578 15.13 18.4697L22.27 14.3775C22.4254 14.2887 22.5544 14.1609 22.6442 14.0068C22.7339 13.8528 22.7811 13.678 22.7811 13.5C22.7811 13.322 22.7339 13.1472 22.6442 12.9932C22.5544 12.8391 22.4254 12.7113 22.27 12.6225L15.13 8.532C14.9749 8.44311 14.7989 8.39632 14.6198 8.39635C14.4407 8.39638 14.2648 8.44322 14.1097 8.53216C13.9546 8.6211 13.8259 8.74901 13.7364 8.90302C13.6469 9.05703 13.5999 9.23171 13.6 9.4095V9.40781Z"
      fill="url(#paint0_linear_1_13135)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_13135"
        x1="16.3662"
        y1="-1.72544e-07"
        x2="17.1918"
        y2="26.9835"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0067BF" />
        <stop offset="1" stopColor="#DD2D66" />
      </linearGradient>
    </defs>
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.542 0C18.2294 0.0044999 19.0859 0.0134997 19.8253 0.0344992L20.1163 0.0449989C20.4523 0.0569986 20.7838 0.0719982 21.1843 0.0899978C22.7802 0.164996 23.8691 0.41699 24.8246 0.787482C25.8145 1.16847 26.6485 1.68446 27.4825 2.51694C28.2452 3.26677 28.8353 4.17379 29.2119 5.17488C29.5824 6.13036 29.8343 7.21933 29.9093 8.81679C29.9273 9.21578 29.9423 9.54728 29.9543 9.88477L29.9633 10.1758C29.9858 10.9137 29.9948 11.7702 29.9978 13.4577L29.9993 14.5767V16.5416C30.003 17.6357 29.9915 18.7298 29.9648 19.8235L29.9558 20.1145C29.9438 20.452 29.9288 20.7835 29.9108 21.1825C29.8358 22.78 29.5809 23.8674 29.2119 24.8244C28.8364 25.8261 28.2461 26.7333 27.4825 27.4824C26.7324 28.2448 25.8255 28.835 24.8246 29.2118C23.8691 29.5823 22.7802 29.8343 21.1843 29.9093C20.8284 29.9261 20.4724 29.9411 20.1163 29.9543L19.8253 29.9633C19.0859 29.9843 18.2294 29.9948 16.542 29.9978L15.4231 29.9993H13.4597C12.3651 30.0031 11.2706 29.9916 10.1763 29.9648L9.88536 29.9558C9.52929 29.9423 9.17331 29.9268 8.81741 29.9093C7.2215 29.8343 6.13255 29.5823 5.1756 29.2118C4.17466 28.8359 3.26802 28.2456 2.51924 27.4824C1.75584 26.7328 1.16514 25.8257 0.788325 24.8244C0.417844 23.8689 0.165857 22.78 0.0908608 21.1825C0.0741498 20.8266 0.0591505 20.4706 0.0458631 20.1145L0.0383637 19.8235C0.0107232 18.7298 -0.00177754 17.6357 0.000865457 16.5416V13.4577C-0.00332078 12.3636 0.00767983 11.2695 0.0338639 10.1758L0.0443633 9.88477C0.0563627 9.54728 0.0713619 9.21578 0.0893609 8.81679C0.164357 7.21933 0.416344 6.13186 0.786825 5.17488C1.16348 4.17276 1.75536 3.26546 2.52074 2.51694C3.26934 1.75417 4.17537 1.16395 5.1756 0.787482C6.13255 0.41699 7.22 0.164996 8.81741 0.0899978C9.21639 0.0719982 9.54938 0.0569986 9.88536 0.0449989L10.1763 0.0359991C11.2701 0.00934884 12.3641 -0.002152 13.4582 0.00149986L16.542 0ZM15.0001 7.49982C13.0111 7.49983 11.1035 8.28998 9.69707 9.69647C8.29062 11.103 7.50048 13.0106 7.50048 14.9996C7.50048 16.9887 8.29062 18.8963 9.69707 20.3028C11.1035 21.7093 13.0111 22.4995 15.0001 22.4995C16.9891 22.4995 18.8967 21.7093 20.3031 20.3028C21.7096 18.8963 22.4997 16.9887 22.4997 14.9996C22.4997 13.0106 21.7096 11.103 20.3031 9.69647C18.8967 8.28998 16.9891 7.49982 15.0001 7.49982ZM15.0001 10.4998C15.591 10.4997 16.1762 10.616 16.7221 10.842C17.2681 11.0681 17.7642 11.3994 18.1821 11.8172C18.6 12.235 18.9316 12.731 19.1578 13.2769C19.384 13.8228 19.5005 14.408 19.5006 14.9989C19.5007 15.5898 19.3844 16.175 19.1584 16.721C18.9323 17.267 18.601 17.7631 18.1832 18.181C17.7654 18.5989 17.2694 18.9305 16.7235 19.1567C16.1776 19.383 15.5925 19.4994 15.0016 19.4995C13.8082 19.4995 12.6637 19.0254 11.8198 18.1816C10.9759 17.3377 10.5018 16.1931 10.5018 14.9996C10.5018 13.8062 10.9759 12.6616 11.8198 11.8177C12.6637 10.9738 13.8082 10.4998 15.0016 10.4998M22.8762 5.24988C22.3789 5.24988 21.9021 5.44742 21.5504 5.79904C21.1988 6.15066 21.0013 6.62756 21.0013 7.12483C21.0013 7.6221 21.1988 8.09901 21.5504 8.45063C21.9021 8.80225 22.3789 8.99979 22.8762 8.99979C23.3734 8.99979 23.8503 8.80225 24.202 8.45063C24.5536 8.09901 24.7511 7.6221 24.7511 7.12483C24.7511 6.62756 24.5536 6.15066 24.202 5.79904C23.8503 5.44742 23.3734 5.24988 22.8762 5.24988Z"
      fill="url(#paint0_linear_253_2613)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_253_2613"
        x1="14.4408"
        y1="-1.91715e-07"
        x2="15.5953"
        y2="29.9652"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0067BF" />
        <stop offset="1" stopColor="#DD2D66" />
      </linearGradient>
    </defs>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 0C26.3261 0 27.5979 0.526784 28.5355 1.46447C29.4732 2.40215 30 3.67392 30 5V25C30 26.3261 29.4732 27.5979 28.5355 28.5355C27.5979 29.4732 26.3261 30 25 30H5C3.67392 30 2.40215 29.4732 1.46447 28.5355C0.526784 27.5979 0 26.3261 0 25V5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0H25ZM8.33333 11.6667C7.89131 11.6667 7.46738 11.8423 7.15482 12.1548C6.84226 12.4674 6.66667 12.8913 6.66667 13.3333V21.6667C6.66667 22.1087 6.84226 22.5326 7.15482 22.8452C7.46738 23.1577 7.89131 23.3333 8.33333 23.3333C8.77536 23.3333 9.19928 23.1577 9.51184 22.8452C9.8244 22.5326 10 22.1087 10 21.6667V13.3333C10 12.8913 9.8244 12.4674 9.51184 12.1548C9.19928 11.8423 8.77536 11.6667 8.33333 11.6667ZM13.3333 10C12.8913 10 12.4674 10.1756 12.1548 10.4882C11.8423 10.8007 11.6667 11.2246 11.6667 11.6667V21.6667C11.6667 22.1087 11.8423 22.5326 12.1548 22.8452C12.4674 23.1577 12.8913 23.3333 13.3333 23.3333C13.7754 23.3333 14.1993 23.1577 14.5118 22.8452C14.8244 22.5326 15 22.1087 15 21.6667V18.4388C15 16.5884 15.6203 14.6391 17.3217 13.9117V13.9117C17.8767 13.675 18.7117 13.5783 19.2917 13.7617C19.4841 13.8105 19.6554 13.9204 19.78 14.075C19.8667 14.1917 20 14.4517 20 15V21.6667C20 22.1087 20.1756 22.5326 20.4882 22.8452C20.8007 23.1577 21.2246 23.3333 21.6667 23.3333C22.1087 23.3333 22.5326 23.1577 22.8452 22.8452C23.1577 22.5326 23.3333 22.1087 23.3333 21.6667V15C23.3333 13.8833 23.05 12.89 22.46 12.0933C21.9171 11.3709 21.1573 10.8412 20.2917 10.5817C18.7883 10.11 17.1233 10.3717 16.0117 10.8483V10.8483C15.4926 11.0716 14.8352 10.7489 14.4013 10.3869V10.3869C14.1016 10.1369 13.7237 9.99994 13.3333 10ZM8.33333 6.66667C7.89131 6.66667 7.46738 6.84226 7.15482 7.15482C6.84226 7.46738 6.66667 7.89131 6.66667 8.33333C6.66667 8.77536 6.84226 9.19928 7.15482 9.51184C7.46738 9.8244 7.89131 10 8.33333 10C8.77536 10 9.19928 9.8244 9.51184 9.51184C9.8244 9.19928 10 8.77536 10 8.33333C10 7.89131 9.8244 7.46738 9.51184 7.15482C9.19928 6.84226 8.77536 6.66667 8.33333 6.66667Z"
      fill="url(#paint0_linear_77_972)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_77_972"
        x1="14.4408"
        y1="-1.91715e-07"
        x2="15.5953"
        y2="29.9652"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0067BF" />
        <stop offset="1" stopColor="#DD2D66" />
      </linearGradient>
    </defs>
  </svg>
);
