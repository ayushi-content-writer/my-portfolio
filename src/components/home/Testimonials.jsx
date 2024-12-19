import React, { useState, useRef, useEffect } from "react";
import vanshika from "../../assets/project/vanshika.png";
import anurag from "../../assets/project/Anurag.jpg";

const TestimonialSlider = () => {
  const testimonials = [
    {
      title: "Great start for my career.",
      text: "Working under Aayushi at Indiefluence has been an incredible experience! She is not only a highly professional and experienced content head, but also a truly kind and approachable mentor. Her years of expertise shine through in everything she does, from crafting compelling strategies to guiding her team with unmatched clarity. What sets her apart is her ability to strike the perfect balance between being supportive and teaching essential boundaries, a lesson that has helped me grow both personally and professionally. Her strong work ethic and unwavering dedication to excellence have inspired me to approach my own work with greater discipline and commitment.",
      image: vanshika,
      linkedin: "https://www.linkedin.com/in/vanshika-aggarwal-1a9738220/",
    },
    {
      title: "A great accomplice and collaborator",
      text: "Working with Aayushi has been extremely fruitful for all our projects we have executed together. Her ability to create clear, engaging, and catchy content has significantly elevated the websites we've built. Her attention to detail and understanding of user experience made her an invaluable partner in every project.",
      image: anurag,
      linkedin: "https://www.linkedin.com/in/anurag-mishra-995534339",
    },
    // {
    //   title: "Motivation and growth.",
    //   text: "Being part of this community has taught me invaluable lessons. The support, guidance, and motivation from peers and mentors have pushed me to achieve things I never thought possible.",
    //   image: "https://via.placeholder.com/400x300",
    //   linkedin: "https://www.linkedin.com/in/example-profile-2/",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const autoSlideInterval = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      goToNext();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) clearInterval(autoSlideInterval.current);
  };

  const handleTouchStart = (e) => {
    stopAutoSlide();
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.touches[0].clientX;
    if (startX.current - currentX > 50) {
      goToNext();
      isDragging.current = false;
    } else if (startX.current - currentX < -50) {
      goToPrevious();
      isDragging.current = false;
    }
  };

  const handleMouseStart = (e) => {
    stopAutoSlide();
    startX.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX;
    if (startX.current - currentX > 50) {
      goToNext();
      isDragging.current = false;
    } else if (startX.current - currentX < -50) {
      goToPrevious();
      isDragging.current = false;
    }
  };

  const handleMouseEnd = () => {
    isDragging.current = false;
    startAutoSlide();
  };

  return (
    <div className="testimonial-slider-container bg-backgroundOffWhite py-36 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-secondary">
          What People Are Saying
        </h2>
        <p className="text-tertiary mt-4 text-base">
          Don’t take my word for it! See what my words did for them ❤️
        </p>
      </div>

      <div
        ref={sliderRef}
        className="relative max-w-4xl mx-auto overflow-hidden"
        onMouseDown={handleMouseStart}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseEnd}
        onMouseLeave={handleMouseEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => {
          isDragging.current = false;
          startAutoSlide();
        }}
      >
        <div
          className="testimonial-slider flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="testimonial-card bg-backgroundBlue shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row min-w-full"
            >
              <div className="flex-1 md:order-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.title}
                  className="w-full h-80 md:h-full object-cover"
                   
                />
              </div>
              <div className="p-4 md:p-8 flex-1 md:order-1 relative flex flex-col">
                <div className="quote-icon text-primary text-5xl md:text-6xl leading-none mb[-50px]">
                  “
                </div>
                <h2 className="text-secondary font-extrabold text-xl md:text-2xl ">
                  {testimonial.title}
                </h2>
                <div
                  className="text-tertiary mt-4 text-sm md:text-base leading-relaxed overflow-y-auto max-h-36"
                  style={{
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 6,
                    display: "-webkit-box",
                  }}
                >
                  {testimonial.text}
                </div>
                <div
                  className="mt-4 px-4 py-2 bg-backgroundBlue text-[#0077B5] border border-[#0077B5] rounded-full shadow-inner hover:bg-[#0077B5] hover:text-white hover:border-white transition-all self-end"
                  onClick={(e) => e.stopPropagation()} // Prevents card click propagation
                >
                  View LinkedIn
                </div>
              </div>
            </a>
          ))}
        </div>

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
