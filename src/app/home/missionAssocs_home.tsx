"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ASSOCIATIONS = [
  {
    src: "/logos/associations/PEI.webp",
    alt: "Petroleum Equipment Institute",
    name: "Petroleum Equipment Institute (PEI)",
    width: 80,
  },
  {
    src: "/logos/associations/TFFA.webp",
    alt: "Texas Food & Fuel Association",
    name: "Texas Food & Fuel Association",
    width: 100,
  },
  {
    src: "/logos/associations/GHRA.webp",
    alt: "GHRA",
    name: "Greater Houston Retailers Cooperative (GHRA)",
    width: 90,
  },
];

const MissionAssocs_Home = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f4f0] overflow-hidden">
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

      {/* ── Green radial glow left ── */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,166,81,0.06),transparent_70%)] pointer-events-none" />

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
                      flex flex-col lg:flex-row items-stretch justify-between gap-0"
      >
        {/* ══ LEFT — Mission ══ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center text-center lg:text-left
                     py-10 lg:py-0 lg:pr-16
                     border-b border-[#e0e0e0] lg:border-b-0 lg:border-r lg:border-[#e0e0e0]"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              What Drives Us
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Our <span className="text-primary">Mission</span>
          </h2>

          {/* Yellow accent bar */}
          <div className="mt-5 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-12 bg-accent" />
          </div>

          <p
            className="text-[#555] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            To deliver fast, compliant, and high-quality petroleum and
            environmental services that keep your operations{" "}
            <span className="font-semibold text-[#1a1a1a]">
              safe, efficient, and environmentally responsible
            </span>{" "}
            — because your time, investment, and reputation deserve the highest
            standard of care.
          </p>
        </motion.div>

        {/* ══ RIGHT — Associations ══ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left
                     py-10 lg:py-0 lg:pl-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Industry Memberships
            </span>
          </div>

          <h3
            className="text-2xl sm:text-3xl font-black text-[#1a1a1a]! leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Proud Member Of
          </h3>

          {/* Association list */}
          <ul className="flex flex-col items-center lg:items-start gap-3 mb-6">
            {ASSOCIATIONS.map(({ alt, name }) => (
              <li key={alt} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                <span
                  className="text-[#555]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {name}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="text-[#888] leading-relaxed max-w-md mx-auto lg:mx-0 mb-8"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            Our memberships reflect our commitment to safety, compliance, and
            professional excellence in every project we deliver.
          </p>

          {/* Logos — big, clean, no container */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
            {ASSOCIATIONS.map(({ src, alt, width }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                width={width * 1.6}
                height={width * 1.6}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionAssocs_Home;
