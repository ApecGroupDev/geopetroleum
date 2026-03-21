"use client";

import FAQ from "@/components/faq";
import { motion } from "framer-motion";

const faqs = [
  { question: "How often is the blog updated?", answer: "We publish new content weekly, featuring the latest trends, compliance insights, and operational best practices." },
  { question: "Is the content relevant to my region?", answer: "Yes — we tailor articles for Houston, Texas, and the Southeast U.S., aligning with both local and national petroleum regulations." },
  { question: "Can I request topics or ask questions?", answer: "Absolutely! Email info@geopetroleum.com — your question or idea may become our next featured post." },
  { question: "Is this content beginner-friendly?", answer: "Yes — every article balances technical accuracy with simple explanations for easy understanding, no matter your experience level." },
  { question: "Can I share the blog posts with my team or clients?", answer: "Of course! Sharing helps us build a stronger, more safety-conscious petroleum community." },
];

const FAQ_Blogs = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f4f0] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Got Questions?</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Frequently Asked Questions</h2>
          <div className="mt-5 flex justify-center"><div className="h-[3px] w-14 bg-accent" /></div>
          <p className="mt-5 text-[#666] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Find quick answers about the Geo Petroleum Blog, content topics, and how to get involved.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto"><FAQ faqs={faqs} /></div>
      </div>
    </section>
  );
};

export default FAQ_Blogs;