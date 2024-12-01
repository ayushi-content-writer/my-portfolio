import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="h-screen bg-gradient-to-br from-[#f3e9dd] to-[#e6ccb2] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-16"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8 }}
    >
      {/* Left Content */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold text-[#5d4037] relative">
          About <span className="text-[#ff7043]">Me</span>
        </h1>
        <p className="mt-6 text-[#6d4c41] text-lg leading-relaxed">
          Hello! I’m a writer, poetess, and creative thinker born in the heart of
          a historical gem. My journey in storytelling started from a small
          corner of my room, crafting words that inspired, educated, and connected.
        </p>
        <p className="mt-4 text-[#6d4c41] text-lg leading-relaxed">
          Over the years, I’ve evolved from writing academic content to leading a
          creative team, always striving to weave authenticity and passion into
          everything I create.
        </p>
      </motion.div>

      {/* Right Content */}
      <motion.div
        className="lg:w-1/2 flex justify-center items-center"
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="relative">
          {/* Decorative Circle */}
          <div className="absolute inset-0 m-auto w-96 h-96 bg-[#ffab91] rounded-full blur-xl opacity-70"></div>
          <div className="relative rounded-full bg-white shadow-lg w-80 h-80 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/200"
              alt="Profile"
              className="rounded-full object-cover w-72 h-72"
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
