"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Address",
    value: "40 Lyerly Street, Houston TX 77022",
    href: null,
    multiline: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "844-GEO-4040",
    href: "tel:844-GEO-4040",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@GeoPetroleum.com",
    href: "mailto:info@geopetroleum.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday–Friday, 8AM–5PM CST",
    href: null,
  },
];

const STEPS = [
  {
    number: "01",
    title: "Quick Response",
    desc: "We respond to all inquiries within one business day.",
  },
  {
    number: "02",
    title: "Consultation",
    desc: "Our experts review your goals and provide tailored recommendations.",
  },
  {
    number: "03",
    title: "Site Visit or Estimate",
    desc: "For larger projects, we offer detailed inspections or custom quotes.",
  },
  {
    number: "04",
    title: "Follow-Through",
    desc: "From consultation to completion, we stay by your side — and beyond.",
  },
];

const OfficeProcess_Contact = () => {
  return (
    <section className="relative bg-[#f5f4f0] py-24 lg:py-32 overflow-hidden">
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
        className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16
                      grid lg:grid-cols-2 gap-16 lg:gap-20 items-start"
      >
        {/* ══ LEFT: Office info ══ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Find Us
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Our <span className="text-primary">Office</span>
          </h2>

          <div className="mt-6 mb-8 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          {/* Contact details — industrial panel */}
          <div className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm max-w-sm mx-auto lg:mx-0">
            <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
            <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
            <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
            <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />
            <div className="h-[3px] w-full bg-primary" />

            <div className="divide-y divide-[#f0f0f0]">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 px-5 py-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-primary shrink-0 mt-0.5">
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
          </div>

          {/* CTA */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <a
              href="#MainContactForm"
              className="group inline-flex items-center gap-3 px-7 py-4
                         bg-primary text-white
                         font-bold text-sm uppercase tracking-widest
                         transition-all duration-300 hover:bg-[#008f45] hover:gap-5"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Contact Our Team
              <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>

        {/* ══ RIGHT: Process steps ══ */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Our Process
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            How We <span className="text-primary">Work With You</span>
          </h2>

          <div className="mt-6 mb-8 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          <p
            className="text-[#555] text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            When you reach out to{" "}
            <span className="font-semibold text-[#1a1a1a]">Geo Petroleum</span>,
            expect a transparent, fast, and professional experience:
          </p>

          {/* Steps */}
          <div className="relative flex flex-col gap-0">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-10 bottom-10 w-px bg-[#e0e0e0] hidden lg:block" />

            {STEPS.map(({ number, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-5 pb-8 last:pb-0 justify-center lg:justify-start"
              >
                {/* Number box */}
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0
                              bg-primary text-white z-10"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  <span className="text-[11px] font-black tracking-widest">
                    {number}
                  </span>
                </div>

                <div className="text-left pt-1">
                  <h3
                    className="text-[14px] font-black uppercase tracking-[0.08em] text-[#1a1a1a]! mb-1"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[13px] text-[#666] leading-relaxed"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p
            className="mt-8 text-[13px] text-[#888] leading-relaxed border-l-[3px] border-primary pl-4 text-left max-w-md mx-auto lg:mx-0"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            We don’t just provide services — we build long-term partnerships
            based on trust, safety, and performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeProcess_Contact;
