import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
          <p className="text-sm text-gray-500">CONTENT WRITER</p>
        </div>

        {/* Center Section */}
        <div className="hidden lg:flex space-x-4 text-gray-500">
          <div className="flex items-center space-x-2">
            <span>CALL ME. (+91) 97296-88993
            </span>
            <span>/</span>
            <span>aayushiverma.kkr@gmail.com</span>
          </div>
        </div>

        {/* Right Section: Hamburger Menu */}
        <div>
          <button onClick={toggleMenu} className="flex flex-col space-y-1">
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
            <span className="block w-6 h-1 bg-black"></span>
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
              className="self-end text-xl text-gray-700 font-bold"
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
            <ul className="mt-8 space-y-4 text-3xl lg:text-4xl xl:text-6xl font-medium">
              <NavLink to="/" className="hover:text-[#bd5d19]">
                <li>Intro</li>
              </NavLink>
              {/* <NavLink to="/services" className="hover:text-[#bd5d19]">
                <li>Services</li>
              </NavLink> */}
              <NavLink to="/projects" className="hover:text-[#bd5d19]">
                <li>Projects</li>
              </NavLink>
              {/* <NavLink to="/awards" className="hover:text-[#bd5d19]">
                <li>Awards</li>
              </NavLink> */}
              <NavLink to="/experience" className="hover:text-[#bd5d19]">
                <li>Experience</li>
              </NavLink>
              <NavLink to="/testimonials" className="hover:text-[#bd5d19]">
                <li>Testimonials</li>
              </NavLink>
              <NavLink to="/contact" className="hover:text-[#bd5d19]">
                <li>Contact</li>
              </NavLink>
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
                © AAyushi 2024. All rights reserved
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
