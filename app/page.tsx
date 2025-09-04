'use client';


import { useEffect, useRef } from 'react';
import Link from "next/link";
import HomepageImageSlider from "../components/HomepageImageSlider";

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all elements with fade-up class
    const elements = document.querySelectorAll('.fade-up');
    elements.forEach((el) => observerRef.current?.observe(el));

    // Hero text animation on load
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-button');
    
    if (heroTitle && heroSubtitle && heroButton) {
      setTimeout(() => heroTitle.classList.add('animate-in'), 200);
      setTimeout(() => heroSubtitle.classList.add('animate-in'), 600);
      setTimeout(() => heroButton.classList.add('animate-in'), 1000);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-title {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-title.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .hero-subtitle {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-subtitle.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-button {
          opacity: 0;
          transform: translateY(20px) scale(0.9);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-button.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
        }
        
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .value-card {
          transition: all 0.3s ease-out;
        }
        
        .value-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%);
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .stagger-delay-1 { transition-delay: 0.1s; }
        .stagger-delay-2 { transition-delay: 0.2s; }
        .stagger-delay-3 { transition-delay: 0.3s; }
        .stagger-delay-4 { transition-delay: 0.4s; }
        .stagger-delay-5 { transition-delay: 0.5s; }
        .stagger-delay-6 { transition-delay: 0.6s; }
        
        .pulse-on-hover {
          transition: all 0.3s ease;
        }
        
        .pulse-on-hover:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .slide-in-left.animate-in,
        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .bounce-in {
          animation: bounceIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* Hero */}
      <section className="gradient-bg text-white text-center py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-balanced relative z-10">
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold mb-4">
            3J Solutions Pakistan
          </h1>
          <p className="hero-subtitle text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Integrated Construction, Maintenance & Facility Services — delivering
            cost-effective, reliable, and sustainable solutions nationwide.
          </p>
          <a href="/contact" className="hero-button btn btn-ghost pulse-on-hover">
            Get a Free Quote
          </a>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white/10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container-balanced grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left slide-in-left fade-up">
            <h2 className="section-title mb-6">Who We Are</h2>
            <p className="max-w-3xl mx-auto subtle">
              Since 2017, 3J Solutions has been providing comprehensive construction,
              renovation, maintenance, and facility management services. With offices
              across Pakistan, we serve businesses, institutions, and residences with
              a focus on quality, innovation, and sustainability.
            </p>
          </div>
          <div className="slide-in-right fade-up">
            <HomepageImageSlider />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="container-balanced">
          <h2 className="section-title text-center mb-12 fade-up">Our Services</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Construction", desc: "Ceiling, Steel, Carpentry & Renovation", href: "/services/construction" },
              { title: "Maintenance", desc: "AC/HVAC, Electrical, IT, Security", href: "/services/maintenance" },
             { title: "IT Services", desc: "Networking, Servers, Security Systems", href: "/services/It" },
              { title: "Allied Services", desc: "General Supplies & Furnitures", href: "/services/allied" },
             { title: "Solar Supplies", desc: "Solar supplies, Battery storage solutions", href: "/services/solar-supplies" },
             { title: "HVAC", desc: "Heating, Ventilation, AirConditioning ", href: "/services/hvac" },
              ].map((s, index) => (
              <Link 
                key={s.title} 
                href={s.href} 
                className={`card service-card fade-up stagger-delay-${index + 1} hover:shadow-lg transition-shadow block`}
              >
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="subtle">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-balanced">
          <h2 className="section-title text-center mb-12 fade-up">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Honesty", desc: "Transparent processes and clear commitments." },
              { title: "Punctuality", desc: "On-time delivery across projects and services." },
              { title: "Ownership", desc: "We treat your facility like our own." }
            ].map((v, index) => (
              <div 
                key={v.title} 
                className={`card value-card fade-up stagger-delay-${index + 1}`}
              >
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p className="subtle">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50"></div>
        <div className="container-balanced text-center relative z-10">
          <h2 className="section-title mb-4 fade-up">Ready to start?</h2>
          <p className="subtle mb-8 fade-up stagger-delay-1">Get a tailored quotation within 24—48 hours.</p>
          <a href="/contact" className="btn btn-primary fade-up stagger-delay-2 pulse-on-hover">
            Request a Quote
          </a>
        </div>
        
        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full floating-animation"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-200/30 rounded-full floating-animation" style={{animationDelay: '3s'}}></div>
      </section>
    </>
  );
}