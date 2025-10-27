"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero_Home: React.FC = () => {
  const [showGif, setShowGif] = useState(false);

  // Alternate between GIF and image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowGif((prev) => !prev);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

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
      </div>

      {/* Main Content */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 text-white">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 max-w-4xl text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900! leading-tight">
            <span className="text-primary">One-Stop-Shop</span> for All Your Petroleum & Environmental Solutions — Powering Safety, Compliance, and Reliability
          </h1>

          <p className="mt-6 text-gray-900 text-lg leading-relaxed max-w-3xl">
            Backed by over 35 years of proven industry experience and a zero-incident safety record,
            Geo Petroleum is the leading petroleum company in Houston, trusted by fuel retailers,
            industrial operators, and municipalities. As one of the top Houston environmental companies,
            we proudly serve clients across Texas and the Southeast, delivering complete petroleum
            and environmental solutions.
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
              className="px-6 py-3 rounded-full border border-primary text-gray-800 hover:bg-primary hover:text-gray-200 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>

        {/* ✅ Right Side Alternating Image / GIF */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-full lg:w-[600px] h-[360px] lg:h-[420px] z-10"
        >
          <AnimatePresence mode="wait">
            {showGif ? (
              <motion.img
                key="gif"
                src="/images/home/final-animation.gif"
                alt="Geo Petroleum animation"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            ) : (
              <motion.img
                key="image"
                src="/images/home/Hero_Home.png"
                alt="Geo Petroleum equipment"
                className="absolute inset-0 w-full h-full object-contain"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </AnimatePresence>
        </motion.div>

        {/* Floating Tagline Div — untouched alignment */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="absolute sm:right-12 lg:right-20 -bottom-16 lg:-bottom-20 bg-primary text-white rounded-2xl shadow-xl z-50
                   w-[90%] right-6 sm:w-xl lg:w-3xl p-6 sm:p-8
                   flex items-center justify-center text-center"
        >
          <p className="text-lg sm:text-xl lg:text-4xl font-semibold leading-snug">
            Leading the Way in Petroleum Equipment & Environmental Services
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero_Home;
