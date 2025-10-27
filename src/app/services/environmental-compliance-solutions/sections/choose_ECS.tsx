"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Globe2, ClipboardCheck, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-[#00a651]" />,
    text: "35+ years of petroleum compliance expertise",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#00a651]" />,
    text: "Licensed, insured, and backed by a spotless safety record",
  },
  {
    icon: <ClipboardCheck className="w-8 h-8 text-[#00a651]" />,
    text: "Complete solutions — inspections, permitting, documentation, and testing",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-[#00a651]" />,
    text: "Local specialists who understand EPA, TCEQ, and Houston-area regulations",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#00a651]" />,
    text: "Full transparency and guaranteed compliance on every project",
  },
  {
    icon: <Users className="w-8 h-8 text-[#00a651]" />,
    text: "Client-focused partnership ensuring safety and sustainability",
  },
];

const Choose_ECS = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight mb-6">
            Why Choose{" "}
            <span className="text-[#00a651]">Geo Petroleum</span> for Environmental Compliance?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We combine decades of environmental expertise with hands-on petroleum compliance experience
            to keep your operations safe, efficient, and inspection-ready — every time.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="shrink-0">{feature.icon}</div>
              <p className="text-gray-800 text-base leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Subtext / Compliance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#00a651]/10 border-l-4 border-[#00a651] rounded-3xl p-8 text-gray-800 text-center max-w-4xl mx-auto shadow-sm"
        >
          <p className="text-lg leading-relaxed">
            Backed by decades of field-tested compliance and certified expertise,
            <span className="font-semibold text-[#00a651]"> Geo Petroleum</span> helps fuel businesses
            meet every regulation confidently — without disruption.
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Choose_ECS;
