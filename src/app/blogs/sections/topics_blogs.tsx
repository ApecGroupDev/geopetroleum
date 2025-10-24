"use client";

import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, Wrench, Lightbulb, DollarSign, HardHat } from "lucide-react";

const topics = [
  {
    icon: <BookOpen className="w-10 h-10 text-[#00a651]" />,
    title: "EPA, TCEQ & Compliance Updates",
    desc: "Stay informed with the latest environmental regulations and compliance standards impacting petroleum operations.",
  },
  {
    icon: <HardHat className="w-10 h-10 text-[#00a651]" />,
    title: "Safety & Operations",
    desc: "Discover best practices for safe fuel handling, storage, and maintenance that protect your assets and people.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-[#00a651]" />,
    title: "Engineering Insights",
    desc: "From site design to construction — explore real engineering perspectives that keep your infrastructure efficient.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-[#00a651]" />,
    title: "Maintenance & Inspections",
    desc: "Step-by-step tank inspection guides and preventive maintenance checklists for long-term reliability.",
  },
  {
    icon: <DollarSign className="w-10 h-10 text-[#00a651]" />,
    title: "Financing Strategies",
    desc: "Learn how to plan, budget, and finance your system upgrades with practical industry insights.",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-[#00a651]" />,
    title: "Branding & Canopy Design",
    desc: "Modern ideas for canopy imaging, LED lighting, and branding that set your fuel site apart.",
  },
];

const Topics_Blogs = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight">
            What You’ll Find in the <span className="text-[#00a651]">Geo Petroleum Blog</span>
          </h2>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            Each post is written by professionals who live and breathe the petroleum industry —
            ensuring every article delivers <span className="font-semibold text-[#00a651]">value, not fluff.</span>
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg hover:border-[#00a651]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center gap-5">
                <div className="p-4 bg-[#00a651]/10 rounded-full group-hover:bg-[#00a651]/20 transition">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900! group-hover:text-[#00a651] transition">
                  {topic.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{topic.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Topics_Blogs;
