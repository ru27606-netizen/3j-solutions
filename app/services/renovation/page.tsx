"use client";
import { useState, useEffect } from "react";

// Main Component
export default function RenovationPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Placeholder construction images
  const constructionImages = [
    {
      src: "/construction1.jpg",
      alt: "Construction Project 1"
    },
    {
      src: "/construction2.jpg",
      alt: "Construction Project 2"
    },
    {
      src: "/construction3.jpg",
      alt: "Construction Project 3"
    },
    {
      src: "/construction4.jpg",
      alt: "Construction Project 4"
    }, {
      src: "/construction5.jpg",
      alt: "Construction Project 5"
    }, {
      src: "/construction6.jpg",
      alt: "Construction Project 6"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % constructionImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + constructionImages.length) % constructionImages.length);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Construction & Renovation
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At 3J Solutions, we are your trusted partner in turning your visions into reality. Our construction services encompass a wide range of projects, from residential to commercial, each crafted with utmost care and precision. With years of experience in the industry, our dedicated team of professionals is equipped to handle projects of varying scales and complexities.
              </p>
              <a href="/contact" className="btn btn-primary">
                Request a Quote
              </a>
            </div>
            
            {/* Enhanced Image Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={constructionImages[currentImageIndex].src} 
                  alt={constructionImages[currentImageIndex].alt}
                  className="w-full h-96 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Slider Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {constructionImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3">Ceiling & Steel Work</h3>
              <p className="text-gray-600">Professional ceiling installations and steel framework construction with precision engineering.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-semibold mb-3">Carpentry</h3>
              <p className="text-gray-600">Expert woodworking and carpentry services for custom furniture and structural elements.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🪟</div>
              <h3 className="text-xl font-semibold mb-3">Aluminum & Glass</h3>
              <p className="text-gray-600">Modern aluminum and glass installations for windows, doors, and facades.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-semibold mb-3">Interior Fit-outs</h3>
              <p className="text-gray-600">Complete interior renovation and fit-out services for residential and commercial spaces.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3">Civil Works</h3>
              <p className="text-gray-600">Comprehensive civil construction services including foundations, structures, and infrastructure.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Renovation Projects</h3>
              <p className="text-gray-600">Transform your existing spaces with our comprehensive renovation and remodeling services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Portfolio</h2>
          
          {/* Horizontal scrolling gallery */}
          <div className="my-8">
            <div className="flex overflow-x-auto gap-6 pb-4">
              {constructionImages.map((image, index) => (
                <div key={index} className="flex-shrink-0">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="rounded-lg w-80 h-56 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:scale-105 transform transition-transform duration-200"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-16 bg-white">
        <div className="container-balanced max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">What We Offer</h2>
          
          <p className="mb-8 text-gray-700 text-lg leading-relaxed">
            We provide comprehensive construction and renovation services that cover every aspect of building and remodeling projects. Our experienced team ensures quality workmanship and attention to detail in every project we undertake.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Construction Services</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Ceiling & steel work, carpentry</li>
                <li>Aluminum & glass installations</li>
                <li>Interior fit-outs, civil works</li>
                <li>Foundation and structural work</li>
                <li>Roofing and waterproofing</li>
                <li>Electrical and plumbing integration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Renovation Services</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Kitchen and bathroom remodeling</li>
                <li>Office space renovation</li>
                <li>Residential home improvements</li>
                <li>Commercial space upgrades</li>
                <li>Flooring and tiling services</li>
                <li>Paint and finishing work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-balanced max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you transform your vision into reality. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Request Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
