"use client";
import { useState, useEffect } from "react";

export default function SuppliesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const supplyImages = [
    { src: "/supplies1.jpg", alt: "Supplies 1" },
    { src: "/supplies2.jpg", alt: "Supplies 2" },
    { src: "/supplies3.jpg", alt: "Supplies 3" },
    { src: "/supplies4.jpg", alt: "Supplies 4" },
    { src: "/supplies5.jpg", alt: "Supplies 5" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % supplyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + supplyImages.length) % supplyImages.length);
  };

  return (
    <div className="font-sans text-gray-900">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Allied Services</h1>
            <p className="text-xl mb-8">We source and supply high-quality equipment, furniture, and general imports/exports tailored to your business needs.</p>
            <a href="/contact" className="btn btn-primary">Request a Quote</a>
          </div>
          
          {/* Enhanced Image Slider */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={supplyImages[currentImageIndex].src} 
                alt={supplyImages[currentImageIndex].alt}
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
              {supplyImages.map((_, index) => (
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
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg">☀️ <h3>Solar Equipment Supply</h3></div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg">🪑 <h3>Furniture & Fixtures</h3></div>
          <div className="p-6 bg-gray-50 rounded-xl shadow-lg">📦 <h3>General Order Supplies</h3></div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Looking for Reliable Supplies?</h2>
        <a href="/contact" className="btn btn-primary">Request Supply Quote</a>
      </section>
    </div>
  );
}
