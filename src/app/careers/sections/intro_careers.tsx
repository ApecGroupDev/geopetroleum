"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Intro_Careers = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10
                      flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Join Our Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Looking for a Stable, Growth-Focused Career in{" "}
            <span className="text-primary">Petroleum &amp; Environmental?</span>
          </h2>
          <div className="mt-6 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <div className="space-y-5" style={{ fontFamily: "var(--font-body), sans-serif" }}>
            {[
              <>At <span className="font-semibold text-primary">Geo Petroleum</span>, we specialize in fuel system design, tank manufacturing, canopy imaging, and environmental compliance services. For over <span className="font-semibold text-[#1a1a1a]">35 years</span>, we’ve built the backbone of fuel infrastructure across Houston, Texas, and the Southeast — and we’re still expanding.</>,
              "Whether you’re a seasoned technician, engineer, or just starting your career, we offer real opportunity, long-term stability, and a team-first environment where your work makes a difference.",
            ].map((para, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-[#555] text-base sm:text-[17px] leading-relaxed">{para}</motion.p>
            ))}
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <Link href="#CareersForm"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-white
                         font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#008f45] hover:gap-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Apply Now
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="w-full lg:w-[520px] xl:w-[560px] shrink-0"
        >
          <div className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm">
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />
            <div className="h-[3px] w-full bg-primary" />
            <div className="overflow-hidden">
              <Image src="/images/careers/Intro_Careers.webp" alt="Geo Petroleum Careers"
                width={600} height={400}
                className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div className="px-5 py-3 flex items-center justify-between border-t border-[#f0f0f0]">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Houston, TX &amp; Southeast</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.18em] text-primary font-bold"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Now Hiring</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_Careers;