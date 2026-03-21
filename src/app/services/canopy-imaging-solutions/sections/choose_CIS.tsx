"use client";

import { motion } from "framer-motion";
import { Award, Brush, CloudSun, Building2, Hammer, Users } from "lucide-react";

const FEATURES = [
  { icon: Award, text: "35+ years of design, engineering, and installation experience" },
  { icon: Brush, text: "Custom branding tailored to your company identity" },
  { icon: CloudSun, text: "Premium materials engineered to withstand Texas weather" },
  { icon: Building2, text: "Local experts serving Houston and the Southeast U.S." },
  { icon: Hammer, text: "Turnkey project delivery — from design to completion" },
  { icon: Users, text: "Dedicated team focused on precision, safety, and brand impact" },
];

const Choose_CIS = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Why Us</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Why Choose <span className="text-primary">Geo Petroleum</span> for Canopy Imaging?
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#555] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            We blend architectural precision with visual impact to deliver canopy solutions that elevate your
            site’s identity, durability, and long-term brand presence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(({ icon: Icon, text }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative border border-[#e8e8e8] bg-[#fafaf8] p-6
                         hover:border-primary hover:shadow-[0_4px_20px_rgba(0,166,81,0.08)]
                         transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute -top-px -right-px w-3 h-3 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <p className="text-[14px] text-[#444] leading-relaxed pt-1.5 group-hover:text-[#1a1a1a] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}>{text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 relative border border-[#d8d8d8] bg-[#fafaf8] p-1 max-w-4xl mx-auto shadow-sm"
        >
          <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />
          <div className="h-[3px] w-full bg-primary" />
          <p className="px-8 py-6 text-[15px] text-[#444] leading-relaxed text-center"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Our team understands that every canopy is an opportunity — not just to cover your site, but to{" "}
            <span className="font-semibold text-primary">strengthen your brand</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Choose_CIS;