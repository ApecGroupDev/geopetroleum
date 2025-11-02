"use client";

import { motion } from "framer-motion";

const Hero_ERA: React.FC = () => {
  return (
    <section className="relative bg-linear-to-br from-[#f5f5f5] via-white to-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-28 pb-20 lg:pt-36 lg:pb-28 relative z-10">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900! leading-tight">
            <span className="text-primary">Environmental Risk Assessments</span> That Protect Your Site, Investment, and Reputation
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            With <span className="font-semibold">35+ years of experience in petroleum systems and environmental safety, Geo Petroleum </span>
            helps businesses across <span className="font-semibold">Houston, Texas, and the Southeast</span> identify, manage, and mitigate
            environmental risks before they become costly problems.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our <span className="font-semibold">environmental consultants in Houston</span> combine field-tested expertise with data-driven
            analysis to help you maintain compliance, protect assets, and safeguard your community.
          </p>
        </motion.div>

        {/* Right: Visual */}
        {/* <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[90%] sm:w-[80%] max-w-md rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/contact-hero-map.webp"
              alt="Geo Petroleum Locations Map"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#00a651]/30 mix-blend-multiply" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero_ERA;
