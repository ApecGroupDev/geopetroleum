"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck,
  FileCheck,
  Image as ImageIcon,
  Droplets,
} from "lucide-react";

const SERVICES = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Environmental Risk Assessment",
    desc: "Identify and mitigate potential hazards before they become costly problems. Our specialists perform comprehensive site evaluations, soil and groundwater testing, and risk mitigation planning — ensuring your facility stays compliant and environmentally sound.",
    link: "/services/environmental-risk-assessment",
    external: false,
  },
  {
    icon: FileCheck,
    num: "02",
    title: "Environmental Compliance Solutions",
    desc: "Protect your business from fines and shutdowns. We handle permitting, inspections, documentation, and environmental consulting in Houston — helping you meet every state and federal regulation with ease.",
    link: "/services/environmental-compliance-solutions",
    external: false,
  },
  {
    icon: ImageIcon,
    num: "03",
    title: "Canopy Imaging Solutions",
    desc: "Make your station stand out. We design, fabricate, and install custom canopies and LED lighting systems that enhance your brand visibility and customer experience.",
    link: "/services/canopy-imaging-solutions",
    external: false,
  },
  {
    icon: Droplets,
    num: "04",
    title: "Fuel Tank Manufacturing",
    desc: "Built for safety and performance. We engineer, fabricate, and install aboveground and underground fuel tanks that meet EPA, UL, and API standards — combining structural integrity with environmental compliance.",
    link: "https://www.metalproductsusa.com/",
    external: true,
  },
];

const Services_Services = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#f5f4f0] overflow-hidden">
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
        className="absolute top-0 right-0 w-56 h-full pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      <div
        id="ServicesList"
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10"
      >
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
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
            Our Petroleum &amp; Environmental Services
          </h2>

          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          <p
            className="mt-6 text-[#555] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            Comprehensive solutions engineered for{" "}
            <span className="font-semibold text-[#1a1a1a]">compliance</span>,{" "}
            <span className="font-semibold text-[#1a1a1a]">safety</span>, and{" "}
            <span className="font-semibold text-[#1a1a1a]">
              long-term performance
            </span>
            .
          </p>
        </motion.div>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map(
            ({ icon: Icon, num, title, desc, link, external }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={link}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group relative flex flex-col h-full border border-[#e0e0e0] bg-white p-1
                           hover:border-primary hover:shadow-[0_6px_30px_rgba(0,166,81,0.09)]
                           transition-all duration-300"
                >
                  {/* Sliding top bar */}
                  <div
                    className="absolute top-0 left-0 w-full h-[3px] bg-primary
                                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                  />

                  {/* Corner notch */}
                  <div
                    className="absolute -top-px -right-px w-4 h-4 bg-primary
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="flex flex-col h-full p-8">
                    {/* Number + icon row */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="w-14 h-14 flex items-center justify-center shrink-0
                                    bg-primary/10 group-hover:bg-primary
                                    transition-colors duration-300"
                      >
                        <Icon
                          className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300"
                          strokeWidth={1.6}
                        />
                      </div>
                      <span
                        className="text-[11px] font-black tracking-[0.2em] text-[#ddd] group-hover:text-primary transition-colors duration-300"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                      >
                        {num}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl font-black text-[#1a1a1a]! mb-3 group-hover:text-primary transition-colors duration-300 leading-snug"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[14px] text-[#666] leading-relaxed flex-1"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}
                    >
                      {desc}
                    </p>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-2 pt-4 border-t border-[#f0f0f0]">
                      <span
                        className="text-[12px] font-bold uppercase tracking-widest text-primary group-hover:gap-3 transition-all duration-300"
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                      >
                        Learn More
                      </span>
                      <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Services_Services;
