// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Github, Cpu, Sparkles, Bot } from "lucide-react";

const projects = [
  {
    title: "DeepFake Detection",
    subtitle: "AI/ML Summer Internship Project",
    desc: "Advanced deep learning model for detecting manipulated media using computer vision and neural networks.",
    tech: ["AI/ML", "Jupyter"],
    link: "#",
    color: "from-indigo-500 via-purple-500 to-pink-500",
    icon: <Cpu className="w-8 h-8 text-indigo-300" />,
  },
  {
    title: "NooBot",
    subtitle: "Intelligent Python Automation Bot",
    desc: "Smart automation bot built with Python for task scheduling, data processing, and workflow automation.",
    tech: ["Python", "Automation"],
    link: "#",
    color: "from-green-400 via-emerald-400 to-teal-400",
    icon: <Bot className="w-8 h-8 text-emerald-300" />,
  },
  {
    title: "EduTools",
    subtitle: "Educational Web Platform",
    desc: "Collection of educational tools and utilities for students and teachers.",
    tech: ["HTML/CSS", "Education"],
    link: "#",
    color: "from-pink-400 via-rose-400 to-red-400",
    icon: <Sparkles className="w-8 h-8 text-pink-200" />,
  },
  {
    title: "DialogFlow Chatbot",
    subtitle: "Conversational AI Assistant",
    desc: "Intelligent chatbot using Google DialogFlow for NLP and customer support.",
    tech: ["DialogFlow", "NLP"],
    link: "#",
    color: "from-purple-400 via-violet-400 to-cyan-400",
    icon: <Bot className="w-8 h-8 text-cyan-300" />,
  },
];

export default function OpenSourceProjectsSection() {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white overflow-hidden">
      {/* floating background animation */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 25% 30%, rgba(59,130,246,0.1), transparent 70%)",
            "radial-gradient(circle at 75% 60%, rgba(236,72,153,0.1), transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 opacity-80"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Open Source &{" "}
          <span className="text-blue-400">Innovation Projects</span>
        </motion.h2>
        <p className="text-indigo-200 mb-14 max-w-2xl mx-auto">
          Discover our groundbreaking work in AI, automation, and educational
          technology — shaping the future of innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              {/* Gradient header */}
              <div
                className={`h-32 rounded-2xl mb-5 bg-linear-to-r ${p.color} flex items-center justify-center`}
              >
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-lg shadow-md">
                  {p.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="text-sm text-pink-300 mb-2">{p.subtitle}</p>
              <p className="text-gray-300 text-sm mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-white/10 border border-white/10 text-gray-200 px-3 py-1 rounded-full text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href={p.link}
                className="flex items-center justify-center gap-2 bg-linear-to-r from-indigo-500 to-purple-500 text-white font-semibold py-2 rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all text-sm"
              >
                <Github className="w-4 h-4" /> View on GitHub
              </motion.a>

              {/* bottom glow line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: i * 0.3 }}
                className={`absolute bottom-0 left-0 h-[3px] bg-linear-to-r ${p.color}`}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-indigo-200 mb-4">
            Interested in collaborating or showcasing your innovation?
          </p>
          <motion.a
            whileHover={{ scale: 1.07 }}
            href="#contact"
            className="inline-block px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Start Your Project 🚀
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
