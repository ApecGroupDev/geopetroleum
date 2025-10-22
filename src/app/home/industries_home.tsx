"use client";

import { motion } from "framer-motion";
import { Fuel, Building2, Factory, Truck, Store, Wrench } from "lucide-react";
import React from "react";

const IndustriesWeServe: React.FC = () => {
  return (
    <section className="relative bg-[#f8f9fa] text-[#171717] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0c0c0c]!">
            Industries <span className="text-primary">We Serve</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our experience spans a wide range of industries — from commercial fueling to environmental compliance —
            delivering specialized solutions built for performance, reliability, and sustainability.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              icon: <Fuel className="w-10 h-10 text-primary" />,
              title: "Fuel Retail & Gas Stations",
              desc: "End-to-end design, installation, and maintenance for fueling stations and retail forecourts.",
            },
            {
              icon: <Building2 className="w-10 h-10 text-primary" />,
              title: "Commercial & Industrial Facilities",
              desc: "Reliable compliance and infrastructure support for warehouses, factories, and heavy operations.",
            },
            {
              icon: <Factory className="w-10 h-10 text-primary" />,
              title: "Manufacturing Plants",
              desc: "Integrated environmental and equipment systems that streamline plant operations and safety.",
            },
            {
              icon: <Truck className="w-10 h-10 text-primary" />,
              title: "Logistics & Transportation",
              desc: "Fueling and containment solutions designed for fleet operations and bulk fuel storage sites.",
            },
            {
              icon: <Store className="w-10 h-10 text-primary" />,
              title: "Retail Chains & Convenience Stores",
              desc: "Sustainable infrastructure and canopy imaging for multi-site retail and convenience locations.",
            },
            {
              icon: <Wrench className="w-10 h-10 text-primary" />,
              title: "Service & Maintenance Providers",
              desc: "Collaborating with contractors and maintenance firms to ensure seamless, compliant operation.",
            },
          ].map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-3xl p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-[#0c0c0c]! mb-2">{industry.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accent Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-[140px] bg-linear-to-t from-primary/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default IndustriesWeServe;
