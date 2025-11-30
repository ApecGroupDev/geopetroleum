"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero_ERA: React.FC = () => {
  return (
    <section className="relative">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 bg-white">
        <Image
          src="/images/services/ERA/Hero_ERA.webp"
          alt="Environmental Compliance Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover hidden lg:block"
        />
        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/80 to-transparent hidden lg:block" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-28 pb-20 lg:pt-36 lg:pb-28 relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900! lg:text-white! leading-tight">
            <span className="text-primary">Environmental Risk Assessments</span> That Protect Your Site, Investment, and Reputation
          </h1>
          <p className="mt-4 text-lg text-gray-700 lg:text-gray-100 leading-relaxed">
            With <span className="font-semibold">35+ years of experience in petroleum systems and environmental safety, Geo Petroleum </span>
            helps businesses across <span className="font-semibold">Houston, Texas, and the Southeast</span> identify, manage, and mitigate
            environmental risks before they become costly problems.
          </p>
          <p className="mt-4 text-lg text-gray-700 lg:text-gray-100 leading-relaxed">
            Our <span className="font-semibold">environmental consultants in Houston</span> combine field-tested expertise with data-driven
            analysis to help you maintain compliance, protect assets, and safeguard your community.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero_ERA;
