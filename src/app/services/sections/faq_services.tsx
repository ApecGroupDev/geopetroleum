"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What are environmental operations?",
    answer:
      "Environmental operations include compliance management, site inspection, and risk mitigation to ensure your facility meets all state and federal environmental regulations.",
  },
  {
    question: "Do you provide environmental consulting in Houston?",
    answer:
      "Yes — our Houston-based experts offer environmental consulting services, including testing, permitting, and ongoing compliance support.",
  },
  {
    question:
      "What makes Geo Petroleum different from other environmental companies in Houston, TX?",
    answer:
      "We combine 35+ years of experience with full-scope capabilities — petroleum infrastructure, environmental compliance, canopy design, and fuel tank fabrication — all handled in-house.",
  },
  {
    question: "Are your consultants licensed in Texas?",
    answer:
      "Yes — every environmental consultant in Texas on our team is fully certified and trained to meet state and federal regulatory requirements.",
  },
  {
    question: "Do you work with both small and large operations?",
    answer:
      "Absolutely. We support independent gas stations, multi-site retailers, and industrial operators across Texas and the Southeast.",
  },
];

const FAQ_Services = () => {
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
        className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
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
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          <p
            className="mt-5 text-[#666] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            Find quick answers about our services, safety standards, and project
            process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FAQ_Services;
