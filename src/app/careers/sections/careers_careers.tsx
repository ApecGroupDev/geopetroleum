"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import CareersForm from "@/components/careersForm";

const Careers_Careers = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! mb-6">
            How to <span className="text-[#00a651]">Apply</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Start your environmental compliance career with a company that values your{" "}
            <span className="font-semibold text-[#00a651]">growth</span> and{" "}
            <span className="font-semibold text-[#00a651]">safety</span>.
          </p>
        </motion.div>

        {/* Two-column layout for large screens */}
        <div className="grid lg:grid-cols-2 gap-2 items-start">
          {/* Left: Instructions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-md border lg:mt-36 border-gray-100"
          >
            <ol className="space-y-5 text-gray-800 text-lg font-medium leading-relaxed">
              <li>
                <span className="text-[#00a651] font-bold">1️.</span> Browse open roles and select your ideal position
              </li>
              <li>
                <span className="text-[#00a651] font-bold">2️.</span> Submit your resume (and optional cover letter)
              </li>
              <li>
                <span className="text-[#00a651] font-bold">3️.</span> Questions? Email us at{" "}
                <a
                  href="mailto:info@geopetroleum.com"
                  className="text-[#00a651] hover:underline"
                >
                  info@geopetroleum.com
                </a>
              </li>
            </ol>

            {/* Contact Info */}
            <div className="mt-10 border-t border-gray-200 pt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#00a651]" />
                <span>Main Office: 40 Lyerly Street, Houston, TX 77022</span>
              </p>
              <a href="tel:844-GEO-4040" className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00a651]" />
                <span>Phone: 844-GEO-4040</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Careers Form */}
          <motion.div
            id="CareersForm"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <CareersForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers_Careers;
