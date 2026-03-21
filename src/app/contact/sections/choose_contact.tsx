"use client";

import { motion } from "framer-motion";
import { CheckCheck } from "lucide-react";

const FEATURES = [
  "35+ years of petroleum and environmental experience",
  "Fully licensed, insured, and safety-certified professionals",
  "Proven expertise in EPA and TCEQ compliance",
  "Houston-based, proudly serving all of Texas and the Southeast",
  "Transparent communication and on-time delivery",
  "One trusted petroleum services company for all your needs — from risk assessment to fuel tank manufacturing",
];

const Choose_Contact = () => {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* ── Engineering grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Diagonal stripe accent (left edge) ── */}
      <div
        className="absolute top-0 left-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      {/* ── Green radial glow right ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,166,81,0.05),transparent_70%)] pointer-events-none" />

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
                      grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
      >
        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Our Advantage
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Why Choose <span className="text-primary">Geo Petroleum</span>
          </h2>

          {/* Yellow accent bar */}
          <div className="mt-6 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          <p
            className="text-[#555] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            With decades of experience and an unwavering commitment to safety
            and performance,{" "}
            <span className="font-semibold text-[#1a1a1a]">Geo Petroleum</span>{" "}
            stands as a trusted partner for petroleum, environmental, and
            construction solutions across Texas.
          </p>

          {/* Decorative industrial block */}
          <div className="mt-10 hidden lg:flex items-start gap-4">
            <div className="w-[3px] h-24 bg-primary shrink-0" />
            <div className="flex flex-col gap-2">
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#aaa]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Trusted Since
              </span>
              <span
                className="text-6xl font-black text-[#f0f0f0] leading-none"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                1988
              </span>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Houston, TX
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Feature list ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="relative border border-[#e8e8e8] bg-[#fafaf8] p-1"
        >
          {/* Corner notches */}
          <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />

          {/* Green top bar */}
          <div className="h-[3px] w-full bg-primary" />

          <div className="px-6 sm:px-8 py-8 divide-y divide-[#efefef]">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 py-4 first:pt-0 last:pb-0 group"
              >
                <div
                  className="w-7 h-7 flex items-center justify-center bg-primary/10
                                group-hover:bg-primary transition-colors duration-300 shrink-0 mt-0.5"
                >
                  <CheckCheck
                    className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors duration-300"
                    strokeWidth={2.5}
                  />
                </div>
                <p
                  className="text-[14px] text-[#444] leading-relaxed group-hover:text-[#1a1a1a] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Choose_Contact;
