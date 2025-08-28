import React from "react";
import { motion } from "framer-motion";
import Pageup from "../assets/pageup.png";
import {
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C3C38] text-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        {/* Logo + Address */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img
              src="https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/logo.webp"
              alt="Logo"
              className="h-10 w-52 object-contain"
            />
          </div>
          <p className="text-gray-400">
            712 Jefferson Ave, Brooklyn
            <br />
            New York 11221
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {/* Call Us */}
          <motion.div className="flex flex-col items-center">
            <FaPhoneAlt className="text-[#B67C42] text-4xl mb-2" />
            <h3 className="text-lg font-medium">Call Us</h3>
            <p className="text-gray-400">+1 123 456 789</p>
          </motion.div>

          {/* Opening Hours */}
          <motion.div className="flex flex-col items-center">
            <FaClock className="text-[#B67C42] text-5xl mb-2" />
            <h3 className="text-lg font-medium">Opening Hours</h3>
            <p className="text-gray-400">Mon to Sat 08:00 - 20:00</p>
          </motion.div>

          {/* Email Us */}
          <motion.div className="flex flex-col items-center">
            <FaEnvelope className="text-[#B67C42] text-4xl mb-2" />
            <h3 className="text-lg font-medium">Email Us</h3>
            <p className="text-gray-400">contact@residem.com</p>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 md:mb-0">Copyright © 2025 Residem by Reacthemes</p>

          {/* Social Links */}
          <div className="flex space-x-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon />
                </motion.a>
              )
            )}
          </div>
        </motion.div>

        {/* Back to top button */}
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button
            className="bg-[#B67C42] text-white p-3 h-12 w-12 rounded-full shadow-lg hover:bg-[#a36e39] flex items-center justify-center transition-transform hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={Pageup} alt="Scroll up" className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
