import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/slider-1.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/slider-2.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/slider-3.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/slider-4.webp",
];

export default function PropertyHero() {
  const [current, setCurrent] = useState(0);

  const headline = "Elegant and Comfort in a Beautiful Modern Space";

  // Image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Split headline into words for animation
  const words = headline.split(" ");

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 scroll-mt-20"
      style={{ backgroundImage: `url(${images[current]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#103C3B]/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white">
        {/* Headline with word-by-word fade-up animation */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 flex flex-wrap gap-2">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Paragraph */}
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 max-w-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          123 Modern Avenue, Manhattan, New York, NY 10001
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <button className="bg-black/10 backdrop-blur border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg shadow-lg hover:bg-[#103C3B] transition duration-300">
            Schedule a Visit
          </button>
          <button className="border border-white text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-[#103C3B] transition duration-300">
            Explore Property
          </button>
        </motion.div>

        {/* Features */}
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-20 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm md:text-base">
          {["Spacious Rooms", "Private Garden", "Walk-in Closets", "Swimming Pool"].map(
            (feature, i) => (
              <motion.span
                key={i}
                className="text-white px-2 sm:px-3 py-1 rounded-full bg-black/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + i * 0.2, duration: 0.5 }}
              >
                {feature}
              </motion.span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
