"use client";

import { motion } from "framer-motion";
import MainContactForm from "@/components/mainContactForm";
import { CheckCheck } from "lucide-react";

const REASONS = [
  "Direct access to seasoned petroleum experts",
  "Fast, accurate, and actionable support",
  "Licensed, insured & Houston-based",
  "Compliance-first across Texas & Southeast",
];

const Intro_Contact = () => {
  return (
    <section className="relative bg-[#f5f4f0] py-28 lg:py-36 overflow-hidden">
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

      {/* ── Green radial glow ── */}
      <div className="absolute top-0 right-0 w-[600px] h-full bg-[radial-gradient(ellipse_at_top_right,rgba(0,166,81,0.06),transparent_65%)] pointer-events-none" />

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10
                      flex flex-col items-center xl:flex-row xl:items-start justify-between gap-16 lg:gap-20"
      >
        {/* ── LEFT: Text ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 max-w-xl text-center xl:text-left lg:pt-4"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center xl:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Reach Out
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Have a Question?
            <br />
            Need a Quote?
            <br />
            <span className="text-primary">We’re Here.</span>
          </h2>

          {/* Yellow accent bar */}
          <div className="mt-6 mb-6 flex justify-center xl:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          {/* Body */}
          <div
            className="space-y-4 text-[#555] text-base sm:text-[17px] leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            <p>
              At{" "}
              <span className="font-semibold text-[#1a1a1a]">
                Geo Petroleum
              </span>
              , we make it simple to connect with real professionals who
              understand the complexity of petroleum operations.
            </p>
            <p>
              Whether you’re planning a new fueling station, upgrading tanks or
              canopy systems, or ensuring environmental compliance — our
              Houston-based team is here to guide you every step of the way.
            </p>
          </div>

          {/* Reasons list */}
          <ul className="mt-8 flex flex-col items-center xl:items-start gap-3">
            {REASONS.map((reason, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span className="w-6 h-6 flex items-center justify-center bg-primary shrink-0">
                  <CheckCheck
                    className="w-3.5 h-3.5 text-white"
                    strokeWidth={2.5}
                  />
                </span>
                <span
                  className="text-[13px] text-[#555]"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}
                >
                  {reason}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── RIGHT: Form panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full max-w-[560px] lg:w-[560px] xl:w-[560px] shrink-0"
        >
          {/* Industrial framed panel */}
          <div
            id="MainContactForm"
            className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm"
          >
            <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
            <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />

            {/* Green top bar */}
            <div className="h-[3px] w-full bg-primary" />

            <div className="px-7 sm:px-10 pt-8 pb-10">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-6 bg-primary" />
                <h3
                  className="text-[11px] font-black tracking-[0.22em] uppercase text-[#1a1a1a]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Send Us a Message
                </h3>
              </div>

              <MainContactForm />
            </div>
          </div>

          {/* Response time badge */}
          <div className="mt-4 flex items-center justify-end gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span
              className="text-[11px] text-[#999] uppercase tracking-[0.18em]"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Responds within 1 business day
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_Contact;
