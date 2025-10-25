import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import CTASection from "@/components/cta";
import BlogsSchema from "@/components/schema/BlogsSchema";
import Hero_Careers from "./sections/hero_careers";
import Intro_Careers from "./sections/intro_careers";
import WhyWork_Careers from "./sections/whyWork_careers";
import Jobs_Careers from "./sections/jobs_careers";
import Benefits_Careers from "./sections/benefits_careers";
import Careers_Careers from "./sections/careers_careers";
import FAQ_Careers from "./sections/faq_careers";

export const metadata: Metadata = {
  title: "Environmental Compliance Jobs | Careers at Geo Petroleum",
  description: "Explore environmental compliance jobs and petroleum careers at Geo Petroleum in Houston — build your future with training, safety, and real growth.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.geopetroleum.com/careers',
  },
};

const Careers: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <BlogsSchema />
      <Header />
      <Hero_Careers />
      <Intro_Careers />
      <WhyWork_Careers />
      <Jobs_Careers />
      <Benefits_Careers />
      <Careers_Careers />
      <CTASection />
      <FAQ_Careers />
      <Footer />
    </div>
  );
};

export default Careers;