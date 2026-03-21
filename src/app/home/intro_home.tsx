"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "35+", label: "Years in Industry" },
  { value: "0", label: "Incident Record" },
  { value: "100%", label: "Compliance Rate" },
];

const Intro_Home: React.FC = () => {
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

      {/* ── Diagonal stripe accent (left edge) ── */}
      <div
        className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      {/* ── Subtle green radial glow ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,166,81,0.06),transparent_70%)] pointer-events-none" />

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
                      flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20"
      >
        {/* ── LEFT: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl text-center lg:text-left"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Who We Are
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Precision Isn’t Optional —<br />
            <span className="text-primary">It’s Everything.</span>
          </h2>

          {/* Divider */}
          <div className="mt-6 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-12 bg-accent" />
          </div>

          {/* Body */}
          <div
            className="text-[#555] text-base sm:text-[17px] leading-relaxed space-y-4"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            <p>
              In the petroleum and environmental industry, a single compliance
              error or system failure can lead to heavy fines, lost
              productivity, or operational shutdowns.
            </p>
            <p>
              At{" "}
              <span className="font-semibold text-[#1a1a1a]">
                Geo Petroleum
              </span>
              , we take that burden off your shoulders. From{" "}
              <span className="font-semibold text-[#1a1a1a]">
                Environmental Risk Assessments
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#1a1a1a]">
                Compliance Solutions
              </span>{" "}
              to{" "}
              <span className="font-semibold text-[#1a1a1a]">
                Canopy Imaging
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#1a1a1a]">
                Fuel Tank Manufacturing
              </span>{" "}
              — we provide turnkey support built on expertise, safety, and
              trust.
            </p>
            <p>
              Whether you’re comparing environmental companies in Texas or need
              a single partner for all your fuel infrastructure needs,{" "}
              <span className="font-semibold text-[#1a1a1a]">
                Geo Petroleum
              </span>{" "}
              delivers reliability you can count on.
            </p>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex justify-center lg:justify-start gap-8 sm:gap-12 border-t border-[#e0e0e0] pt-6"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center lg:items-start gap-1"
              >
                <span
                  className="text-2xl sm:text-3xl font-black text-primary leading-none"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {s.value}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#999]">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 px-7 py-4
                         bg-primary text-white
                         font-bold text-sm uppercase tracking-widest
                         transition-all duration-300 hover:bg-[#008f45] hover:gap-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Learn More About Us
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>

        {/* ── RIGHT: Image panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-[500px] xl:w-[540px] shrink-0 hidden lg:block"
        >
          {/* Industrial frame with corner notches */}
          <div className="relative border border-[#d8d8d8] bg-white p-1.5 shadow-sm">
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />

            <div className="overflow-hidden">
              <Image
                src="/images/home/intro_home.jpg"
                alt="Geo Petroleum Operations"
                width={600}
                height={420}
                className="w-full h-80 lg:h-[400px] object-cover hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Image footer bar */}
            <div className="px-4 py-3 flex items-center justify-between bg-white border-t border-[#ebebeb]">
              <span className="text-[#bbb] text-[10px] uppercase tracking-[0.2em]">
                Geo Petroleum Operations
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[#bbb] text-[10px] uppercase tracking-[0.2em]">
                  Houston, TX
                </span>
              </span>
            </div>
          </div>

          {/* Floating accent badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute -bottom-5 -left-4 bg-accent text-[#0d0d0d]
                       px-4 py-3 font-black text-[11px] uppercase tracking-widest shadow-md"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Texas &amp; Southeast Coverage
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_Home;
