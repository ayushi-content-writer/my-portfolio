import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container" id="contact" >
      {/* Left Section */}
      <div className="footer-left">
        <h1 className="footer-title">
        Let’s tell your   <span>story </span> the way it <span>deserves</span>  to be <span>told!</span> 
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
            href="https://www.linkedin.com/in/aayushiverma7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-block"
          >
            <i className="fab fa-linkedin-in"></i> Linked in
          </a>
          <a
            href="https://www.instagram.com/thesappyhappywallflower/profilecard/?igsh=MXAxcmxmMGdsYWVhOA== "
            target="_blank"
            rel="noopener noreferrer"
            className="social-block"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a
            href="https://medium.com/@aayushiverma.kkr"
            target="_blank"
            rel="noopener noreferrer"
            className="social-block"
          >
            <i className="fab fa-medium"></i> Medium
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
