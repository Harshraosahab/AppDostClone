// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-linear-to-b from-[#0d0f2d] via-[#151844] to-[#1f144a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-linear-to-r from-indigo-600/40 to-purple-700/40 backdrop-blur-md border border-white/10 rounded-3xl p-12 md:p-20 shadow-xl text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Let’s discuss how we can help transform your ideas into reality with cutting-edge technology and expert development.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-purple-500/30 transition"
            >
              Get Free Consultation →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#services"
              className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              View Our Services
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
