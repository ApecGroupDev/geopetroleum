"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro_ERA = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight mb-6">
            Environmental Risk Assessments That{" "}
            <span className="text-[#00a651]">Protect Your Business</span>
          </h1>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              When you operate a fueling site, industrial facility, or municipal yard,
              environmental risks are always present — from soil contamination and
              groundwater leaks to stormwater runoff and regulatory exposure. Ignoring
              these issues can lead to fines, cleanup costs, or permanent site damage.
            </p>

            <p>
              At <span className="font-semibold text-[#00a651]">Geo Petroleum</span>, we
              specialize in Environmental Risk Assessments (ERA) that identify potential
              hazards, evaluate environmental impact, and implement solutions before they
              escalate.
            </p>

            <p>
              Whether you’re opening a new site, expanding operations, or maintaining an
              existing facility, we provide detailed assessments that keep your business
              safe, compliant, and proactive.
            </p>

            <p className="font-medium text-gray-900 bg-[#00a651]/10 border-l-4 border-[#00a651] p-4 rounded-lg italic">
              Still wondering what is an environmental risk assessment? It’s the process of
              identifying and managing environmental threats before they harm your
              operations, employees, or community — and that’s exactly what{" "}
              <span className="font-semibold text-[#00a651]">Geo Petroleum</span> does best.
            </p>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <Image
              src="/images/services/ERA/Intro_Era.webp"
              alt="Environmental Risk Assessment"
              width={700}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          {/* Decorative shape */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00a651]/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Intro_ERA;
