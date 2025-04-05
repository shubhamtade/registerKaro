import React, { useState } from "react";
import Logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CallIcon from "@mui/icons-material/Call";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Theme from "./Theme";
import { Tooltip } from "@mui/material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close services dropdown when menu is toggled
    if (isServicesOpen) setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="sticky top-0 z-50 px-5 md:px-10 lg:px-20 flex justify-between items-center bg-[#F8F9FA] h-[65px] shadow">
      {/* Logo Section */}
      <div className="flex justify-between items-center gap-2">
        <img src={Logo} alt="RegisterKaro Logo" className="h-[24px] w-auto" />
        <h1 className="text-[24px] font-bold text-[#154761] ">
          Register<span className="text-[#FFA22A]">Karo</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        <a
          href="#"
          className="text-gray-700 hover:text-[#FFA22A] font-medium transition-colors duration-200"
        >
          Home
        </a>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onClick={toggleServices}
            className="text-gray-700 hover:text-[#FFA22A] font-medium flex items-center transition-colors duration-200"
            aria-expanded={isServicesOpen}
            aria-haspopup="true"
          >
            Services
            <svg
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                isServicesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isServicesOpen && (
            <div
              className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-100 shadow-lg rounded-md py-2 z-10 animate-fadeIn"
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200"
              >
                Company Registration
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200"
              >
                Compliance Services
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200"
              >
                Tax & GST
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200"
              >
                Intellectual Property
              </a>
            </div>
          )}
        </div>

        <a
          href="#"
          className="text-gray-700 hover:text-[#FFA22A] font-medium transition-colors duration-200"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-[#FFA22A] font-medium transition-colors duration-200"
        >
          About Us
        </a>
        <a
          href="#"
          className="text-gray-700 hover:text-[#FFA22A] font-medium transition-colors duration-200"
        >
          Contact
        </a>
      </div>

      {/* Desktop Contact/Theme */}
      <div className="hidden justify-between items-center gap-5 lg:flex">
        <Theme />
        <a
          href="tel:+918447746183"
          className="flex items-center text-gray-700"
          aria-label="Call support"
        >
          <div className="relative flex items-center">
            <SupportAgentIcon className="h-5 w-5" />
            <span className="absolute bottom-0 left-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
            </span>
          </div>
        </a>
        <Tooltip title="Login">
          <a className="flex items-center text-[12px] border-1  bg-[#FFA22A] hover:bg-transparent hover:text-[#FFA22A]  hover:border-[#FFA22A] px-3 py-1 rounded-3xl transition-colors duration-300 ease-in-out cursor-pointer text-gray-100">
            <ExitToAppOutlinedIcon className="w-3 h-3 mr-2" />
            <span className="font-semibold">Login</span>
          </a>
        </Tooltip>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex justify-between items-center gap-5 lg:hidden">
        <Theme />
        <a
          href="tel:+918447746183"
          className="flex items-center text-gray-700"
          aria-label="Call support"
        >
          <div className="relative flex items-center">
            <SupportAgentIcon className="h-5 w-5" />
            <span className="absolute bottom-0 left-2 flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
          </div>
        </a>
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0  backdrop-blur-sm"
          onClick={toggleMenu}
        ></div>

        {/* Drawer Content */}
        <div className="absolute right-0 top-0 h-full w-[70%] md:w-4/5 md:max-w-sm bg-white shadow-xl flex flex-col">
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-[#154761]">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <a
              href="#"
              className="block  text-gray-700 hover:text-[#FFA22A] font-medium py-2 transition-colors duration-200"
              onClick={toggleMenu}
            >
              <span className="text-xl text-[#FFA22A] mr-1">|</span> Home
            </a>

            {/* Mobile Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className="w-full flex justify-between items-center text-gray-700 hover:text-[#FFA22A] font-medium py-2 transition-colors duration-200"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>
                  <span className="text-xl text-[#FFA22A] mr-1">|</span>Services
                </span>
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="pl-4 mt-2 space-y-2 animate-fadeIn">
                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-[#FFA22A] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Company Registration
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-[#FFA22A] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Compliance Services
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-[#FFA22A] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Tax & GST
                  </a>
                  <a
                    href="#"
                    className="block py-2 text-gray-700 hover:text-[#FFA22A] transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Intellectual Property
                  </a>
                </div>
              )}
            </div>

            <a
              href="#"
              className="block text-gray-700 hover:text-[#FFA22A] font-medium py-2 transition-colors duration-200"
              onClick={toggleMenu}
            >
              <span className="text-xl text-[#FFA22A] mr-1">|</span>Blog
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-[#FFA22A] font-medium py-2 transition-colors duration-200"
              onClick={toggleMenu}
            >
              <span className="text-xl text-[#FFA22A] mr-1">|</span>About Us
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-[#FFA22A] font-medium py-2 transition-colors duration-200"
              onClick={toggleMenu}
            >
              <span className="text-xl text-[#FFA22A] mr-1">|</span>Contact
            </a>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t">
            <a
              href="tel:+918447746183"
              className="flex items-center justify-center gap-2 bg-[#FFA22A] text-white font-medium py-2 px-4 rounded transition-colors duration-200"
              onClick={toggleMenu}
            >
              <CallIcon className="h-5 w-5" />
              <span>+91 84477 46183</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
