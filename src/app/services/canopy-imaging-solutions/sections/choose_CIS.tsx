"use client";

import { motion } from "framer-motion";
import { Award, Brush, Building2, CloudSun, Hammer, Users } from "lucide-react";

const features = [
  {
    icon: <Award className="w-8 h-8 text-[#00a651]" />,
    text: "35+ years of design, engineering, and installation experience",
  },
  {
    icon: <Brush className="w-8 h-8 text-[#00a651]" />,
    text: "Custom branding tailored to your company identity",
  },
  {
    icon: <CloudSun className="w-8 h-8 text-[#00a651]" />,
    text: "Premium materials engineered to withstand Texas weather",
  },
  {
    icon: <Building2 className="w-8 h-8 text-[#00a651]" />,
    text: "Local experts serving Houston and the Southeast U.S.",
  },
  {
    icon: <Hammer className="w-8 h-8 text-[#00a651]" />,
    text: "Turnkey project delivery — from design to completion",
  },
  {
    icon: <Users className="w-8 h-8 text-[#00a651]" />,
    text: "Dedicated team focused on precision, safety, and brand impact",
  },
];

const Choose_Canopy = () => {
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
            <span className="text-[#00a651]">Geo Petroleum</span> for Canopy Imaging?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We blend architectural precision with visual impact to deliver canopy solutions
            that elevate your site’s identity, durability, and long-term brand presence.
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

        {/* Subtext / Brand Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#00a651]/10 border-l-4 border-[#00a651] rounded-3xl p-8 text-gray-800 text-center max-w-4xl mx-auto shadow-sm"
        >
          <p className="text-lg leading-relaxed">
            Our team understands that every canopy is an opportunity — not just to cover your site, but to <span className="font-semibold">strengthen your brand</span>.
          </p>
        </motion.div>
      </div>

      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Choose_Canopy;
