"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Construction", href: "/services/construction" },
    { name: "Building Maintenance & Renovation", href: "/services/maintenance" },
    { name: "Security & IT", href: "/services/It" },
    { name: "Allied & General Supplies", href: "/services/allied" },
    { name: "Solar Supplies", href: "/services/solar-supplies" },
    { name: "HVAC", href: "/services/hvac" },
  ];

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container-balanced py-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/logo1.png"
            alt="3J Solutions Logo"
            className="h-20 w-32 mr-3 transition-transform duration-300 hover:scale-105 hover:rotate-2"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setTimeout(() => setServicesOpen(false), 1000)} // Adjust the delay as needed
          >
            <Link href="/services" className="hover:underline">Services</Link>
            {servicesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
        </nav>
        <button className="md:hidden border rounded-xl px-3 py-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          Menu
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container-balanced py-3 grid gap-3 text-sm">
            <div>
              <Link href="/services" className="hover:underline block py-2">Services</Link>
              <div className="pl-4 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block hover:underline text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/projects" className="hover:underline">Projects</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/contact" className="btn btn-primary w-full text-center">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
}
