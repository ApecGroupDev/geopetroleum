"use client";

import { motion } from "framer-motion";
import { Ruler, Hammer, Building2, Lightbulb, Paintbrush, ShieldCheck, } from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Custom Canopy Design and Branding Packages",
  },
  {
    icon: Hammer,
    title: "Fabrication of Durable Signage, Fascia, and Steel Framing",
  },
  {
    icon: Building2,
    title: "Full Canopy Imaging and Installation Services",
  },
  {
    icon: Lightbulb,
    title: "LED and Digital Canopy Lighting Integration",
  },
  {
    icon: Paintbrush,
    title: "Refurbishment, Re-Branding, and Modernization of Existing Canopies",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory-Compliant Structural and Electrical Upgrades",
  },
];

const Services_CIS: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-28 lg:py-36 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight">
            Our <span className="text-[#00a651]">Canopy Imaging Solutions</span> Include:
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-start gap-4"
              >
                <div className="bg-[#00a651]/10 p-3 rounded-xl">
                  <Icon className="w-7 h-7 text-[#00a651]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900! leading-snug">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mt-16"
        >
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            From <span className="font-semibold text-[#00a651]">LED canopy lighting</span> to
            advanced weather-resistant materials,{" "}
            <span className="font-semibold text-[#00a651]">Geo Petroleum</span> builds
            canopies that perform beautifully and last for years.
          </p>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00a651]/10 blur-3xl rounded-full -z-10" />
    </section>
  );
};

export default Services_CIS;
