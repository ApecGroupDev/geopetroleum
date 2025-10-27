"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const FAQ_ECS = () => {
  const faqs = [
    {
      question: "Who do you serve with your environmental compliance services?",
      answer:
        "We serve fuel retailers, distributors, fleet operators, and industrial clients throughout Houston and the Southeast.",
    },
    {
      question: "Can you handle all compliance paperwork and permitting?",
      answer:
        "Yes — our experts manage all reports, permits, and documentation so your site remains 100% compliant and inspection-ready.",
    },
    {
      question: "Do you provide spill prevention and response?",
      answer:
        "Absolutely. We develop spill prevention systems, emergency response plans, and cleanup strategies to minimize downtime and environmental risk.",
    },
    {
      question: "Are your services specific to Texas regulations?",
      answer:
        "Yes — our Houston-based team understands EPA, TCEQ, and city-level requirements across Texas, ensuring complete local compliance.",
    },
    {
      question: "Do you test both underground and aboveground tanks?",
      answer:
        "Yes — our certified technicians perform UST and AST testing, including leak detection and tank integrity evaluations.",
    },
    {
      question: "What makes Geo Petroleum different from other environmental companies in Houston, TX?",
      answer:
        "Unlike most environmental companies in Houston, TX, we provide end-to-end compliance support — from tank testing to remediation — under one roof.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900!">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Find quick answers about our services, safety standards, and project
            process.
          </p>
        </motion.div>

        <FAQ faqs={faqs} />
      </div>
    </section>
  );
};

export default FAQ_ECS;
