"use client";

import { motion } from "framer-motion";

const Hero_CIS: React.FC = () => {
  return (
    <section className="relative bg-linear-to-br from-[#f5f5f5] via-white to-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-28 pb-20 lg:pt-36 lg:pb-28 relative z-10">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900! leading-tight">
            Custom Canopy Imaging Solutions That Strengthen Your Brand and Attract More Customers
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            With <span className="font-semibold">35+ years of experience</span> helping fuel retailers across
            Texas and the Southeast, <span className="font-semibold">Geo Petroleum</span> designs, fabricates, and installs
            custom fuel station canopies that enhance brand image, improve safety, and create lasting impressions.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our expertise in <span className="font-semibold text-gray-900">gas station branding, LED canopy lighting, </span>
            and <span className="font-semibold text-gray-900">custom canopy design</span> ensures your site stands out — day or night.
          </p>
        </motion.div>

        {/* Right: Optional Visual Placeholder (future image or animation) */}
        {/* <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[90%] sm:w-[80%] max-w-md rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/services/Canopy/Hero_CIS.webp"
              alt="Fuel Station Canopy Design"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#00a651]/30 mix-blend-multiply" />
          </div>
        </motion.div> */}
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a651]/10 blur-3xl rounded-full -z-10" />
    </section>
  );
};

export default Hero_CIS;
