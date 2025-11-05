"use client";

import { motion } from "framer-motion";
import MainContactForm from "@/components/mainContactForm"; // ✅ import the form component

const Intro_Contact = () => {
  return (
    <section className="relative py-32 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left lg:w-1/2"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900! leading-tight">
            Have a Question? Need a Quote? <br className="hidden sm:block" />
            <span className="text-[#00a651]">
              Want Expert Advice on Your Next Project?
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-[#00a651]">Geo Petroleum</span>, we make it simple to connect with real
            professionals who understand the complexity of petroleum operations.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Whether you’re planning a new fueling station, upgrading tanks or canopy systems, or ensuring environmental
            compliance, our Houston-based petroleum services company is here to guide you every step of the way.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            You’ll always communicate directly with seasoned experts — not automated systems or call centers — so you
            receive fast, accurate, and actionable support when it matters most.
          </p>
        </motion.div>

        {/* RIGHT: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 flex justify-center"
        >
          <div
            id="MainContactForm"
            className="
              relative w-full max-w-lg bg-white/90 backdrop-blur-md
              rounded-3xl shadow-xl border border-gray-200 p-8 sm:p-10
              transition-all duration-300 hover:shadow-2xl
            "
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900! mb-6 text-center lg:text-left">
              Send Us a Message
            </h3>
            <div id="MainContactForm">
              <MainContactForm />
            </div>
          </div>

          {/* Subtle Gradient Glow Behind the Form */}
          <div className="absolute -z-10 inset-0 bg-linear-to-tr from-green-200/40 via-transparent to-transparent blur-3xl rounded-3xl" />
        </motion.div>
      </div>

      {/* Decorative Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Intro_Contact;
