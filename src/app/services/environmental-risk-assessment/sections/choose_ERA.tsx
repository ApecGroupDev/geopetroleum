"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Globe2, Factory, Leaf, Award } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-[#00a651]" />,
    text: "35+ years of petroleum and environmental experience",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#00a651]" />,
    text: "Certified, insured, and backed by a spotless safety record",
  },
  {
    icon: <Factory className="w-8 h-8 text-[#00a651]" />,
    text: "Comprehensive evaluations — soil, groundwater, and equipment integrity",
  },
  {
    icon: <Globe2 className="w-8 h-8 text-[#00a651]" />,
    text: "Local expertise in Texas environmental regulations",
  },
  {
    icon: <FileCheck className="w-8 h-8 text-[#00a651]" />,
    text: "Detailed reporting with step-by-step mitigation recommendations",
  },
  {
    icon: <Leaf className="w-8 h-8 text-[#00a651]" />,
    text: "Preventive strategies that save time, money, and environmental impact",
  },
];

const Choose_ERA = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight mb-6">
            Why Choose <span className="text-[#00a651]">Geo Petroleum</span> for Environmental Risk Assessments?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our proven experience, certified expertise, and safety-driven approach make Geo Petroleum the trusted partner
            for environmental protection and compliance across Texas and beyond.
          </p>
        </motion.div>

        {/* Feature List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0">{feature.icon}</div>
              <p className="text-gray-800 text-base leading-relaxed">{feature.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Compliance Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#00a651]/10 border-l-4 border-[#00a651] rounded-3xl p-8 shadow-sm text-gray-800 text-center max-w-4xl mx-auto"
        >
          <p className="text-lg leading-relaxed">
            Our services meet and exceed standards outlined in the{" "}
            <span className="font-semibold text-[#00a651]">Environmental Impact Assessment Act</span>, ensuring every
            project aligns with local, state, and federal requirements.
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Choose_ERA;
