// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Palette,
  Briefcase,
  Cloud,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Smartphone className="w-12 h-12 text-indigo-400 mx-auto" />,
    title: "Android App Development",
    description:
      "Next-gen Android solutions crafted for performance, scalability, and seamless user experience.",
    points: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support"],
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-400 mx-auto" />,
    title: "Web Development",
    description:
      "High-performing, responsive web apps built for growth, speed, and smooth scalability.",
    points: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps"],
  },
  {
    icon: <Palette className="w-12 h-12 text-pink-400 mx-auto" />,
    title: "UI/UX Development",
    description:
      "We craft intuitive digital experiences that merge creativity, usability, and brand impact.",
    points: ["User Research", "Wireframing", "Brand Identity"],
  },
  {
    icon: <Briefcase className="w-12 h-12 text-purple-400 mx-auto" />,
    title: "CRM Software",
    description:
      "Empowering businesses with intelligent CRM solutions to streamline sales and customer engagement.",
    points: ["Custom Development", "Integration Services", "Training & Support"],
  },
  {
    icon: <Cloud className="w-12 h-12 text-sky-400 mx-auto" />,
    title: "Cloud Solutions",
    description:
      "Leverage modern cloud platforms for speed, scalability, and security with zero downtime.",
    points: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning"],
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-yellow-400 mx-auto" />,
    title: "Cybersecurity",
    description:
      "Defend your infrastructure with advanced cybersecurity practices and ongoing risk management.",
    points: ["Security Audits", "Penetration Testing", "Compliance"],
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-linear-to-b from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white">
      {/* 🔮 Animated background orbs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-[700px] h-[700px] bg-blue-500/30 rounded-full blur-[150px] top-[-10%] left-[-15%]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[120px] bottom-[-10%] right-[-10%]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ✨ Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
          Our Premium Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We provide world-class digital solutions — blending technology, strategy, and innovation to fuel your success.
        </p>
      </motion.div>

      {/* 🧱 Animated Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-500"
          >
            {/* Glow hover effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all"
            />
            <div className="relative z-10">
              {service.icon}
              <h3 className="mt-6 text-2xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-5">{service.description}</p>
              <ul className="space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Animated ring in corner */}
            <motion.div
              className="absolute -top-6 -right-6 w-20 h-20 border border-white/10 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>

      {/* ✨ Floating center glow */}
      <motion.div
        className="absolute left-1/2 top-[40%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2"
        animate={{
          x: [0, 50, 0, -50, 0],
          y: [0, -30, 0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ServicesSection;
