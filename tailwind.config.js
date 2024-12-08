/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0077b6", // Vibrant Blue for Buttons and Links
        secondary: "#023047", // Deep Navy Blue for Headings
        tertiary: "#4a5568", // Muted Gray-Blue for Text
        hover: "#38bdf8", // Bright Aqua Blue for Hover Effects
        backgroundBlue: "#e6f7ff", // Soft Light Blue Background
        backgroundOffWhite: "#f9f9f9", // Off-White Background for Alternating Sections
        wave1: "#bae6fd", // Sky Blue for Decorative Waves
        wave2: "#7dd3fc", // Light Aqua Blue for Decorative Waves
        wave3: "#38bdf8", // Bright Aqua Blue for Additional Waves
      },
    },
  },
  plugins: [],
};
