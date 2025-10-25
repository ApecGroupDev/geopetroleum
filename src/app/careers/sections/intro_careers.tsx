"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Intro_Careers = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight">
            Looking for a stable, growth-focused career in the{" "}
            <span className="text-[#00a651]">petroleum and environmental</span> industry?
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#00a651]">Geo Petroleum</span>, we specialize in fuel system design, tank manufacturing, canopy imaging, and environmental compliance services.
            For over 25 years, we’ve built the backbone of fuel infrastructure across Houston, Texas, and the Southeast — and we’re still expanding.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Whether you’re a seasoned technician, engineer, or just starting your career, we offer real opportunity, long-term stability, and a team-first environment where your work makes a difference.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10"
          >
            <Link
              href="#CareersForm"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#00a651] text-white font-semibold text-lg rounded-full shadow-md hover:bg-[#008f49] hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL / IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:w-1/2"
        >
          <div className="relative w-full max-w-2xl">
            <div className="absolute inset-0 bg-linear-to-tr from-green-200 to-transparent blur-2xl rounded-3xl" />
            <img
              src="/images/careers/Intro_Careers.webp"
              alt="Geo Petroleum Careers"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-xl object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Intro_Careers;
