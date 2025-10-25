"use client";

import { motion } from "framer-motion";
import { Users, HardHat, MapPinned, Award, Wrench } from "lucide-react";

const WhyWork_Careers = () => {
  const benefits = [
    {
      icon: <Wrench className="w-6 h-6 text-[#00a651]" />,
      title: "Long-term, stable careers",
      desc: "Work with a company that’s built to last — providing dependable careers in petroleum, manufacturing, and environmental services.",
    },
    {
      icon: <HardHat className="w-6 h-6 text-[#00a651]" />,
      title: "Hands-on fieldwork",
      desc: "Get real experience in fuel systems, tank operations, canopy installation, and more — learning from experienced professionals.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#00a651]" />,
      title: "Family-style culture",
      desc: "Join a team that values collaboration, growth, and safety — where everyone looks out for each other.",
    },
    {
      icon: <MapPinned className="w-6 h-6 text-[#00a651]" />,
      title: "Regional opportunities",
      desc: "Work on exciting projects across Houston, Texas, and throughout the Southeast region.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#00a651]" />,
      title: "35+ years of leadership",
      desc: "Be part of a company recognized for excellence in petroleum infrastructure and environmental compliance.",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900!"
        >
          Why Work at{" "}
          <span className="text-[#00a651]">Geo Petroleum?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
        >
          Since our founding, Geo Petroleum has built a reputation for safety, quality, and professional integrity.
          We believe in developing people — not just filling roles.
        </motion.p>

        {/* Benefits Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-start mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900! mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 max-w-2xl mx-auto"
        >
          <blockquote className="relative p-8 bg-[#00a651]/5 rounded-2xl text-gray-800 italic text-lg leading-relaxed shadow-sm">
            “Working at Geo Petroleum has given me the chance to grow my skills and take pride in work that matters.”
            <span className="block mt-4 not-italic font-semibold text-gray-900">
              — John D., Service Technician
            </span>
          </blockquote>
        </motion.div>
      </div>

      {/* Decorative background shapes */}
      <div className="absolute -top-24 left-0 w-[300px] h-[300px] bg-[#00a651]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-100/40 blur-3xl rounded-full" />
    </section>
  );
};

export default WhyWork_Careers;
