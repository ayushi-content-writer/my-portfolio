import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <header className="w-full fixed top-0 z-50">
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-2xl text-black">AAYUSHI</h1>
        </div>

        {/* Center Section */}
        <div className="hidden lg:flex space-x-4 text-gray-500">
          <div className="flex items-center space-x-2">
            <FaPhone className="w-6 h-6 text-[#003f7f]" />
            <span>(+91) 97296-88993</span>
            <span>/</span>
            <FaEnvelope className="w-6 h-6 text-[#003f7f]" />
            <span>aayushiverma.kkr@gmail.com</span>
          </div>
        </div>

        {/* Right Section: Hamburger Menu */}
        <div>
          <button onClick={toggleMenu} className="flex flex-col space-y-1">
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Sidebar Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-2/3 lg:w-1/3 h-screen bg-white shadow-lg flex flex-col px-8 py-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="self-end text-xl text-white font-bold"
            >
              &times;
            </button>

            {/* Language Options */}
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-gray-900 font-semibold">CONTENT</span>
              <span className="text-gray-500">COPY</span>
              <span className="text-gray-500">WRITER</span>
            </div>

            {/* Navigation Links */}
            <ul className="mt-8 text-3xl lg:text-4xl xl:text-5xl font-medium">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="hover:text-[#003f7f] cursor-pointer"
                >
                  Intro
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="hover:text-[#003f7f] cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="background"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="hover:text-[#003f7f] cursor-pointer"
                >
                  Background
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="hover:text-[#003f7f] cursor-pointer"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="hover:text-[#003f7f] cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="hover:text-[#003f7f] cursor-pointer"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="hover:text-[#003f7f] cursor-pointer"
                >
                  Contact Me
                </Link>
              </li>
            </ul>

            {/* Footer */}
            <div className="mt-auto space-y-4">
              <div className="flex space-x-4 text-gray-500">
                <a href="#" className="hover:text-black">
                  Twitter
                </a>
                <a href="#" className="hover:text-black">
                  Behance
                </a>
                <a href="#" className="hover:text-black">
                  Instagram
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                © Aayushi 2024. All rights reserved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
