"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardCheck, Microscope, ShieldCheck } from "lucide-react";

const assessments = [
  {
    icon: <ClipboardCheck className="w-10 h-10 text-[#00a651]" />,
    title: "Environmental Phase I ESA",
    description: `A Phase I Environmental Site Assessment focuses on identifying existing or potential concerns on a property that may indicate an environmental risk. The assessment will identify these concerns through methods such as review of regulatory agency information, aerial photographs, historical documents, interviews with previous property owners, and a physical inspection of the property.`,
    image: "/images/services/ERA/Phase_1.webp", // 👈 Example: site inspection image
  },
  {
    icon: <Microscope className="w-10 h-10 text-[#00a651]" />,
    title: "Environmental Phase II ESA",
    description: `While a Phase I ESA is a preliminary investigation, a Phase II Environmental Site Assessment may be required if information collected during a Phase I ESA indicates the possible presence of contamination or if a more in-depth investigation is required. A Phase II ESA typically involves the drilling of exploratory soil borings to obtain soil and/or groundwater samples, which are analyzed at an accredited laboratory.`,
    image: "/images/services/ERA/Phase_2.webp", // 👈 Example: lab or soil sample photo
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#00a651]" />,
    title: "Risk-Based Assessment, Corrective Action, and Site Closure",
    description: `The Petroleum Storage Tank (PST) division of the Texas Commission on Environmental Quality (TCEQ) manages Leaking Petroleum Storage Tank (LPST) sites through a risk-based corrective action program. This process analyzes soil, groundwater, and air samples to evaluate at-risk receptors such as drinking water wells or surface water. Sites undergo monitoring and corrective action until all regulatory limits are met.`,
    image: "/images/services/ERA/Phase_3.webp", // 👈 Example: monitoring well or compliance photo
  },
];

const Phases_ERA = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Intro Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="items-center mb-24 text-center"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900! leading-tight">
              Site <span className="text-[#00a651]">Assessments</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              GEO’s environmental site assessments (ESAs) range in scope from
              preliminary site evaluation to full-scale environmental studies and
              remedial corrective action. Our services adapt to client needs, site
              characteristics, and local or federal regulations — helping clients
              make sound business and financial decisions associated with
              contaminated properties.
            </p>
          </div>
        </motion.div>

        {/* === Assessment Cards with Images === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {assessments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Card Image */}
              <div className="mb-6 rounded-2xl overflow-hidden h-60">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Icon + Text */}
              <div className="mb-5">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900! mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed grow">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* === Simplified Explanation === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 bg-[#00a651]/10 rounded-3xl p-10 border-l-4 border-[#00a651] shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900! mb-6 text-center">
            Understanding Each Stage
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-gray-800 text-base sm:text-lg leading-relaxed">
            <div>
              <span className="block font-semibold text-[#00a651] mb-2">
                Phase I ESA:
              </span>
              A preliminary investigation that determines environmental risks
              based on historical and current property usage.
            </div>
            <div>
              <span className="block font-semibold text-[#00a651] mb-2">
                Phase II ESA:
              </span>
              Involves laboratory analysis of soil and groundwater samples to
              confirm or rule out contamination.
            </div>
            <div>
              <span className="block font-semibold text-[#00a651] mb-2">
                Risk-Based Assessment:
              </span>
              Conducted when contamination is confirmed, ensuring full
              compliance with TCEQ requirements for case closure.
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00a651]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-200/30 rounded-full blur-2xl" />
    </section>
  );
};

export default Phases_ERA;
