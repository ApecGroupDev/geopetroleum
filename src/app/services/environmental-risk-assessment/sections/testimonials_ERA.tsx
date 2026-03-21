"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "James P.",
    company: "Fleet Operator",
    location: "Houston, TX",
    text: "Geo Petroleum identified a potential contamination issue at our Houston site during their environmental risk assessment. Their quick response and recommendations helped us avoid major cleanup costs and downtime.",
  },
];

const Testimonial_ERA: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || TESTIMONIALS.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setIndex((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((p) => (p + 1) % TESTIMONIALS.length);
  const t = TESTIMONIALS[index];

  return (
    <section className="relative bg-[#f5f4f0] py-24 lg:py-32 overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 text-[280px] font-black leading-none
                   text-[#1a1a1a] opacity-[0.025] pointer-events-none select-none"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >"</div>

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Client Feedback
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            What Our Clients Say
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}>

          <div className="relative border border-[#d8d8d8] bg-[#fafaf8] p-1 shadow-sm">
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />
            <div className="h-[3px] w-full bg-primary" />

            <div className="px-8 sm:px-12 pt-10 pb-8">
              <div className="w-10 h-10 flex items-center justify-center bg-primary mb-8">
                <Quote className="w-5 h-5 text-white" strokeWidth={1.8} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <p className="text-lg sm:text-xl text-[#333] leading-relaxed mb-8 italic"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}>
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-px h-8 bg-primary" />
                    <div>
                      <p className="text-[12px] font-black uppercase tracking-[0.15em] text-[#1a1a1a]"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{t.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.15em] text-primary font-bold mt-0.5"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                        {t.company} · {t.location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="border-t border-[#ececec] px-8 sm:px-12 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-[#aaa] tracking-widest"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                  {String(index + 1).padStart(2, "0")}/{String(TESTIMONIALS.length).padStart(2, "0")}
                </span>
                <div className="w-24 h-[2px] bg-[#e8e8e8] overflow-hidden">
                  <motion.div
                    key={index}
                    className="h-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={prev}
                  className="w-8 h-8 flex items-center justify-center border border-[#e0e0e0]
                             text-[#aaa] hover:border-primary hover:text-primary
                             transition-all duration-200">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next}
                  className="w-8 h-8 flex items-center justify-center border border-[#e0e0e0]
                             text-[#aaa] hover:border-primary hover:text-primary
                             transition-all duration-200">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial_ERA;