"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "David H.",
    company: "PetroTech Solutions",
    text: "Geo Petroleum has been instrumental in keeping our fueling operations compliant and efficient. Their attention to detail and commitment to deadlines are unmatched.",
  },
  {
    name: "Maria R.",
    company: "EcoFuel Systems",
    text: "Professional, responsive, and knowledgeable. Geo Petroleum’s team made our site upgrade seamless from start to finish.",
  },
  {
    name: "James P.",
    company: "FuelCo Logistics",
    text: "Their maintenance team is always on point. Quick response, expert repairs, and genuine care for our operations.",
  },
  {
    name: "Sophia L.",
    company: "GreenLine Energy",
    text: "From construction to environmental compliance, Geo Petroleum has proven to be a reliable long-term partner. Highly recommended.",
  },
];

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section className="relative bg-white text-[#171717] py-24 overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-[#171717]!">
          What Our Clients Say
        </h2>

        <div className="relative w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#f9f9f9] rounded-3xl shadow-lg px-8 sm:px-12 py-12 border border-gray-200"
            >
              <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-90" />

              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic">
                “{testimonial.text}”
              </p>

              <div className="mt-4">
                <h4 className="text-[#171717]! font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:text-[#c62931] hover:border-[#c62931] transition-all duration-200"
            >
              ‹
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 text-gray-600 hover:text-[#c62931] hover:border-[#c62931] transition-all duration-200"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === index ? "bg-primary" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
