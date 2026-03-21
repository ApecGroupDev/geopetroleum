"use client";

import { motion } from "framer-motion";
import { Users, HardHat, MapPinned, Award, Wrench } from "lucide-react";

const BENEFITS = [
  { icon: Wrench, title: "Long-term, stable careers", desc: "Work with a company that’s built to last — providing dependable careers in petroleum, manufacturing, and environmental services." },
  { icon: HardHat, title: "Hands-on fieldwork", desc: "Get real experience in fuel systems, tank operations, canopy installation, and more — learning from experienced professionals." },
  { icon: Users, title: "Family-style culture", desc: "Join a team that values collaboration, growth, and safety — where everyone looks out for each other." },
  { icon: MapPinned, title: "Regional opportunities", desc: "Work on exciting projects across Houston, Texas, and throughout the Southeast region." },
  { icon: Award, title: "35+ years of leadership", desc: "Be part of a company recognized for excellence in petroleum infrastructure and environmental compliance." },
];

const WhyWork_Careers = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f4f0] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
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
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Why Join Us</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Why Work at <span className="text-primary">Geo Petroleum?</span>
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#555] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Since our founding, Geo Petroleum has built a reputation for safety, quality, and professional integrity.
            We believe in developing people — not just filling roles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative border border-[#e0e0e0] bg-white p-6
                         hover:border-primary hover:shadow-[0_4px_20px_rgba(0,166,81,0.08)]
                         transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute -top-px -right-px w-3 h-3 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-10 h-10 flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
              </div>
              <h3 className="text-[14px] font-black text-[#1a1a1a]! mb-2 group-hover:text-primary transition-colors duration-300"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{title}</h3>
              <p className="text-[13px] text-[#666] leading-relaxed"
                style={{ fontFamily: "var(--font-body), sans-serif" }}>{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 relative border border-[#d8d8d8] bg-white p-1 max-w-2xl mx-auto shadow-sm"
        >
          <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />
          <div className="h-[3px] w-full bg-primary" />
          <div className="px-8 py-6">
            <p className="text-[15px] text-[#444] leading-relaxed italic mb-4"
              style={{ fontFamily: "var(--font-body), sans-serif" }}>
              &quot;Working at Geo Petroleum has given me the chance to grow my skills and take pride in work that matters.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-px h-6 bg-primary" />
              <span className="text-[11px] font-black uppercase tracking-[0.15em] text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>John D.</span>
              <span className="text-[11px] uppercase tracking-[0.15em] text-primary font-bold"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Service Technician</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWork_Careers;