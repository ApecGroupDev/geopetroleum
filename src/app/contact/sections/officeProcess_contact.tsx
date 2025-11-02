"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const steps = [
  {
    number: "1️",
    title: "Quick Response",
    desc: "We respond to all inquiries within one business day.",
  },
  {
    number: "2️",
    title: "Consultation",
    desc: "Our experts review your goals and provide tailored recommendations.",
  },
  {
    number: "3️",
    title: "Site Visit or Estimate",
    desc: "For larger projects, we offer detailed inspections or custom quotes.",
  },
  {
    number: "4️",
    title: "Follow-Through",
    desc: "From consultation to completion, we stay by your side — and beyond.",
  },
];

const OfficeProcess_Contact = () => {
  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT: Our Office */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900! mb-6">
            Our <span className="text-primary">Office</span>
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <p>
                <span className="font-semibold text-gray-900">Main Office (Headquarters)</span> <br />
                40 Lyerly Street <br />
                Houston TX 77022
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:844-GEO-4040">844-GEO-4040</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:Sales@GeoPetroleum.com"
                className="text-base sm:text-lg font-medium text-[#00a651] hover:underline hover:text-[#008d46] transition-colors duration-200"
              >
                info@GeoPetroleum.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-primary" />
              <p>Monday–Friday, 8AM–5PM</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <a
              href="#MainContactForm"
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition-all duration-300"
            >
              Contact Our Team
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: How We Work With You */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900! mb-8">
            How We <span className="text-primary">Work With You</span>
          </h2>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            When you reach out to <span className="font-semibold text-primary">Geo Petroleum</span>, expect a transparent, fast, and professional experience:
          </p>

          <div className="relative pl-8 space-y-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[38px] top-0 w-8 h-8 bg-primary text-white font-bold rounded-full flex items-center justify-center shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900!">{step.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed mt-1">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-700 mt-10 leading-relaxed">
            We don’t just provide services — we build long-term partnerships based on trust, safety, and performance.
          </p>
        </motion.div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-[-150px] right-[-100px] w-[350px] h-[350px] bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
    </section>
  );
};

export default OfficeProcess_Contact;
