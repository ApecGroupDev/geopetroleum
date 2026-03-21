"use client";

import { motion } from "framer-motion";
import { Fuel, Building2, Factory, Truck, Store, Wrench } from "lucide-react";
import React from "react";

const INDUSTRIES = [
  {
    icon: Fuel,
    title: "Fuel Retail & Gas Stations",
    desc: "End-to-end design, installation, and maintenance for fueling stations and retail forecourts.",
  },
  {
    icon: Building2,
    title: "Commercial & Industrial Facilities",
    desc: "Reliable compliance and infrastructure support for warehouses, factories, and heavy operations.",
  },
  {
    icon: Factory,
    title: "Manufacturing Plants",
    desc: "Integrated environmental and equipment systems that streamline plant operations and safety.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    desc: "Fueling and containment solutions designed for fleet operations and bulk fuel storage sites.",
  },
  {
    icon: Store,
    title: "Retail Chains & Convenience Stores",
    desc: "Sustainable infrastructure and canopy imaging for multi-site retail and convenience locations.",
  },
  {
    icon: Wrench,
    title: "Service & Maintenance Providers",
    desc: "Collaborating with contractors and maintenance firms to ensure seamless, compliant operation.",
  },
];

const Industries_Home: React.FC = () => {
  return (
    <section className="relative bg-[#f5f4f0] text-[#1a1a1a] py-24 lg:py-32 overflow-hidden">
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
        className="absolute top-0 left-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      {/* ── Corner brackets ── */}
      <div className="absolute top-8 left-6 lg:left-14 opacity-20">
        <div className="w-7 h-7 border-t-2 border-l-2 border-secondary" />
      </div>
      <div className="absolute top-8 right-6 lg:right-14 opacity-20">
        <div className="w-7 h-7 border-t-2 border-r-2 border-secondary" />
      </div>

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
              Our Reach
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Industries{" "}
            <span className="text-primary">We Serve</span>
          </h2>

          <p
            className="mt-5 text-[#666] max-w-2xl mx-auto leading-relaxed text-base sm:text-lg"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            Our experience spans a wide range of industries — from commercial
            fueling to environmental compliance — delivering specialized
            solutions built for performance, reliability, and sustainability.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative border border-[#e0e0e0] bg-white p-7
                         hover:border-primary hover:shadow-[0_4px_28px_rgba(0,166,81,0.09)]
                         transition-all duration-300 overflow-hidden"
            >
              {/* Sliding top green bar */}
              <div
                className="absolute top-0 left-0 w-full h-[3px] bg-primary
                              scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              />

              {/* Corner notch */}
              <div
                className="absolute -top-px -right-px w-4 h-4 bg-primary
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Number label */}
              <div
                className="absolute top-4 right-5 text-[11px] font-black tracking-widest text-[#e0e0e0] group-hover:text-primary/20 transition-colors duration-300"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className="w-13 h-12 flex items-center justify-center
                              bg-primary/10 group-hover:bg-primary
                              transition-colors duration-300 mb-5"
              >
                <Icon
                  className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.8}
                />
              </div>

              {/* Title */}
              <h3
                className="text-[15px] font-black uppercase tracking-[0.07em] text-[#1a1a1a]! mb-2 leading-snug pr-6"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {title}
              </h3>

              {/* Accent line */}
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

export default Industries_Home;
