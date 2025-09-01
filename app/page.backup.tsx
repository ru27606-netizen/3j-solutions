'use client';

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import HomepageImageSlider from "../components/HomepageImageSlider";

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Special handling for counters
            if (entry.target.classList.contains('counter')) {
              animateCounter(entry.target as HTMLElement);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all elements with animation classes
    const elements = document.querySelectorAll('.fade-up, .slide-in-left, .slide-in-right, .zoom-in, .counter');
    elements.forEach((el) => observerRef.current?.observe(el));

    // Hero animations sequence
    setTimeout(() => {
      const heroTitle = document.querySelector('.hero-title');
      const heroSubtitle = document.querySelector('.hero-subtitle');
      const heroButton = document.querySelector('.hero-button');
      
      if (heroTitle && heroSubtitle && heroButton) {
        heroTitle.classList.add('animate-in');
        setTimeout(() => heroSubtitle.classList.add('animate-in'), 400);
        setTimeout(() => heroButton.classList.add('animate-in'), 800);
      }
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const animateCounter = (element: HTMLElement) => {
    const target = parseInt(element.getAttribute('data-target') || '0');
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target.toString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 40);
  };

  return (
    <>
      <style jsx>{`
        .page-container {
          opacity: 0;
          transition: opacity 1s ease-out;
        }
        
        .page-container.loaded {
          opacity: 1;
        }
        
        .fade-up {
          opacity: 0;
          transform: translateY(50px);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .fade-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(80px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .slide-in-left.animate-in,
        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .zoom-in {
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .zoom-in.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        
        .hero-title {
          opacity: 0;
          transform: translateY(60px) rotateX(15deg);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          perspective: 1000px;
        }
        
        .hero-title.animate-in {
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
        }
        
        .hero-subtitle {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-subtitle.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .hero-button {
          opacity: 0;
          transform: translateY(30px) scale(0.8);
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .hero-button.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        
        .service-card {
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
          position: relative;
          overflow: hidden;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-12px) scale(1.03) rotateX(5deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .value-card {
          transition: all 0.4s ease-out;
          position: relative;
          overflow: hidden;
        }
        
        .value-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          transition: width 0.4s ease;
        }
        
        .value-card:hover::after {
          width: 100%;
        }
        
        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .floating-slow {
          animation: floatSlow 8s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-10px) rotate(2deg); 
          }
          50% { 
            transform: translateY(-15px) rotate(0deg); 
          }
          75% { 
            transform: translateY(-5px) rotate(-2deg); 
          }
        }
        
        @keyframes floatSlow {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-20px) scale(1.1); 
          }
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #3730a3 50%, #1e40af 75%, #0c4a6e 100%);
          background-size: 300% 300%;
          animation: gradientShift 12s ease infinite;
          position: relative;
        }
        
        .gradient-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(56, 189, 248, 0.3) 0%, transparent 70%);
          animation: pulseGlow 4s ease-in-out infinite;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        .parallax-element {
          transition: transform 0.3s ease-out;
        }
        
        .text-shimmer {
          background: linear-gradient(45deg, #ffffff, #e2e8f0, #ffffff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
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
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .pulse-on-hover::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.4s ease, height 0.4s ease;
        }
        
        .pulse-on-hover:hover::before {
          width: 300px;
          height: 300px;
        }
        
        .pulse-on-hover:hover {
          transform: scale(1.08);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
        }
        
        .morphing-bg {
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: morphing 8s ease-in-out infinite;
        }
        
        @keyframes morphing {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .counter {
          font-size: 2.5rem;
          font-weight: bold;
          color: #3b82f6;
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        .typing-animation {
          overflow: hidden;
          border-right: 3px solid #3b82f6;
          white-space: nowrap;
          animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #3b82f6; }
        }
        
        .wave-animation {
          position: relative;
          overflow: hidden;
        }
        
        .wave-animation::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100px;
          background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          animation: wave 4s linear infinite;
        }
        
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(50%); }
        }
        
        .magnetic-effect {
          transition: transform 0.2s ease-out;
        }
        
        .magnetic-effect:hover {
          transform: translate(var(--x, 0), var(--y, 0));
        }
        
        .neon-glow {
          text-shadow: 
            0 0 5px #3b82f6,
            0 0 10px #3b82f6,
            0 0 15px #3b82f6,
            0 0 20px #3b82f6;
          animation: neonPulse 2s ease-in-out infinite alternate;
        }
        
        @keyframes neonPulse {
          from { text-shadow: 0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6, 0 0 20px #3b82f6; }
          to { text-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6; }
        }
        
        .particle-system::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: particles 20s linear infinite;
          opacity: 0.3;
        }
        
        @keyframes particles {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50px, -50px); }
        }
      `}</style>

      <div className={`page-container ${isLoaded ? 'loaded' : ''}`}>
        {/* Hero */}
        <section className="gradient-bg text-white text-center py-24 px-6 relative overflow-hidden particle-system">
          <div 
            className="parallax-element absolute inset-0 opacity-20"
            style={{
              transform: `translate(${(mousePosition.x - 50) * 0.05}px, ${(mousePosition.y - 50) * 0.05}px)`
            }}
          >
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full floating-animation blur-sm"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400/20 rounded-full floating-delayed blur-sm"></div>
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-cyan-400/20 rounded-full floating-slow blur-sm"></div>
            <div className="absolute bottom-32 right-10 w-20 h-20 bg-pink-400/20 rounded-full floating-animation blur-sm"></div>
          </div>
          
          <div className="container-balanced relative z-10">
            <div className="glass-effect inline-block px-4 py-2 rounded-full mb-6 fade-up">
              <span className="text-sm font-medium">🚀 Premium Solutions Since 2017</span>
            </div>
            
            <h1 className="hero-title text-4xl md:text-7xl font-extrabold mb-6">
              <span className="text-shimmer">3J Solutions</span>
              <br />
              <span className="neon-glow">Pakistan</span>
            </h1>
            
            <p className="hero-subtitle text-lg md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed">
              Integrated Construction, Maintenance & Facility Services — delivering
              <span className="font-semibold text-blue-200"> cost-effective</span>, 
              <span className="font-semibold text-blue-200"> reliable</span>, and 
              <span className="font-semibold text-blue-200"> sustainable</span> solutions nationwide.
            </p>
            
            <div className="hero-button flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/contact" className="btn btn-ghost pulse-on-hover">
                Get a Free Quote
              </a>
              <a href="#services" className="glass-effect px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                Explore Services →
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-900 text-white wave-animation">
          <div className="container-balanced">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: 500, label: "Projects Completed", suffix: "+" },
                { number: 7, label: "Years Experience", suffix: "" },
                { number: 50, label: "Happy Clients", suffix: "+" },
                { number: 24, label: "Hour Support", suffix: "/7" }
              ].map((stat, index) => (
                <div key={stat.label} className={`fade-up stagger-delay-${index + 1}`}>
                  <div className="counter" data-target={stat.number}>{stat.number}</div>
                  <span className="text-2xl font-bold text-blue-400">{stat.suffix}</span>
                  <p className="text-gray-300 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
              backgroundSize: '30px 30px',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          ></div>
          
          <div className="container-balanced grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="text-center lg:text-left slide-in-left">
              <div className="morphing-bg w-20 h-1 mb-6 rounded-full"></div>
              <h2 className="section-title mb-8 text-5xl font-bold">
                Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Are</span>
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Since 2017, 3J Solutions has been providing comprehensive construction,
                renovation, maintenance, and facility management services. With offices
                across Pakistan, we serve businesses, institutions, and residences with
                a focus on quality, innovation, and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600">Innovation</h4>
                  <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                </div>
                <div className="glass-effect p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-600">Quality</h4>
                  <p className="text-sm text-gray-600">Premium standards</p>
                </div>
              </div>
            </div>
            <div className="slide-in-right relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative">
                <HomepageImageSlider />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
          <div className="container-balanced relative z-10">
            <div className="text-center mb-16">
              <h2 className="section-title mb-6 text-5xl font-bold fade-up">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto fade-up stagger-delay-1">
                Comprehensive solutions tailored to meet your specific needs with unmatched expertise
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Construction", desc: "Ceiling, Steel, Carpentry & Renovation", href: "/services/renovation", icon: "🏗️" },
                { title: "Maintenance", desc: "AC/HVAC, Electrical, IT, Security", href: "/services/maintenance", icon: "🔧" },
                { title: "Facility Management", desc: "Janitorial, Gardening, Fumigation", href: "/services/facility", icon: "🏢" },
                { title: "IT Services", desc: "Networking, Servers, Security Systems", href: "/services/It", icon: "💻" },
                { title: "Allied Services", desc: "Web Development, SEO, General Supplies", href: "/services/allied", icon: "⚡" },
                { title: "Digital Services", desc: "Web Design, SEO, E-commerce", href: "/services/digital", icon: "🎨" }
              ].map((s, index) => (
                <Link 
                  key={s.title} 
                  href={s.href} 
                  className={`service-card card p-8 fade-up stagger-delay-${index + 1} bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 group`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
                    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
                    e.currentTarget.style.setProperty('--x', `${x}px`);
                    e.currentTarget.style.setProperty('--y', `${y}px`);
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                  <div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          
          <div className="container-balanced relative z-10">
            <h2 className="section-title text-center mb-16 text-5xl font-bold fade-up text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Honesty", desc: "Transparent processes and clear commitments.", icon: "🤝" },
                { title: "Punctuality", desc: "On-time delivery across projects and services.", icon: "⏰" },
                { title: "Ownership", desc: "We treat your facility like our own.", icon: "🏆" }
              ].map((v, index) => (
                <div 
                  key={v.title} 
                  className={`value-card glass-effect p-8 rounded-xl fade-up stagger-delay-${index + 1} group`}
                >
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{v.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">{v.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="quote" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
            }}
          ></div>
          
          <div className="container-balanced text-center relative z-10">
            <div className="glass-effect inline-block px-6 py-3 rounded-full mb-6 fade-up">
              <span className="text-white font-medium">✨ Ready to Transform Your Space?</span>
            </div>
            
            <h2 className="section-title mb-6 text-5xl font-bold text-white fade-up stagger-delay-1">
              Ready to <span className="text-shimmer">Start</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed fade-up stagger-delay-2">
              Get a tailored quotation within 24—48 hours. Our experts are standing by to bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center fade-up stagger-delay-3">
              <a 
                href="/contact" 
                className="btn btn-ghost pulse-on-hover magnetic-effect text-lg px-8 py-4"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
                  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
                  e.currentTarget.style.setProperty('--x', `${x}px`);
                  e.currentTarget.style.setProperty('--y', `${y}px`);
                }}
              >
                Request a Quote
              </a>
              <a href="tel:+92-XXX-XXXXXXX" className="glass-effect px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 text-white">
                📞 Call Now
              </a>
            </div>
          </div>
          
          {/* Enhanced background elements */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full floating-animation blur-xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full floating-delayed blur-xl"></div>
          <div className="absolute top-1/2 left-10 w-40 h-40 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full floating-slow blur-xl"></div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container-balanced relative z-10">
            <h2 className="section-title text-center mb-16 text-5xl font-bold fade-up">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Clients Say</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmed Hassan",
                  role: "Facility Manager",
                  company: "Tech Solutions Ltd",
                  content: "3J Solutions transformed our office space completely. Their attention to detail and professional approach is unmatched.",
                  rating: 5
                },
                {
                  name: "Sarah Khan",
                  role: "Operations Director",
                  company: "Healthcare Plus",
                  content: "Outstanding maintenance services! They keep our facilities running smoothly 24/7. Highly recommended.",
                  rating: 5
                },
                {
                  name: "Mohammad Ali",
                  role: "Property Owner",
                  company: "Residential Complex",
                  content: "Professional, reliable, and cost-effective. 3J Solutions has been our trusted partner for 3 years now.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div 
                  key={testimonial.name}
                  className={`glass-effect p-8 rounded-xl fade-up stagger-delay-${index + 1} group hover:shadow-2xl transition-all duration-500`}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-r from-slate-800 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z"/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          
          <div className="container-balanced text-center relative z-10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 fade-up">Stay Updated</h2>
              <p className="text-gray-300 mb-8 fade-up stagger-delay-1">
                Get the latest news about our services, special offers, and industry insights delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto fade-up stagger-delay-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
