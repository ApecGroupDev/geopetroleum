"use client";

import { motion } from "framer-motion";
import { Fuel, Factory, Wrench, Store, ShieldCheck, Truck } from "lucide-react";

const audiences = [
  { icon: <Fuel className="w-8 h-8 text-[#00a651]" />, label: "Fuel Station Owners & Operators" },
  { icon: <Factory className="w-8 h-8 text-[#00a651]" />, label: "Petroleum & Environmental Contractors" },
  { icon: <Wrench className="w-8 h-8 text-[#00a651]" />, label: "Tank Manufacturers & Installation Specialists" },
  { icon: <Store className="w-8 h-8 text-[#00a651]" />, label: "C-Store & Retail Fueling Site Managers" },
  { icon: <ShieldCheck className="w-8 h-8 text-[#00a651]" />, label: "Compliance, Inspection & Safety Professionals" },
  { icon: <Truck className="w-8 h-8 text-[#00a651]" />, label: "Fleet Operators & Petroleum Investors" },
];

const Audience_Blogs = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight">
            Who Should Read <span className="text-[#00a651]">This Blog?</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Whether you manage one station or an entire network, our petroleum industry blogs help you{" "}
            <span className="font-semibold text-[#00a651]">operate smarter and safer.</span>
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:border-[#00a651]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="p-4 bg-[#00a651]/10 rounded-full group-hover:bg-[#00a651]/20 transition">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900! group-hover:text-[#00a651] transition">
                  {item.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Audience_Blogs;
