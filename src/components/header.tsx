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

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

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
                  <Link
                    href={path}
                    className={`relative flex items-center h-full px-4 text-base transition-all duration-300
                    ${isActive(path)
                        ? "text-primary after:w-full"
                        : "text-gray-800 hover:text-primary after:w-0 hover:after:w-full"}
                          after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-primary after:transition-all after:duration-300`}
                  >
                    {label}
                    <ChevronDown
                      className={`w-5 h-5 ml-1 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                    />
                  </Link>

                  {/* DROPDOWN MENU */}
                  {showDropdown && (
                    <div className="absolute top-full left-0 w-auto bg-gray-200 border text-gray-800! border-gray-200 shadow-lg rounded-md z-50 whitespace-nowrap">
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
                        className="block px-4 py-2 hover:bg-primary hover:text-white"
                      >
                        Canopy Imaging Solutions
                      </Link>
                      <Link
                        href="https://www.metalproductsusa.com/"
                        target="blank"
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
                  className={`relative flex items-center h-full px-4 text-base transition-all duration-300
                  ${isActive(path)
                      ? "text-primary after:w-full"
                      : "text-gray-800 hover:text-primary after:w-0 hover:after:w-full"}
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-1 after:bg-primary after:transition-all after:duration-300`}
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
            href="/contact/#MainContactForm"
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
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 z-50 mt-16 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200 rounded-b-2xl overflow-hidden"
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
                    <div key={path} className="overflow-hidden">
                      <button
                        onClick={toggleDropdown}
                        className={`flex justify-between items-center w-full px-6 py-3 text-left font-medium text-lg tracking-wide transition-all duration-200
                    ${isActive(path)
                            ? "text-primary border-l-4 border-primary bg-gray-50"
                            : "text-gray-800 hover:text-primary hover:bg-gray-50"}
                  `}
                      >
                        {label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${showDropdown ? "rotate-180 text-primary" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {showDropdown && (
                          <motion.div
                            key="mobile-dropdown"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={{
                              hidden: { opacity: 0, y: -10 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                transition: { staggerChildren: 0.05 },
                              },
                            }}
                            className="flex flex-col bg-gray-50 border-t border-gray-200"
                          >
                            {[
                              { label: "Environmental Risk Assessment", path: "/services/environmental-risk-assessment" },
                              { label: "Environmental Compliance Solutions", path: "/services/environmental-compliance-solutions" },
                              { label: "Canopy Imaging Solutions", path: "/services/canopy-imaging-solutions" },
                              { label: "Fuel Tanks Manufacturing", path: "/services/fuel-tanks-manufacturing" },
                            ].map(({ label, path }) => (
                              <motion.div
                                key={path}
                                variants={{
                                  hidden: { opacity: 0, y: -5 },
                                  visible: { opacity: 1, y: 0 },
                                }}
                              >
                                <Link
                                  href={path}
                                  onClick={() => setIsOpen(false)}
                                  className={`block pl-10 pr-6 py-2 text-[15px] transition-colors duration-200
                              ${pathname === path
                                      ? "text-primary font-semibold border-l-4 border-primary bg-white"
                                      : "text-gray-700 hover:text-primary hover:bg-white"}
                            `}
                                >
                                  {label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={path}
                      href={path}
                      onClick={() => setIsOpen(false)}
                      className={`px-6 py-3 font-medium text-lg transition-all duration-200 border-l-4 
                  ${isActive(path)
                          ? "text-primary border-primary bg-gray-50"
                          : "border-transparent text-gray-800 hover:text-primary hover:bg-gray-50"}
                `}
                    >
                      {label}
                    </Link>
                  )
                )}

                {/* MOBILE CTA */}
                <Link
                  href="/contact#MainContactForm"
                  scroll={false}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary w-[80%] mx-auto rounded-full text-white py-4 mt-4 mb-6 font-semibold tracking-wide hover:bg-green-800 transition-all duration-300 shadow-md"
                >
                  <FaPhoneAlt className="text-lg" />
                  FREE CONSULTATION
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
};

export default Header;
