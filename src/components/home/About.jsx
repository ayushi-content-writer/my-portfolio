import React from "react";
import { motion } from "framer-motion";
import "../css/About.css";
import profile from '../../assets/ayushiprofile.png'

const AboutMe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="relative h-screen bg-white flex justify-center items-center overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute -z-0 top-[100px] left-[50%] w-[1200px] h-[600px] bg-[#bae6fd] rounded-full blur-3xl opacity-85 animate-move-slow"></div>
      <div className="absolute -z-0 top-[400px] left-[10%] w-[200px] h-[300px] bg-[#9edbfc] rounded-full blur-3xl opacity-65 animate-move-slow"></div>
      <div className="absolute -z-0 top-[200px] left-[30%] w-[100px] h-[300px] bg-[#b7d2e0] rounded-full blur-3xl animate-move-slow"></div>

      {/* Content Container */}
      <div className="relative w-full px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-16 z-10">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl font-bold text-[#023047] relative">
            About <span className="text-[#023047]">Me</span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Writer and poetess born in the cradle of a historical gem,
            Kurukshetra, as an English major, I was infused with a deep
            appreciation and fascination for creativity and arts. With a rich
            experience of nearly 3 years in Writing and almost a year in
            Creative management, I have most lovingly woven raw ideas, giving
            them a compelling edge and blending them with catchy
            call-to-actions.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            From writing academic content to managing a creative team in the
            marketing field, losing my mind to client calls and team management
            but finding my passion has been the most anticipated journey that I
            have covered. In the coming years, I envision myself leading and
            guiding teams and ideas to their conclusions. Aspirations and
            Inspirations... that&apos;s what I want to work for and wish to live
            for.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative">
            <div className="relative  flex items-center justify-center">
              <img
                src={profile}
                alt="Profile"
                className=" object-cover w-full h-[100vh]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
