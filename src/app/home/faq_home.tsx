"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const HomeFAQSection = () => {
  const faqs = [
    {
      question: "What services does Geo Petroleum provide?",
      answer:
        "We specialize in petroleum equipment installation, environmental compliance solutions, fuel tank manufacturing, and canopy imaging services tailored to your operational needs.",
    },
    {
      question: "Do you handle large-scale commercial projects?",
      answer:
        "Absolutely. Our team has extensive experience with both small and large-scale commercial projects — from fueling stations to environmental monitoring sites.",
    },
    {
      question: "Are your systems compliant with local regulations?",
      answer:
        "Yes. All our services follow strict environmental and safety standards to ensure full regulatory compliance across every project.",
    },
    {
      question: "How can I request a project quote?",
      answer:
        "You can reach out to us directly via phone at 855-444-2732 or email at info@geopetroleum.com. Our team will respond promptly to discuss your project details.",
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

export default HomeFAQSection;
