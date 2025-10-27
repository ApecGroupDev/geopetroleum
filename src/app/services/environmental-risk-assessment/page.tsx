import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import CTASection from "@/components/cta";
import Hero_ERA from "./sections/hero_ERA";
import Intro_ERA from "./sections/intro_ERA";
import Phases_ERA from "./sections/phases_ERA";
import Choose_ERA from "./sections/choose_ERA";
import Services_ERA from "./sections/services_ERA";
import Testimonial_ERA from "./sections/testimonials_ERA";
import FAQ_ERA from "./sections/faq_ERA";
import ERASchema from "@/components/schema/ERASchema";

export const metadata: Metadata = {
  title: "Environmental Risk Assessment Services | Geo Petroleum",
  description: "Geo Petroleum provides professional environmental risk assessments in Houston — identify hazards, ensure compliance, and protect your business investment.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.geopetroleum.com/environmental-risk-assessment',
  },
};

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <ERASchema />
      <Header />
      <Hero_ERA />
      <Intro_ERA />
      <Phases_ERA />
      <CTASection />
      <Choose_ERA />
      <Services_ERA />
      <Testimonial_ERA />
      <FAQ_ERA />
      <Footer />
    </div>
  );
};

export default Services;