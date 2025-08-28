import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/living-room.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-2.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-3.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-4.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-5.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-6.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-7.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-8.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-9.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-10.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-11.webp",
  "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/gallery-12.webp",
];

const categories = {
  All: [...Array(images.length).keys()],
  Exterior: [0, 1, 2, 3, 5, 7, 11],
  Interior: [3, 4, 5, 9],
  Facilities: [6, 10],
};

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = categories[activeCategory].map((i) => images[i]);

  return (
    <>
      <section className="bg-[#f5f1ea] p-6 md:p-16 min-h-screen">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <motion.span
            className="inline-block bg-gray-100 text-xs text-gray-600 px-3 py-1 rounded mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover Gallery
          </motion.span>
          <motion.h2
            className="text-3xl font-semibold mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Exterior & Interior
          </motion.h2>
          <motion.div
            className="flex justify-center flex-wrap gap-3 text-sm text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {["All", "Exterior", "Interior", "Facilities"].map((category) => (
              <button
                key={category}
                className={`px-4 py-1 rounded font-semibold transition-colors duration-200 ${
                  activeCategory === category
                    ? "bg-[#A46A3B] text-white"
                    : "hover:underline"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category === "All" ? "View All" : category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredImages.map((src, i) => (
            <motion.div
              key={i}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImg(src)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <img
                src={src}
                alt={`Gallery Image ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-teal-500/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <button className="text-white px-4 py-2 rounded font-semibold">
                  View
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="bg-[#b57c53] absolute top-2 right-2 text-white rounded-full p-2 hover:bg-[#8b542e]"
                onClick={() => setSelectedImg(null)}
                aria-label="Close Modal"
              >
                ✕
              </button>
              <img
                src={selectedImg}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
