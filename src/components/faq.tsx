"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQItemComponent: React.FC<{
  faq: FAQItem;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}> = ({ faq, index, isOpen, toggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`relative border bg-white overflow-hidden transition-all duration-300
        ${
          isOpen
            ? "border-primary shadow-[0_4px_20px_rgba(0,166,81,0.08)]"
            : "border-[#e0e0e0] hover:border-[#c0c0c0]"
        }`}
    >
      {/* Left accent bar — visible when open */}
      <div
        className={`absolute top-0 left-0 w-[3px] h-full bg-primary transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Top corner notch — visible when open */}
      <div
        className={`absolute -top-px -right-px w-4 h-4 bg-primary transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left px-6 py-5 gap-4 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          {/* Number */}
          <span
            className={`text-[11px] font-black tracking-widest shrink-0 transition-colors duration-200 ${
              isOpen ? "text-primary" : "text-[#ccc]"
            }`}
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`text-[15px] font-bold transition-colors duration-200 ${
              isOpen ? "text-primary" : "text-[#1a1a1a]"
            }`}
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {faq.question}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`w-8 h-8 flex items-center justify-center shrink-0 border transition-all duration-200 ${
            isOpen
              ? "bg-primary border-primary text-white"
              : "border-[#e0e0e0] text-[#999]"
          }`}
        >
          {isOpen ? (
            <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
          ) : (
            <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
          )}
        </div>
      </button>

      {/* Answer */}
      <motion.div
        animate={{ height }}
        transition={{ duration: 0.32, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div
          ref={contentRef}
          className="pl-16 pr-6 pb-5 text-[#555] text-[14px] leading-relaxed"
          style={{ fontFamily: "var(--font-body), sans-serif" }}
        >
          {faq.answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <FAQItemComponent
          key={index}
          faq={faq}
          index={index}
          isOpen={openIndexes.includes(index)}
          toggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
