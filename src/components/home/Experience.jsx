import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../css/Experience.css";
import artLogo from "../../assets/artLogo.png";
import logo2 from "../../assets/logo2.png";
import indie from "../../assets/indiefluence-logo.svg";
import freelancing from "../../assets/freelancing.png";

const ExperienceAnimated = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const experiences = [
    {
      logo: artLogo,
      date: "Apr 2019",
      company: "ALAP Jhankriti",
      subtitle:
        "Assisted in planning, creating, and scheduling engaging social media content to boost event visibility.",
      role: "Social Media Marketing Intern",
      link: "#projects",
    },
    {
      logo: freelancing,
      date: "Apr 2023",
      company: "Self-Employed",
      subtitle:
        "Crafted compelling blogs, articles, SOPs, and academic content tailored to diverse audiences, ensuring clarity, originality, and client satisfaction.",
      role: "Freelance Writer",
      link: "#projects",
    },
    {
      logo: logo2,
      date: "May 2021",
      company: "Content Euphoria",
      subtitle:
        "Served as a writer with a proven track record of curating 100+ approved applications and research papers.",
      role: "Senior Content Writer",
      link: "#projects",
    },
    {
      logo: indie,
      date: "Sep 2022",
      company: "Indiefluence",
      subtitle:
        "Led the creation and execution of impactful content strategies, managing diverse teams to deliver high-quality campaigns across multiple industries.",
      role: "Content Head",
      link: "#projects",
    },
  ];

  return (
    <div className="experience-container" ref={sectionRef}>
      {/* Title */}
      <motion.h2
        className="experience-title"
        initial={{ y: -50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>
      <p className="experience-description">
        The journey I have sailed so far...
      </p>

      {/* Experience Cards */}
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <img
              src={exp.logo}
              alt={exp.company}
              className="experience-logo"
               
            />
            <p className="experience-date">{exp.date}</p>
            <h3 className="experience-company">{exp.company}</h3>
            {exp.subtitle && <p className="experience-subtitle">{exp.subtitle}</p>}
            <p className="experience-role">{exp.role}</p>
            <a href={exp.link} className="experience-link">
              See Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceAnimated;
