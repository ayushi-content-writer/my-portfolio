import React from "react";
import "../css/Herosection.css";
import DownloadButton from "../DownloadButton";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Waves Background */}
      <div className="box">
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>

      {/* Text Section */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi! I am{" "}
          <span className="hero-name">
            <div className="typewriter-wrapper">
              <Typewriter
                options={{
                  strings: ["Aayushi", "a Copywriter", "a Storyteller"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 100,
                }}
              />
            </div>
          </span>
          !
        </h1>
        <p className="hero-subtitle">Wordsmith. Storyteller and all things Copy.</p>
      </div>

      {/* Button Section */}
      <div className="hero-button">
        <DownloadButton />
      </div>
    </div>
  );
};

export default HeroSection;
