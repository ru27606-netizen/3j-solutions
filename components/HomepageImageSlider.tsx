"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const homepageImages = [
  { 
    src: "/building1.jpg", 
    alt: "Building Maintenance", 
    title: "Building Maintenance",
    description: "Professional maintenance services for all types of buildings"
  },
  
  { 
    src: "/construction2.jpg", 
    alt: "Construction Services", 
    title: "Construction Services",
    description: "Quality construction and renovation projects"
  },
  { 
    src: "/facility1.jpg", 
    alt: "Facility Management", 
    title: "Facility Management",
    description: "Comprehensive facility management solutions"
  },
  { 
    src: "/it5.png", 
    alt: "Renovation Projects", 
    title: "Renovation Projects",
    description: "Expert renovation and remodeling services"
  },
  { 
    src: "/construction6.jpg", 
    alt: "Construction Excellence", 
    title: "Construction Excellence",
    description: "Delivering excellence in every construction project"
  },
  { 
    src: "/construction3.jpg", 
    alt: "Quality Workmanship", 
    title: "Quality Workmanship",
    description: "Attention to detail in every aspect of our work"
  },
  { 
    src: "/security1.jpg", 
    alt: "Allied Services", 
    title: "Allied Services",
    description: "Comprehensive supply and support services"
  },  { 
    src: "/web2.jpg", 
    alt: "General Supplies", 
    title: "General Supplies",
    description: "Reliable supply chain management"
  },  { 
    src: "/web1.jpg", 
    alt: "General Supplies", 
    title: "General Supplies",
    description: "Reliable supply chain management"
  },
  { 
    src: "/supplies2.jpg", 
    alt: "General Supplies", 
    title: "General Supplies",
    description: "Reliable supply chain management"
  }
];

export default function HomepageImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [autoPlayInterval, setAutoPlayInterval] = useState<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % homepageImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + homepageImages.length) % homepageImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    if (isAutoPlay) {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
      setAutoPlayInterval(null);
      setIsAutoPlay(false);
    } else {
      const interval = setInterval(nextSlide, 3000);
      setAutoPlayInterval(interval);
      setIsAutoPlay(true);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 3000);
      setAutoPlayInterval(interval);
      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    } else if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      setAutoPlayInterval(null);
    }
  }, [isAutoPlay]);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    };
  }, [autoPlayInterval]);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-lg shadow-lg overflow-hidden">
      
      {/* Main Image Display */}
      <div className="relative h-full overflow-hidden bg-gray-100">
        <img
          src={homepageImages[currentIndex].src}
          alt={homepageImages[currentIndex].alt}
          className="w-full h-full object-cover transition-all duration-700 ease-out hover:scale-110 hover:brightness-110 cursor-pointer"
        />
        
        {/* Overlay with info */}
       
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>

        {/* Auto-play toggle */}
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2 overflow-x-auto pb-2 max-w-[400px]">
          {homepageImages.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 relative group ${
                index === currentIndex ? 'ring-2 ring-blue-500' : 'ring-1 ring-transparent'
              } rounded-md overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-blue-400`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-12 h-8 object-cover transition-all duration-300 group-hover:scale-125 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
              {index === currentIndex && (
                <div className="absolute inset-0 bg-blue-500/20"></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {homepageImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentIndex 
                ? 'w-6 bg-blue-600' 
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
