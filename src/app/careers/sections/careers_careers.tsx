"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import CareersForm from "@/components/careersForm";

const Careers_Careers = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)" }} />

      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Apply Today</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            How to <span className="text-primary">Apply</span>
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
          <p className="mt-5 text-[#555] text-base leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            Start your environmental compliance career with a company that values your{" "}
            <span className="font-semibold text-[#1a1a1a]">growth</span> and{" "}
            <span className="font-semibold text-[#1a1a1a]">safety</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT: Instructions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:pt-4"
          >
            {/* Steps */}
            <div className="relative border border-[#e0e0e0] bg-[#fafaf8] p-1 mb-5">
              <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
              <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
              <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
              <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />
              <div className="h-[3px] w-full bg-primary" />
              <div className="px-6 py-6 divide-y divide-[#f0f0f0]">
                {[
                  { num: "01", text: "Browse open roles and select your ideal position" },
                  { num: "02", text: "Submit your resume (and optional cover letter)" },
                  { num: "03", text: <>Questions? Email us at <a href="mailto:info@geopetroleum.com" className="text-primary hover:underline">info@geopetroleum.com</a></> },
                ].map(({ num, text }, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="text-[11px] font-black text-primary tracking-widest w-6 shrink-0 mt-0.5"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{num}</span>
                    <p className="text-[14px] text-[#444] leading-relaxed"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="relative border border-[#e0e0e0] bg-white p-1">
              <div className="h-[3px] w-full bg-primary" />
              <div className="divide-y divide-[#f5f5f5]">
                <div className="flex items-start gap-4 px-6 py-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-primary shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa] mb-0.5"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Main Office</p>
                    <p className="text-[13px] font-semibold text-[#1a1a1a]"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}>40 Lyerly Street, Houston, TX 77022</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 px-6 py-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-primary shrink-0">
                    <Phone className="w-3.5 h-3.5 text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa] mb-0.5"
                      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Phone</p>
                    <a href="tel:844-GEO-4040" className="text-[13px] font-semibold text-[#1a1a1a] hover:text-primary transition-colors duration-200"
                      style={{ fontFamily: "var(--font-body), sans-serif" }}>844-GEO-4040</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            id="CareersForm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CareersForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers_Careers;