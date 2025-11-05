"use client";

import { motion } from "framer-motion";

const Hero_ECS: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 bg-white">
        <img
          src="/images/services/ECS/Hero_ECS.webp"
          alt="Environmental Compliance Background"
          className="w-full h-full object-cover hidden lg:block"
        />
        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/80 to-transparent hidden lg:block" />
      </div>

      {/* ✅ Foreground Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-28 pb-20 lg:pt-36 lg:pb-28 z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold lg:text-white! text-gray-900! leading-tight">
            <span className="text-primary">Environmental Compliance Solutions</span> That Protect Your Business and the Environment
          </h1>
          <p className="mt-4 text-lg text-gray-900 lg:text-gray-100 leading-relaxed">
            With <span className="font-semibold">35+ years of experience helping petroleum businesses stay compliant</span>,
            Geo Petroleum provides trusted <span className="font-semibold">environmental compliance solutions in Houston and across Texas</span>,
            keeping your operations safe, certified, and inspection-ready.
          </p>
          <p className="mt-4 text-lg text-gray-900 lg:text-gray-100 leading-relaxed">
            Our <span className="font-semibold">certified environmental consultants in Houston</span> work closely with
            fuel retailers, industrial operators, and municipalities to ensure every site meets
            <span className="font-semibold"> EPA, TCEQ, and state-level environmental regulations</span> — without stress or surprises.
          </p>
        </motion.div>
      </div>
    </section>

  );
};

export default Hero_ECS;
