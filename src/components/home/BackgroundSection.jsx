import React from "react";
import "../css/BackgroundSection.css";
import { motion } from "framer-motion";

const BackgroundSection = () => {
  const items = [
    {
      icon: "🎓", // Example: Replace with your actual icons
      title: "University of Delhi",
      subtitle: "BA English Honors",
    },
    {
      icon: "🏅",
      title: "Guru Gobind Singh Indraprastha University",
      subtitle: "MA English Literature",
    },
    {
      icon: "💼",
      title: "The World Culture Festival",
      subtitle: "Internship",
    },
  ];

  return (
    <div className="background-container">
      <motion.h2
        className="background-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Background
      </motion.h2>
      <div className="background-items">
        {items.map((item, index) => (
          <motion.div
            className="background-item"
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="icon-container">{item.icon}</div>
            <h3 className="item-title">{item.title}</h3>
            <p className="item-subtitle">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundSection;
