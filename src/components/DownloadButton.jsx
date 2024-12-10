import React, { useState } from "react";
import { gsap } from "gsap";

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const buttonRef = React.useRef(null);
  const textRef = React.useRef(null);

  // Path to your PDF file
  const pdfUrl = "/avAts.pdf"; // Replace with the actual path to your PDF file

  const startDownload = () => {
    if (downloading || downloadComplete) return;

    setDownloading(true);

    // Animate the button to a circular shape
    gsap.to(buttonRef.current, {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      duration: 0.4,
      ease: "power2.out",
    });

    // Hide button text and show progress percentage
    gsap.to(textRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        textRef.current.textContent = "0%";
        gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
      },
    });

    // Simulate download progress
    const duration = 3; // seconds
    const progressInterval = 30; // ms
    let progress = 0;

    const interval = setInterval(() => {
      progress += (100 / (duration * 1000)) * progressInterval;

      if (progress >= 100) {
        clearInterval(interval);
        progress = 100;
        setDownloadComplete(true);
        setDownloading(false);

        // Trigger PDF download
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf"; // Rename the downloaded file
        link.click();

        // Update button text to "Complete"
        gsap.to(textRef.current, {
          textContent: "Complete",
          duration: 0.5,
          ease: "back.out(1.7)",
        });
      }

      textRef.current.textContent = `${Math.round(progress)}%`;
    }, progressInterval);
  };

  return (
    <div style={styles.wrapper}>
      <button
        ref={buttonRef}
        style={downloading ? styles.circularButton : styles.rectangularButton}
        onClick={startDownload}
        disabled={downloading || downloadComplete}
      >
        <span ref={textRef} style={styles.text}>
          Download CV
        </span>
      </button>
    </div>
  );
};

const styles = {
  wrapper: {
    position: "relative",
    display: "inline-block",
  },
  rectangularButton: {
    position: "relative",
    width: "200px",
    height: "70px",
    background: "linear-gradient(135deg, #00509e, #003f7f)", // Blue gradient
    color: "#fff",
    border: "none",
    borderRadius: "10px", // Slightly rounded corners
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    boxShadow:
      "inset 6px 6px 12px rgba(0, 0, 0, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.3)", // Inner shadow
    transition: "all 0.3s ease",
  },
  circularButton: {
    position: "relative",
    width: "80px",
    height: "80px",
    background: "linear-gradient(135deg, #00509e, #003f7f)", // Blue gradient
    color: "#fff",
    border: "none",
    borderRadius: "50%", // Fully rounded for circular shape
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    boxShadow:
      "inset 6px 6px 12px rgba(0, 0, 0, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.3)", // Inner shadow
    transition: "all 0.3s ease",
  },
  text: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default DownloadButton;
