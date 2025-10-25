"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import ScrollToContactButton from "./CTAbutton";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#05c505] to-[#a5d13e] text-gray-700 py-20">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white/20,transparent_70%)] opacity-20" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800! font-extrabold tracking-tight leading-tight">
            Let’s Build a Reliable Future Together
          </h2>
          <p className="mt-4 text-gray-800 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            At <span className="font-semibold text-gray-700">Geo Petroleum</span>, we provide complete petroleum solutions —
            from equipment and compliance to manufacturing and maintenance.
          </p>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 text-gray-800">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-700" />
              <a
                href="tel:+8554442732"
                className="hover:text-white transition-colors duration-200"
              >
                844-GEO-4040
              </a>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/40" />
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-700" />
              <a
                href="mailto:info@geopetroleum.com"
                className="hover:text-white transition-colors duration-200"
              >
                info@geopetroleum.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <ScrollToContactButton />
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
