"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  Building2,
  Factory,
  Wrench,
  ClipboardList,
} from "lucide-react";

const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Environmental Risk Assessment",
    desc: "Identify and mitigate potential site hazards before they escalate.",
  },
  {
    icon: FileCheck2,
    title: "Environmental Compliance Solutions",
    desc: "Inspections, permitting, and documentation for full EPA and TCEQ compliance.",
  },
  {
    icon: Building2,
    title: "Canopy Imaging Solutions",
    desc: "Custom canopy design, fabrication, and installation to elevate your brand presence.",
  },
  {
    icon: Factory,
    title: "Fuel Tank Manufacturing",
    desc: "Precision-built aboveground and underground tanks engineered for reliability.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Testing Services",
    desc: "Keep your fueling systems safe and efficient with expert inspections.",
  },
  {
    icon: ClipboardList,
    title: "Consultation & Project Planning",
    desc: "End-to-end guidance from concept through completion.",
  },
];

const Overview_Contact = () => {
  const scrollToForm = () => {
    const target = document.getElementById("MainContactForm");
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 200;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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

      {/* ── Diagonal stripe accent (right edge) ── */}
      <div
        className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      {/* ── Green radial glow ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,166,81,0.05),transparent_70%)] pointer-events-none" />

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10
                      grid xl:grid-cols-2 gap-16 items-center"
      >
        {/* ── LEFT: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center xl:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Our Services
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-center xl:text-start text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            What We Can <span className="text-primary">Help You With</span>
          </h2>

          {/* Yellow accent bar */}
          <div className="mt-6 mb-6 flex justify-center xl:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          <p
            className="text-[#555] text-base sm:text-lg text-center xl:text-start leading-relaxed max-w-lg mx-auto xl:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            As a petroleum services company in Houston,{" "}
            <span className="font-semibold text-[#1a1a1a]">Geo Petroleum</span>{" "}
            provides one partner for construction, compliance, and maintenance —
            all under one trusted name.
          </p>

          <div className="mt-10 flex justify-center xl:justify-start">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 px-7 py-4
                         bg-primary text-white
                         font-bold text-sm uppercase tracking-widest
                         transition-all duration-300 hover:bg-[#008f45] hover:gap-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Schedule a Consultation
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT: Services grid ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group relative border border-[#e8e8e8] bg-[#fafaf8] p-5
                         hover:border-primary hover:shadow-[0_4px_20px_rgba(0,166,81,0.08)]
                         transition-all duration-300 overflow-hidden"
            >
              {/* Sliding top green bar */}
              <div
                className="absolute top-0 left-0 w-full h-[3px] bg-primary
                              scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
              />

              {/* Corner notch */}
              <div
                className="absolute -top-px -right-px w-3 h-3 bg-primary
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              <div className="flex items-start gap-4">
                {/* Icon square */}
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0
                                bg-primary/10 group-hover:bg-primary
                                transition-colors duration-300"
                >
                  <Icon
                    className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h3
                    className="text-[13px] font-black uppercase tracking-[0.07em] text-[#1a1a1a]! mb-1.5 leading-snug"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[12px] text-[#666] leading-relaxed"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Overview_Contact;
