"use client";

import { useState, useEffect } from "react";

export default function SolarSuppliesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Solar supplies related images
  const solarImages = [
    {
      src: "/supplies1.jpg",
      alt: "Solar Panel Installation"
    },
    {
      src: "/supplies2.jpg",
      alt: "Solar Battery Storage"
    },
    {
      src: "/solar6.png",
      alt: "Solar Inverter Systems"
    },
    {
      src: "/solar7.jpg",
      alt: "Solar Lighting Solutions"
    },
    {
      src: "/solar9.jpg",
      alt: "Solar Power Accessories"
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % solarImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + solarImages.length) % solarImages.length);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Solar Supplies & Solutions
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At 3J Solutions, we offer a wide range of solar supplies and solutions to power your home or business sustainably. From high-quality solar panels to advanced battery storage systems, our products are designed to maximize energy efficiency and reliability. Trust our expert team to provide tailored solar solutions that meet your unique energy needs.
              </p>
              <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request a Consultation
              </a>
            </div>

            {/* Enhanced Image Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={solarImages[currentImageIndex].src} 
                  alt={solarImages[currentImageIndex].alt}
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
                {solarImages.map((_, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Solar Supplies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Supply Cards */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold mb-3">Solar Panels</h3>
              <p className="text-gray-600">High-efficiency photovoltaic panels for residential and commercial use.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔋</div>
              <h3 className="text-xl font-semibold mb-3">Battery Storage</h3>
              <p className="text-gray-600">Reliable solar battery systems to store energy for use during non-sunny hours.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Inverters</h3>
              <p className="text-gray-600">Efficient solar inverters to convert DC power to usable AC electricity.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Lighting Solutions</h3>
              <p className="text-gray-600">Solar-powered lighting options for indoor and outdoor applications.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-3">Accessories</h3>
              <p className="text-gray-600">Cables, connectors, and mounting hardware for complete solar setups.</p>
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
              {solarImages.map((image, index) => (
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
            We provide high-quality solar supplies and solutions designed to help you harness the power of the sun efficiently and sustainably. Our expert team ensures reliable products and tailored services to meet your energy needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Solar Products</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Photovoltaic solar panels</li>
                <li>Battery storage systems</li>
                <li>Solar inverters and controllers</li>
                <li>Solar lighting and accessories</li>
                <li>Installation and maintenance support</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Services</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Custom solar system design</li>
                <li>Energy efficiency consulting</li>
                <li>Installation and setup</li>
                <li>System monitoring and maintenance</li>
                <li>Technical support and troubleshooting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-balanced max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Power Your Future with Solar</h2>
          <p className="text-xl mb-8 opacity-90">
            Harness the power of the sun and reduce your energy costs. Contact us today for a personalized solar supplies consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get a Solar Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
