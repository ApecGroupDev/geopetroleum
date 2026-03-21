"use client";

import { motion } from "framer-motion";

const Hero_Blogs: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5f4f0] flex items-center">
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-72 h-full pointer-events-none opacity-[0.05]"
        style={{ backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)" }} />
      <div className="absolute top-0 left-0 w-[600px] h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,166,81,0.07),transparent_65%)] pointer-events-none" />

      <div className="absolute top-8 left-6 lg:left-14 z-10 opacity-25">
        <div className="w-7 h-7 border-t-2 border-l-2 border-secondary" />
      </div>
      <div className="absolute top-8 right-6 lg:right-14 z-10 opacity-25">
        <div className="w-7 h-7 border-t-2 border-r-2 border-secondary" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
                      pt-32 pb-24 lg:pt-40 lg:pb-28
                      flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-2xl text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Industry Insights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black leading-[1.05] text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            <span className="text-primary">Insights That Drive</span>
            <br className="hidden sm:block" /> the Future — Petroleum
            <br className="hidden sm:block" /> &amp; Environmental Industry Blogs
          </h1>
          <div className="mt-6 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="text-[#555] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Backed by <span className="font-semibold text-[#1a1a1a]">35+ years of industry expertise</span>, the Geo Petroleum Blog delivers
            trusted insights, actionable trends, and regulatory updates to help{" "}
            <span className="font-semibold text-[#1a1a1a]">fuel retailers, environmental professionals,</span> and{" "}
            <span className="font-semibold text-[#1a1a1a]">industry leaders</span> stay ahead.
          </p>
        </motion.div>

        {/* RIGHT: Topic tags panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[400px] xl:w-[440px] shrink-0 flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: "35+", label: "Years of Expertise" },
              { value: "Weekly", label: "New Content" },
              { value: "6+", label: "Topic Areas" },
              { value: "TX+", label: "Regional Focus" },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                className="relative border border-[#d8d8d8] bg-white p-5 group hover:border-primary transition-all duration-300"
              >
                <div className="absolute -top-px -left-px w-3 h-3 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="block text-2xl font-black text-primary leading-none mb-1"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{s.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#999]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{s.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm"
          >
            <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
            <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
            <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
            <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />
            <div className="h-[3px] w-full bg-primary" />
            <div className="px-5 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa] mb-2"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Topics We Cover</p>
              <div className="flex flex-wrap gap-2">
                {["EPA & TCEQ", "Safety", "Engineering", "Maintenance", "Financing", "Canopy Design"].map((tag) => (
                  <span key={tag}
                    className="text-[11px] font-bold px-2.5 py-1 border border-primary/30 text-primary bg-primary/5"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-primary"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-4
                        flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-sm font-bold uppercase tracking-wider text-center sm:text-left"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Trusted Insights for the Petroleum &amp; Environmental Industry
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-px w-8 bg-white opacity-30" />
            <span className="text-white text-[10px] uppercase tracking-widest opacity-70">Stay Informed · Stay Compliant</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero_Blogs;