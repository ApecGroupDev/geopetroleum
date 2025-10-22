"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Camera, Factory } from "lucide-react";
import React from "react";

const CoreServices: React.FC = () => {
  return (
    <section className="relative bg-[#ffffff] text-[#171717] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c0c0c]!">
            Comprehensive <span className="text-primary">Solutions</span> for Every Project
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end services that keep your business moving — from fueling infrastructure
            to environmental compliance and construction management.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Leaf className="w-12 h-12 text-primary" />,
              title: "Environmental Risk Assessment",
              desc: "In-depth site evaluations and contamination analysis to ensure your facilities meet the highest environmental standards.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-primary" />,
              title: "Environmental Compliance Solutions",
              desc: "Custom compliance programs, reporting systems, and ongoing monitoring to keep your operations fully aligned with regulations.",
            },
            {
              icon: <Camera className="w-12 h-12 text-primary" />,
              title: "Canopy Imaging Solutions",
              desc: "Advanced imaging and inspection technology for canopy structures — improving accuracy, safety, and documentation.",
            },
            {
              icon: <Factory className="w-12 h-12 text-primary" />,
              title: "Fuel Tanks Manufacturing",
              desc: "Precision-engineered tanks designed and built to meet modern fuel system demands and long-term durability standards.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f9f9f9] border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#0c0c0c]! mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accent Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-linear-to-t from-primary/20 to-transparent  pointer-events-none" />
    </section>
  );
};

export default CoreServices;
