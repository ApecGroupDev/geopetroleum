"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  Building2,
  Factory,
  Wrench,
  ClipboardList,
} from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="w-7 h-7 text-primary" />,
    title: "Environmental Risk Assessment",
    desc: "Identify and mitigate potential site hazards before they escalate.",
  },
  {
    icon: <FileCheck2 className="w-7 h-7 text-primary" />,
    title: "Environmental Compliance Solutions",
    desc: "Inspections, permitting, and documentation for full EPA and TCEQ compliance.",
  },
  {
    icon: <Building2 className="w-7 h-7 text-primary" />,
    title: "Canopy Imaging Solutions",
    desc: "Custom canopy design, fabrication, and installation to elevate your brand presence.",
  },
  {
    icon: <Factory className="w-7 h-7 text-primary" />,
    title: "Fuel Tank Manufacturing",
    desc: "Precision-built aboveground and underground tanks engineered for reliability.",
  },
  {
    icon: <Wrench className="w-7 h-7 text-primary" />,
    title: "Maintenance & Testing Services",
    desc: "Keep your fueling systems safe and efficient with expert inspections.",
  },
  {
    icon: <ClipboardList className="w-7 h-7 text-primary" />,
    title: "Consultation & Project Planning",
    desc: "End-to-end guidance from concept through completion.",
  },
];

const Overview_Contact = () => {
  return (
    <section className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900! leading-tight mb-6">
            What We Can <span className="text-primary">Help You With</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            As a petroleum services company in Houston, <span className="font-semibold text-primary">Geo Petroleum</span> provides one partner for construction, compliance, and maintenance — all under one trusted name.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
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
              className="bg-[#00a651] hover:bg-[#008d46] text-white font-semibold px-8 mt-4 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Schedule a Consultation
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT GRID OF SERVICES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white shadow-sm hover:shadow-md p-6 rounded-2xl border border-gray-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-3 bg-green-100 rounded-xl">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900! mb-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Overview_Contact;
