"use client";

import { motion } from "framer-motion";
import { Wrench, ClipboardCheck, FileText, ShieldCheck, AlertTriangle, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Fuel System Inspections and Leak Detection",
  },
  {
    icon: ClipboardCheck,
    title: "UST and AST Testing and Certification",
  },
  {
    icon: FileText,
    title: "Compliance Documentation and Reporting",
  },
  {
    icon: ShieldCheck,
    title: "Permitting and Liaison with Regulatory Agencies",
  },
  {
    icon: AlertTriangle,
    title: "Spill Prevention and Control Program Design",
  },
  {
    icon: LifeBuoy,
    title: "Emergency Response and Environmental Remediation",
  },
];

const Services_ECS: React.FC = () => {
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
            Our <span className="text-[#00a651]">Environmental Compliance Services</span> Include:
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
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col items-start gap-4"
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
            Our <span className="font-semibold text-[#00a651]">environmental consultants in Houston</span> specialize in simplifying compliance
            for complex operations — ensuring you stay ahead of inspections, deadlines, and evolving environmental laws.
          </p>
        </motion.div>
      </div>

      {/* Soft Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#00a651]/10 blur-3xl rounded-full -z-10" />
    </section>
  );
};

export default Services_ECS;
