"use client";
import { useState, useEffect } from "react";

// Types
interface MaintenanceImage {
  src: string;
  alt: string;
}

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

// Main Component
export default function BuildingMaintenancePage(): JSX.Element {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Maintenance service images
  const maintenanceImages: MaintenanceImage[] = [
    {
      src: "/building1.jpg",
      alt: "Construction Project 1"
    },
    {
      src: "/building2.jpg",
      alt: "Construction Project 2"
    },
    {
      src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Construction Project 6"
    }, {
      src: "/building3.jpg",
      alt: "Construction Project 3"
    }, {
      src: "/building5.png",
      alt: "Construction Project 5"
    }, {
      src: "/building4.jpg",
      alt: "Construction Project 4"
    },
  ];

  // Service cards data
  const serviceCards: ServiceCard[] = [
    {
      icon: "🔧",
      title: "Mechanical Systems",
      description: "Professional HVAC maintenance, elevator servicing, and mechanical equipment care with precision engineering."
    },
    {
      icon: "⚡",
      title: "Electrical Services", 
      description: "Complete electrical maintenance including power systems, lighting, and emergency electrical services."
    },
    {
      icon: "🚿",
      title: "Plumbing & Water",
      description: "Expert plumbing maintenance, water system management, and leak detection services."
    },
    {
      icon: "🏗️",
      title: "Structural Maintenance",
      description: "Comprehensive structural inspections, repairs, and preventive maintenance for building safety."
    },
    {
      icon: "🧹",
      title: "Facility Cleaning",
      description: "Professional cleaning services including janitorial, deep cleaning, and specialized sanitization."
    },
    {
      icon: "🌱",
      title: "Grounds Maintenance", 
      description: "Complete exterior maintenance including landscaping, parking lot care, and outdoor facility maintenance."
    }
  ];

  const nextImage = (): void => {
    setCurrentImageIndex((prev) => (prev + 1) % maintenanceImages.length);
  };

  const prevImage = (): void => {
    setCurrentImageIndex((prev) => (prev - 1 + maintenanceImages.length) % maintenanceImages.length);
  };

  const setImageIndex = (index: number): void => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 text-gray-900">Building Maintenance Services</h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                At 3J Solutions, we are your trusted partner in comprehensive building maintenance and facility management. Our maintenance services encompass a wide range of solutions, from preventive maintenance to emergency repairs, each delivered with utmost care and precision. With years of experience in the industry, our dedicated team of professionals is equipped to handle maintenance projects of varying scales and complexities.
              </p>
              <a href="/contact" className="btn btn-primary">Request Free Quote</a>
            </div>
            
            {/* Enhanced Image Slider */}
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={maintenanceImages[currentImageIndex].src} 
                  alt={maintenanceImages[currentImageIndex].alt}
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
                {maintenanceImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setImageIndex(index)}
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
      <section className="py-16 bg-white" id="services">
        <div className="container-balanced max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-blue-600 text-white" id="contact">
        <div className="container-balanced max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Maintain Your Building?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you keep your property in perfect condition. Contact us today for a free consultation and maintenance quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
