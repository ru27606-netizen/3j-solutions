"use client";

import { useState } from "react";


export default function SecurityITPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Security & IT related images
  const securityImages = [
    {
      src: "/security1.jpg",
      alt: "CCTV Security System Installation"
    },
    {
      src: "/security2.jpg",
      alt: "Access Control Systems"
    },
    {
      src: "/it1.png",
      alt: "Network Infrastructure Setup"
    },
    {
      src: "/it2.png",
      alt: "Network Infrastructure Setup"
    },{
      src: "/it3.png",
      alt: "Network Infrastructure Setup"
    },{
      src: "/it4.png",
      alt: "Network Infrastructure Setup"
    },{
      src: "/it5.png",
      alt: "Network Infrastructure Setup"
    },{
      src: "/it6.png",
      alt: "Network Infrastructure Setup"
    },{
      src: "/it7.png",
      alt: "Network Infrastructure Setup"
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % securityImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + securityImages.length) % securityImages.length);
  };

  return (
    <div className="font-sans text-gray-900">
     
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Security & IT Solutions
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At 3J Solutions, we provide comprehensive security and IT services to protect and optimize your business operations. From advanced surveillance systems to complete IT infrastructure management, our expert team delivers cutting-edge solutions tailored to your specific needs. With years of experience in both security and technology sectors, we ensure your assets and data remain secure while maximizing operational efficiency.
              </p>
              <a href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Request a Consultation
              </a>
            </div>
            
            {/* Enhanced Image Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={securityImages[currentImageIndex].src} 
                  alt={securityImages[currentImageIndex].alt}
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
                {securityImages.map((_, index) => (
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
              <div className="text-4xl mb-4">📹</div>
              <h3 className="text-xl font-semibold mb-3">CCTV & Surveillance</h3>
              <p className="text-gray-600">Advanced IP camera systems with remote monitoring and high-definition recording capabilities.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-3">Access Control</h3>
              <p className="text-gray-600">Biometric and card-based access control systems for secure facility management.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-3">Alarm Systems</h3>
              <p className="text-gray-600">Comprehensive fire, intrusion, and emergency alarm systems with 24/7 monitoring.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Network Infrastructure</h3>
              <p className="text-gray-600">Complete network setup, structured cabling, and wireless solutions for businesses.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-3">IT Support</h3>
              <p className="text-gray-600">On-site and remote IT support, system maintenance, and technical troubleshooting.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
              <p className="text-gray-600">Cloud migration, backup solutions, and hybrid infrastructure management services.</p>
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
              {securityImages.map((image, index) => (
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
            We provide comprehensive security and IT solutions that protect your business assets while optimizing technological infrastructure. Our certified technicians and security experts ensure reliable, scalable solutions tailored to your specific requirements.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Security Services</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>IP-based CCTV surveillance systems</li>
                <li>Biometric access control solutions</li>
                <li>Intrusion detection and alarm systems</li>
                <li>Fire detection and suppression systems</li>
                <li>Perimeter security and monitoring</li>
                <li>24/7 security system maintenance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">IT Services</h3>
              <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>Network design and implementation</li>
                <li>Server setup and maintenance</li>
                <li>Cloud infrastructure management</li>
                <li>Data backup and recovery solutions</li>
                <li>Cybersecurity and firewall protection</li>
                <li>Help desk and technical support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container-balanced max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure Your Business Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Protect your assets and optimize your technology infrastructure. Contact us for a comprehensive security and IT assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Security Assessment
            </a>
          </div>
        </div>
      </section>

     
    </div>
  );
}
