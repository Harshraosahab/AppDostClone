// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Globe,
  Rocket,
} from "lucide-react";

const values = [
  {
    emoji: "🎯",
    title: "Innovation First",
    desc: "Encouraging creative problem-solving and forward-thinking solutions.",
  },
  {
    emoji: "🤝",
    title: "Collaborative Environment",
    desc: "Cross-functional teamwork that inspires results.",
  },
  {
    emoji: "📚",
    title: "Continuous Learning",
    desc: "Regular training, workshops, and knowledge sharing.",
  },
  {
    emoji: "🌱",
    title: "Growth Mindset",
    desc: "Working on diverse projects with evolving technologies.",
  },
  {
    emoji: "⚖️",
    title: "Work-Life Balance",
    desc: "Flexible arrangements that prioritize well-being.",
  },
  {
    emoji: "🏆",
    title: "Recognition & Rewards",
    desc: "Celebrating every achievement and contribution.",
  },
];

const WorkCultureContact = () => {
  return (
    <section className="relative py-24 bg-linear-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] overflow-hidden">
      {/* floating lights background */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Work Culture Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
            <HeartHandshake className="w-8 h-8 text-pink-400" /> Work Culture & Values
          </h2>
          <p className="text-gray-300 mb-8">
            At <span className="text-blue-400 font-semibold">AppDost</span>, we
            believe in:
          </p>

          <ul className="space-y-4">
            {values.map((v, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 border border-white/10 p-4 rounded-xl text-left hover:bg-white/20 transition-all"
              >
                <span className="font-semibold text-blue-300">
                  {v.emoji} {v.title}
                </span>{" "}
                <span className="text-gray-300">- {v.desc}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Enhanced Contact Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-linear-to-br from-blue-600/50 via-purple-600/50 to-pink-600/50 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* floating orbs for visual depth */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-pink-500/30 blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-500/20 blur-3xl rounded-full animate-pulse delay-300" />

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Phone className="w-7 h-7 text-pink-300 animate-bounce" />{" "}
              Get In Touch
            </h2>

            <div className="space-y-5 text-gray-200">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition"
              >
                <Globe className="w-5 h-5 text-blue-300" />
                <span>
                  <strong>Website:</strong> www.appdost.in
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition"
              >
                <Mail className="w-5 h-5 text-purple-300" />
                <span>
                  <strong>Email:</strong> contact@appdost.in <br /> hr@appdost.in
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition"
              >
                <MapPin className="w-5 h-5 text-pink-300" />
                <span>
                  <strong>Locations:</strong> HQ - Patna, Motihari, Banka
                </span>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10 hover:bg-white/20 transition"
              >
                <Phone className="w-5 h-5 text-green-300" />
                <span>
                  <strong>Phone:</strong> +91 76350 75422 <br /> +91 11 6929 0750
                </span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="bg-white text-blue-700 font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-100 transition text-center"
              >
                Join Our Team →
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#"
                className="border border-white/40 text-white py-3 rounded-xl text-center hover:bg-white/10 transition flex justify-center items-center gap-2"
              >
                Start Your Project <Rocket className="w-4 h-4 text-pink-300" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkCultureContact;
