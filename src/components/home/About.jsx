import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/About.css";
import profile from "../../assets/ayushiProfile.webp";

const content = {
  title: "About Me",
  introduction: {
    main: `Writer and poetess born in the cradle of a historical gem, 
      <span class="text-primary font-bold">Kurukshetra</span>, as an English major, I was infused 
      with a deep appreciation and fascination for <span class="text-primary font-bold">creativity and arts</span>. 
      With a rich <span class="text-primary font-bold">experience of more than three years</span> in Writing 
      and almost an year in <span class="text-primary font-bold">Creative Management</span>, I have most lovingly 
      woven raw ideas, giving them a <span class="text-primary font-bold">compelling edge</span>.`,
    sub: `From writing <span class="text-primary font-bold">academic content</span> 
      to managing a <span class="text-primary font-bold">creative team in marketing</span>, 
      losing my mind to client calls and team management but <span class="text-primary font-bold">finding my passion</span> 
      has been the most anticipated journey that I have covered. In the coming years, I envision 
      myself <span class="text-primary font-bold">leading and guiding teams</span> and ideas to their conclusions.`,
  },
  skillsSection: {
    title: "Skills I Offer",
    skills: [
      "Leadership",
      "Content Writing",
      "Copy Writing",
      "Script Writing",
      "Voiceover Artistry",
      "Article Writing",
      "Blog Writing",
      "Campaign Building",
    ],
  },
  profileImage: profile,
  backgroundAnimations: [
    {
      className:
        "absolute -z-0 top-[100px] left-[50%] w-[1200px] h-[600px] bg-wave1 rounded-full blur-3xl opacity-85 animate-move-slow",
    },
    {
      className:
        "absolute -z-0 top-[400px] left-[10%] w-[200px] h-[300px] bg-wave2 rounded-full blur-3xl opacity-65 animate-move-slow",
    },
    {
      className:
        "absolute -z-0 top-[200px] left-[30%] w-[100px] h-[300px] bg-wave3 rounded-full blur-3xl animate-move-slow",
    },
  ],
};

const AboutMe = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const { title, introduction, skillsSection, profileImage, backgroundAnimations } = content;

  const [checkedSkills, setCheckedSkills] = useState(
    new Array(skillsSection.skills.length).fill(false)
  );

  // Auto-check skills one by one
  useEffect(() => {
    const timer = setInterval(() => {
      setCheckedSkills((prev) => {
        const updated = [...prev];
        const index = updated.findIndex((item) => item === false);
        if (index !== -1) {
          updated[index] = true;
        }
        return updated;
      });
    }, 500); // Interval for each checkbox to be checked
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="relative py-7 h-auto bg-background-off-white flex justify-center items-center overflow-hidden"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      {/* Animated Background Elements */}
      {backgroundAnimations.map((anim, index) => (
        <div key={index} className={anim.className}></div>
      ))}

      {/* Content Container */}
      <div className="relative w-full px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-center gap-16 z-10">
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div>
            <h1 className="text-5xl font-bold text-secondary relative">
              {title}
            </h1>
            <p
              className="mt-6 text-tertiary md:text-lg xl:text-2xl leading-relaxed"
              dangerouslySetInnerHTML={{ __html: introduction.main }}
            ></p>
            <p
              className="mt-4 text-tertiary md:text-lg xl:text-2xl leading-relaxed"
              dangerouslySetInnerHTML={{ __html: introduction.sub }}
            ></p>
          </div>

          {/* Skills Section */}
          <motion.div
            className="skills_div mt-8"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-secondary">
              {skillsSection.title}
            </h2>
            <div className="skills-grid mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-4 justify-center">
              {skillsSection.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-item flex items-center justify-start gap-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                  }}
                >
                  <input
                    type="checkbox"
                    checked={checkedSkills[index]}
                    readOnly
                    className="w-5 h-5 text-primary border-2 border-secondary rounded focus:ring-0"
                  />
                  <span className="text-sm md:text-lg text-secondary">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content (Profile Image) */}
        <motion.div
          className="lg:w-1/2 flex justify-center items-center"
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="object-contain w-full h-full max-h-[800px] max-w-[100%]"
               
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
