import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutMe from "../components/home/About";
import Experience from "../components/home/Experience";
import BackgroundSection from "../components/home/BackgroundSection";
import Testimonial from "../components/home/Testimonials";
import ProjectsSection from "../components/home/ProjectSection";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About Me Section */}
      <section id="about">
        <AboutMe />
      </section>

      <section id="background">
        <BackgroundSection />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Testimonial Section */}
      <section id="testimonials">
        <Testimonial />
      </section>
    </div>
  );
};

export default Home;
