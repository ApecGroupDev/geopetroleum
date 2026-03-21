"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Paperclip } from "lucide-react";

interface CareersFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "text", required: false },
  { name: "department", label: "Preferred Department", type: "text", required: true },
] as const;

export default function CareersForm() {
  const [formData, setFormData] = useState<CareersFormData>({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFile(e.target.files?.[0] || null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (file) data.append("resume", file);

      await fetch("https://formspree.io/f/xeopjgpz?ajax=true", {
        method: "POST",
        body: data,
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", department: "", message: "" });
      setFile(null);
      (e.target as HTMLFormElement).reset();
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    /* Industrial framed panel */
    <div className="relative border border-[#d8d8d8] bg-white p-1 shadow-sm">
      <div className="absolute -top-px -left-px w-5 h-5 bg-primary" />
      <div className="absolute -top-px -right-px w-5 h-5 bg-primary" />
      <div className="absolute -bottom-px -left-px w-5 h-5 bg-primary" />
      <div className="absolute -bottom-px -right-px w-5 h-5 bg-primary" />
      <div className="h-[3px] w-full bg-primary" />

      <div className="px-7 sm:px-10 pt-8 pb-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px w-5 bg-primary" />
          <h3
            className="text-[11px] font-black tracking-[0.22em] uppercase text-[#1a1a1a]"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Submit Your Application
          </h3>
        </div>
        <p
          className="text-[13px] text-[#888] mb-7"
          style={{ fontFamily: "var(--font-body), sans-serif" }}
        >
          Fill out the form below and attach your resume — our HR team will reach out if you’re a good fit.
        </p>

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
                {label}{required && " *"}
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
              Message or Additional Details *
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

          {/* File upload */}
          <div>
            <label
              className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#aaa] mb-2"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Attach Resume (PDF or DOC)
            </label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="resume"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2.5
                           border border-primary text-primary
                           text-[11px] font-bold uppercase tracking-widest
                           hover:bg-primary hover:text-white transition-all duration-200"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                <Paperclip className="w-3.5 h-3.5" />
                Choose File
              </label>
              <input
                id="resume"
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <span
                className="text-[12px] text-[#999] truncate max-w-[180px]"
                style={{ fontFamily: "var(--font-body), sans-serif" }}
              >
                {file ? file.name : "No file chosen"}
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full flex items-center justify-center gap-3 px-7 py-4
                       bg-primary text-white font-bold text-sm uppercase tracking-widest
                       transition-all duration-300 hover:bg-[#008f45] disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
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
                  Thank you! Your application has been sent successfully.
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
                  {error}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}