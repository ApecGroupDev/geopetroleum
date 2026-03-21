"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "text", required: false },
] as const;

export default function MainContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

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
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Input fields */}
      {FIELDS.map(({ name, label, type, required }) => (
        <div key={name} className="relative">
          <label
            className={`absolute left-4 transition-all duration-200 pointer-events-none
              ${focused === name || formData[name]
                ? "top-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"
                : "top-4 text-[13px] text-[#999]"
              }`}
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {label}
            {required && " *"}
          </label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            onFocus={() => setFocused(name)}
            onBlur={() => setFocused(null)}
            required={required}
            className={`w-full pt-6 pb-2 px-4 bg-[#f9f9f7] border-b-2 outline-none
                        text-[14px] text-[#1a1a1a] transition-all duration-200
                        ${focused === name
                ? "border-primary bg-white"
                : "border-[#e0e0e0] hover:border-[#ccc]"
              }`}
            style={{ fontFamily: "var(--font-body), sans-serif" }}
          />
        </div>
      ))}

      {/* Message */}
      <div className="relative">
        <label
          className={`absolute left-4 transition-all duration-200 pointer-events-none
            ${focused === "message" || formData.message
              ? "top-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary"
              : "top-4 text-[13px] text-[#999]"
            }`}
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          required
          rows={4}
          className={`w-full pt-6 pb-3 px-4 bg-[#f9f9f7] border-b-2 outline-none resize-none
                      text-[14px] text-[#1a1a1a] transition-all duration-200
                      ${focused === "message"
              ? "border-primary bg-white"
              : "border-[#e0e0e0] hover:border-[#ccc]"
            }`}
          style={{ fontFamily: "var(--font-body), sans-serif" }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="group w-full flex items-center justify-center gap-3 px-7 py-4
                   bg-primary text-white
                   font-bold text-sm uppercase tracking-widest
                   transition-all duration-300 hover:bg-[#008f45] disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        {loading ? (
          <>
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </>
        )}
      </button>

      {/* Feedback */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30"
          >
            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
            <p
              className="text-[13px] text-primary font-semibold"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Thank you! Your message has been sent successfully.
            </p>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 p-4 bg-red-50 border border-red-200"
          >
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
            <p
              className="text-[13px] text-red-600 font-semibold"
              style={{ fontFamily: "var(--font-body), sans-serif" }}
            >
              Something went wrong. Please try again later.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
