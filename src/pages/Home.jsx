import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutMe from "../components/home/About";
import Experience from "../components/home/Experience";
import BackgroundSection from "../components/home/BackgroundSection";
import Testimonial from "../components/home/Testimonials";
import ProjectsSection from "../components/home/ProjectSection";

const Home = () => {
  return (
    <div className="snap-container">
      {/* Hero Section */}
      
        <HeroSection />
   

      {/* About Me Section */}
       
        <AboutMe />

       
        <BackgroundSection/>
    
      {/* Experience Section */}
       
        <Experience />

        <ProjectsSection/>

        <Testimonial/>
      
    </div>
  );
};

export default Home;
