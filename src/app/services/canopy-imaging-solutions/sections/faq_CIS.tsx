"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const FAQ_CIS = () => {
  const faqs = [
    {
      question: "Do you handle both design and installation?",
      answer:
        "Yes — our in-house team handles every step, from concept and custom canopy design to fabrication and on-site installation.",
    },
    {
      question: "Can you refurbish or update an existing canopy?",
      answer:
        "Absolutely. We can rebrand, modernize, or retrofit your current canopy with new fascia, framing, or lighting systems.",
    },
    {
      question: "Where do you offer canopy imaging services?",
      answer:
        "We proudly serve Houston, TX, and surrounding regions across Texas and the Southeast.",
    },
    {
      question: "Are your materials weather- and UV-resistant?",
      answer:
        "Yes — all materials are engineered to withstand Texas sun, wind, and storms while retaining their vibrant colors.",
    },
    {
      question: "Can you integrate lighting or digital signage?",
      answer:
        "Yes — we specialize in LED canopy lighting, energy-efficient systems, and digital display integration that attract more customers.",
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

export default FAQ_CIS;
