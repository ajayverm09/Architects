import React from "react";
import { motion } from "framer-motion";

const ScheduleVisit = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-6 md:px-0">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <button className="bg-gray-100 text-black text-sm px-3 py-1 rounded mb-2">
          Contact Us
        </button>
        <h2 className="text-4xl font-semibold">Schedule a Visit</h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Agent Info */}
        <motion.div
          className="text-center flex flex-col items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/contat.webp"
            alt="Emily Rodriguez"
            className="rounded-lg mb-4 w-64 h-auto object-cover"
          />
          <h3 className="text-lg font-semibold">Emily Rodriguez</h3>
          <p className="text-[#B67C42]">(555) 234–5678</p>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          className="space-y-4 w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-50 border border-gray-200 p-3 rounded outline-none focus:ring-2 focus:ring-[#B67C42]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-50 border border-gray-200 p-3 rounded outline-none focus:ring-2 focus:ring-[#B67C42]"
            />
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              className="bg-gray-50 border border-gray-200 p-3 rounded outline-none focus:ring-2 focus:ring-[#B67C42]"
            />
            <input
              type="time"
              className="bg-gray-50 border border-gray-200 p-3 rounded outline-none focus:ring-2 focus:ring-[#B67C42]"
            />
          </div>

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Submit Request"
            className="bg-gray-50 border border-gray-200 p-3 rounded w-full outline-none focus:ring-2 focus:ring-[#B67C42]"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="bg-[#B67C42] text-white px-6 py-2 rounded font-semibold tracking-wider hover:bg-[#a36e39]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            SEND MESSAGE
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ScheduleVisit;
