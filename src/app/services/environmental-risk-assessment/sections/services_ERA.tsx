"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Droplets,
  Building2,
  ShieldAlert,
  CloudRain,
  Wrench,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: <FlaskConical className="w-8 h-8 text-[#00a651]" />,
    text: "Site audits, field sampling, and data analysis",
  },
  {
    icon: <Droplets className="w-8 h-8 text-[#00a651]" />,
    text: "Soil and groundwater contamination testing",
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#00a651]" />,
    text: "UST and AST tank integrity evaluations",
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-[#00a651]" />,
    text: "Spill Prevention, Control, and Countermeasure (SPCC) planning",
  },
  {
    icon: <CloudRain className="w-8 h-8 text-[#00a651]" />,
    text: "Stormwater management and runoff assessment",
  },
  {
    icon: <Wrench className="w-8 h-8 text-[#00a651]" />,
    text: "Corrective action and remediation planning",
  },
  {
    icon: <FileText className="w-8 h-8 text-[#00a651]" />,
    text: "Full regulatory documentation and reporting",
  },
];

const Services_ERA = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight mb-6">
            Our <span className="text-[#00a651]">Environmental Risk Assessment</span> Services Include:
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            From field sampling to full regulatory documentation, Geo Petroleum provides
            complete environmental and compliance solutions for petroleum and industrial sites.
          </p>
        </motion.div>

        {/* Service Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-gray-50 rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0">{service.icon}</div>
              <p className="text-gray-800 text-base leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#00a651]/10 border-l-4 border-[#00a651] rounded-3xl p-10 shadow-sm max-w-5xl mx-auto text-center"
        >
          <p className="text-lg text-gray-800 leading-relaxed">
            As part of our commitment to thoroughness, Geo Petroleum also conducts{" "}
            <span className="font-semibold text-[#00a651]">
              Environmental Site Assessments (ESA Phase I & II)
            </span>{" "}
            to help clients make informed decisions about property transactions,
            redevelopment, and compliance readiness.
          </p>
        </motion.div>
      </div>

      {/* Subtle Decorative Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Services_ERA;
