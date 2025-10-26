// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="relative bg-linear-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Animated background gradient flow */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(99,102,241,0.15), transparent 70%)",
            "radial-gradient(circle at 80% 60%, rgba(236,72,153,0.15), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-60"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Left Column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo.png"
              alt="AppDost Logo"
              className="w-10 h-10 rounded-lg"
            />
            <h3 className="text-xl font-bold text-white">
              App<span className="text-blue-400">Dost</span>
              <span className="block text-xs text-blue-300 font-normal">
                COMPLETE IT SOLUTION
              </span>
            </h3>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Delivering innovative IT solutions since 2025. We transform ideas
            into powerful digital experiences with cutting-edge technology and
            expert craftsmanship.
          </p>

          <div className="flex gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">10+</p>
              <p className="text-xs text-gray-400">WEB PROJECTS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">4+</p>
              <p className="text-xs text-gray-400">ANDROID APPS</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-400">1</p>
              <p className="text-xs text-gray-400">CRM SYSTEM</p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            {[
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-blue-400 pl-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Services", "Careers", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-blue-400 transition inline-flex items-center gap-2"
                >
                  → {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-purple-400 pl-3">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Android App Development",
              "Web Development",
              "UI/UX Design",
              "CRM Software",
              "Cloud Solutions",
              "Cybersecurity",
            ].map((service) => (
              <li key={service}>
                <a
                  href="#"
                  className="hover:text-purple-400 transition inline-flex items-center gap-2"
                >
                  → {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4 border-l-4 border-pink-400 pl-3">
            Contact Info
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-pink-400" />
              contact@appdost.in
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              +91 76350 75422 / +91 11 6929 0750
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              Mon - Sat: 9:00 AM – 6:00 PM IST
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>
                <strong>3 Offices:</strong> Banka (HQ), Motihari, Patna
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="relative z-10 mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        <p>
          © 2025{" "}
          <span className="text-blue-400 font-semibold">AppDost</span> - Complete IT Solution. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-3 text-xs text-gray-500">
          <a href="#" className="hover:text-blue-400 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-400 transition">
            Sitemap
          </a>
          <p>
            Built with <span className="text-pink-500">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
