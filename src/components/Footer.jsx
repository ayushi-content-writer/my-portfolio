import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Section */}
      <div className="footer-left">
        <h1 className="footer-title">
          Let’s create <span>impactful</span> stories together.
        </h1>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <h2 className="footer-heading">Contact Me</h2>
        <div className="footer-contact-info">
          <p>
            <i className="fas fa-phone-alt"></i> +91 9729688993
          </p>
          <p>
            <i className="fas fa-envelope"></i>{" "}
            <a href="mailto:aayushiverma.kkr@gmail.com">
              aayushiverma.kkr@gmail.com
            </a>
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-block"
          >
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-block"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-block"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
