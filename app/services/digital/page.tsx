"use client";
import { useState } from "react";

export default function DigitalPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const digitalImages = [
    { src: "/web1.jpg", alt: "Digital Service 1" },
    { src: "/web2.jpg", alt: "Digital Service 2" },
    { src: "/web3.jpg", alt: "Digital Service 3" }, 
    { src: "/web4.jpg", alt: "Digital Service 4" }, 
    { src: "/web5.jpg", alt: "Digital Service 5" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % digitalImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + digitalImages.length) % digitalImages.length);
  };

  return (
    <div className="font-sans text-gray-900">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Digital & IT Solutions</h1>
            <p className="text-xl mb-8">Empowering businesses with cutting-edge web development, digital marketing, and e-commerce integration solutions.</p>
            <a href="/contact" className="btn btn-primary">Start a Project</a>
          </div>
          
          {/* Enhanced Image Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={digitalImages[currentImageIndex].src} 
                alt={digitalImages[currentImageIndex].alt}
                className="w-full h-96 object-cover transition-transform duration-500"
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
              {digitalImages.map((_, index) => (
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
      </section>
      
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg">💻 <h3>Web Design & Development</h3></div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg">📈 <h3>SEO & Digital Marketing</h3></div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg">🛒 <h3>E-commerce & Integrations</h3></div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Grow Your Business Digitally</h2>
        <a href="/contact" className="btn btn-primary">Request Consultation</a>
      </section>
    </div>
  );
}
