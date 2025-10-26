// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    { title: "WEB PROJECTS", value: "10+" },
    { title: "ANDROID APPS", value: "4+" },
    { title: "CRM PROJECT", value: "1" },
    { title: "FOUNDED YEAR", value: "2025" },
  ];

  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white overflow-hidden">
      {/* 🌌 Moving gradient light blobs */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 10% 30%, rgba(59,130,246,0.25), transparent 70%)",
            "radial-gradient(circle at 70% 60%, rgba(236,72,153,0.25), transparent 70%)",
            "radial-gradient(circle at 50% 90%, rgba(168,85,247,0.25), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-60"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-12 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-pink-400"
        >
          Our Growth in Numbers
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.1, y: -8 }}
              className="relative bg-white/10 backdrop-blur-xl rounded-3xl py-10 px-6 shadow-lg border border-white/10 hover:shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all duration-500"
            >
              {/* Glowing pulse behind number */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10"
              ></motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="text-5xl font-bold text-white mb-2 tracking-tight"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-300 tracking-widest text-sm font-medium">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating glow orb */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-1/2 w-64 h-64 bg-linear-to-tr from-blue-500/10 to-pink-500/10 blur-3xl rounded-full"
      />
    </section>
  );
};

export default StatsSection;
