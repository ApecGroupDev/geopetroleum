"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function MainContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xvgwjjke", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000); // auto-hide success
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        space-y-6 sm:space-y-8 tracking-wide mt-8
        w-full max-w-2xl
        text-gray-800
      "
    >
      {/* Input Fields */}
      {(["name", "email", "phone"] as const).map((field) => (
        <div key={field} className="relative group">
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={
              field === "name"
                ? "Your Name"
                : field === "email"
                  ? "Email Address"
                  : "Phone Number"
            }
            value={formData[field]}
            onChange={handleChange}
            required={field !== "phone"}
            className="
        w-full border-b border-gray-300 bg-transparent
        outline-none py-3 text-base
        placeholder-gray-500 transition-all duration-300
        focus:border-[#00a651] focus:placeholder-transparent
      "
          />
          <span
            className="
        absolute left-0 bottom-0 h-px w-0
        bg-[#00a651] transition-all duration-300
        group-focus-within:w-full
      "
          />
        </div>
      ))}

      {/* Message Box */}
      <div className="relative group">
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="
            w-full border-b border-gray-300 bg-transparent
            outline-none py-3 min-h-32 text-base
            placeholder-gray-500 transition-all duration-300
            focus:border-[#00a651] focus:placeholder-transparent
          "
        />
        <span
          className="
            absolute left-0 bottom-0 h-px w-0
            bg-[#00a651] transition-all duration-300
            group-focus-within:w-full
          "
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="
          w-full sm:w-auto bg-[#00a651] text-white font-semibold
          px-10 py-3 rounded-full shadow-md
          hover:bg-[#00944a] hover:shadow-lg
          transition-all duration-300
        "
      >
        Send Message
      </button>

      {/* Feedback Messages */}
      <AnimatePresence>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-[#00a651] font-medium mt-4"
          >
            ✅ Thank you! Your message has been sent successfully.
          </motion.p>
        )}
        {error && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-red-600 font-medium mt-4"
          >
            ⚠️ Something went wrong. Please try again later.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
