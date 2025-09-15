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
      `}</style>

      {/* Hero */}
      <section className="bg-primary text-gray-200 text-center py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-dark/80"></div>
        <div className="container-balanced relative z-10">
          <h1 className="hero-title text-4xl md:text-6xl font-extrabold mb-4">
            3J Solutions Pakistan
          </h1>
          <p className="hero-subtitle text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white">
            Integrated Construction, Maintenance & Facility Services — delivering
            cost-effective, reliable, and sustainable solutions nationwide.
          </p>
          <a href="/contact" className="hero-button btn btn-ghost pulse-on-hover">
            Get a Free Quote
          </a>
        </div>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-light/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary-light/20 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary-light/20 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
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
              { title: "Construction", desc: "Ceiling, Steel, Carpentry & Renovation", href: "/services/renovation" },
              { title: "Maintenance", desc: "AC/HVAC, Electrical, IT, Security", href: "/services/maintenance" },
              { title: "Facility Management", desc: "Janitorial, Gardening, Fumigation", href: "/services/facility" },
              { title: "IT Services", desc: "Networking, Servers, Security Systems", href: "/services/It" },
              { title: "Allied Services", desc: "Web Development, SEO, General Supplies", href: "/services/allied" },
              { title: "Solar Supplies", desc: "Solar Panels, Batteries, Battery storage solutions", href: "/services/solar-supplies" },
              { title: "HVAC", desc: "Heating, Ventilation, AirConditioning", href: "/services/hvac" },
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
