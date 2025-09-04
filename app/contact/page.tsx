"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      category: formData.get("category"),
      message: formData.get("message"),
    };

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      let result;
      try {
        result = await res.json();
      } catch (jsonError) {
        setStatus("❌ Unexpected response from server.");
        return;
      }
      console.log("Status:", res.status);
      console.log("Result:", result);

      if (res.ok && result.success === true) {
        setStatus("✅ Message sent successfully!");
        form.reset(); // Use ref safely
      } else if (result.error) {
        setStatus(`❌ ${result.error}`);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setStatus("❌ Error occurred. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="font-sans text-gray-900">
      <motion.section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container-balanced">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="subtle max-w-3xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Send us your requirements and we'll respond with a tailored proposal.
          </motion.p>
        </div>
      </motion.section>

      <section id="contact" className="bg-white py-16">
        <div className="container-balanced text-center">
          <motion.h2 
            className="section-title mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto mb-8 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have a project in mind? Let's discuss how we can help with the best
            construction, maintenance, and facility management services in Pakistan.
          </motion.p>
          <motion.form
            ref={formRef}
            className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left bg-white p-8 rounded-3xl shadow-lg"
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <label className="sr-only" htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="sr-only" htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="sr-only" htmlFor="phone">Your Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <label className="sr-only" htmlFor="category">Service Category</label>
              <select
                id="category"
                name="category"
                defaultValue=""
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                required
              >
                <option value="" disabled>Select your category</option>
                <option value="Construction Services">Construction Services</option>   
                <option value="Renovation Services">Renovation Services</option>
                <option value="IT Services">IT Services</option>
                <option value="Allied Services">Allied Services</option>
                <option value="Solar Supplies">Solar Supplies</option>
                <option value="HVAC Services">HVAC Services</option>
                 </select>
            </motion.div>
            <motion.div className="md:col-span-2" variants={itemVariants}>
              <label className="sr-only" htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300"
                required
              />
            </motion.div>
            <motion.div className="md:col-span-2 flex justify-center" variants={itemVariants}>
              <motion.button
                type="submit"
                className="btn btn-primary w-full max-w-xs"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.div>
            {status && (
              <motion.p
                className={`mt-2 md:col-span-2 ${status.startsWith("✅") ? "text-green-600" : "text-red-600"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      <section className="py-16">
        <div className="container-balanced grid md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Head Office (Lahore)</h3>
              <p className="subtle">Office #10, 2nd Floor, Business Arcade, Near Defence Chowk, Walton Road, Lahore.</p>
              <p className="subtle mt-2">
                <a href="tel:+924236626244" className="hover:underline">+92 42 36626244-45</a> · 
                <a href="tel:+923051130000" className="hover:underline">+92 305 1130000</a> · 
                <a href="tel:+923067474135" className="hover:underline">+92 306 7474135 </a>
                <a href="tel:+923349408429" className="hover:underline">+92 334 9408429</a>
              </p>
              <p className="subtle mt-2">
                <a href="mailto:info@3jsolutions.com.pk" className="hover:underline">info@3jsolutions.com.pk</a>
              </p>
              <p className="subtle mt-2">
                <a href="mailto:support@3jsolutions.com.pk" className="hover:underline">support@3jsolutions.com.pk</a>
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold mb-2">Karachi Office</h3>
              <p className="subtle">Office No. 710, 7th Floor, Landmark Plaza, Muhammad Bin Qasim Road (Off I.I. Chundrigar Road), Karachi.</p>
              <p className="subtle mt-2">
                <a href="tel:+922132219999" className="hover:underline">+92 21 32219999</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container-balanced text-center">
          <h2 className="section-title mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6 text-2xl">
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
      </section>
    </div>
  );
}
