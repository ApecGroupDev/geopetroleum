"use client";

import { motion } from "framer-motion";
import { Wrench, Cog, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const JOBS = [
  {
    icon: Wrench,
    num: "01",
    title: "Service Technician",
    location: "Houston, TX",
    type: "Full-Time",
    intro: "Looking for an experienced petroleum equipment technician with expertise in fuel dispensers, canopy systems, and environmental compliance monitoring equipment.",
    requirements: [
      "2+ years of experience in petroleum or mechanical service",
      "Willingness to travel locally for on-site work",
      "Strong commitment to safety and customer service",
    ],
  },
  {
    icon: Cog,
    num: "02",
    title: "Construction Heavy Equipment Operator",
    location: "Houston, TX",
    type: "Full-Time",
    intro: "Entry-level to senior positions available to support field construction projects for GEO.",
    requirements: [
      "Must be able and physically fit to work long hours in TX weather",
      "At least two years of field experience working in petroleum industry",
      "Must speak English and have work authorization",
    ],
  },
];

const Jobs_Careers = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.04]"
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
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Open Roles</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Now Hiring: <span className="text-primary">Environmental &amp; Petroleum Jobs in Houston, TX</span>
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#555] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            We’re actively hiring for multiple positions in operations, compliance, and manufacturing — including immediate openings below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {JOBS.map(({ icon: Icon, num, title, location, type, intro, requirements }, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative border border-[#e0e0e0] bg-[#fafaf8] p-1
                         hover:border-primary hover:shadow-[0_6px_28px_rgba(0,166,81,0.09)]
                         transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute -top-px -right-px w-4 h-4 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-7 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black tracking-widest text-[#ccc] group-hover:text-primary transition-colors duration-300 block"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{num}</span>
                      <h3 className="text-[15px] font-black text-[#1a1a1a]! leading-snug group-hover:text-primary transition-colors duration-300"
                        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{title}</h3>
                    </div>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                    <span className="text-[12px] text-[#777]" style={{ fontFamily: "var(--font-body), sans-serif" }}>{location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" strokeWidth={2} />
                    <span className="text-[12px] text-[#777]" style={{ fontFamily: "var(--font-body), sans-serif" }}>{type}</span>
                  </div>
                </div>

                <p className="text-[13px] text-[#555] leading-relaxed mb-5"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}>{intro}</p>

                {/* Requirements */}
                <div className="border-t border-[#f0f0f0] pt-4 mb-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#aaa] mb-3"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Requirements</p>
                  <ul className="space-y-2">
                    {requirements.map((req, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="text-[13px] text-[#555]" style={{ fontFamily: "var(--font-body), sans-serif" }}>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="#CareersForm"
                  className="group/btn mt-auto inline-flex items-center gap-3 px-6 py-3
                             bg-primary text-white font-bold text-sm uppercase tracking-widest
                             transition-all duration-300 hover:bg-[#008f45] hover:gap-5 self-start"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                  Apply Now
                  <span className="text-sm leading-none transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs_Careers;