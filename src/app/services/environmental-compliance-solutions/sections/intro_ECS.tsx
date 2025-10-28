"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro_ECS = () => {
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
            Environmental Compliance Solutions That{" "}
            <span className="text-[#00a651]">Protect Your Business and the Environment</span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With 25+ years of experience helping petroleum businesses stay compliant,
            <span className="font-semibold text-[#00a651]"> Geo Petroleum</span> provides trusted environmental
            compliance solutions in Houston and across Texas — keeping your operations safe, certified, and
            inspection-ready.
          </p>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            {/* <p>
              Environmental compliance isn’t just a box to check — it’s the foundation of your operation’s safety,
              efficiency, and long-term sustainability.
            </p> */}
            <p>
              The complex web of <span className="font-semibold text-gray-900">EPA and TCEQ regulations</span> can
              overwhelm even experienced operators. A single missed inspection or incorrect report can lead to fines,
              delays, or serious environmental damage.
            </p>
            <p>
              At <span className="font-semibold text-[#00a651]">Geo Petroleum</span>, we take the complexity off your
              plate. Our team manages testing, permitting, documentation, remediation, and inspections to keep your
              business safe and in full regulatory compliance.
            </p>
            {/* <p>
              Whether you’re partnering with leading{" "}
              <span className="font-semibold text-gray-900">environmental companies in Houston, TX</span>, or searching
              for trusted experts who understand your fuel site inside out — Geo Petroleum delivers clarity, compliance,
              and confidence.
            </p> */}
          </div>

          <div className="mt-8 bg-[#00a651]/10 border-l-4 border-[#00a651] p-4 rounded-lg text-gray-800 italic">
            <p>
              Our certified environmental consultants work closely with fuel retailers, industrial operators, and
              municipalities — ensuring every site meets EPA, TCEQ, and state-level regulations without stress or
              surprises.
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
              src="/images/services/ECS/Intro_ECS_New.png"
              alt="Environmental Compliance Services"
              width={700}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Decorative Glow */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00a651]/20 rounded-full blur-3xl" />
        </motion.div>
      </div>

      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Intro_ECS;
