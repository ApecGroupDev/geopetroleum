"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Wrench, Clock } from "lucide-react";
import React from "react";

const ITEMS = [
  {
    icon: CheckCircle,
    title: "Proven Experience",
    desc: "Over 35 years serving top petroleum and construction companies across the U.S.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance First",
    desc: "We lead with integrity, meeting environmental and safety regulations at every step.",
  },
  {
    icon: Wrench,
    title: "Full-Service Solutions",
    desc: "From design to installation to maintenance — everything handled under one roof.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Our teams deliver with precision and speed, keeping your operations on schedule.",
  },
];

const Expertise_Home: React.FC = () => {
  return (
    <section className="relative bg-white text-[#1a1a1a] py-24 lg:py-32 overflow-hidden">
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

      {/* ── Left green border accent ── */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-primary opacity-30" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Why Choose Us
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Why Businesses Trust{" "}
            <span className="text-primary">Geo Petroleum</span>
          </h2>

          <p
            className="mt-5 text-[#666] max-w-2xl mx-auto leading-relaxed text-base sm:text-lg"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            For over three decades, we’ve been the backbone of reliable
            petroleum equipment, construction, and compliance services. Our
            commitment to quality, safety, and client success defines who we
            are.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative border border-[#e8e8e8] bg-[#fafaf8] p-7
                         hover:border-primary hover:shadow-[0_4px_24px_rgba(0,166,81,0.08)]
                         transition-all duration-300"
            >
              {/* Corner notch — top left, appears on hover */}
              <div className="absolute -top-px -left-px w-4 h-4 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon square */}
              <div
                className="w-12 h-12 flex items-center justify-center bg-primary/10
                              group-hover:bg-primary transition-colors duration-300 mb-5"
              >
                <Icon
                  className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300"
                  strokeWidth={2}
                />
              </div>

              {/* Title */}
              <h3
                className="text-[15px] font-black uppercase tracking-[0.08em] text-[#1a1a1a]! mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {title}
              </h3>

              {/* Accent underline */}
              <div className="h-0.5 w-8 bg-accent mb-3" />

              {/* Description */}
              <p
                className="text-[13px] text-[#666] leading-relaxed"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise_Home;
