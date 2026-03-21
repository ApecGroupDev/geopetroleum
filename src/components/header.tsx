"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "HOME", path: "/" },
  { label: "SERVICES", path: "/services" },
  { label: "CAREERS", path: "/careers" },
  { label: "BLOG", path: "/blogs" },
  { label: "CONTACT", path: "/contact" },
];

const SERVICE_LINKS = [
  {
    label: "Environmental Risk Assessment",
    path: "/services/environmental-risk-assessment",
  },
  {
    label: "Environmental Compliance Solutions",
    path: "/services/environmental-compliance-solutions",
  },
  {
    label: "Canopy Imaging Solutions",
    path: "/services/canopy-imaging-solutions",
  },
  {
    label: "Fuel Tanks Manufacturing",
    path: "https://www.metalproductsusa.com/",
  },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsLargeScreen(window.innerWidth >= 1024);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      if (isLargeScreen) {
        setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isLargeScreen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isLargeScreen
          ? isVisible
            ? "translate-y-0"
            : "-translate-y-full"
          : "translate-y-0"
      } ${scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : ""}`}
    >
      {/* ── Thin primary accent line at very top ── */}
      <div className="h-[3px] w-full bg-primary" />

      {/* ── Main bar ── */}
      <div
        className={`relative flex items-center justify-between px-4 lg:px-8 xl:px-14 h-16 lg:h-[68px] transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md" : "bg-[#f5f4f0]"
        }`}
      >
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* ── LEFT: Logo + Nav ── */}
        <div className="relative flex items-center gap-8 h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logos/components/header/Geo-Petroleum.webp"
              alt="Geo Petroleum Logo"
              width={227}
              height={208}
              priority
              className="w-auto h-9 lg:h-11 hover:opacity-90 transition-opacity duration-200"
            />
          </Link>

          {/* Vertical divider */}
          <div className="hidden lg:block h-8 w-px bg-[#d8d8d8]" />

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center h-full gap-1">
            {NAV_LINKS.map(({ label, path }) =>
              label === "SERVICES" ? (
                <div
                  key={path}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <Link
                    href={path}
                    className={`relative flex items-center gap-1 h-full px-4 text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-200
                      ${isActive(path) ? "text-primary" : "text-[#2c2c2c] hover:text-primary"}`}
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}
                    />
                    {/* Active / hover indicator */}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-300 ${
                        isActive(path) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {showDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 z-50 min-w-[280px] bg-white border border-[#e8e8e8] shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
                      >
                        {/* Green top accent */}
                        <div className="h-[3px] w-full bg-primary" />

                        {SERVICE_LINKS.map(({ label, path }, i) => (
                          <Link
                            key={path}
                            href={path}
                            className={`flex items-center gap-3 px-5 py-3 text-[13px] font-medium text-[#2c2c2c]
                              hover:bg-[#f5f4f0] hover:text-primary transition-colors duration-150
                              ${i !== SERVICE_LINKS.length - 1 ? "border-b border-[#f0f0f0]" : ""}`}
                            style={{
                              fontFamily: "var(--font-body), sans-serif",
                            }}
                          >
                            {/* Small green dot marker */}
                            <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-60 shrink-0" />
                            {label}
                          </Link>
                        ))}

                        {/* Bottom corner notch detail */}
                        <div className="absolute -bottom-px -right-px w-3 h-3 bg-primary opacity-40" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className={`relative flex items-center h-full px-4 text-[13px] font-bold tracking-[0.12em] uppercase transition-colors duration-200
                    ${isActive(path) ? "text-primary" : "text-[#2c2c2c] hover:text-primary"}`}
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {label}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] bg-primary transition-all duration-300 ${
                      isActive(path) ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* ── RIGHT: CTA + Mobile toggle ── */}
        <div className="relative flex items-center gap-3">
          {/* CTA — short on xs, full on sm+ */}
          <a
            href="tel:844-GEO-4040"
            className="flex items-center gap-2 bg-primary text-white
                       px-4 xs:px-6 py-2.5
                       text-[12px] font-bold tracking-widest uppercase
                       hover:bg-[#008f45] transition-colors duration-200"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            <FaPhoneAlt className="text-sm shrink-0" />
            <span className="hidden xs:inline">FREE CONSULTATION</span>
            <span className="xs:hidden">FREE</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 border border-[#d0d0d0] text-[#2c2c2c] hover:border-primary hover:text-primary transition-colors duration-200"
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FaTimes className="text-base" />
            ) : (
              <FaBars className="text-base" />
            )}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════
          MOBILE MENU
      ══════════════════════════════ */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[calc(68px+3px)] left-0 right-0 z-50 bg-white border-t border-[#e8e8e8] shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden"
            >
              {/* Grid texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.12]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)
                  `,
                  backgroundSize: "28px 28px",
                }}
              />

              <nav className="relative flex flex-col">
                {NAV_LINKS.map(({ label, path }) =>
                  label === "SERVICES" ? (
                    <div key={path} className="border-b border-[#f0f0f0]">
                      <button
                        onClick={() => setMobileServicesOpen((p) => !p)}
                        className={`flex justify-between items-center w-full px-6 py-4 text-[13px] font-bold tracking-[0.14em] uppercase transition-colors duration-150
                          ${isActive(path) ? "text-primary border-l-[3px] border-primary bg-[#f9f9f7]" : "text-[#2c2c2c] border-l-[3px] border-transparent hover:text-primary hover:bg-[#f9f9f7]"}`}
                        style={{
                          fontFamily: "var(--font-montserrat), sans-serif",
                        }}
                      >
                        {label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden bg-[#f9f9f7] border-t border-[#ebebeb]"
                          >
                            {SERVICE_LINKS.map(({ label, path }) => (
                              <Link
                                key={path}
                                href={path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 pl-10 pr-6 py-3 text-[13px] transition-colors duration-150
                                  ${
                                    pathname === path
                                      ? "text-primary font-semibold border-l-[3px] border-primary bg-white"
                                      : "text-[#555] font-medium border-l-[3px] border-transparent hover:text-primary hover:bg-white"
                                  }`}
                                style={{
                                  fontFamily: "var(--font-body), sans-serif",
                                }}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-50 shrink-0" />
                                {label}
                              </Link>
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
                      className={`px-6 py-4 text-[13px] font-bold tracking-[0.14em] uppercase border-b border-[#f0f0f0] transition-colors duration-150 border-l-[3px]
                        ${
                          isActive(path)
                            ? "text-primary border-l-primary bg-[#f9f9f7]"
                            : "text-[#2c2c2c] border-l-transparent hover:text-primary hover:bg-[#f9f9f7]"
                        }`}
                      style={{
                        fontFamily: "var(--font-montserrat), sans-serif",
                      }}
                    >
                      {label}
                    </Link>
                  ),
                )}

                {/* Mobile CTA */}
                <div className="p-4 bg-[#f5f4f0]">
                  <a
                    href="tel:844-GEO-4040"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white
                               text-[13px] font-bold tracking-widest uppercase hover:bg-[#008f45] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    <FaPhoneAlt />
                    FREE CONSULTATION
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
