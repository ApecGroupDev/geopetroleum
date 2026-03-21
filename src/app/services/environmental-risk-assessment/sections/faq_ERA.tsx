"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who do you serve with your environmental risk assessment services?",
    answer:
      "We work with gas stations, fuel distributors, fleet operators, industrial sites, and municipalities throughout Houston, Texas, and the Southeast.",
  },
  {
    question: "What’s included in an Environmental Risk Assessment?",
    answer:
      "Our assessments include sampling, inspection, tank integrity testing, and site reporting to detect and mitigate environmental hazards before they become costly.",
  },
  {
    question: "Do you handle both aboveground and underground storage tanks?",
    answer:
      "Yes — we evaluate both USTs and ASTs for safety, corrosion, and leak prevention, ensuring compliance with EPA and TCEQ standards.",
  },
  {
    question: "Can you provide compliance documentation for regulators?",
    answer:
      "Absolutely. Our reports meet EPA, TCEQ, and federal documentation standards, satisfying requirements under the Environmental Impact Assessment Act.",
  },
  {
    question: "Do you assist with mitigation if issues are found?",
    answer:
      "Yes — our team develops complete remediation and corrective action plans to restore site safety and compliance.",
  },
  {
    question: "Do you offer environmental site assessments for property transactions?",
    answer:
      "Yes, we provide Phase I and Phase II Environmental Site Assessments to help buyers, developers, and investors make informed decisions.",
  },
  {
    question: "How do your consultants in Houston support clients?",
    answer:
      "Our certified environmental consultants in Houston provide local expertise, site evaluations, and tailored strategies for long-term environmental safety.",
  },
];

const FAQ_ERA = () => {
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
        className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Got Questions?
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Frequently Asked Questions
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#666] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Find quick answers about our environmental risk assessment services, safety standards, and project process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQ faqs={faqs} />
        </div>

      </div>
    </section>
  );
};

export default FAQ_ERA;