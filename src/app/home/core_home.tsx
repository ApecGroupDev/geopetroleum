"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Camera, Factory } from "lucide-react";
import React from "react";

const Core_Home: React.FC = () => {
  return (
    <section className="relative bg-[#ffffff] text-[#171717] py-24 lg:py-32">
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
            As one of the most trusted <span className="font-semibold">environmental companies in Texas</span>, we combine technical precision
            with hands-on service — ensuring your project meets every safety, quality, and regulatory standard.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Leaf className="w-12 h-12 text-primary" />,
              title: "Environmental Risk Assessment",
              desc: "Identify and mitigate hazards before they impact your operations.",
            },
            {
              icon: <ShieldCheck className="w-12 h-12 text-primary" />,
              title: "Environmental Compliance Solutions",
              desc: "Stay ahead of EPA and TCEQ regulations with full compliance support.",
            },
            {
              icon: <Camera className="w-12 h-12 text-primary" />,
              title: "Canopy Imaging Solutions",
              desc: "Custom canopy design, fabrication, and lighting that elevate your brand.",
            },
            {
              icon: <Factory className="w-12 h-12 text-primary" />,
              title: "Fuel Tanks Manufacturing",
              desc: "Precision-built aboveground and underground tanks for maximum safety and performance.",
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
    </section>
  );
};

export default Core_Home;
