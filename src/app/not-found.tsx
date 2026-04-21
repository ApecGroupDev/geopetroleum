"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white via-[#f5f7f6] to-[#e6efe9]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {/* 404 Number */}
        <h1 className="font-[family-name:var(--font-montserrat)] text-[var(--color-primary)] text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[15rem] font-extrabold leading-none tracking-tight drop-shadow-[0_6px_10px_rgba(0,166,81,0.25)]">
          404
        </h1>

        {/* Title */}
        <h2 className="font-[family-name:var(--font-montserrat)] text-[var(--color-secondary)] font-bold text-3xl sm:text-4xl md:text-5xl mt-2">
          Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-[var(--color-muted)] text-base sm:text-lg md:text-xl mt-4 max-w-xl mx-auto">
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
            className="inline-block px-7 py-3 rounded-full text-base md:text-lg font-semibold tracking-wide bg-[var(--color-primary)] text-white shadow-md shadow-[rgba(0,166,81,0.25)] hover:bg-[#008a43] hover:shadow-lg transition-all duration-300"
          >
            RETURN TO HOMEPAGE
          </Link>
        </motion.div>
      </motion.div>
      </main>
      <Footer />
    </div>
  );
}
