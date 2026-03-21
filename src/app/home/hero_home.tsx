"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const Hero_Home: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f5f4f0]"
    >
      {/* ── Engineering grid texture ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Diagonal hazard stripe accent (right edge) ── */}
      <div
        className="absolute top-0 right-0 w-72 h-full z-0 pointer-events-none opacity-[0.055]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 14px,
            #1e1e1e 14px,
            #1e1e1e 15px
          )`,
        }}
      />

      {/* ── Warm vignette ── */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(0,166,81,0.06)_0%,transparent_60%)]" />

      {/* ── Background image with parallax ── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-linear-to-t from-[#f5f4f0] via-transparent to-transparent z-10" />
      </motion.div>

      {/* ── Top-left corner bracket ── */}
      <div className="absolute top-8 left-6 lg:left-14 z-10 opacity-25">
        <div className="w-8 h-8 border-t-2 border-l-2 border-secondary" />
      </div>
      {/* ── Top-right corner bracket ── */}
      <div className="absolute top-8 right-6 lg:right-14 z-10 opacity-25">
        <div className="w-8 h-8 border-t-2 border-r-2 border-secondary" />
      </div>

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16
                   pt-32 pb-48 lg:pt-40 lg:pb-60
                   flex flex-col lg:flex-row items-center text-center lg:text-left justify-between gap-16"
      >
        {/* ── LEFT: Text block ── */}
        <div className="flex-1 max-w-2xl xl:max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
          >
            <div className="h-px w-10 bg-primary" />
            <span
              className="text-primary text-[11px] font-bold tracking-[0.28em] uppercase"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Houston, TX · Est. 1988
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-[1.05] text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            <span className="block">THE</span>
            <span className="block text-primary">ONE-STOP-SHOP</span>
            <span className="block">FOR PETROLEUM &amp;</span>
            <span className="block relative">
              ENVIRONMENTAL
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 h-0.75 w-full bg-accent origin-left"
              />
            </span>
            <span className="block">SOLUTIONS</span>
          </motion.h1>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-[#5a5a5a] text-base sm:text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            Backed by over{" "}
            <span className="text-[#1a1a1a] font-semibold">35 years</span> of
            proven industry experience and a{" "}
            <span className="text-[#1a1a1a] font-semibold">zero-incident</span>{" "}
            safety record. Trusted by fuel retailers, industrial operators, and
            municipalities across Texas and the Southeast.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4 sm:gap-12 justify-center lg:justify-start"
          >
            {[
              { value: "35+", label: "Years Experience" },
              { value: "0", label: "Incident Record" },
              { value: "TX+", label: "Southeast Coverage" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span
                  className="text-2xl md:text-4xl font-black text-primary leading-none"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {stat.value}
                </span>
                <span className="text-[#999] text-[10px] uppercase font-medium tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-7 py-4
                         bg-primary text-white
                         font-bold text-sm uppercase tracking-widest
                         transition-all duration-300 hover:bg-[#008f45] hover:gap-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Explore Services
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
            <Link
              href="/contact#MainContactForm"
              className="group inline-flex items-center gap-3 px-7 py-4
                         border border-[#d0d0d0] text-[#1a1a1a]
                         font-bold text-sm uppercase tracking-widest
                         transition-all duration-300
                         hover:border-primary hover:text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>

        {/* ── RIGHT: GIF panel ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full lg:w-[400px] xl:w-[560px] 2xl:w-[620px] shrink-0"
        >
          {/* Industrial frame with corner notches */}
          <div className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm">
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />

            {/* GIF */}
            <div className="relative overflow-hidden h-80 lg:h-80 2xl:h-[420px] bg-[#f9f9f7]">
              <motion.img
                src="/images/home/GeoOneStopShop.gif"
                alt="Geo Petroleum one-stop-shop animation"
                className="w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            {/* Panel footer bar */}
            <div className="px-4 py-3 flex items-center justify-between bg-white border-t border-[#ebebeb]">
              <span className="text-[#bbb] text-[10px] uppercase tracking-[0.2em]">
                Geo Petroleum Services
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[#bbb] text-[10px] uppercase tracking-[0.2em]">
                  Active Operations
                </span>
              </span>
            </div>
          </div>

          {/* Floating accent badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="absolute -bottom-5 -left-4 bg-accent text-[#0d0d0d]
                       px-4 py-3 font-black text-[11px] uppercase tracking-widest shadow-lg"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Zero-Incident Record
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════
          BOTTOM TAGLINE BANNER
      ══════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-30 bg-primary"
      >
        <div
          className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 py-5
                        flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-white text-sm sm:text-base lg:text-lg font-bold uppercase tracking-wider text-center sm:text-left"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Leading the Way in Petroleum Equipment &amp; Environmental Services
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <div className="h-px w-8 bg-white opacity-30" />
            <span className="text-white text-[10px] uppercase tracking-widest opacity-60">
              Houston · Texas · Southeast
            </span>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom-left corner bracket ── */}
      <div className="absolute bottom-[72px] left-6 lg:left-14 z-10 opacity-20">
        <div className="w-8 h-8 border-b-2 border-l-2 border-secondary" />
      </div>
    </section>
  );
};

export default Hero_Home;
