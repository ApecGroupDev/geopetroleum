"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardCheck, Microscope, ShieldCheck } from "lucide-react";

const ASSESSMENTS = [
  {
    icon: ClipboardCheck,
    num: "01",
    title: "Environmental Phase I ESA",
    description: "A Phase I Environmental Site Assessment focuses on identifying existing or potential concerns on a property that may indicate an environmental risk. The assessment identifies these concerns through review of regulatory agency information, aerial photographs, historical documents, interviews with previous property owners, and a physical inspection of the property.",
    image: "/images/services/ERA/Phase_1.webp",
    tag: "Preliminary Investigation",
  },
  {
    icon: Microscope,
    num: "02",
    title: "Environmental Phase II ESA",
    description: "While a Phase I ESA is a preliminary investigation, a Phase II Environmental Site Assessment may be required if information collected during a Phase I ESA indicates the possible presence of contamination. A Phase II ESA typically involves the drilling of exploratory soil borings to obtain soil and/or groundwater samples, which are analyzed at an accredited laboratory.",
    image: "/images/services/ERA/Phase_2.webp",
    tag: "Laboratory Analysis",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Risk-Based Assessment, Corrective Action & Site Closure",
    description: "The Petroleum Storage Tank (PST) division of the TCEQ manages Leaking Petroleum Storage Tank (LPST) sites through a risk-based corrective action program. This process analyzes soil, groundwater, and air samples to evaluate at-risk receptors such as drinking water wells or surface water. Sites undergo monitoring and corrective action until all regulatory limits are met.",
    image: "/images/services/ERA/Phase_3.webp",
    tag: "TCEQ Compliance",
  },
];

const STAGE_SUMMARIES = [
  { label: "Phase I ESA", desc: "A preliminary investigation that determines environmental risks based on historical and current property usage." },
  { label: "Phase II ESA", desc: "Involves laboratory analysis of soil and groundwater samples to confirm or rule out contamination." },
  { label: "Risk-Based Assessment", desc: "Conducted when contamination is confirmed, ensuring full compliance with TCEQ requirements for case closure." },
];

const Phases_ERA = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute top-0 left-0 w-52 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">

        {/* Header */}
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
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
              Site Assessments
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Site <span className="text-primary">Assessment Phases</span>
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#555] text-base sm:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            GEO’s environmental site assessments (ESAs) range from preliminary site evaluation to full-scale
            environmental studies and remedial corrective action — helping clients make sound business and
            financial decisions associated with contaminated properties.
          </p>
        </motion.div>

        {/* Assessment cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {ASSESSMENTS.map(({ icon: Icon, num, title, description, image, tag }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative border border-[#e0e0e0] bg-[#fafaf8] p-1
                         hover:border-primary hover:shadow-[0_6px_28px_rgba(0,166,81,0.09)]
                         transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-[3px] bg-primary
                              scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              <div className="absolute -top-px -right-px w-4 h-4 bg-primary
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image */}
              <div className="overflow-hidden h-52">
                <Image
                  src={image}
                  alt={title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Icon + num */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center
                                  bg-primary/10 group-hover:bg-primary
                                  transition-colors duration-300">
                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.8} />
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-[#ddd] group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{num}</span>
                </div>

                {/* Tag */}
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary mb-2 block"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{tag}</span>

                <h3 className="text-[15px] font-black text-[#1a1a1a]! mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                  {title}
                </h3>
                <p className="text-[13px] text-[#666] leading-relaxed flex-1"
                  style={{ fontFamily: "var(--font-body), sans-serif" }}>
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stage summaries */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 relative border border-[#d8d8d8] bg-[#fafaf8] p-1 shadow-sm"
        >
          <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
          <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
          <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
          <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />
          <div className="h-[3px] w-full bg-primary" />

          <div className="px-6 sm:px-10 py-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-5 bg-primary" />
              <span className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1a1a1a]"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
                Understanding Each Stage
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#ececec]">
              {STAGE_SUMMARIES.map(({ label, desc }, i) => (
                <div key={i} className="pt-4 md:pt-0 md:px-6 first:pl-0 last:pr-0">
                  <span className="block font-black text-[12px] uppercase tracking-[0.12em] text-primary mb-2"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{label}</span>
                  <p className="text-[13px] text-[#555] leading-relaxed"
                    style={{ fontFamily: "var(--font-body), sans-serif" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Phases_ERA;