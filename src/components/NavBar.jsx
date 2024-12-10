import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Apply glassmorphism effect when scrolled down
    setIsScrolled(currentScrollY > 50);

    // Hide navbar on scroll down, show on scroll up
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsScrollingDown(true); // Hide navbar
    } else {
      setIsScrollingDown(false); // Show navbar
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      } ${
        isScrolled
          ? "bg-white bg-opacity-30 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-4">
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
            className="fixed top-0 right-0 w-2/3 lg:w-1/3 h-screen bg-white shadow-lg flex flex-col px-8 py-4 overflow-y-auto"
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

            {/* Navigation Links */}
            <ul className="mt-8 text-3xl lg:text-4xl xl:text-5xl font-medium">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  onClick={toggleMenu}
                  className="text-primary hover:text-[#003f7f] cursor-pointer"
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
                  className="text-primary hover:text-[#003f7f] cursor-pointer"
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
                  className="text-primary hover:text-[#003f7f] cursor-pointer"
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
                  className="text-primary hover:text-[#003f7f] cursor-pointer"
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
                  className="text-primary hover:text-[#003f7f] cursor-pointer"
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
                  className="text-primary hover:text-[#003f7f] cursor-pointer"
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
                  className="text-primary hover:text-[#003f7f] cursor-pointer"
                >
                  Contact Me
                </Link>
              </li>
            </ul>

            {/* Sidebar Footer with Social Links */}
            <div className="mt-[300px] md:mt-[200px] space-y-4">
              <div className="flex space-x-4 text-gray-500">
                <a
                  href="https://www.linkedin.com/in/aayushiverma7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#003f7f] text-black"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/thesappyhappywallflower"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#003f7f] text-black"
                >
                  Instagram
                </a>
                <a
                  href="https://medium.com/@aayushiverma.kkr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#003f7f] text-black"
                >
                  Medium
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
