import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import CTASection from "@/components/cta";
import ServicesSchema from "@/components/schema/ServicesSchema";
import FAQ_Blogs from "./sections/faq_blogs";
import Hero_Blogs from "./sections/hero_blogs";
import Intro_Blogs from "./sections/intro_blogs";
import Topics_Blogs from "./sections/topics_blogs";
import Audience_Blogs from "./sections/audience_blogs";

export const metadata: Metadata = {
  title: "Petroleum Industry Blogs & Insights | Geo Petroleum",
  description: "Read the latest petroleum industry blogs from Geo Petroleum — expert insights on fuel systems, compliance, sustainability, and Houston energy trends.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.geopetroleum.com/blogs',
  },
};

const Blogs: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <ServicesSchema />
      <Header />
      <Hero_Blogs />
      <Intro_Blogs />
      <Topics_Blogs />
      <Audience_Blogs />
      <CTASection />
      <FAQ_Blogs />
      <Footer />
    </div>
  );
};

export default Blogs;