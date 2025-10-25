"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const FAQ_Careers = () => {
  const faqs = [
    {
      question: "Do I need petroleum industry experience?",
      answer:
        "Not always. We provide full training for many roles — especially in manufacturing, service, and site compliance.",
    },
    {
      question: "How fast is the hiring process?",
      answer:
        "We typically review and respond to applications within one week.",
    },
    {
      question: "Do you provide safety and compliance training?",
      answer:
        "Yes — every employee receives safety and environmental compliance training based on current industry standards.",
    },
    {
      question: "Where do you operate?",
      answer:
        "Our headquarters are in Houston, TX, with active projects throughout Texas and the Southeast U.S.",
    },
    {
      question: "What types of petroleum jobs are available?",
      answer:
        "We hire for positions in service, fabrication, field operations, logistics, and environmental management.",
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

export default FAQ_Careers;
