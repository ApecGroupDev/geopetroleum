"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Robert L.",
    company: "Fuel Retailer",
    location: "Houston, TX",
    text: "Geo Petroleum’s team went above and beyond to identify compliance gaps at one of our sites. They resolved everything before our state inspection — saving us thousands in potential fines. Professional, responsive, and reliable.",
  },
  {
    name: "Linda M.",
    company: "Gas Station Owner",
    location: "Sugar Land, TX",
    text: "Our old canopy was faded and outdated. Geo Petroleum designed and installed a new LED canopy that completely transformed our site. It boosted visibility, and our sales went up within weeks. True professionals.",
  },
  {
    name: "Carlos G.",
    company: "Industrial Facility Manager",
    location: "Baytown, TX",
    text: "We were struggling with TCEQ reporting and documentation. Geo Petroleum’s compliance team took over everything — testing, permits, and record updates. Now we’re fully compliant and stress-free.",
  },
  {
    name: "Jessica R.",
    company: "Commercial Developer",
    location: "Conroe, TX",
    text: "Before opening our new site, we hired Geo Petroleum for an environmental risk assessment. They identified minor soil contamination early, coordinated cleanup, and saved us months of delays. Couldn’t ask for better service.",
  },
];

const Testimonial_Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () =>
    setIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((p) => (p + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[index];

  return (
    <section className="relative bg-[#f5f4f0] py-24 lg:py-32 overflow-hidden">
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
        className="absolute top-0 right-0 w-56 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      {/* ── Large faint quote mark in background ── */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 text-[320px] font-black leading-none
                   text-primary opacity-[0.04] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        "
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Client Feedback
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What Our <span className="text-primary">Clients</span> Say
          </h2>
        </motion.div>

        {/* ── Testimonial card ── */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Industrial frame */}
          <div className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm">
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />

            {/* Green top bar */}
            <div className="h-[3px] w-full bg-primary" />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="px-8 sm:px-14 py-12 text-center"
              >
                {/* Quote icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-primary">
                    <Quote className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Text */}
                <p
                  className="text-[#444] text-lg sm:text-xl leading-relaxed italic mb-8 max-w-2xl mx-auto"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  "{t.text}"
                </p>

                {/* Divider */}
                <div className="flex justify-center mb-6">
                  <div className="h-0.5 w-10 bg-accent" />
                </div>

                {/* Attribution */}
                <div>
                  <p
                    className="font-black text-[#1a1a1a] text-base uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-primary text-[12px] uppercase tracking-[0.18em] mt-1"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {t.company} · {t.location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Panel footer */}
            <div className="px-6 py-3 border-t border-[#ebebeb] flex items-center justify-between bg-white">
              <span className="text-[#ccc] text-[10px] uppercase tracking-[0.2em]">
                {index + 1} / {TESTIMONIALS.length}
              </span>
              {/* Progress bar */}
              <div className="flex-1 mx-6 h-px bg-[#e8e8e8] relative overflow-hidden">
                <motion.div
                  key={index}
                  className="absolute top-0 left-0 h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              </div>
              <span className="text-[#ccc] text-[10px] uppercase tracking-[0.2em]">
                Auto
              </span>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-[#d0d0d0]
                         text-[#666] hover:border-primary hover:text-primary
                         transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`transition-all duration-300 ${i === index
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-[#ccc] hover:bg-[#aaa]"
                    }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-[#d0d0d0]
                         text-[#666] hover:border-primary hover:text-primary
                         transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial_Home;
