import Header from "@/components/header";
import HomePageLayout from "./layouts/homepageLayout";
import type { Metadata } from "next";
import Footer from "@/components/footer";

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
        <Footer />
      </div>
    </HomePageLayout>
  );
}
