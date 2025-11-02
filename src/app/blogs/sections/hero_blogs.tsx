"use client";

import { motion } from "framer-motion";

const Hero_Blogs: React.FC = () => {
  return (
    <section className="relative bg-linear-to-br from-[#f5f5f5] via-white to-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-28 pb-20 lg:pt-36 lg:pb-28 relative z-10">

        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900! leading-tight">
            <span className="text-primary">Insights That Drive the Future</span> — Petroleum & Environmental Industry Blogs
          </h1>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Backed by <span className="font-semibold">35+ years of industry expertise</span>, the Geo Petroleum Blog delivers trusted insights,
            actionable trends, and regulatory updates to help <span className="font-semibold">fuel retailers, environmental professionals,</span>
            and <span className="font-semibold">industry leaders</span> stay ahead in the fast-evolving <span className="font-semibold">petroleum industry</span>.
          </p>

          {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
            <button
              onClick={() => {
                const target = document.getElementById("MainContactForm");
                if (target) {
                  const yOffset = -200; // 👈 adjust this for your header height
                  const y =
                    target.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className="bg-[#00a651] hover:bg-[#008d46] text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Contact Us Now
            </button>
            <a
              href="tel:+00000000"
              className="flex items-center justify-center gap-2 text-[#00a651] font-medium hover:text-[#008d46] transition"
            >
              <Phone className="w-5 h-5" /> 000-000-0000
            </a>
          </div> */}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero_Blogs;
