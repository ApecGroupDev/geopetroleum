"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Who do you serve with your environmental compliance services?",
    answer: "We serve fuel retailers, distributors, fleet operators, and industrial clients throughout Houston and the Southeast.",
  },
  {
    question: "Can you handle all compliance paperwork and permitting?",
    answer: "Yes — our experts manage all reports, permits, and documentation so your site remains 100% compliant and inspection-ready.",
  },
  {
    question: "Do you provide spill prevention and response?",
    answer: "Absolutely. We develop spill prevention systems, emergency response plans, and cleanup strategies to minimize downtime and environmental risk.",
  },
  {
    question: "Are your services specific to Texas regulations?",
    answer: "Yes — our Houston-based team understands EPA, TCEQ, and city-level requirements across Texas, ensuring complete local compliance.",
  },
  {
    question: "Do you test both underground and aboveground tanks?",
    answer: "Yes — our certified technicians perform UST and AST testing, including leak detection and tank integrity evaluations.",
  },
  {
    question: "What makes Geo Petroleum different from other environmental companies in Houston, TX?",
    answer: "Unlike most environmental companies in Houston, TX, we provide end-to-end compliance support — from tank testing to remediation — under one roof.",
  },
];

const FAQ_ECS = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
      <div className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }} />

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
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Got Questions?</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Frequently Asked Questions</h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#666] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Find quick answers about our environmental compliance services, safety standards, and project process.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <FAQ faqs={faqs} />
        </div>
      </div>
    </section>
  );
};

export default FAQ_ECS;