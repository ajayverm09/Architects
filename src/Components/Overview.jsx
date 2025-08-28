import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Home System",
    icon: "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/home-1.png",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
  },
  {
    title: "Solar Energy Panels",
    icon: "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/solar.png",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
  },
  {
    title: "Central Air Conditioning",
    icon: "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/aircondition.png",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
  },
  {
    title: "Home Security System",
    icon: "https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/security.png",
    description: "Velit irure occaecat do consectetur dolore officia magna ut anim ut.",
  },
];

const HomeOverview = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-16 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-gray-100 text-sm text-gray-600 px-3 py-1 rounded mb-4">
            Home Overview
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Luxury living where <br />
            comfort meets timeless <br />
            style, effortlessly
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            Non anim in pariatur in ex exceptetur commodo do officia amet incididunt ullamco nostrud
            aliquip minim magna esse dolore..
          </p>
          <motion.button
            className="bg-[#A46A3B] hover:bg-[#8b542e] text-white text-sm font-semibold px-6 py-3 rounded uppercase tracking-wider"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Schedule a Visit
          </motion.button>
        </motion.div>

        {/* Right Side Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-16 w-16 object-contain text-[#A46A3B]"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeOverview;
