"use client";

import { useState, useEffect } from "react";

export default function HvacPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // HVAC related images
  const hvacImages = [
    {
      src: "/hvac1.jpg",
      alt: "HVAC System Installation"
    },
    {
      src: "/hvac2.jpg",
      alt: "Air Conditioning Units"
    },
    {
      src: "/hvac3.png",
      alt: "Heating Systems"
    },
    {
      src: "/hvac4.jpg",
      alt: "Ventilation Equipment"
    },

  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hvacImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hvacImages.length) % hvacImages.length);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                HVAC Services & Solutions
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At 3J Solutions, we provide comprehensive HVAC services to ensure optimal indoor air quality, comfort, and energy efficiency for your home or business. From advanced air conditioning systems to efficient heating solutions, our expert team delivers tailored HVAC solutions that meet your specific needs and budget.
              </p>
              <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request a Consultation
              </a>
            </div>

            {/* Enhanced Image Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={hvacImages[currentImageIndex].src}
                  alt={hvacImages[currentImageIndex].alt}
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
                {hvacImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? 'bg-yellow-600' : 'bg-gray-300'
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our HVAC Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold mb-3">Air Conditioning</h3>
              <p className="text-gray-600">High-efficiency AC systems for residential and commercial cooling needs.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-3">Heating Systems</h3>
              <p className="text-gray-600">Reliable heating solutions to keep your spaces warm and comfortable.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌬️</div>
              <h3 className="text-xl font-semibold mb-3">Ventilation</h3>
              <p className="text-gray-600">Advanced ventilation systems for optimal indoor air quality.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600">Regular maintenance services to ensure system efficiency and longevity.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">Installation</h3>
              <p className="text-gray-600">Professional installation of HVAC systems with expert craftsmanship.</p>
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
              {hvacImages.map((image, index) => (
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
            We provide comprehensive HVAC services designed to create comfortable, healthy, and energy-efficient indoor environments. Our expert team ensures reliable systems and tailored solutions to meet your heating, cooling, and ventilation needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">HVAC Products</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Air conditioning units</li>
                <li>Heating systems and furnaces</li>
                <li>Ventilation and air purification</li>
                <li>HVAC controls and thermostats</li>
                <li>Installation and maintenance support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Services</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Custom HVAC system design</li>
                <li>Energy efficiency consulting</li>
                <li>Installation and setup</li>
                <li>System monitoring and maintenance</li>
                <li>Emergency repairs and troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-balanced max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Optimize Your Indoor Comfort</h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure optimal heating, cooling, and air quality. Contact us today for a personalized HVAC consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get an HVAC Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
