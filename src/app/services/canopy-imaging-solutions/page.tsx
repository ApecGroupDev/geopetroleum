import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import CTASection from "@/components/cta";
import Hero_CIS from "./sections/hero_CIS";
import FAQ_CIS from "./sections/faq_CIS";
import Intro_CIS from "./sections/intro_CIS";
import Choose_CIS from "./sections/choose_CIS";
import Services_CIS from "./sections/services_CIS";
import CISSchema from "@/components/schema/CISSchema";
import Testimonial_CIS from "./sections/testimonials_CIS";

export const metadata: Metadata = {
  title: "Fuel Station Canopy Design & Branding | Geo Petroleum",
  description: "Transform your fuel station canopy with Geo Petroleum’s custom design, fabrication, and LED lighting solutions — built for impact and long-lasting quality.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.geopetroleum.com/canopy-imaging-solutions',
  },
};

const CIS: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <CISSchema />
      <Header />
      <Hero_CIS />
      <Intro_CIS />
      <Choose_CIS />
      <Services_CIS />
      <CTASection />
      <Testimonial_CIS />
      <FAQ_CIS />
      <Footer />
    </div>
  );
};

export default CIS;