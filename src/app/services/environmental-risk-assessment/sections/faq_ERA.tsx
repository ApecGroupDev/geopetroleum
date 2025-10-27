"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const FAQ_ERA = () => {
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

export default FAQ_ERA;
