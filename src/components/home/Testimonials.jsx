import React, { useState, useRef, useEffect } from "react";

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
  const autoSlideInterval = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Cleanup interval on component unmount
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      goToNext();
    }, 4000); // Auto-slide every 4 seconds
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  };

  // Handle touch and mouse interactions
  const handleTouchStart = (e) => {
    stopAutoSlide();
    startPosition.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentPosition = e.touches[0].clientX;
    if (startPosition.current - currentPosition > 50) {
      goToNext();
    } else if (startPosition.current - currentPosition < -50) {
      goToPrevious();
    }
    startPosition.current = currentPosition; // Update position to avoid multiple swipes
  };

  const handleMouseEnter = () => {
    stopAutoSlide(); // Pause auto-slide on hover for desktop
  };

  const handleMouseLeave = () => {
    startAutoSlide(); // Resume auto-slide when hover ends
  };

  return (
    <div className="testimonial-slider-container bg-backgroundOffWhite py-36 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">
          What People Are Saying
        </h2>
        <p className="text-tertiary mt-4 text-base">
          Hear from those who have experienced our work firsthand.
        </p>
      </div>

      <div
        ref={sliderRef}
        className="relative max-w-4xl mx-auto overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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
              className="testimonial-card bg-backgroundBlue shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row min-w-full"
            >
              <div className="flex-1 md:order-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 md:order-1">
                <div className="quote-icon text-primary text-5xl md:text-6xl leading-none">
                  “
                </div>
                <h2 className="text-secondary font-extrabold text-xl md:text-2xl mt-4">
                  {testimonial.title}
                </h2>
                <p className="text-tertiary mt-4 text-sm md:text-base leading-relaxed">
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
              onClick={() => {
                setCurrentIndex(index);
                stopAutoSlide();
                startAutoSlide();
              }}
              className={`h-4 w-4 rounded-full mx-1 transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-tertiary"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
