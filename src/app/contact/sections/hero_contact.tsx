"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const Hero_Contact: React.FC = () => {
  return (
    <section className="relative bg-linear-to-br from-[#f5f5f5] via-white to-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-28 pb-20 lg:pt-36 lg:pb-28 relative z-10">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900! leading-tight">
            Let’s Build Smarter, Safer Fuel & Environmental Solutions — Together
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold">25+ years of trusted petroleum and environmental expertise. </span>
            Fully licensed, insured, and <span className="font-semibold">Houston-based</span>, delivering
            <span className="font-semibold"> compliance-first solutions</span> across <span className="font-semibold">Texas </span>
            and the <span className="font-semibold">Southeast.</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button
              onClick={() => {
                const target = document.getElementById("MainContactForm");
                if (target) {
                  const yOffset = -200; // 👈 adjust this for your header height
                  const y =
                    target.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="bg-[#00a651] hover:bg-[#008d46] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Contact Us Now
            </button>
            <a
              href="tel:+00000000"
              className="flex items-center justify-center gap-2 text-[#00a651] font-medium hover:text-[#008d46] transition"
            >
              <Phone className="w-5 h-5" /> 000-000-0000
            </a>
          </div>
        </motion.div>

        {/* Right: Visual */}
        {/* <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[90%] sm:w-[80%] max-w-md rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/contact-hero-map.webp"
              alt="Geo Petroleum Locations Map"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#00a651]/30 mix-blend-multiply" />
          </div>
        </motion.div> */}
      </div>

      {/* Floating Contact Card (Glassmorphism) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="
          absolute left-1/2 transform -translate-x-1/2 z-50
          -bottom-16 sm:-bottom-28 md:-bottom-12
          backdrop-blur-md bg-white/70
          border border-white/40 shadow-2xl
          rounded-2xl
          w-[92%] sm:w-[80%] lg:w-[70%]
          flex flex-col md:flex-row items-center justify-between gap-6
          px-6 sm:px-10 py-6
        "
      >
        <div className="flex items-center gap-3 text-gray-800 text-center sm:text-left">
          <Phone className="w-5 h-5 text-[#00a651]" />
          <a href="tel:+00000000" className="text-base sm:text-lg font-medium">
            000-000-0000
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-800 text-center sm:text-left">
          <Mail className="w-5 h-5 text-[#00a651]" />
          <a
            href="mailto:Sales@GeoPetroleum.com"
            className="text-base sm:text-lg font-medium text-[#00a651] hover:underline hover:text-[#008d46] transition-colors duration-200"
          >
            info@geopetroleum.com
          </a>
        </div>
        <div className="flex items-center gap-3 text-gray-800 text-center sm:text-left">
          <MapPin className="w-5 h-5 text-[#00a651]" />
          <span className="text-base sm:text-lg font-medium">
            Houston, TX
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero_Contact;
