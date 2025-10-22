"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e3e3e3] items-center justify-center text-center px-6">
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {/* 404 Number */}
        <h1 className="text-[#1DA978] text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[16rem] font-extrabold leading-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)]">
          404
        </h1>

        {/* Title */}
        <span className="text-gray-400 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
          Page Not Found
        </span>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg sm:text-xl md:text-2xl mt-4">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block mt-8"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-full text-lg md:text-xl font-medium outline-2 outline-[#1DA978] text-gray-800 hover:bg-[#1DA978] hover:text-white transition-all duration-300"
          >
            RETURN TO HOMEPAGE
          </Link>
        </motion.div>
      </motion.div>

      {/* Footer-like spacing to keep vertical balance */}
      <div className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Geo Petroleum. All rights reserved.
      </div>
    </div>
  );
}
