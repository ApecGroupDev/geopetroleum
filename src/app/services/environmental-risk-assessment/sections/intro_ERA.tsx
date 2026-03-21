"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro_ERA = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10
                      grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              What We Do
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Environmental Risk Assessments That{" "}
            <span className="text-primary">Protect Your Business</span>
          </h2>

          <div className="mt-6 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          <div className="space-y-5" style={{ fontFamily: "var(--font-body), sans-serif" }}>
            {[
              "When you operate a fueling site, industrial facility, or municipal yard, environmental risks are always present — from soil contamination and groundwater leaks to stormwater runoff and regulatory exposure. Ignoring these issues can lead to fines, cleanup costs, or permanent site damage.",
              <>At <span className="font-semibold text-primary">Geo Petroleum</span>, we specialize in Environmental Risk Assessments (ERA) that identify potential hazards, evaluate environmental impact, and implement solutions before they escalate.</>,
              "Whether you’re opening a new site, expanding operations, or maintaining an existing facility, we provide detailed assessments that keep your business safe, compliant, and proactive.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-[#555] text-base sm:text-[17px] leading-relaxed"
              >
                {para}
              </motion.p>
            ))}

            {/* Pull quote */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              className="border-l-[3px] border-primary pl-5 py-1"
            >
              <p className="text-[#444] text-base sm:text-[17px] leading-relaxed italic">
                Still wondering <span className="font-semibold not-italic">what is an environmental risk assessment?</span> It’s
                the process of identifying and managing environmental threats before they harm your operations, employees,
                or community — and that’s exactly what{" "}
                <span className="font-semibold text-primary not-italic">Geo Petroleum</span> does best.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: Image in framed panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm">
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />
            <div className="h-[3px] w-full bg-primary" />
            <div className="overflow-hidden">
              <Image
                src="/images/services/ERA/Intro_ERA.webp"
                alt="Environmental Risk Assessment"
                width={700}
                height={500}
                className="object-cover w-full h-full hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="px-5 py-3 flex items-center justify-between border-t border-[#f0f0f0]">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[#aaa]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                Field Assessment
              </span>
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

export default Intro_ERA;