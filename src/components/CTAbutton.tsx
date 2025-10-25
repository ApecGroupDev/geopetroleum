"use client";
import { usePathname, useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function ScrollToContactButton() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/contact") {
      const target = document.getElementById("MainContactForm");
      if (target) {
        const yOffset = -120;
        const y =
          target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      router.push("/contact#MainContactForm");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-3 bg-white text-gray-600 outline-3 outline-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      Get a Free Consultation
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}
