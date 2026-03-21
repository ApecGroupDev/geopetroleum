"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Camera, Factory } from "lucide-react";
import Link from "next/link";
import React from "react";

const SERVICES = [
  {
    icon: Leaf,
    title: "Environmental Risk Assessment",
    desc: "Identify and mitigate hazards before they impact your operations.",
    href: "/services/environmental-risk-assessment",
  },
  {
    icon: ShieldCheck,
    title: "Environmental Compliance Solutions",
    desc: "Stay ahead of EPA and TCEQ regulations with full compliance support.",
    href: "/services/environmental-compliance-solutions",
  },
  {
    icon: Camera,
    title: "Canopy Imaging Solutions",
    desc: "Custom canopy design, fabrication, and lighting that elevate your brand.",
    href: "/services/canopy-imaging-solutions",
  },
  {
    icon: Factory,
    title: "Fuel Tanks Manufacturing",
    desc: "Precision-built aboveground and underground tanks for maximum safety and performance.",
    href: "https://www.metalproductsusa.com/",
  },
];

const Core_Home: React.FC = () => {
  return (
    <section className="relative bg-white text-[#1a1a1a] py-24 lg:py-32 overflow-hidden">
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

      {/* ── Green radial glow center ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,166,81,0.04),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              What We Do
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Comprehensive <span className="text-primary">Solutions</span> for
            Every Project
          </h2>

          <p
            className="mt-5 text-[#666] max-w-2xl mx-auto leading-relaxed text-base sm:text-lg"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            As one of the most trusted{" "}
            <span className="font-semibold text-[#1a1a1a]">
              environmental companies in Texas
            </span>
            , we combine technical precision with hands-on service — ensuring
            your project meets every safety, quality, and regulatory standard.
          </p>
        </motion.div>

        {/* ── Services grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ icon: Icon, title, desc, href }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={href}
                className="group flex flex-col h-full border border-[#e8e8e8] bg-[#fafaf8] p-7
                           hover:border-primary hover:shadow-[0_4px_28px_rgba(0,166,81,0.09)]
                           transition-all duration-300 relative overflow-hidden"
              >
                {/* Top green bar — slides in on hover */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] bg-primary
                                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />

                {/* Corner notch */}
                <div
                  className="absolute -top-px -right-px w-4 h-4 bg-primary
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 flex items-center justify-center
                                bg-primary/10 group-hover:bg-primary
                                transition-colors duration-300 mb-6 shrink-0"
                >
                  <Icon
                    className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-[15px] font-black uppercase tracking-[0.07em] text-[#1a1a1a]! mb-2 leading-snug"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {title}
                </h3>

                {/* Accent line */}
                <div className="h-0.5 w-8 bg-accent mb-3" />

                {/* Description */}
                <p
                  className="text-[13px] text-[#666] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {desc}
                </p>

                {/* Learn more */}
                <div
                  className="mt-5 flex items-center gap-2 text-primary text-[12px] font-bold uppercase tracking-widest
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Core_Home;
