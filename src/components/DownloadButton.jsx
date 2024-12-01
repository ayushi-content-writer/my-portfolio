import React, { useState } from "react";
import { gsap } from "gsap";

const DownloadButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const buttonRef = React.useRef(null);
  const textRef = React.useRef(null);

  const startDownload = () => {
    if (downloading || downloadComplete) return;

    setDownloading(true);

    // Transition the button to a circular shape
    gsap.to(buttonRef.current, {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      duration: 0.4,
      ease: "power2.out",
    });

    gsap.to(textRef.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        textRef.current.textContent = "0%";
        gsap.to(textRef.current, { opacity: 1, duration: 0.2 });
      },
    });

    // Simulated download progress
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

        gsap.to(textRef.current, {
          textContent: "Open",
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
        disabled={downloading}
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
    backgroundColor: "#bd5d19",
    color: "#fff",
    border: "none",
    borderRadius: "10px", // Rectangle with slightly rounded corners
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },
  circularButton: {
    position: "relative",
    width: "80px",
    height: "80px",
    backgroundColor: "#bd5d19",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    outline: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  },
  text: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default DownloadButton;
