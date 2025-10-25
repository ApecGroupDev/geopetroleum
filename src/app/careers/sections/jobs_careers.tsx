"use client";

import { motion } from "framer-motion";
import { Wrench, Cog, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const Jobs_Careers = () => {
  const jobs = [
    {
      icon: <Wrench className="w-6 h-6 text-[#00a651]" />,
      title: "Service Technician – Houston, TX",
      intro:
        "Looking for an experienced petroleum equipment technician with expertise in fuel dispensers, canopy systems, and environmental compliance monitoring equipment.",
      requirements: [
        "2+ years of experience in petroleum or mechanical service",
        "Willingness to travel locally for on-site work",
        "Strong commitment to safety and customer service",
      ],
      location: "Houston, TX",
      type: "Full-Time",
    },
    {
      icon: <Cog className="w-6 h-6 text-[#00a651]" />,
      title: "Fabrication Assistant – Houston, TX",
      intro:
        "Entry-level position supporting our fuel tank manufacturing and canopy fabrication teams.",
      requirements: [
        "Basic mechanical or welding knowledge",
        "Ability to lift and handle materials safely",
        "Team player with a strong work ethic",
      ],
      location: "Houston, TX",
      type: "Full-Time",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-gray-900!"
        >
          Now Hiring:{" "}
          <span className="text-[#00a651]">
            Environmental & Petroleum Jobs in Houston, TX
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-gray-700! max-w-3xl mx-auto leading-relaxed"
        >
          We’re actively hiring for multiple positions in operations, compliance,
          and manufacturing — including immediate openings below.
        </motion.p>

        {/* Jobs Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  {job.icon}
                  <h3 className="text-2xl font-semibold text-gray-900!">
                    {job.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {job.intro}
                </p>

                <h4 className="font-semibold text-gray-900! mb-2">
                  Requirements:
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  {job.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>

                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#00a651]" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#00a651]" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>

              <Link
                href="#CareersForm"
                className="inline-flex items-center justify-center bg-[#00a651] text-white font-semibold py-3 px-6 rounded-full hover:bg-[#008d46] transition-all duration-300 shadow-md"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00a651]/10 blur-3xl rounded-full" />
    </section>
  );
};

export default Jobs_Careers;
