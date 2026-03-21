"use client";

import { motion } from "framer-motion";
import { BookOpen, ClipboardCheck, Wrench, Lightbulb, DollarSign, HardHat } from "lucide-react";

const TOPICS = [
  { icon: BookOpen, num: "01", title: "EPA, TCEQ & Compliance Updates", desc: "Stay informed with the latest environmental regulations and compliance standards impacting petroleum operations." },
  { icon: HardHat, num: "02", title: "Safety & Operations", desc: "Discover best practices for safe fuel handling, storage, and maintenance that protect your assets and people." },
  { icon: Wrench, num: "03", title: "Engineering Insights", desc: "From site design to construction — explore real engineering perspectives that keep your infrastructure efficient." },
  { icon: ClipboardCheck, num: "04", title: "Maintenance & Inspections", desc: "Step-by-step tank inspection guides and preventive maintenance checklists for long-term reliability." },
  { icon: DollarSign, num: "05", title: "Financing Strategies", desc: "Learn how to plan, budget, and finance your system upgrades with practical industry insights." },
  { icon: Lightbulb, num: "06", title: "Branding & Canopy Design", desc: "Modern ideas for canopy imaging, LED lighting, and branding that set your fuel site apart." },
];

const Topics_Blogs = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f4f0] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.045]"
        style={{ backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Blog Topics</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            What You’ll Find in the <span className="text-primary">Geo Petroleum Blog</span>
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#555] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Each post is written by professionals who live and breathe the petroleum industry — ensuring every article delivers{" "}
            <span className="font-semibold text-[#1a1a1a]">value, not fluff.</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPICS.map(({ icon: Icon, num, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative border border-[#e0e0e0] bg-white p-6
                         hover:border-primary hover:shadow-[0_4px_20px_rgba(0,166,81,0.08)]
                         transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute -top-px -right-px w-3 h-3 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <span className="text-[11px] font-black tracking-widest text-[#ddd] group-hover:text-primary transition-colors duration-300"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{num}</span>
              </div>
              <h3 className="text-[14px] font-black text-[#1a1a1a]! mb-2 group-hover:text-primary transition-colors duration-300 leading-snug"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{title}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed"
                style={{ fontFamily: "var(--font-body), sans-serif" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics_Blogs;