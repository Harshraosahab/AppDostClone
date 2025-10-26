// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Code, Globe, Smartphone } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-linear-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white">
      {/* 🌌 Animated glowing blobs background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-purple-500/30 rounded-full blur-[120px] top-[-10%] left-[-10%]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[120px] bottom-[-10%] right-[-10%]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 💫 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-10"
      >
        About{" "}
        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.6)]">
          AppDost
        </span>
      </motion.h2>

      {/* 🧠 Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-3xl mx-auto text-center text-gray-300 text-lg leading-relaxed mb-20"
      >
        At AppDost, we merge creativity with code. Our team crafts powerful,
        elegant digital products — from next-gen web apps to enterprise
        solutions — built to scale and shine in the modern digital era.
      </motion.p>

      {/* 🌐 Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-8">
        {/* CARD TEMPLATE */}
        {[
          {
            icon: <Code className="w-12 h-12 text-blue-400" />,
            title: "Full-Stack Expertise",
            desc: "From frontend to backend, we deliver high-performance software tailored to your business goals.",
            gradient: "from-blue-500/40 to-cyan-500/30",
          },
          {
            icon: <Globe className="w-12 h-12 text-purple-400" />,
            title: "Global Vision",
            desc: "We connect ideas and innovation, crafting solutions that resonate with global audiences.",
            gradient: "from-purple-500/40 to-pink-500/30",
          },
          {
            icon: <Smartphone className="w-12 h-12 text-pink-400" />,
            title: "User-First Design",
            desc: "Our products are designed to feel effortless — ensuring every interaction is smooth and delightful.",
            gradient: "from-pink-500/40 to-violet-500/30",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -10 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative overflow-hidden bg-linear-to-br ${card.gradient} p-0.5 rounded-3xl shadow-[0_0_30px_rgba(147,51,234,0.3)]`}
          >
            <div className="bg-[#0f172a]/80 backdrop-blur-2xl rounded-3xl p-10 h-full flex flex-col items-center text-center transition-all hover:shadow-[0_0_40px_rgba(147,51,234,0.4)]">
              {/* Animated Ring */}
              <motion.div
                className="absolute top-[-30%] right-[-30%] w-48 h-48 border border-white/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Floating glow orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default AboutSection;
