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
        " Yes — our rapid-response team is available 24/7 for spills, leaks, and environmental emergencies.",
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

export default FAQ_Home;
