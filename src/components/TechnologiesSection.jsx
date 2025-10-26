// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiKotlin, SiTypescript } from "react-icons/si";

const tech = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl drop-shadow-glow" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-5xl drop-shadow-glow" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300 text-5xl drop-shadow-glow" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-emerald-500 text-5xl drop-shadow-glow" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400 text-5xl drop-shadow-glow" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400 text-5xl drop-shadow-glow" /> },
  { name: "Kotlin", icon: <SiKotlin className="text-pink-400 text-5xl drop-shadow-glow" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-indigo-400 text-5xl drop-shadow-glow" /> },
];

export default function TechnologiesSection() {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white overflow-hidden">
      {/* Animated gradient background light streaks */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.1), transparent 70%)",
            "radial-gradient(circle at 80% 70%, rgba(236,72,153,0.1), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-80"
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400"
        >
          Technologies We Master
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-indigo-200 mb-16 max-w-2xl mx-auto"
        >
          Harnessing modern tools to craft intelligent, scalable, and high-performance solutions.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {tech.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.1, rotateY: 5 }}
              className="relative group w-36 h-36 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col items-center justify-center shadow-md hover:shadow-blue-500/30 transition-all"
            >
              {/* glowing outline on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500"
              />
              {t.icon}
              <p className="mt-4 font-semibold text-sm text-gray-200">{t.name}</p>
            </motion.div>
          ))}
        </div>

        {/* call-to-action below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all text-white font-semibold"
          >
            Let’s Build Something Epic 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}
