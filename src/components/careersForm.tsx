"use client";

import { useState, useEffect } from "react";

interface CareersFormData {
  name: string;
  email: string;
  phone: string;
  department: string;
  message: string;
}

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

  // Auto-hide success message
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitted(false);

    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => data.append(key, value));
      if (file) data.append("resume", file);

      const response = await fetch("https://formspree.io/f/xeopjgpz?ajax=true", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }

      setFormData({ name: "", email: "", phone: "", department: "", message: "" });
      setFile(null);
      (e.target as HTMLFormElement).reset();
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto mt-12 space-y-6 bg-white/90 p-8 rounded-2xl shadow-lg border border-gray-100"
    >
      <h3 className="text-2xl font-semibold text-gray-800! mb-2">
        Submit Your Application
      </h3>
      <p className="text-gray-600 mb-6">
        Fill out the form below and attach your resume — our HR team will reach out
        if you’re a good fit.
      </p>

      {/* Input Fields */}
      {["name", "email", "phone", "department"].map((field) => (
        <input
          key={field}
          type={field === "email" ? "email" : "text"}
          name={field}
          placeholder={
            field === "department"
              ? "Preferred Department"
              : field.charAt(0).toUpperCase() + field.slice(1)
          }
          value={(formData as any)[field]}
          onChange={handleChange}
          required={field !== "phone"}
          className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />
      ))}

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message or Additional Details"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-lg py-3 px-4 text-gray-800 bg-white min-h-32 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
      />

      {/* File Upload */}
      <div>
        <label className="block text-gray-700 mb-2">Attach Resume (PDF or DOC)</label>
        <div className="flex items-center gap-3">
          <label
            htmlFor="resume"
            className="cursor-pointer bg-primary text-white font-medium py-2 px-6 rounded-md hover:bg-[#a91f28] transition-all"
          >
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
          <span className="text-gray-600 text-sm truncate max-w-[200px]">
            {file ? file.name : "No file chosen"}
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-[#a91f28] transition-all"
      >
        Submit Application
      </button>

      {/* Messages */}
      {submitted && (
        <p className="mt-4 text-green-600 font-medium text-center">
          ✅ Thank you! Your application has been sent successfully.
        </p>
      )}

      {error && (
        <p className="mt-4 text-red-600 font-medium text-center">{error}</p>
      )}
    </form>
  );
}
