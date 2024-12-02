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
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
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
      date: "Apr 2019",
      company: "ALAP Jhankriti",
      subtitle: "(now World Forum for Art and Culture)",
      role: "Social Media Marketing Intern",
      link: "#",
    },
    {
      logo: logo2,
      date: "May 2021",
      company: "Content Euphoria",
      role: "Senior Content Writer",
      link: "#",
    },
    {
      logo: indie,
      date: "Sep 2022",
      company: "Indiefluence",
      role: "Content Head",
      link: "#",
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
      <p className="animated-description">
        Professional experience I’ve gained through various opportunities.
      </p>

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
            <p className="date">{exp.date}</p>
            <h3 className="company-name">{exp.company}</h3>
            {exp.subtitle && <p className="subtitle">{exp.subtitle}</p>}
            <p className="role">{exp.role}</p>
            <a href={exp.link} className="see-project">
              See Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAnimated;
