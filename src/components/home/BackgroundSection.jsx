import React from "react";
import { motion } from "framer-motion";

const BackgroundSection = () => {
  const items = [
    {
      icon: <i className="fas fa-university text-primary"></i>,
      title: "University of Delhi",
      subtitle: "BA English Honors",
      period: "2015 - 2018",
      description:
        "Completed undergraduate degree in English, focused on literature and creative writing.",
    },
    {
      icon: <i className="fas fa-graduation-cap text-primary"></i>,
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "MA English Literature",
      period: "2018 - 2020",
      description:
        "Completed post-graduate degree in English Literature, specializing in modern literature.",
    },
    {
      icon: <i className="fas fa-briefcase text-primary"></i>,
      title: "The World Culture Festival",
      subtitle: "Internship",
      period: "2021",
      description:
        "Worked as an intern for content writing and event coordination during the festival.",
    },
  ];

  return (
    <div className="background-section bg-backgroundBlue py-40">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-[3rem] font-bold text-center text-secondary mb-20"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Career Background
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="card bg-backgroundOffWhite border border-secondary rounded-lg shadow-lg hover:shadow-xl p-6 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-tertiary">{item.subtitle}</p>
                  <p className="text-sm text-tertiary">{item.period}</p>
                </div>
              </div>
              <p className="text-tertiary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
