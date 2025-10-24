"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero_Services = () => {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Background Gradient / Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white via-gray-50 to-[#f8faf9]" />

      {/* Main Container */}
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-28 sm:py-36 flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900! leading-tight">
            Petroleum & Environmental <br className="hidden sm:block" />
            <span className="text-[#00a651]">Services That Power, Protect,</span>
            <br className="hidden sm:block" />
            and Future-Proof Your Business
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10"
          >
            <button
              onClick={() => {
                const target = document.getElementById("ServicesList");
                if (target) {
                  const yOffset = -100; // keeps section from sticking to top
                  const y =
                    target.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="bg-[#00a651] hover:bg-[#008d46] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Explore Our Services
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE / VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center lg:w-1/2"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-linear-to-tr from-[#00a651]/10 to-transparent blur-2xl rounded-3xl" />
            <Image
              src="/images/services-hero.jpg" // replace with your actual services image
              alt="Petroleum Services - Geo Petroleum"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-xl object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Background Blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Hero_Services;
