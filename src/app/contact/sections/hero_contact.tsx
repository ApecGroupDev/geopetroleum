"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Zap } from "lucide-react";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Call Us",
    value: "844-GEO-4040",
    href: "tel:844-GEO-4040",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@geopetroleum.com",
    href: "mailto:info@geopetroleum.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "40 Lyerly St, Houston TX 77022",
    href: null,
  },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 8AM – 6PM CST", href: null },
];

const STATS = [
  { value: "35+", label: "Years Experience" },
  { value: "0", label: "Incident Record" },
  { value: "TX+", label: "Regional Coverage" },
  { value: "100%", label: "100% Licensed and Insured" },
];

const Hero_Contact: React.FC = () => {
  const scrollToForm = () => {
    const target = document.getElementById("MainContactForm");
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 200;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#f5f4f0] overflow-hidden">
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
        className="absolute top-0 right-0 w-72 h-full pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      {/* ── Green radial glow left ── */}
      <div className="absolute top-0 left-0 w-[600px] h-full bg-[radial-gradient(ellipse_at_top_left,rgba(0,166,81,0.07),transparent_65%)] pointer-events-none" />

      {/* ── Corner brackets ── */}
      <div className="absolute top-8 left-6 lg:left-14 opacity-25">
        <div className="w-7 h-7 border-t-2 border-l-2 border-secondary" />
      </div>
      <div className="absolute top-8 right-6 lg:right-14 opacity-25">
        <div className="w-7 h-7 border-t-2 border-r-2 border-secondary" />
      </div>

      {/* ══════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════ */}
      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
                      pt-32 pb-16 lg:pt-40 lg:pb-20
                      flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-12 z-10"
      >
        {/* ── LEFT: Text ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 max-w-xl text-center lg:text-left"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Get In Touch
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-5xl xl:text-6xl font-black leading-[1.05] text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Let’s Build <span className="text-primary">Smarter,</span>
            <br />
            <span className="text-primary">Safer</span> Solutions
            <br />— Together
          </h1>

          {/* Yellow accent bar */}
          <div className="mt-6 mb-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          {/* Subtext */}
          <p
            className="text-[#555] text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            <span className="font-semibold text-[#1a1a1a]">35+ years</span> of
            trusted petroleum and environmental expertise. Fully licensed,
            insured, and{" "}
            <span className="font-semibold text-[#1a1a1a]">Houston-based</span>,
            delivering compliance-first solutions across{" "}
            <span className="font-semibold text-[#1a1a1a]">Texas</span> and the{" "}
            <span className="font-semibold text-[#1a1a1a]">Southeast.</span>
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <button
              onClick={scrollToForm}
              className="group inline-flex items-center gap-3 px-7 py-4
                         bg-primary text-white
                         font-bold text-sm uppercase tracking-widest
                         transition-all duration-300 hover:bg-[#008f45] hover:gap-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Contact Us Now
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* ── RIGHT: Stats + Contact info ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[440px] xl:w-[500px] shrink-0 flex flex-col gap-4"
        >
          {/* ── Stats 2x2 grid ── */}
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                className="relative border border-[#d8d8d8] bg-white p-5 group
                           hover:border-primary transition-all duration-300 overflow-hidden"
              >
                {/* Sliding top bar on hover */}
                <div
                  className="absolute top-0 left-0 w-full h-[3px] bg-primary
                                scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                />
                {/* Corner notch */}
                <div
                  className="absolute -top-px -right-px w-3 h-3 bg-primary
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span
                  className="block text-3xl xl:text-4xl font-black text-primary leading-none mb-1"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.2em] text-[#999]"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* ── Contact info panel ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm"
          >
            <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
            <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
            <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
            <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />
            <div className="h-[3px] w-full bg-primary" />

            <div className="divide-y divide-[#f0f0f0]">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 px-5 py-3.5"
                >
                  <div className="w-8 h-8 flex items-center justify-center bg-primary shrink-0">
                    <Icon
                      className="w-3.5 h-3.5 text-white"
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa] mb-0.5"
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[13px] font-semibold text-[#1a1a1a] hover:text-primary transition-colors duration-200"
                        style={{ fontFamily: "var(--font-body), sans-serif" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <span
                        className="text-[13px] font-semibold text-[#1a1a1a]"
                        style={{ fontFamily: "var(--font-body), sans-serif" }}
                      >
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Panel footer */}
            <div className="px-5 py-3 border-t border-[#f0f0f0] flex items-center gap-2 bg-white">
              <Zap className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                100% licensed and insured
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════
          BOTTOM GREEN BANNER
      ══════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        className="relative z-30 bg-primary"
      >
        <div
          className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-4
                        flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p
            className="text-white text-sm font-bold uppercase tracking-wider text-center sm:text-left"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Ready to talk? Our team responds within 1 business day.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white text-[10px] uppercase tracking-widest opacity-80">
              100% licensed and insured
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero_Contact;
