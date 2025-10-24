"use client";

import { motion } from "framer-motion";

const Intro_Services = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900! leading-tight"
        >
          Petroleum Solutions Backed by Expertise, Integrity, and Proven Results
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-700 leading-relaxed"
        >
          At <span className="font-semibold text-[#00a651]">Geo Petroleum</span>, we don’t just deliver petroleum
          solutions — <span className="font-semibold"> we deliver confidence.</span> As a leading name in
          <span className="font-semibold"> environmental operations</span> and compliance, we provide end-to-end
          support designed to protect your investment and the environment.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-700 leading-relaxed"
        >
          From <span className="font-semibold">environmental consulting in Houston</span> to
          <span className="font-semibold">risk assessments, compliance management, canopy imaging,</span> and
          <span className="font-semibold">fuel tank manufacturing,</span> our Houston-based team ensures your
          sites operate safely, efficiently, and in full regulatory compliance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-700 leading-relaxed"
        >
          We proudly serve <span className="font-semibold">fuel retailers, distributors, fleets, and industrial sites
            across Houston, Texas, and the Southeast</span> — helping businesses reduce risks, meet EPA and TCEQ standards,
          and maintain operational excellence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-700 leading-relaxed"
        >
          Whether you’re seeking trusted <span className="font-semibold">environmental companies in Houston, TX,</span>
          or an experienced <span className="font-semibold">environmental consultant in Texas, </span>
          <span className="font-semibold text-[#00a651]">Geo Petroleum</span> delivers the
          expertise and reliability your project deserves.
        </motion.p>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/20 rounded-full blur-2xl" />
    </section>
  );
};

export default Intro_Services;
