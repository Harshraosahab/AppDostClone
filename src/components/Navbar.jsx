
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home","About", "Services", "Portfolio", "Careers", "Blog", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 backdrop-blur-xl bg-linear-to-r from-[#0f172a]/80 via-[#1e1b4b]/70 to-[#3b0764]/70 border-b border-white/10 text-white"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* 🌐 Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 cursor-pointer select-none"
        >
          AppDost
        </motion.h1>

        {/* 🖥 Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300 font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              <span className="transition-colors group-hover:text-white">{item}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-200 hover:text-white transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-linear-to-b from-[#1e1b4b]/95 to-[#3b0764]/95 backdrop-blur-2xl border-t border-white/10 px-8 py-6"
          >
            <ul className="flex flex-col gap-6 text-lg font-medium text-gray-300">
              {navItems.map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 8, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✨ Floating glow bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-400/40 to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.nav>
  );
};

export default Navbar;
