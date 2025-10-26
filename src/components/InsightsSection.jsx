// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Design",
    title: "Crafting Perfect CTAs for Modern Websites",
    excerpt:
      "Discover how to create high-converting call-to-actions that engage users and drive conversions with data-backed UX principles.",
    author: "AppDost Team",
    date: "Oct 12, 2025",
    readTime: "12 min",
    image: "https://cdn.dribbble.com/userupload/14422583/file/original-123abc.png",
  },
  {
    category: "Development",
    title: "Mastering React 19 Performance Optimizations",
    excerpt:
      "React 19 introduces new concurrency features — here’s how to make your apps blazingly fast using Suspense and Server Components.",
    author: "AppDost Team",
    date: "Oct 15, 2025",
    readTime: "8 min",
    image: "https://cdn.dribbble.com/userupload/14200883/file/original-12aa4.png",
  },
  {
    category: "AI & Innovation",
    title: "Building AI Chatbots with GPT & LangChain",
    excerpt:
      "Explore the tools and frameworks behind next-gen conversational AI — from prompt engineering to real-time data retrieval.",
    author: "AppDost Team",
    date: "Oct 22, 2025",
    readTime: "10 min",
    image: "https://cdn.dribbble.com/userupload/14199302/file/original-a72b5.png",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-24 bg-linear-to-b from-[#0a0f2c] via-[#10163f] to-[#1b114a] text-center text-white">
      <div className="flex flex-col items-center mb-12">
        <span className="px-5 py-2 bg-purple-900/40 text-sm font-semibold rounded-full text-purple-300">
          Latest Updates
        </span>
        <h2 className="text-4xl font-bold mt-4 text-white">
          Insights &{" "}
          <span className="bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Tech Articles
          </span>
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl">
          Stay informed with our latest insights, tech trends, and industry expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="rounded-2xl overflow-hidden bg-[#1c1f3d]/60 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-all shadow-md hover:shadow-purple-500/20"
          >
            <div className="h-48 bg-linear-to-br from-purple-700/30 to-blue-700/30">
              <img src={article.image} alt={article.title} className="h-full w-full object-cover opacity-90" />
            </div>
            <div className="p-6 text-left">
              <div className="flex justify-between items-center text-xs font-semibold text-gray-400 uppercase mb-3">
                <span className="bg-purple-700/30 text-purple-300 px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
              <h3 className="font-bold text-lg text-white mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-3">{article.excerpt}</p>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-linear-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    AP
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-white">{article.author}</p>
                    <p className="text-gray-500 text-xs">{article.date}</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-purple-500/20 transition">
                  <ArrowRight className="w-4 h-4 text-purple-300" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-14 inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl shadow-md cursor-pointer hover:shadow-purple-500/30 transition"
      >
        View All Articles →
      </motion.div>
    </section>
  );
}
