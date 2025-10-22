import Header from "@/components/header";
import HomePageLayout from "./layouts/homepageLayout";
import type { Metadata } from "next";
import Footer from "@/components/footer";
import Hero_Home from "./home/hero_home";
import Intro_Home from "./home/intro_home";

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
        <Header />
        <Hero_Home />
        <Intro_Home />
        <Footer />
      </div>
    </HomePageLayout>
  );
}
