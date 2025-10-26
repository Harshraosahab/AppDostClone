// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Rocket, PenTool, Code2, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <PenTool className="w-6 h-6 text-pink-400" />,
    title: "Discovery & Planning",
    description:
      "We dive deep into your goals, research your industry, and create a strategic roadmap to set your project up for success.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    title: "Design & Prototype",
    description:
      "Our design experts craft intuitive UX and visually stunning UI mockups that capture your brand’s essence.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: "Development & Testing",
    description:
      "We build scalable, high-performance solutions with clean code and rigorous QA testing across all devices.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-400" />,
    title: "Deployment & Support",
    description:
      "Launch smoothly with our deployment expertise — followed by 24/7 monitoring, updates, and dedicated support.",
  },
];

const DevelopmentProcessSection = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] overflow-hidden">
      {/* floating glow background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 25% 40%, rgba(236,72,153,0.15), transparent 70%)",
            "radial-gradient(circle at 80% 60%, rgba(59,130,246,0.15), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-70"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Our Development Process
        </motion.h2>
        <p className="text-indigo-200 max-w-2xl mx-auto mb-16">
          A transparent, agile, and client-focused workflow that transforms your
          vision into a world-class digital product.
        </p>

        <div className="relative grid md:grid-cols-2 gap-10">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl text-left hover:bg-white/20 transition-all"
            >
              {/* Floating icon badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 left-6 w-12 h-12 bg-linear-to-br from-pink-500/30 to-blue-500/30 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 shadow-lg"
              >
                {item.icon}
              </motion.div>

              <div className="pl-2 mt-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* glowing underline animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: i * 0.2 }}
                className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* subtle blur glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-purple-900/30 to-transparent blur-3xl" />
    </section>
  );
};

export default DevelopmentProcessSection;
