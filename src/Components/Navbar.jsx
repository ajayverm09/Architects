import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "Overview", href: "#overview" },
    { name: "Rooms", href: "#rooms" },
    { name: "Gallery", href: "#gallery" },
    { name: "Floorplan", href: "#floorplan" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white rounded-md shadow-md px-6 py-4 fixed w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://reactheme.com/products/wordpress/residem/wp-content/uploads/2025/05/logo-black.webp"
            alt="Logo"
            className="h-10 w-52 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium text-black">
          {links.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, color: "#B67C42" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <motion.a
            href="#contact"
            className="bg-[#A86F41] text-white text-sm px-5 py-2 rounded-md font-semibold tracking-wider hover:bg-[#945f38]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            SCHEDULE A VISIT
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-black focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="md:hidden flex flex-col space-y-4 mt-4 text-lg font-medium text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-[#B67C42] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.1 }}
            >
              <a
                href="#contact"
                className="bg-[#A86F41] text-white text-sm px-5 py-2 rounded-md font-semibold tracking-wider hover:bg-[#945f38] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                SCHEDULE A VISIT
              </a>
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
