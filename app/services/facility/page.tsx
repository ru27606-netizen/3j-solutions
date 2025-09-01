"use client";
import { useState } from "react";

export default function FacilityPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const facilityImages = [
    { src: "/facility1.jpg", alt: "Facility Service 1" },
    { src: "/facility2.jpg", alt: "Facility Service 2" },
     { src: "/facility4.jpg", alt: "Facility Service 4" },
      { src: "/facility5.jpg", alt: "Facility Service 5" },
    { src: "/facility3.jpg", alt: "Facility Service 3" }
  ];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % facilityImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + facilityImages.length) % facilityImages.length);

  return (
    <div className="font-sans text-gray-900">
     
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Facility Management</h1>
            <p className="text-xl text-gray-700 mb-8">
              We provide professional facility management services to ensure your spaces remain safe, clean, and efficient.
            </p>
            <a href="/contact" className="btn btn-primary">Request a Quote</a>
          </div>

          {/* Slider */}
          <div className="relative">
            <img src={facilityImages[currentImageIndex].src} alt={facilityImages[currentImageIndex].alt}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
            <button onClick={prevImage} className="absolute left-4 top-1/2 bg-white/80 p-2 rounded-full">←</button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 bg-white/80 p-2 rounded-full">→</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">🧹 <h3 className="text-xl font-semibold mb-2">Janitorial & Housekeeping</h3></div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">🦟 <h3 className="text-xl font-semibold mb-2">Fumigation & Disinfection</h3></div>
            <div className="p-6 bg-gray-50 rounded-xl shadow-lg">🌱 <h3 className="text-xl font-semibold mb-2">Gardening & Landscaping</h3></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white" id="contact">
        <div className="container-balanced max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Facility Management?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
     
    </div>
  );
}
