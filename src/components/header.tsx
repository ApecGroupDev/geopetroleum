"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Detect large screen
  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Hide header on scroll (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && isLargeScreen) {
        const currentScrollY = window.scrollY;
        setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLargeScreen]);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <header
      className={`fixed top-0 w-full z-30 bg-transparent transition-transform duration-300 ${isLargeScreen ? (isVisible ? "top-0" : "top-full") : "top-0"
        }`}
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 lg:px-0 bg-white h-14 lg:h-14 shadow-sm max-w-[2560px] mx-auto">
        {/* LEFT: Logo + Nav */}
        <div className="flex items-center space-x-6 h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/components/header/Geo-Petroleum.webp"
              alt="Logo"
              width={227}
              height={208}
              className="w-auto h-10 lg:h-14 hover:scale-105 transition-transform"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center h-14">
            {[
              { label: "HOME", path: "/" },
              { label: "SERVICES", path: "/services" },
              { label: "CAREERS", path: "/careers" },
              { label: "BLOG", path: "/blogs" },
              { label: "CONTACT", path: "/contact" },
            ].map(({ label, path }) =>
              label === "SERVICES" ? (
                <div
                  key={path}
                  className="relative group h-full"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div
                    className={`flex items-center h-full px-4 cursor-pointer text-base transition-colors duration-200 ${pathname.startsWith(path)
                      ? "bg-primary text-white"
                      : "text-gray-800 hover:bg-primary hover:text-white"
                      }`}
                  >
                    <Link href={path} className="flex items-center h-full">
                      {label}
                      <ChevronDown
                        className={`w-5 h-5 ml-1 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""
                          }`}
                      />
                    </Link>
                  </div>

                  {/* DROPDOWN */}
                  {showDropdown && (
                    <div className="absolute top-full left-0 w-auto bg-white/60 backdrop-blur-sm z-50 whitespace-nowrap rounded-md shadow">
                      <Link
                        href="/services/environmental-risk-assessment"
                        className="block px-4 py-2 hover:bg-primary hover:text-white rounded-t-md"
                      >
                        Environmental Risk Assessment
                      </Link>
                      <Link
                        href="/services/environmental-compliance-solutions"
                        className="block px-4 py-2 hover:bg-primary hover:text-white"
                      >
                        Environmental Compliance Solutions
                      </Link>
                      <Link
                        href="/services/canopy-imaging-solutions"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-primary hover:text-white"
                      >
                        Canopy Imaging Solutions
                      </Link>
                      <Link
                        href="/services/fuel-tanks-manufacturing"
                        className="block px-4 py-2 hover:bg-primary hover:text-white rounded-b-md"
                      >
                        Fuel Tanks Manufacturing
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className={`flex items-center h-full px-4 transition-colors duration-200 ${pathname.startsWith(path)
                    ? "bg-primary text-white"
                    : "text-gray-800 hover:bg-primary hover:text-white"
                    }`}
                >
                  {label}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* RIGHT: CTA */}
        <div className="hidden lg:flex ml-auto">
          <Link
            href="/contact-us#MainContactForm"
            scroll={false}
            className="flex items-center gap-2 bg-primary text-white py-4 px-6 hover:bg-green-800 transition rounded-none"
          >
            <FaPhoneAlt className="text-lg" />
            FREE CONSULTATION
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-gray-800 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU (ANIMATED) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-md border-t border-gray-200 overflow-hidden"
          >
            <nav className="flex flex-col text-gray-800">
              {[
                { label: "HOME", path: "/" },
                { label: "SERVICES", path: "/services" },
                { label: "CAREERS", path: "/careers" },
                { label: "BLOG", path: "/blogs" },
                { label: "CONTACT", path: "/contact" },
              ].map(({ label, path }) =>
                label === "SERVICES" ? (
                  <div key={path}>
                    <button
                      onClick={toggleDropdown}
                      className={`flex justify-between items-center w-full px-6 py-3 text-left transition-colors duration-200 ${pathname.startsWith(path)
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white"
                        }`}
                    >
                      {label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {/* SERVICES DROPDOWN (MOBILE) */}
                    <AnimatePresence>
                      {showDropdown && (
                        <motion.div
                          key="mobile-dropdown"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="flex flex-col bg-gray-50"
                        >
                          <Link
                            href="/services/environmental-risk-assessment"
                            className="pl-10 pr-6 py-2 hover:bg-primary hover:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            Environmental Risk Assessment
                          </Link>
                          <Link
                            href="/services/environmental-compliance-solutions"
                            className="pl-10 pr-6 py-2 hover:bg-primary hover:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            Environmental Compliance Solutions
                          </Link>
                          <Link
                            href="/services/canopy-imaging-solutions"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pl-10 pr-6 py-2 hover:bg-primary hover:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            Canopy Imaging Solutions
                          </Link>
                          <Link
                            href="/services/fuel-tanks-manufacturing"
                            className="pl-10 pr-6 py-2 hover:bg-primary hover:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            Fuel Tanks Manufacturing
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={path}
                    href={path}
                    onClick={() => setIsOpen(false)}
                    className={`px-6 py-3 transition-colors duration-200 ${pathname.startsWith(path)
                      ? "bg-primary text-white"
                      : "hover:bg-primary hover:text-white"
                      }`}
                  >
                    {label}
                  </Link>
                )
              )}

              {/* MOBILE CTA */}
              <Link
                href="/contact-us#MainContactForm"
                scroll={false}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 hover:bg-green-800 transition"
              >
                <FaPhoneAlt className="text-lg" />
                FREE CONSULTATION
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
