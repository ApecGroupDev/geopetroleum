"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro_Blogs = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-white py-28 sm:py-36">
      {/* Background texture / image accent */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/blogs-bg.jpg"
          alt="Geo Petroleum background"
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/90 via-white/70 to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900!">
            Knowledge That Fuels <span className="text-[#00a651]">Progress</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
            The petroleum and environmental industry never stands still — and neither should you.
            <br /><br />
            At <span className="font-semibold text-gray-900">Geo Petroleum</span>, we believe that
            knowledge powers progress. Our petroleum industry blog brings you data-driven insights
            and real-world strategies designed for fuel retailers, contractors, fleet operators,
            and compliance experts.
            <br /><br />
            From <span className="font-medium text-gray-900">EPA and TCEQ updates</span> to{" "}
            <span className="font-medium text-gray-900">tank maintenance</span>,{" "}
            <span className="font-medium text-gray-900">branding design</span>, and{" "}
            <span className="font-medium text-gray-900">sustainability practices</span>, our articles
            help you stay informed, compliant, and competitive in today’s marketplace.
          </p>

          {/* Emphasized line with animated underline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-10 inline-block relative text-2xl font-bold text-[#00a651]"
          >
            Stay in the know. Stay ahead. Stay compliant — with Geo Petroleum.
          </motion.div>
        </motion.div>

        {/* Right side visual accent */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-[#00a651]/10 blur-3xl" />
          <Image
            src="/images/blogs/Blogs_Intro.webp"
            alt="Geo Petroleum Blog Illustration"
            width={480}
            height={480}
            className="absolute rounded-2xl shadow-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro_Blogs;
