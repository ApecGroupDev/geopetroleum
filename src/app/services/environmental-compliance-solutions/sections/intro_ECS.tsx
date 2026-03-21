"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro_ECS = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      <div className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }} />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10
                      grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Environmental Compliance Solutions That{" "}
            <span className="text-primary">Protect Your Business and the Environment</span>
          </h2>
          <div className="mt-6 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <div className="space-y-5" style={{ fontFamily: "var(--font-body), sans-serif" }}>
            {[
              <>With 35+ years of experience, <span className="font-semibold text-primary">Geo Petroleum</span> provides trusted environmental compliance solutions in Houston and across Texas — keeping your operations safe, certified, and inspection-ready.</>,
              <>The complex web of <span className="font-semibold text-[#1a1a1a]">EPA and TCEQ regulations</span> can overwhelm even experienced operators. A single missed inspection or incorrect report can lead to fines, delays, or serious environmental damage.</>,
              <>At <span className="font-semibold text-primary">Geo Petroleum</span>, we take the complexity off your plate. Our team manages testing, permitting, documentation, remediation, and inspections to keep your business safe and in full regulatory compliance.</>,
            ].map((para, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-[#555] text-base sm:text-[17px] leading-relaxed">{para}</motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="border-l-[3px] border-primary pl-5 py-1"
            >
              <p className="text-[#444] text-base sm:text-[17px] leading-relaxed italic">
                Our certified environmental consultants work closely with fuel retailers, industrial operators, and
                municipalities — ensuring every site meets EPA, TCEQ, and state-level regulations without stress or surprises.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: Image panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          <div className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm">
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />
            <div className="h-[3px] w-full bg-primary" />
            <div className="overflow-hidden">
              <Image src="/images/services/ECS/Intro_ECS.webp" alt="Environmental Compliance Services"
                width={700} height={500}
                className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div className="px-5 py-3 flex items-center justify-between border-t border-[#f0f0f0]">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Compliance Operations</span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-25" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_ECS;