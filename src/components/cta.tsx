"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const ScrollToContactButton = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/contact") {
      const target = document.getElementById("MainContactForm");
      if (target) {
        const y = target.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push("/contact#MainContactForm");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="group inline-flex items-center gap-3 bg-white text-[#1a1a1a]
                 px-8 py-4 font-bold text-sm uppercase tracking-widest cursor-pointer
                 shadow-[0_4px_24px_rgba(0,0,0,0.15)]
                 hover:bg-accent transition-all duration-300"
      style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
    >
      Get a Free Consultation
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
};

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a]">
      {/* ── Engineering grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Diagonal stripe accent (right edge) ── */}
      <div
        className="absolute top-0 right-0 w-64 h-full pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #fff 14px, #fff 15px)",
        }}
      />

      {/* ── Green left border accent ── */}
      <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

      {/* ── Subtle green glow top-left ── */}
      <div className="absolute top-0 left-0 w-[500px] h-full bg-[radial-gradient(ellipse_at_left,rgba(0,166,81,0.12),transparent_70%)] pointer-events-none" />

      {/* ── Corner brackets ── */}
      <div className="absolute top-6 right-6 lg:right-14 opacity-20">
        <div className="w-7 h-7 border-t-2 border-r-2 border-white" />
      </div>
      <div className="absolute bottom-6 right-6 lg:right-14 opacity-20">
        <div className="w-7 h-7 border-b-2 border-r-2 border-white" />
      </div>

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-20
                      flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* ── Left content ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center lg:text-left max-w-xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Work With Us
            </span>
          </div>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-white! leading-tight"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Let’s Build a Reliable <br className="hidden sm:block" />
            <span className="text-primary">Future Together</span>
          </h2>

          <p
            className="mt-4 text-[#aaa] text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed"
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          >
            At <span className="text-white font-semibold">Geo Petroleum</span>,
            we provide complete petroleum solutions — from equipment and
            compliance to manufacturing and maintenance.
          </p>

          {/* Contact info */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="tel:844-GEO-4040"
              className="flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-primary text-white shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span
                className="text-[13px] text-[#999] group-hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                844-GEO-4040
              </span>
            </a>

            <div className="hidden sm:block w-px h-5 bg-white/10" />

            <a
              href="mailto:info@geopetroleum.com"
              className="flex items-center gap-2.5 group"
            >
              <span className="w-8 h-8 flex items-center justify-center bg-primary text-white shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </span>
              <span
                className="text-[13px] text-[#999] group-hover:text-white transition-colors duration-200"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                info@geopetroleum.com
              </span>
            </a>
          </div>
        </motion.div>

        {/* ── Right CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="shrink-0"
        >
          <ScrollToContactButton />

          {/* Small reassurance line */}
          <p
            className="mt-3 text-center text-[11px] text-[#555] tracking-wide uppercase"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            No commitment required
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
