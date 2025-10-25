"use client";

import { motion } from "framer-motion";
import { CheckCircle, Shield, Wrench, Clock } from "lucide-react";
import React from "react";

const Expertise_Home: React.FC = () => {
  return (
    <section className="relative bg-[#f8f9fa] text-[#171717] py-24 lg:py-32 overflow-hidden">
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
            Why Businesses Trust <span className="text-primary">Geo Petroleum</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            For over three decades, we’ve been the backbone of reliable petroleum equipment,
            construction, and compliance services. Our commitment to quality, safety, and client success
            defines who we are.
          </p>
        </motion.div>

        {/* Bullet Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          {[
            {
              icon: <CheckCircle className="text-primary w-10 h-10 mb-4" />,
              title: "Proven Experience",
              desc: "Over 35 years serving top petroleum and construction companies across the U.S.",
            },
            {
              icon: <Shield className="text-primary w-10 h-10 mb-4" />,
              title: "Safety & Compliance First",
              desc: "We lead with integrity, meeting environmental and safety regulations at every step.",
            },
            {
              icon: <Wrench className="text-primary w-10 h-10 mb-4" />,
              title: "Full-Service Solutions",
              desc: "From design to installation to maintenance — everything handled under one roof.",
            },
            {
              icon: <Clock className="text-primary w-10 h-10 mb-4" />,
              title: "On-Time Project Delivery",
              desc: "Our teams deliver with precision and speed, keeping your operations on schedule.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-[#0c0c0c]! mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Accent Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[140px] bg-linear-to-t from-primary/20 to-transparent pointer-events-none" />
    </section>
  );
};

export default Expertise_Home;
