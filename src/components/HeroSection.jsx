// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Rocket, Laptop, Smartphone, Zap, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  // Parallax motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  return (
    <section
      className="relative flex flex-col justify-center items-center overflow-hidden min-h-screen text-center bg-linear-to-b from-[#0b0e25] via-[#14133c] to-[#1d0f4a] text-white"
      onMouseMove={(e) => {
        const { innerWidth, innerHeight } = window;
        x.set(e.clientX - innerWidth / 2);
        y.set(e.clientY - innerHeight / 2);
      }}
    >
      {/* 🌈 Animated Background Glow */}
      <motion.div
        className="absolute -z-10 w-[1000px] h-[1000px] bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 opacity-25 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✨ Soft Light Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent)] pointer-events-none" />

      {/* 🚀 Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-6 py-2 shadow-md mt-10 md:mt-20"
      >
        <Rocket className="text-pink-400 w-5 h-5" />
        <span className="text-sm font-medium text-gray-200">
          Digital Transformation Experts Since 2025
        </span>
      </motion.div>

      {/* 💎 Hero Title and Subtitle */}
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative max-w-4xl mx-auto px-6 mt-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Empower Your{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_25px_rgba(147,51,234,0.6)]">
            Vision
          </span>{" "}
          With <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400 drop-shadow-[0_0_35px_rgba(236,72,153,0.7)]">
            Digital Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          We craft immersive web and mobile experiences that inspire, innovate, 
          and transform brands worldwide. The future of tech starts here.
        </motion.p>

        {/* 🎯 Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-4 mb-24"
        >
          <button className="bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] transition-all hover:scale-105">
            Start Your Project →
          </button>
          <button className="border border-purple-400/60 text-purple-300 px-8 py-3 rounded-full font-semibold hover:bg-purple-500/20 transition-all hover:scale-105">
            Get Free Consultation
          </button>
        </motion.div>
      </motion.div>

      {/* 🪩 Floating Info Cards */}
      <motion.div
        className="absolute right-10 top-1/2 hidden md:flex flex-col gap-6"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {[ 
          { icon: <Laptop className="text-blue-400 w-6 h-6" />, title: "Web Development", stat: "+15 Projects", color: "text-blue-300" },
          { icon: <Smartphone className="text-pink-400 w-6 h-6" />, title: "Mobile Apps", stat: "+8 Apps", color: "text-pink-300" },
          { icon: <Zap className="text-purple-400 w-6 h-6" />, title: "On-Time Delivery", stat: "Every Time", color: "text-purple-300" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <div>
                <p className="text-xs text-gray-300">{item.title}</p>
                <p className={`${item.color} font-semibold text-sm`}>{item.stat}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ⚙️ Bottom Indicators */}
      <div className="absolute bottom-10 flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-medium opacity-90">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-blue-400" /> Secure & Scalable
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-purple-400" /> 24/7 Global Support
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
