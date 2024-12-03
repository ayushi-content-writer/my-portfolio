import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutMe from "../components/home/About";
import Experience from "../components/home/Experience";
import BackgroundSection from "../components/home/BackgroundSection";

const Home = () => {
  return (
    <div className="snap-container">
      {/* Hero Section */}
      <div className="snap-section">
        <HeroSection />
      </div>

      {/* About Me Section */}
      <div className="snap-section">
        <AboutMe />
      </div>


      <div className="snap-section">
        <BackgroundSection/>
      </div>
      {/* Experience Section */}
      <div className="snap-section">
        <Experience />
      </div>
    </div>
  );
};

export default Home;
