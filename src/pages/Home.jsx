import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutMe from "../components/home/About";
import Experience from "../components/home/Experience";

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

      {/* Experience Section */}
      <div className="snap-section">
        <Experience />
      </div>
    </div>
  );
};

export default Home;
