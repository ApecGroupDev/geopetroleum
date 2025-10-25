"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  HeartPulse,
  CalendarDays,
  Briefcase,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: <DollarSign className="w-7 h-7 text-[#00a651]" />,
    title: "Competitive salary and consistent hours",
  },
  {
    icon: <HeartPulse className="w-7 h-7 text-[#00a651]" />,
    title: "Health, dental, and vision insurance",
  },
  {
    icon: <CalendarDays className="w-7 h-7 text-[#00a651]" />,
    title: "Paid time off and holidays",
  },
  {
    icon: <Briefcase className="w-7 h-7 text-[#00a651]" />,
    title: "401(k) with company match",
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-[#00a651]" />,
    title: "On-the-job training and certification",
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-[#00a651]" />,
    title: "Career advancement opportunities in a growing company",
  },
];

const Benefits_Careers = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! mb-6">
            Benefits of Working at{" "}
            <span className="text-[#00a651]">Geo Petroleum</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We invest in our people through safety, development, and rewards.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {benefit.icon}
              <p className="text-gray-800 font-medium leading-relaxed">
                {benefit.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-xl font-semibold text-gray-900 max-w-2xl mx-auto leading-relaxed"
        >
          At Geo Petroleum, you’re not just finding{" "}
          <span className="text-[#00a651]">petroleum jobs in Houston</span> —{" "}
          you’re building a <span className="text-[#00a651]">lifelong career</span>.
        </motion.p>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Benefits_Careers;
