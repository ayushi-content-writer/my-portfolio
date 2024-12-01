import React from "react";
import "../css/Herosection.css";
import DownloadButton from "../DownloadButton";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Waves Background */}
      <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
</div>

      {/* Text and Button */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi! I am{" "}
          <span className="hero-name">
            <Typewriter
              options={{
                strings: ["Aayushi", "Content Writer", "Storyteller"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
              }}
            />
          </span>
          !
        </h1>
        <p className="hero-subtitle pb-8">
          Wordsmith. Storyteller and all things Copy.
        </p>
        <div>
        <DownloadButton  />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
