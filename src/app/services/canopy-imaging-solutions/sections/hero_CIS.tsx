"use client";

import { motion } from "framer-motion";

const Hero_CIS: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* ✅ Full Background Image */}
      {/* <div className="absolute inset-0">
        <img
          src="/images/services/CIS/Expand.png"
          alt="Fuel Station Canopy Design"
          className="w-full h-full object-cover"
        />
      </div> */}

      {/* ✅ Dark Overlay for Strong Text Contrast */}
      {/* <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-black/40" /> */}

      {/* ✅ Content Layer */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-28 pb-20 lg:pt-36 lg:pb-28">
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

          <p className="mt-6 text-lg text-gray-900 leading-relaxed">
            With <span className="font-semibold text-[#00a651]">35+ years of experience</span> helping fuel retailers across
            Texas and the Southeast, <span className="font-semibold text-[#00a651]">Geo Petroleum</span> designs, fabricates, and installs
            custom fuel station canopies that enhance brand image, improve safety, and create lasting impressions.
          </p>

          <p className="mt-4 text-lg text-gray-900 leading-relaxed">
            Our expertise in <span className="font-semibold text-[#00a651]">gas station branding, LED canopy lighting, </span>
            and <span className="font-semibold text-[#00a651]">custom canopy design</span> ensures your site stands out — day or night.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero_CIS;
