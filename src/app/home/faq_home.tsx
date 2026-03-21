"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const FAQ_Home = () => {
  const faqs = [
    {
      question: "Who do you serve?",
      answer:
        "We serve fuel retailers, distributors, fleet operators, municipalities, and industrial clients across Texas and the Southeast.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We provide complete petroleum and environmental services — from risk assessment and compliance to canopy imaging and tank manufacturing.",
    },
    {
      question: "Are you one of Houston’s leading environmental companies?",
      answer:
        "Yes — Geo Petroleum is recognized among top Houston environmental companies, known for innovation, safety, and reliability.",
    },
    {
      question: "Do you offer environmental services outside Houston?",
      answer:
        "Absolutely — we offer comprehensive environmental services in Texas and neighboring states, providing inspection, compliance, and remediation expertise.",
    },
    {
      question: "Do you handle permits and regulatory paperwork?",
      answer:
        "Yes — we take care of all compliance documentation, testing, and regulatory reporting so you can focus on your business.",
    },
    {
      question: "Can you help upgrade existing sites or systems?",
      answer:
        "Definitely — our specialists retrofit, modernize, and replace old systems with up-to-date, compliant technology.",
    },
    {
      question: "Do you provide emergency response or spill support?",
      answer:
        "Yes — our rapid-response team is available 24/7 for spills, leaks, and environmental emergencies.",
    },
  ];

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

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Got Questions?
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <p
            className="mt-5 text-[#666] max-w-2xl mx-auto leading-relaxed text-base sm:text-lg"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            Find quick answers about our services, safety standards, and project
            process.
          </p>
        </motion.div>

        {/* ── FAQ list ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <FAQ faqs={faqs} />
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ_Home;
