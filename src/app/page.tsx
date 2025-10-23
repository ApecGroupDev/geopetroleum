import Header from "@/components/header";
import HomePageLayout from "./layouts/homepageLayout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Hero_Home from "./home/hero_home";
import Intro_Home from "./home/intro_home";
import ExpertiseSection from "./home/expertise_home";
import CoreServices from "./home/core_home";
import IndustriesWeServe from "./home/industries_home";
import TestimonialsSection from "./home/testimonials_home";
import CTASection from "@/components/cta";
import HomeFAQSection from "./home/faq_home";
import MissionAssocs_Home from "./home/missionAssocs_home";
import HomeSchema from "@/components/schema/HomeSchema";

export const metadata: Metadata = {
  title: "",
  description:
    "",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.geopetroleum.com/", // ✅ use full absolute URL (recommended by Next.js SEO docs)
  },
};

export default function Page() {
  return (
    <HomePageLayout>
      {/* ✅ JSON-LD Schema */}

      {/* ✅ Main Page Sections */}
      <div className="flex flex-col">
        <HomeSchema />
        <Header />
        <Hero_Home />
        <Intro_Home />
        <ExpertiseSection />
        <MissionAssocs_Home />
        <CoreServices />
        <CTASection />
        <TestimonialsSection />
        <IndustriesWeServe />
        <HomeFAQSection />
        <Footer />
      </div>
    </HomePageLayout>
  );
}
