// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Globe, Smartphone, Code2 } from "lucide-react";

const featuredProjects = [
  {
    title: "BEU Mate - Bihar Engineering",
    subtitle: "AI-Powered Educational Platform",
    description:
      "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation.",
    tech: ["React Native", "Node.js", "AI/ML"],
    buttons: [
      { label: "Play Store", color: "green", link: "#" },
      { label: "Website", color: "purple", link: "#" },
    ],
    img: "/images/beu.png",
  },
  {
    title: "Devskillquest",
    subtitle: "Educational Platform",
    description:
      "An interactive learning platform designed for aspiring developers to master coding skills through projects and challenges.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    buttons: [{ label: "Website", color: "purple", link: "#" }],
    img: "/images/devskill.png",
  },
  {
    title: "The Weddings Chapter",
    subtitle: "Wedding Planning Portal",
    description:
      "A premium wedding planning platform connecting couples with top vendors, venues, and services.",
    tech: ["PHP", "Laravel", "MySQL"],
    buttons: [{ label: "Website", color: "purple", link: "#" }],
    img: "/images/twc.png",
  },
];

export default function FeaturedProjectsSection() {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white overflow-hidden">
      {/* animated background glow */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 40%, rgba(236,72,153,0.15), transparent 70%)",
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
          className="text-4xl font-bold mb-4"
        >
          Our <span className="text-blue-400">Featured Projects</span>
        </motion.h2>
        <p className="text-indigo-200 mb-14 max-w-2xl mx-auto">
          Real solutions built for growth — explore our innovative projects
          delivering impact and excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <motion.img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
              />

              <div className="p-6 text-left">
                <p className="text-sm text-pink-400 font-medium mb-1">
                  {p.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-white/10 border border-white/10 text-gray-200 px-3 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.buttons.map((b) => (
                    <motion.a
                      key={b.label}
                      href={b.link}
                      whileHover={{ scale: 1.05 }}
                      className={`flex-1 text-center py-2 rounded-xl font-semibold text-sm transition-all ${
                        b.color === "green"
                          ? "bg-linear-to-r from-green-400 to-emerald-500 text-white hover:shadow-lg hover:shadow-green-500/40"
                          : "bg-linear-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-pink-500/40"
                      }`}
                    >
                      {b.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* glowing border bottom */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: i * 0.3 }}
                className="absolute bottom-0 left-0 h-[3px] bg-linear-to-r from-pink-500 via-purple-500 to-blue-500"
              />
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-14 px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all"
        >
          View All Projects →
        </motion.a>
      </div>
    </section>
  );
}
