"use client";

import { motion } from "framer-motion";
import { Ruler, Hammer, Building2, Lightbulb, Paintbrush, ShieldCheck } from "lucide-react";

const SERVICES = [
  { icon: Ruler, num: "01", title: "Custom Canopy Design and Branding Packages" },
  { icon: Hammer, num: "02", title: "Fabrication of Durable Signage, Fascia, and Steel Framing" },
  { icon: Building2, num: "03", title: "Full Canopy Imaging and Installation Services" },
  { icon: Lightbulb, num: "04", title: "LED and Digital Canopy Lighting Integration" },
  { icon: Paintbrush, num: "05", title: "Refurbishment, Re-Branding, and Modernization of Existing Canopies" },
  { icon: ShieldCheck, num: "06", title: "Regulatory-Compliant Structural and Electrical Upgrades" },
];

const Services_CIS: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f4f0] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute top-0 right-0 w-52 h-full pointer-events-none opacity-[0.045]"
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
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>Service Scope</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>
            Our <span className="text-primary">Canopy Imaging Solutions</span> Include
          </h2>
          <div className="mt-5 flex justify-center">
            <div className="h-[3px] w-14 bg-accent" />
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map(({ icon: Icon, num, title }, i) => (
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
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center shrink-0 bg-primary/10 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
                </div>
                <div className="flex-1 pt-1">
                  <span className="text-[10px] font-black tracking-widest text-[#ddd] group-hover:text-primary transition-colors duration-300 block mb-1"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{num}</span>
                  <h3 className="text-[14px] font-black text-[#1a1a1a]! leading-snug group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}>{title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 relative border border-[#d8d8d8] bg-white p-1 max-w-4xl mx-auto shadow-sm"
        >
          <div className="absolute -top-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -top-px -right-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -left-px w-4 h-4 bg-primary" />
          <div className="absolute -bottom-px -right-px w-4 h-4 bg-primary" />
          <div className="h-[3px] w-full bg-primary" />
          <p className="px-8 py-6 text-[15px] text-[#444] leading-relaxed text-center"
            style={{ fontFamily: "var(--font-body), sans-serif" }}>
            From <span className="font-semibold text-primary">LED canopy lighting</span> to advanced
            weather-resistant materials, <span className="font-semibold text-primary">Geo Petroleum</span> builds
            canopies that perform beautifully and last for years.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services_CIS;