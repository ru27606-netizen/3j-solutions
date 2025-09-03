"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container-balanced py-10">
        {/* Navigation Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">3J Solutions</h3>
            <p className="text-sm mb-4">
              Your trusted partner for construction, maintenance, and facility management services in Pakistan.
            </p>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/construction" className="footer-link hover:text-white transition-colors">Construction</Link></li>
              <li><Link href="/services/maintenance" className="footer-link hover:text-white transition-colors">Building Maintenance & Renovation</Link></li>
              <li><Link href="/services/It" className="footer-link hover:text-white transition-colors">Security & IT</Link></li>
              <li><Link href="/services/allied" className="footer-link hover:text-white transition-colors">Allied Supplies</Link></li>
              <li><Link href="/services/solar-supplies" className="footer-link hover:text-white transition-colors">Solar Supplies</Link></li>
             <li><Link href="/services/hvac" className="footer-link hover:text-white transition-colors">HVAC</Link></li>
           
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="footer-link hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="footer-link hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="footer-link hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="footer-link hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Lahore Office:</strong><br/>Office #10, 2nd Floor, Business Arcade</p>
              <p><strong>Karachi Office:</strong><br/>Office No. 710, 7th Floor, Landmark Plaza</p>
              <p>
                <a href="mailto:info@3jsolutions.com.pk" className="footer-link hover:text-white transition-colors">
                  info@3jsolutions.com.pk
                </a>
              </p>
              <p>
                <a href="mailto:support@3jsolutions.com.pk" className="footer-link hover:text-white transition-colors">
                  support@3jsolutions.com.pk
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="border-t border-gray-700 pt-8 pb-6 text-center">
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex justify-center space-x-6 text-2xl mb-6">
            <a href="https://www.facebook.com/3JSolutionsOfficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1-3 3-3h2v3h-2c-.5 0-1 .5-1 1v1h3l-1 3h-2v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="https://x.com/3J_Solutions" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3 1 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="https://linkedin.com/company/3jsolutions" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm1 4h3v12H5zm5 0h3v2h.1a3.3 3.3 0 0 1 3-1.6c3 0 3.5 2 3.5 4.6V19h-3v-5c0-1.2 0-2.8-1.7-2.8S10 14 10 15v6h-3z"/></svg>
            </a>
            <a href="https://instagram.com/3jsolutions" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-5 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/></svg>
            </a>
            <a href="https://youtube.com/3jsolutions" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox="0 0 24 24"><path d="M19.615 3.184c-1.403-.1-7.015-.1-7.015-.1s-5.612 0-7.015.1c-1.5.11-2.615 1.22-2.615 2.72v6.2c0 1.5 1.115 2.61 2.615 2.72 1.403.1 7.015.1 7.015.1s5.612 0 7.015-.1c1.5-.11 2.615-1.22 2.615-2.72v-6.2c0-1.5-1.115-2.61-2.615-2.72zm-10.615 7.816v-5l5 2.5-5 2.5z"/></svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm mb-3">© 2025 3J Solutions Pakistan. All rights reserved.</p>
          <div className="text-sm">
            <a href="#" className="footer-link hover:text-white transition-colors">Privacy Policy</a> ·{" "}
            <a href="#" className="footer-link hover:text-white transition-colors">Terms of Service</a> ·{" "}
            </div>
        </div>
      </div>
    </footer>
  );
}
