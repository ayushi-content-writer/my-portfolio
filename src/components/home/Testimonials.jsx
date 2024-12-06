import React, { useState, useRef } from "react";

const TestimonialSlider = () => {
  const testimonials = [
    {
      title: "Great start for my career.",
      text: "When I started going to the academy, I was inexperienced, so I was worried that I could do something like a graduate I saw in public presentations before I entered the school. But when I entered the school, I was able to grow while always getting the power and motivation of the teachers. I think it’s the 2nd year I have been able to absorb not only interior but also various things in my life.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      title: "A truly rewarding experience.",
      text: "Working with the team has been an enriching journey. The teachers and mentors always inspire and encourage us to go beyond our comfort zones. It's been a transformative experience for me, both personally and professionally.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
    {
      title: "Motivation and growth.",
      text: "Being part of this community has taught me invaluable lessons. The support, guidance, and motivation from peers and mentors have pushed me to achieve things I never thought possible.",
      image: "https://via.placeholder.com/400x300", // Replace with your image URL
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const startPosition = useRef(0);

  const handleTouchStart = (e) => {
    startPosition.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentPosition = e.touches[0].clientX;
    if (startPosition.current - currentPosition > 50) {
      goToNext();
    } else if (startPosition.current - currentPosition < -50) {
      goToPrevious();
    }
  };

  const handleMouseDown = (e) => {
    startPosition.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (startPosition.current === 0) return;

    const currentPosition = e.clientX;
    if (startPosition.current - currentPosition > 50) {
      goToNext();
      startPosition.current = 0;
    } else if (startPosition.current - currentPosition < -50) {
      goToPrevious();
      startPosition.current = 0;
    }
  };

  const handleMouseUp = () => {
    startPosition.current = 0;
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-slider-container bg-blue-100 py-16 px-4">
      <div
        ref={sliderRef}
        className="relative max-w-4xl mx-auto overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="testimonial-slider flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row min-w-full"
            >
              {/* Image on Top for Mobile */}
              <div className="flex-1 md:order-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              {/* Text Content */}
              <div className="bg-blue-50 p-6 md:p-8 flex-1 md:order-1">
                <div className="quote-icon text-blue-300 text-5xl md:text-6xl leading-none">
                  “
                </div>
                <h2 className="text-blue-800 font-extrabold text-xl md:text-2xl mt-4">
                  {testimonial.title}
                </h2>
                <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-4 w-4 rounded-full mx-1 transition-colors ${
                index === currentIndex ? "bg-blue-700" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
