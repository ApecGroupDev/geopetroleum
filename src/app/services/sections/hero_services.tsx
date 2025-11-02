"use client";

import { motion } from "framer-motion";

const Hero_Services = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ✅ Full Background Image */}
      <div className="absolute inset-0 hidden">
        <img
          src="/images/services/Services.png" // 🖼️ Replace with your actual background image
          alt="Petroleum and Environmental Services"
          className="w-full h-full object-cover"
        />
        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* ✅ Foreground Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 py-28 sm:py-36 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900! leading-tight">
            Petroleum & Environmental <br className="hidden sm:block" />
            <span className="text-[#00a651]">Services That Power, Protect, </span>
            and Future-Proof Your Business
          </h1>

          <p className="mt-6 text-lg text-gray-900 leading-relaxed max-w-3xl">
            From environmental compliance to petroleum infrastructure support, Geo Petroleum delivers end-to-end solutions that
            enhance performance, extend asset life, and ensure regulatory confidence across Texas.
          </p>

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
                  const yOffset = -100;
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
      </div>
    </section>
  );
};

export default Hero_Services;
