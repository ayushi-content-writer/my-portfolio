import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../css/Experience.css";
import artLogo from "../../assets/artLogo.png";
import logo2 from "../../assets/logo2.png";
import indie from "../../assets/indiefluence-logo.svg";

const ExperienceAnimated = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Update state when the element is in view
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      logo: artLogo,
      company: "ALAP Jhankriti",
      subtitle: "(now World Forum for Art and Culture)",
      role: "Social Media Marketing Intern",
    },
    {
      logo: logo2,
      company: "Content Euphoria",
      role: "Senior Content Writer",
    },
    {
      logo: indie,
      company: "Indiefluence",
      role: "Content Head",
    },
  ];

  return (
    <div className="experience-animated-container" ref={sectionRef}>
      {/* Title */}
      <motion.h2
        className="animated-title"
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        EXPERIENCE
      </motion.h2>

      {/* Experience Cards */}
      <div className="animated-experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="animated-experience-item"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="logo-container">
              <img src={exp.logo} alt={exp.company} className="company-logo" />
            </div>
            <h3 className="company-name">{exp.company}</h3>
            {exp.subtitle && <p className="subtitle">{exp.subtitle}</p>}
            <p className="role">{exp.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAnimated;
