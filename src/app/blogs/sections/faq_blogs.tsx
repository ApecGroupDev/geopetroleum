"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const FAQ_Blogs = () => {
  const faqs = [
    {
      question: "How often is the blog updated?",
      answer:
        "We publish new content weekly, featuring the latest trends, compliance insights, and operational best practices.",
    },
    {
      question: "Is the content relevant to my region?",
      answer:
        "Yes — we tailor articles for Houston, Texas, and the Southeast U.S., aligning with both local and national petroleum regulations.",
    },
    {
      question: "Can I request topics or ask questions?",
      answer:
        "Absolutely! Email info@geopetroleum.com — your question or idea may become our next featured post.",
    },
    {
      question: "Is this content beginner-friendly?",
      answer:
        "Yes — every article balances technical accuracy with simple explanations for easy understanding, no matter your experience level.",
    },
    {
      question: "Can I share the blog posts with my team or clients?",
      answer:
        "Of course! Sharing helps us build a stronger, more safety-conscious petroleum community.",
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

export default FAQ_Blogs;
