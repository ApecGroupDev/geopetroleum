"use client";

import { motion } from "framer-motion";

const Hero_ECS: React.FC = () => {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900! leading-tight">
            Environmental Compliance Solutions That Protect Your Business and the Environment
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            With <span className="font-semibold">25+ years of experience helping petroleum businesses stay compliant</span>,
            Geo Petroleum provides trusted <span className="font-semibold">environmental compliance solutions in Houston and across Texas</span>,
            keeping your operations safe, certified, and inspection-ready.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Our <span className="font-semibold">certified environmental consultants in Houston</span> work closely with
            fuel retailers, industrial operators, and municipalities to ensure every site meets
            <span className="font-semibold"> EPA, TCEQ, and state-level environmental regulations</span> — without stress or surprises.
          </p>
        </motion.div>

        {/* Right: Visual (optional placeholder for future image or illustration) */}
        {/* <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-[90%] sm:w-[80%] max-w-md rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/compliance-hero.webp"
              alt="Environmental Compliance Solutions"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-[#00a651]/30 mix-blend-multiply" />
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero_ECS;
