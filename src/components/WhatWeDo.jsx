// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Palette,
  Laptop,
  Globe,
  Smartphone,
  Wrench,
  Rocket,
} from "lucide-react";

const services = [
  {
    icon: <Palette className="w-12 h-12 text-pink-500" />,
    title: "UI/UX Design Excellence",
    desc: "Crafting intuitive, user-centric designs that guarantee exceptional user satisfaction and engagement.",
  },
  {
    icon: <Laptop className="w-12 h-12 text-blue-500" />,
    title: "Custom Software Development",
    desc: "Building robust, scalable enterprise solutions tailored to your unique business requirements.",
  },
  {
    icon: <Globe className="w-12 h-12 text-cyan-500" />,
    title: "Web Application Development",
    desc: "Creating responsive, high-performance web applications using modern frameworks and technologies.",
  },
  {
    icon: <Smartphone className="w-12 h-12 text-violet-500" />,
    title: "Mobile App Development",
    desc: "Developing native and cross-platform mobile applications for iOS and Android with cutting-edge UX.",
  },
  {
    icon: <Wrench className="w-12 h-12 text-indigo-400" />,
    title: "Full-Stack Development",
    desc: "End-to-end expertise covering frontend elegance, backend power, and cloud infrastructure.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-purple-500" />,
    title: "Digital Transformation Consulting",
    desc: "Helping businesses modernize and scale with strategic digital transformation and cloud migration.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white overflow-hidden">
      {/* Animated background light blobs */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 40%, rgba(59,130,246,0.15), transparent 70%)",
            "radial-gradient(circle at 80% 60%, rgba(236,72,153,0.15), transparent 70%)",
            "radial-gradient(circle at 50% 80%, rgba(147,51,234,0.15), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-pink-400 via-blue-400 to-purple-400"
        >
          What We Do
        </motion.h2>
        <p className="text-gray-300 mb-16 text-lg">
          Our core expertise lies in crafting exceptional digital experiences.
        </p>

        {/* Grid of services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -8,
                boxShadow: "0 0 30px rgba(168,85,247,0.4)",
              }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Glow pulse */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl -z-10"
              />

              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
