// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle, Users, Lightbulb, Rocket } from "lucide-react";

const reasons = [
  {
    icon: <CheckCircle className="text-blue-400 w-12 h-12" />,
    title: "Client-Centric Approach",
    desc: "Every project starts with your vision. We design around your goals for real impact.",
  },
  {
    icon: <Lightbulb className="text-yellow-400 w-12 h-12" />,
    title: "Innovative Solutions",
    desc: "We merge creativity with technology to create solutions that stand out and perform.",
  },
  {
    icon: <Users className="text-pink-400 w-12 h-12" />,
    title: "Expert Team",
    desc: "Our specialists bring experience, passion, and precision to every project we build.",
  },
  {
    icon: <Rocket className="text-purple-400 w-12 h-12" />,
    title: "Reliable & Scalable",
    desc: "We craft robust, future-proof systems that scale with your business growth.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white">
      {/* 🌌 Background Effects */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(59,130,246,0.3), transparent 60%)",
            "radial-gradient(circle at 80% 40%, rgba(168,85,247,0.3), transparent 60%)",
            "radial-gradient(circle at 50% 90%, rgba(236,72,153,0.3), transparent 60%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-50"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* ✨ Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-pink-400"
        >
          Why Choose <span className="text-white">AppDost</span>?
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          We combine innovation, craftsmanship, and reliability to deliver
          technology solutions that drive growth and inspire trust.
        </p>

        {/* ⚡ Animated Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-500"
            >
              {/* 🌟 Icon Animation */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="flex justify-center mb-5"
              >
                {r.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {r.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {r.desc}
              </p>

              {/* 💫 Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 blur-2xl transition duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating background particles */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 w-40 h-40 bg-linear-to-tr from-pink-500/10 to-blue-500/10 blur-3xl rounded-full"
      />
    </section>
  );
};

export default WhyChooseSection;
