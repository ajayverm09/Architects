import { useState } from "react";
import { motion } from "framer-motion";
import floorplan1 from "../assets/floorplan-1.webp";
import floorplan2 from "../assets/floorplan-2.webp";
import { FiMaximize2 } from "react-icons/fi";
import { FaBed, FaBath, FaCar } from "react-icons/fa";

const images = [floorplan1, floorplan2];

export default function Floorplan() {
  const [index, setIndex] = useState(0);

  return (
    <div className="bg-[#103C3B] text-white px-6 py-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[40%] space-y-6"
        >
          <button className="bg-teal-700 px-3 py-1 rounded-md text-sm hover:bg-teal-600 transition">
            Discover
          </button>
          <h1 className="text-4xl font-bold">Home Floorplans</h1>
          <p className="text-gray-300">
            Dolor ad consectetur dolore incididunt pariatur aliqua ut laborum aliquip
            eiusmod officia tempor ex commodo amet voluptate.
          </p>

          <div className="space-y-3">
            {[
              ["Living Room", "22 m²"],
              ["Dining Room", "15 m²"],
              ["Kitchen", "15 m²"],
              ["Master Bedroom", "16 m²"],
              ["Kids Bedroom", "12 m²"],
              ["Bath Room", "6 m²"],
              ["Guest Toilet", "2 m²"],
              ["Balcony", "5 m²"],
              ["Storage Room", "3 m²"],
            ].map(([name, size], i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex justify-between bg-[#1E4645] p-2 rounded hover:bg-[#2d5c5a] transition"
              >
                <span>{name}</span>
                <span>{size}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Image Slider Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[60%] flex flex-col items-center"
        >
          <motion.img
            src={images[index]}
            alt={`Floorplan ${index + 1}`}
            className="rounded-lg w-full object-cover"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Pagination Dots */}
          <div className="flex mt-4 gap-2">
            {images.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  i === index ? "bg-orange-400" : "bg-teal-700"
                }`}
                whileHover={{ scale: 1.3 }}
                transition={{ duration: 0.2 }}
              ></motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 text-center">
        {[
          {
            label: "Size",
            icon: <FiMaximize2 size={20} />,
            value: "1665 sft",
          },
          {
            label: "Beds",
            icon: <FaBed size={20} />,
            value: "5",
          },
          {
            label: "Bath",
            icon: <FaBath size={20} />,
            value: "5",
          },
          {
            label: "Parking Slots",
            icon: <FaCar size={20} />,
            value: "5",
          },
        ].map(({ label, icon, value }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-[#1E4645] p-4 rounded-2xl flex flex-col justify-center items-center space-y-2 hover:bg-[#2d5c5a] transition"
          >
            <div className="text-white text-lg font-semibold">{label}</div>
            <div className="flex items-center justify-center gap-2 text-orange-300">
              {icon}
              <span className="text-white font-medium">{value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
