"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQItemComponent: React.FC<{
  faq: FAQItem;
  isOpen: boolean;
  toggle: () => void;
}> = ({ faq, isOpen, toggle }) => {
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
      className={`border border-gray-200 rounded-2xl bg-white shadow-sm transition-all duration-300 overflow-hidden ${isOpen ? "shadow-md border-[#00a651]/70" : "hover:shadow-md"
        }`}
    >
      {/* Header */}
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left px-6 py-4"
      >
        <span className="text-lg font-medium text-gray-900">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown className="w-5 h-5 text-[#00a651]" />
        </motion.div>
      </button>

      {/* Smooth Animated Height */}
      <motion.div
        animate={{ height }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div
          ref={contentRef}
          className="px-6 pb-4 text-gray-600 text-base leading-relaxed opacity-90"
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
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <FAQItemComponent
          key={index}
          faq={faq}
          isOpen={openIndexes.includes(index)}
          toggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
