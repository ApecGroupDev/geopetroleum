"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-linear-to-b from-[#1b1b1b] via-[#202020] to-[#242424] text-gray-300 font-inter overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-linear-to-r from-transparent via-[#1DA978] to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* 1️⃣ Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <Image
            src="/logos/components/header/Geo-Petroleum.webp"
            alt="Geo Petroleum Logo"
            width={240}
            height={240}
            className="w-auto h-20 sm:h-24 mb-4 transition-transform hover:scale-105 bg-white rounded-2xl"
          />
          <p className="text-sm text-gray-400 max-w-[320px] leading-relaxed">
            Delivering excellence in environmental compliance, fuel management, and sustainable petroleum
            solutions nationwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {[
              "https://www.facebook.com/",
              "https://www.linkedin.com/",
              "https://www.instagram.com/",
              "https://twitter.com/",
            ].map((url, i) => (
              <SocialIcon
                key={i}
                url={url}
                target="_blank"
                style={{ height: 34, width: 34, borderRadius: 6 }}
                bgColor="#1DA978"
                className="transition-transform hover:scale-110"
              />
            ))}
          </div>
        </motion.div>

        {/* 2️⃣ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center md:items-center"
        >
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Careers", href: "/careers" },
              { label: "Blog", href: "/blogs" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[#1DA978] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 3️⃣ Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-end text-center md:text-right"
        >
          <h3 className="text-white text-lg font-semibold mb-4 tracking-wide">
            Contact Us
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            <a
              href="tel:000-000-0000"
              className="hover:text-[#1DA978] transition-colors"
            >
              000-000-0000
            </a>
            <br />
            <a
              href="mailto:info@geopetroleum.com"
              className="hover:text-[#1DA978] transition-colors"
            >
              info@geopetroleum.com
            </a>
          </p>

          <div className="mt-4 text-sm text-gray-400 leading-relaxed">
            <p className="font-medium text-gray-200">Main Office:</p>
            <p>505 Garden Oaks Blvd</p>
            <p>Houston, TX 77018</p>
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Copyright */}
      <div className="py-6 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} Geo Petroleum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
