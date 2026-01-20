import Header from "@/components/header";
import HomePageLayout from "./layouts/homepageLayout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Hero_Home from "./home/hero_home";
import Intro_Home from "./home/intro_home";
import CTASection from "@/components/cta";
import MissionAssocs_Home from "./home/missionAssocs_home";
import HomeSchema from "@/components/schema/HomeSchema";
import Expertise_Home from "./home/expertise_home";
import Core_Home from "./home/core_home";
import Testimonial_Home from "./home/testimonials_home";
import Industries_Home from "./home/industries_home";
import FAQ_Home from "./home/faq_home";

export const metadata: Metadata = {
  title: "Petroleum Company in Houston | Fuel & Environmental Experts",
  description: "Geo Petroleum delivers safe, reliable petroleum and environmental services in Houston. Trusted experts for fuel systems, compliance, and infrastructure.",
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
        <Expertise_Home />
        <MissionAssocs_Home />
        <Core_Home />
        <CTASection />
        <Testimonial_Home />
        <Industries_Home />
        <FAQ_Home />
        <Footer />
      </div>
    </HomePageLayout>
  );
}
