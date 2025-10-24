"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldCheck, FileCheck, Image as ImageIcon, Droplets } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#00a651]" />,
    title: "Environmental Risk Assessment",
    desc: "Identify and mitigate potential hazards before they become costly problems. Our specialists perform comprehensive site evaluations, soil and groundwater testing, and risk mitigation planning — ensuring your facility stays compliant and environmentally sound.",
    link: "/services/environmental-risk-assessment",
  },
  {
    icon: <FileCheck className="w-12 h-12 text-[#00a651]" />,
    title: "Environmental Compliance Solutions",
    desc: "Protect your business from fines and shutdowns. We handle permitting, inspections, documentation, and environmental consulting in Houston — helping you meet every state and federal regulation with ease.",
    link: "/services/environmental-compliance-solutions",
  },
  {
    icon: <ImageIcon className="w-12 h-12 text-[#00a651]" />,
    title: "Canopy Imaging Solutions",
    desc: "Make your station stand out. We design, fabricate, and install custom canopies and LED lighting systems that enhance your brand visibility and customer experience.",
    link: "/services/canopy-imaging-solutions",
  },
  {
    icon: <Droplets className="w-12 h-12 text-[#00a651]" />,
    title: "Fuel Tank Manufacturing",
    desc: "Built for safety and performance. We engineer, fabricate, and install aboveground and underground fuel tanks that meet EPA, UL, and API standards — combining structural integrity with environmental compliance.",
    link: "/services/fuel-tank-manufacturing",
  },
];

const Services_Services = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-linear-to-b from-white via-gray-50 to-white overflow-hidden">
      <div id="ServicesList" className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-extrabold text-gray-900! leading-tight">
            Our Petroleum & Environmental Services
          </h2>
          <p className="mt-6 text-xl text-gray-700 font-medium leading-relaxed">
            Comprehensive solutions engineered for{" "}
            <span className="text-[#00a651] font-semibold">compliance</span>,{" "}
            <span className="text-[#00a651] font-semibold">safety</span>, and{" "}
            <span className="text-[#00a651] font-semibold">long-term performance</span>.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Link
                href={service.link}
                className="group flex outline-primary outline flex-col justify-between bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:shadow-[0_12px_40px_rgb(0,166,81,0.2)] border border-gray-100 hover:border-[#00a651]/50 transition-all duration-500 hover:-translate-y-2 w-full h-full"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-[#00a651]/10 group-hover:bg-[#00a651]/20 transition-colors duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900! mb-3 group-hover:text-[#00a651] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-[#00a651] font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More →
                  </span>
                </div>

                {/* Glow Accent */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-[#00a651]/5 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition duration-700 pointer-events-none" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 -left-32 w-[500px] h-[500px] bg-[#00a651]/10 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-[#00a651]/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Services_Services;
