import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Video = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div className="relative">
      {/* Image */}
      <motion.img
        src="https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/video-background.webp"
        alt="Property"
        className="w-full h-auto object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      />

      {/* Play Button */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.button
          onClick={toggleModal}
          className="p-4 bg-white rounded-full shadow-lg hover:bg-[#B67C42] focus:outline-none"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-8 h-8 text-black hover:text-white"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
          >
            <motion.div
              className="relative w-full max-w-3xl rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold z-50"
                onClick={toggleModal}
              >
                ✕
              </button>
              <div className="w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/0fM4Z_94vzk?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Video;
