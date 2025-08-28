import React, { useState } from "react";
import { motion } from "framer-motion";

const DiscoverRoom = () => {
  const [activeTab, setActiveTab] = useState("Living Room");

  const rooms = {
    "Living Room": {
      image:
        "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/living-room.webp",
      description:
        "A cozy social hub with plush seating and entertainment. Ideal for relaxing, gatherings, and family time.",
      size: "25 m²",
    },
    "Dining Room": {
      image:
        "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/dining-room.webp",
      description:
        "A spacious dining area perfect for family meals and dinner parties.",
      size: "20 m²",
    },
    Kitchen: {
      image:
        "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/kitchen.webp",
      description:
        "Modern kitchen equipped with high-end appliances for cooking and baking.",
      size: "15 m²",
    },
    "Master Bedroom": {
      image:
        "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/master.webp",
      description:
        "A luxurious master bedroom with a king-sized bed and ample storage.",
      size: "30 m²",
    },
    Bathroom: {
      image:
        "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/bathroom.webp",
      description:
        "A sleek and modern bathroom with a large shower and stylish fittings.",
      size: "20 m²",
    },
  };

  return (
    <div className="bg-[#103C3B] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <button className="bg-[#B07E50] text-white px-4 py-2 rounded-full text-sm tracking-wide shadow-md hover:bg-[#94663e] transition">
            Nearby Places
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Discover Home
          </h1>
          <p className="text-gray-300 mt-2 max-w-xl mx-auto text-lg">
            Explore every corner of your dream house with detailed descriptions
            and visuals.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-around gap-3 bg-[#1C4645] rounded-full p-1 mb-10 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {Object.keys(rooms).map((room) => (
            <button
              key={room}
              onClick={() => setActiveTab(room)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === room
                  ? "bg-[#B07E50] text-white shadow-md scale-105"
                  : "text-gray-300 hover:text-white hover:bg-[#2d5c5a]"
              }`}
            >
              {room}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left Content (Text Box) */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 bg-[#1C4645] p-6 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <h2 className="text-3xl font-bold text-white mb-4">{activeTab}</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {rooms[activeTab].description}
            </p>
          </motion.div>

          {/* Right Image with Size Overlay */}
          <motion.div
            key={rooms[activeTab].image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-8 relative w-full"
          >
            <img
              src={rooms[activeTab].image}
              alt={activeTab}
              className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-2xl shadow-xl"
            />
            {/* Size Label on Image */}
            <motion.span
              className="absolute bottom-4 left-4 bg-[#B07E50] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Size: {rooms[activeTab].size}
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverRoom;
