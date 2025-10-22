"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero_Home: React.FC = () => {
  return (
    <section className="relative bg-[#f5f5f5]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Geo Petroleum operations background"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0b0b0b]/80 via-[#0b0b0b]/50 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 text-white">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 max-w-xl text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Powering America’s <br />
            <span className="text-primary">Fuel & Energy Future</span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg leading-relaxed max-w-md">
            From equipment supply and environmental compliance to full-service construction —
            Geo Petroleum is your trusted partner in the energy industry.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <Link
              href="/services"
              className="px-6 py-3 bg-primary text-white font-medium rounded-full hover:scale-105 transition-transform duration-300"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-[#0b0b0b] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>

        {/* Floating Tagline Div */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="absolute  sm:right-12 lg:right-20 -bottom-16 lg:-bottom-20 bg-primary text-white rounded-3xl shadow-xl z-50
                   w-[90%] right-6 sm:w-xl lg:w-3xl p-6 sm:p-8
                   flex items-center justify-center text-center"
        >
          <p className="text-lg sm:text-xl lg:text-4xl font-semibold leading-snug">
            YOUR <span className="text-2xl sm:text-3xl lg:text-5xl italic">ONE-STOP SHOP </span> FOR ALL YOUR PETROLEUM NEEDS!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero_Home;
