"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function TypingEffect({ text, speed = 100 }: { text: string; speed?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed]);

  const displayedText = text.slice(0, currentIndex);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.p
          className="mt-4 text-lg text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {displayedText}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [animationDone, setAnimationDone] = useState(false);
  const [logoAnimationStarted, setLogoAnimationStarted] = useState(false);

  useEffect(() => {
    // Start logo animation immediately
    setLogoAnimationStarted(true);

    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 2500); // animation duration

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (animationDone) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 500); // fade out delay
      return () => clearTimeout(hideTimer);
    }
  }, [animationDone]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500"
      style={{ backdropFilter: "blur(5px)" }}
    
      exit={{ opacity: 0 }}
    >
      <div className="flex flex-col items-center">
        <motion.img
          src="/logo1.png"
          alt="3J Solutions Logo"
          className="h-48 w-auto mb-6"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            logoAnimationStarted
              ? { scale: [1, 1.1, 0.9, 1], opacity: 1 }
              : { scale: 0.5, opacity: 0 }
          }
          transition={{ duration: 1.5, ease: "easeOut", repeat: 0 }}
        />
        <motion.div
          className="w-full h-2 bg-gray-300 rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
        >
          <motion.div
            className="h-2 bg-black rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
      <TypingEffect text="Welcome to 3J Solutions" speed={100} />
    </motion.div>
  );
}
