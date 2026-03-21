"use client";

import { motion } from "framer-motion";

const Intro_Services = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#f5f4f0] overflow-hidden">
      {/* ── Engineering grid texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Diagonal stripe accent (left edge) ── */}
      <div
        className="absolute top-0 left-0 w-48 h-full pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-55deg, transparent, transparent 14px, #1e1e1e 14px, #1e1e1e 15px)",
        }}
      />

      <div
        className="relative max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 z-10
                      flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
      >
        {/* ── LEFT: Headline + accent ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-[380px] xl:w-[420px] shrink-0 text-center lg:text-left lg:sticky lg:top-32"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <div className="h-px w-8 bg-primary" />
            <span
              className="text-[11px] font-bold tracking-[0.25em] uppercase text-primary"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Our Approach
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#1a1a1a]!"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Petroleum Solutions Backed by{" "}
            <span className="text-primary">Expertise,</span>{" "}
            Integrity, and{" "}
            <span className="text-primary">Proven Results</span>
          </h2>

          {/* Yellow accent bar */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <div className="h-[3px] w-14 bg-accent" />
          </div>

          {/* Est. block */}
          <div className="mt-8 hidden lg:flex items-start gap-4">
            <div className="w-[3px] h-16 bg-primary shrink-0" />
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#aaa] block mb-1"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                Serving Texas Since
              </span>
              <span
                className="text-5xl font-black text-[#ebebeb] leading-none block"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                1988
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Body paragraphs ── */}
        <div className="flex-1 flex flex-col gap-6 max-w-2xl mx-auto lg:mx-0">
          {[
            <>
              At{" "}
              <span className="font-semibold text-primary">
                Geo Petroleum
              </span>
              , we don’t just deliver petroleum solutions —{" "}
              <span className="font-semibold text-[#1a1a1a]">
                we deliver confidence.
              </span>{" "}
              As a leading name in{" "}
              <span className="font-semibold text-[#1a1a1a]">
                environmental operations
              </span>{" "}
              and compliance, we provide end-to-end support designed to protect
              your investment and the environment.
            </>,
            <>
              From{" "}
              <span className="font-semibold text-[#1a1a1a]">
                environmental consulting in Houston
              </span>{" "}
              to{" "}
              <span className="font-semibold text-[#1a1a1a]">
                risk assessments, compliance management, canopy imaging,
              </span>{" "}
              and{" "}
              <span className="font-semibold text-[#1a1a1a]">
                fuel tank manufacturing,
              </span>{" "}
              our Houston-based team ensures your sites operate safely,
              efficiently, and in full regulatory compliance.
            </>,
            <>
              We proudly serve{" "}
              <span className="font-semibold text-[#1a1a1a]">
                fuel retailers, distributors, fleets, and industrial sites
                across Houston, Texas, and the Southeast
              </span>{" "}
              — helping businesses reduce risks, meet EPA and TCEQ standards,
              and maintain operational excellence.
            </>,
            <>
              Whether you’re seeking trusted{" "}
              <span className="font-semibold text-[#1a1a1a]">
                environmental companies in Houston, TX,
              </span>{" "}
              or an experienced{" "}
              <span className="font-semibold text-[#1a1a1a]">
                environmental consultant in Texas,
              </span>{" "}
              <span className="font-semibold text-primary">
                Geo Petroleum
              </span>{" "}
              delivers the expertise and reliability your project deserves.
            </>,
          ].map((content, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-5 border-l-2 border-[#eee] hover:border-primary transition-colors duration-300 group"
            >
              <p
                className="text-[#555] text-base sm:text-[17px] leading-relaxed group-hover:text-[#333] transition-colors duration-300"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                {content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro_Services;
