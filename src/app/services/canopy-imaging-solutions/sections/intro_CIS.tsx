"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Intro_CIS = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900! leading-tight mb-6">
            Your Canopy is More Than Shelter —{" "}
            <span className="text-[#00a651]">It’s Your Brand Statement</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Your canopy isn’t just a roof — it’s your brand’s identity. It’s what draws
              drivers’ attention and defines your first impression.
            </p>

            <p>
              At <span className="font-semibold text-[#00a651]">Geo Petroleum</span>, we specialize in fuel station
              canopy solutions that blend performance with visual appeal. From{" "}
              <span className="font-semibold text-gray-900">custom canopy design</span> and{" "}
              <span className="font-semibold text-gray-900">fabrication</span> to{" "}
              <span className="font-semibold text-gray-900">lighting integration</span> and{" "}
              <span className="font-semibold text-gray-900">full installation</span>, we deliver end-to-end
              solutions that elevate your brand visibility and protect your investment.
            </p>

            <p>
              Whether you’re upgrading your existing canopy or launching a new site, we make sure your station
              stands tall — sharp, safe, and unforgettable.
            </p>
          </div>

          <div className="mt-8 bg-[#00a651]/10 border-l-4 border-[#00a651] p-4 rounded-lg text-gray-800 italic">
            <p>
              Trusted by leading fuel retailers across Texas and the Southeast —
              Geo Petroleum combines branding expertise with structural precision
              to make every canopy a signature landmark.
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
              src="/images/services/CIS/Intro_CIS.webp"
              alt="Custom Fuel Station Canopy Design"
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

export default Intro_CIS;
