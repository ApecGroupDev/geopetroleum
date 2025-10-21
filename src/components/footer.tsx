import { SocialIcon } from "react-social-icons";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-linear-to-b from-[#0c0c0c] to-[#151515] text-gray-300 font-inter overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[6px] bg-linear-to-r from-transparent via-[#c62931] to-transparent" />

      {/* Main Content */}
      <div
        className="
        max-w-[1440px] mx-auto 
        px-6 sm:px-8 md:px-12 lg:px-20 
        py-16 
        flex flex-col items-center text-center
        md:grid md:grid-cols-2 lg:grid-cols-3
        md:gap-x-10 lg:gap-x-14 gap-y-14
      "
      >
        {/* 1️⃣ Logo + Tagline */}
        <div className="relative flex flex-col items-center md:hidden lg:flex">
          <div className="absolute -inset-20 bg-[#c62931]/25 blur-[140px] rounded-full -z-10" />
          <Link href="/" className="block">
            <Image
              src="/logos/APEC.webp"
              alt="APEC Since 1989"
              width={260}
              height={260}
              className="w-auto h-24 sm:h-28 lg:h-32 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <p className="mt-4 text-sm text-gray-400 max-w-[320px] leading-relaxed">
            Since 1989, The APEC Group has delivered reliable petroleum equipment,
            environmental compliance, and construction services across the U.S.
          </p>
        </div>

        {/* 2️⃣ Contact + Social (Moves below logo on mobile) */}
        <div className="order-last md:order-0 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-white text-lg font-semibold tracking-wide">Contact Us</h3>

          <p className="mt-2 text-sm text-gray-400">
            <a href="tel:855-444-2732" className="hover:text-[#c62931] transition-colors">
              855-444-2732
            </a>{" "}
            |{" "}
            <a href="mailto:Sales@TheAPECgroup.com" className="hover:text-[#c62931] transition-colors">
              Sales@TheAPECgroup.com
            </a>
          </p>

          <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3">
            {[
              "https://twitter.com/theapecgroup",
              "https://www.instagram.com/the_apec_group/",
              "https://www.facebook.com/people/APEC-Group/100078538340182/",
              "https://www.linkedin.com/company/apec-group-petroleum-equipment-and-services",
            ].map((url, i) => (
              <SocialIcon
                key={i}
                url={url}
                target="_blank"
                style={{ height: 34, width: 34, borderRadius: 6 }}
                bgColor="#c62931"
                className="transition-transform transform hover:scale-110"
              />
            ))}
          </div>

          <p className="mt-3 text-xs text-gray-500 max-w-[280px] leading-relaxed">
            Follow us for updates on petroleum equipment, compliance, and service announcements.
          </p>
        </div>

        {/* 3️⃣ Office Locations */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-white text-lg font-semibold tracking-wide">Our Offices</h3>

          <div className="mt-3 text-sm text-gray-400 space-y-4 leading-relaxed">
            <div>
              <p className="font-medium text-gray-200">Main Office:</p>
              <p>4732-E North Royal Atlanta Drive</p>
              <p>Tucker, GA 30084</p>
            </div>

            <div>
              <p className="font-medium text-gray-200">Branch Office:</p>
              <p>505 Garden Oaks Blvd</p>
              <p>Houston, TX 77018</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700/50 mt-8" />

      {/* Copyright */}
      <div className="py-6 text-center text-gray-500 text-sm tracking-wide">
        © 2024–2025 The APEC Group. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
