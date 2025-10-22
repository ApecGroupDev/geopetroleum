"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Intro_Home: React.FC = () => {
  return (
    <section className="relative bg-white py-28 lg:py-36 overflow-hidden z-10">
      {/* Subtle top divider fade (transitions from hero to white) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-linear-to-b from-[#0b0b0b]/30 to-transparent pointer-events-none" />

      {/* Background Accent Shape (blurred brand color) */}
      <div className="absolute right-[-200px] top-[200px] w-[400px] h-[400px] bg-[#1DA978]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b0b0b]! leading-tight">
            Leading the Way in <span className="text-[#1DA978]">Petroleum Equipment</span> & Environmental Services
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            Geo Petroleum delivers end-to-end solutions for petroleum operations — from storage tank manufacturing and fuel systems, to environmental risk assessment and compliance management.
            <br /><br />
            With a foundation built on integrity and innovation, we help our partners maintain safety, efficiency, and sustainability across every project.
          </p>

          <div className="mt-8">
            <a
              href="/about"
              className="inline-block bg-[#1DA978] text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </motion.div>

        {/* Right: Supporting Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-lg"
        >
          <div className="absolute inset-0 bg-[#1DA978]/10 rounded-3xl blur-[80px]" />
          <Image
            src="/images/intro-operations.webp"
            alt="Geo Petroleum Operations"
            width={600}
            height={400}
            className="relative rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_Home;
