"use client";
import { useState, useEffect } from "react";
import { Box, IconButton, Button, Typography, Paper } from "@mui/material";
import { ChevronLeft, ChevronRight, PlayArrow, Pause } from "@mui/icons-material";

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
        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={nextSlide}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              transform: 'translateY(-50%) scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Auto-play toggle */}
        <IconButton
          onClick={toggleAutoPlay}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(4px)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.4)',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {isAutoPlay ? <Pause /> : <PlayArrow />}
        </IconButton>
      </div>

      {/* Thumbnail Navigation */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
          overflowX: 'auto',
          pb: 1,
          maxWidth: 400,
        }}
      >
        {homepageImages.map((image, index) => (
          <Button
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              flexShrink: 0,
              position: 'relative',
              borderRadius: 1,
              overflow: 'hidden',
              border: index === currentIndex ? '2px solid #3b82f6' : '1px solid transparent',
              transition: 'all 0.3s ease',
              '&:hover': {
                border: '2px solid #60a5fa',
              },
              p: 0,
              minWidth: 'auto',
            }}
          >
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              sx={{
                width: 48,
                height: 32,
                objectFit: 'cover',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.25)',
                  filter: 'brightness(1.1)',
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                },
                transition: 'all 0.3s ease',
              }}
            />
            {index === currentIndex && (
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                }}
              />
            )}
          </Button>
        ))}
      </Box>

      {/* Progress Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 64,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1,
        }}
      >
        {homepageImages.map((_, index) => (
          <Button
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              height: 8,
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              p: 0,
              minWidth: 'auto',
              width: index === currentIndex ? 24 : 8,
              backgroundColor: index === currentIndex ? 'primary.main' : 'grey.300',
              '&:hover': {
                backgroundColor: index === currentIndex ? 'primary.main' : 'grey.400',
                transform: 'scale(1.1)',
              },
            }}
          />
        ))}
      </Box>
    </div>
  );
}
