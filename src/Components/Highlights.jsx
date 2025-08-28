import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  {
    title: 'Airport',
    distance: '16 miles',
    image: 'https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/airpot.webp', 
  },
  {
    title: 'University',
    distance: '10 miles',
    image: 'https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/university.webp',
  },
  {
    title: 'Shopping Mall',
    distance: '12 miles',
    image: 'https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/shopingmall.webp',
  },
];

const HighlightsNearby = () => {
  return (
    <section className="py-16 bg-white text-center">
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="bg-teal-100 text-teal-800 text-sm font-semibold px-4 py-1 rounded-full">
          Near By Places
        </span>
      </motion.div>

      <motion.h2
        className="text-4xl font-bold text-gray-900 mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Highlights Nearby
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 md:px-0">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md w-full md:w-80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#103C3B] to-transparent p-4 text-white flex justify-between items-center">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.distance}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsNearby;
