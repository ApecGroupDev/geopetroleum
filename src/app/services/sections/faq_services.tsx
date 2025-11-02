"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const FAQ_Services = () => {
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
      question: "What makes Geo Petroleum different from other environmental companies in Houston, TX?",
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

export default FAQ_Services;
