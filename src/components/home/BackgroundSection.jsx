import React from "react";
import { motion } from "framer-motion";
import "../css/BackgroundSection.css";

const BackgroundSection = () => {
  const items = [
    {
      icon: <i className="fas fa-university text-[#22008A]"></i>,
      title: "University of Delhi",
      subtitle: "BA English Honors",
      period: "2015 - 2018",
      description:
        "Completed undergraduate degree in English, focused on literature and creative writing.",
    },
    {
      icon: <i className="fas fa-graduation-cap text-[#22008A]"></i>,
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "MA English Literature",
      period: "2018 - 2020",
      description:
        "Completed post-graduate degree in English Literature, specializing in modern literature.",
    },
    {
      icon: <i className="fas fa-briefcase text-[#22008A]"></i>,
      title: "The World Culture Festival",
      subtitle: "Internship",
      period: "2021",
      description:
        "Worked as an intern for content writing and event coordination during the festival.",
    },
  ];

  return (
    <div className="background-section">
      <div className="container">
        <motion.h2
          className="text-4xl font-bold text-center text-[#22008A] mb-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Career Background
        </motion.h2>

        <div className="relative">
          {/* Card Grid Container */}
          <div className="card-grid-container">
            {items.map((item, index) => (
              <div
                key={index}
                className="card p-6 text-gray-800 bg-white border border-[#22008A] rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#22008A]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.subtitle}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                </div>
                <p className="mt-2 leading-6 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
