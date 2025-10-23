"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "25+ years of petroleum and environmental experience",
  "Fully licensed, insured, and safety-certified professionals",
  "Proven expertise in EPA and TCEQ compliance",
  "Houston-based, proudly serving all of Texas and the Southeast",
  "Transparent communication and on-time delivery",
  "One trusted petroleum services company for all your needs — from risk assessment to fuel tank manufacturing",
];

const Choose_Contact = () => {
  return (
    <section className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900! leading-tight mb-6">
            Why Choose <span className="text-primary">Geo Petroleum</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            With decades of experience and an unwavering commitment to safety and performance,
            <span className="text-primary font-semibold"> Geo Petroleum</span> stands as a trusted
            partner for petroleum, environmental, and construction solutions across Texas.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className="shrink-0">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <p className="text-gray-800 text-base sm:text-lg leading-snug">
                {feature}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-[-100px] right-[-150px] w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-green-200/30 rounded-full blur-3xl" />
    </section>
  );
};

export default Choose_Contact;
