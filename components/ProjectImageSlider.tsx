"use client";
import { useState, useEffect } from 'react';

const projectImages = [
  "/building1.jpg",
  "/building2.jpg", 
  "/building3.jpg",
  "/building4.jpg",
  "/building5.png",
  "/construction1.jpg",
  "/construction2.jpg",
  "/construction3.jpg",
  "/construction4.jpg",
  "/construction5.jpg",
  "/construction6.jpg"
];

export default function ProjectImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex(currentIndex === projectImages.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrev = () => {
    setCurrentIndex(currentIndex === 0 ? projectImages.length - 1 : currentIndex - 1);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg">
      {/* Main Image Display */}
      <div className="relative w-full h-full">
        {projectImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full group">
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-lg transition-all duration-200"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {projectImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg">
          <span className="text-sm font-medium">Project {currentIndex + 1} of {projectImages.length}</span>
        </div>
      </div>
    </div>
  );
}
