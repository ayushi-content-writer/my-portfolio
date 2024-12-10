import React from "react";
import { motion } from "framer-motion";

const BackgroundSection = () => {
  const items = [
    {
      icon: <i className="fas fa-graduation-cap text-primary"></i>,
      title: "University of Delhi",
      subtitle: "BA English Honors",
      period: "2014 - 2017",
      description:
        "Completed undergraduate degree in English, focused on literature and creative writing.",
    },
    {
      icon: <i className="fas fa-book text-primary"></i>,
      title: "Kurukshetra University",
      subtitle: "B.Ed (Bachelor of Education)",
      period: "2017 - 2019",
      description:
        "Completed Bachelor of Education with a focus on pedagogical approaches and teaching methodologies.",
    },
    {
      icon: <i className="fas fa-university text-primary"></i>,
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "MA English Literature",
      period: "2021 - 2023",
      description:
        "Completed post-graduate degree in English Literature, specializing in modern literature and cinema.",
    },
    {
      icon: <i className="fas fa-briefcase text-primary"></i>,
      title: "The World Culture Festival",
      subtitle: "Internship",
      period: "2016",
      description:
        "Led a team of 20+ students from the University of Delhi, handling promotional content, event awareness campaigns, vox pop, and event management.",
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
          Educational Background
        </motion.h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="card bg-white border border-secondary rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <div className="flex items-center space-x-4 mb-4 p-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.subtitle}</p>
                  <p className="text-sm text-gray-500">{item.period}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed p-4">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundSection;
