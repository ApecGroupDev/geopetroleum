"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MissionAssocs_Home = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* LEFT — Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900! mb-6">
            Our <span className="text-[#00a651]">Mission</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To deliver fast, compliant, and high-quality petroleum and environmental services that keep your operations safe, efficient, and environmentally responsible — because your time, investment, and reputation deserve the highest standard of care.
          </p>
        </motion.div>

        {/* RIGHT — Memberships / Associations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex flex-col items-center lg:items-start"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900! mb-4">
            Proud Member Of:
          </h3>

          <ul className="text-lg text-gray-700 space-y-3 leading-relaxed">
            <li>• Petroleum Equipment Institute (PEI)</li>
            <li>• Texas Food & Fuel Association</li>
            <li>• Greater Houston Retailers Cooperative Association (GHRA)</li>
          </ul>

          <p className="mt-6 text-gray-700 leading-relaxed max-w-lg">
            Our memberships reflect our commitment to safety, compliance, and professional excellence in every project we deliver.
          </p>

          {/* Optional — add logos if available */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6">
            <Image src="/logos/associations/PEI.webp" alt="PEI" width={80} height={80} className="hover:scale-110 transition" />
            <Image src="/logos/associations/TFFA.webp" alt="Texas Food & Fuel Association" width={100} height={100} className="hover:scale-110 transition" />
            <Image src="/logos/associations/GHRA.webp" alt="GHRA" width={90} height={90} className="hover:scale-110 transition" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default MissionAssocs_Home;
