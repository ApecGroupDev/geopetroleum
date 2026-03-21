"use client";

import { motion } from "framer-motion";

const Hero_Services = () => {
  const scrollToServices = () => {
    const target = document.getElementById("ServicesList");
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f5f4f0] flex items-center">
      {/* ── Engineering grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Diagonal stripe accent (right edge) ── */}
      <div
        className="absolute top-0 right-0 w-72 h-full pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      {/* ── Green radial glow ── */}
      <div className="absolute top-0 left-0 w-[600px] h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,166,81,0.07),transparent_65%)] pointer-events-none" />

      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-[#f5f4f0] via-[#f5f4f0cc] to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-[#f5f4f0] via-transparent to-transparent z-10" />
      </div>

      {/* ── Corner brackets ── */}
      <div className="absolute top-8 left-6 lg:left-14 z-10 opacity-25">
        <div className="w-7 h-7 border-t-2 border-l-2 border-secondary" />
      </div>
      <div className="absolute top-8 right-6 lg:right-14 z-10 opacity-25">
        <div className="w-7 h-7 border-t-2 border-r-2 border-secondary" />
      </div>

      {/* ── Main content ── */}
      <div
        className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
                      pt-32 pb-24 lg:pt-40 lg:pb-28
                      flex flex-col xl:flex-row items-center justify-between gap-14 lg:gap-16"
      >
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-2xl text-center xl:text-left"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center xl:justify-start gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              What We Offer
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-5xl xl:text-6xl font-black leading-[1.05] text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Petroleum &amp; Environmental
            <span className="text-primary">&nbsp;Services That Power,&nbsp;</span>
            <span className="text-primary">Protect, </span> and
            Future-Proof

            Your Business
          </h1>

          {/* Yellow accent bar */}
          <div className="mt-6 mb-6 flex justify-center xl:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          {/* Subtext */}
          <p
            className="text-[#555] text-base sm:text-lg leading-relaxed max-w-lg mx-auto xl:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            From environmental compliance to petroleum infrastructure support,
            Geo Petroleum delivers end-to-end solutions that enhance
            performance, extend asset life, and ensure regulatory confidence
            across Texas.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-10 flex justify-center xl:justify-start"
          >
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center gap-3 px-7 py-4
                         bg-primary text-white
                         font-bold text-sm uppercase tracking-widest
                         transition-all duration-300 hover:bg-[#008f45] hover:gap-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Explore Our Services
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                ↓
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Service quick-links panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full xl:w-[440px] shrink-0"
        >
          <div className="relative border border-[#d8d8d8] bg-white/80 backdrop-blur-sm p-1 shadow-sm">
            {/* Corner notches */}
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />
            {/* Green top bar */}
            <div className="h-[3px] w-full bg-primary" />

            {/* Panel header */}
            <div className="flex items-center gap-3 px-6 pt-5 pb-4 border-b border-[#f0f0f0]">
              <div className="h-px w-5 bg-primary" />
              <span
                className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Our Core Services
              </span>
            </div>

            {/* Service rows */}
            {[
              {
                num: "01",
                title: "Environmental Risk Assessment",
                sub: "Site hazard identification & mitigation",
              },
              {
                num: "02",
                title: "Environmental Compliance",
                sub: "EPA & TCEQ permitting, inspections, docs",
              },
              {
                num: "03",
                title: "Canopy Imaging Solutions",
                sub: "Custom design, fabrication & installation",
              },
              {
                num: "04",
                title: "Fuel Tank Manufacturing",
                sub: "Above & underground precision-built tanks",
              },
            ].map(({ num, title, sub }, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                onClick={scrollToServices}
                className="w-full flex items-center gap-4 px-6 py-4 group
                           border-b border-[#f5f5f5] last:border-b-0
                           hover:bg-[#f9fdf9] transition-colors duration-200 text-left"
              >
                <span
                  className="text-[11px] font-black text-primary opacity-50 group-hover:opacity-100 transition-opacity w-6 shrink-0"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {num}
                </span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[13px] font-bold text-[#1a1a1a] leading-snug group-hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-[11px] text-[#999] mt-0.5"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {sub}
                  </p>
                </div>
                <span className="text-[#ccc] group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-sm shrink-0">
                  →
                </span>
              </motion.button>
            ))}

            {/* Panel footer */}
            <div className="px-6 py-3 bg-[#f9f9f7] border-t border-[#f0f0f0] flex items-center justify-between">
              <span
                className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                4 Service Areas
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-25" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom green tagline bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-20 bg-primary"
      >
        <div
          className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-4
                        flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-white text-sm font-bold uppercase tracking-wider text-center sm:text-left"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Trusted Across Texas &amp; the Southeast for 35+ Years
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-px w-8 bg-white opacity-30" />
            <span className="text-white text-[10px] uppercase tracking-widest opacity-70">
              Licensed · Insured · Certified
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero_Services;
