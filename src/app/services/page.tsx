import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Hero_Services from "./sections/hero_services";
import Intro_Services from "./sections/intro_services";
import ExpertiseSection from "../home/expertise_home";
import Services_Services from "./sections/services_services";
import Testimonial_Services from "./sections/testimonials_services";
import CTASection from "@/components/cta";
import FAQ_Services from "./sections/faq_services";
import ServicesSchema from "@/components/schema/ServicesSchema";

export const metadata: Metadata = {
  title: "Environmental Operations & Petroleum Services | Geo Petroleum",
  description: "Explore Geo Petroleum’s full-service environmental operations — fuel systems, compliance, and tank solutions built for safety, reliability, and value.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.geopetroleum.com/services',
  },
};

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <ServicesSchema />
      <Header />
      <Hero_Services />
      <Intro_Services />
      <ExpertiseSection />
      <Services_Services />
      <Testimonial_Services />
      <CTASection />
      <FAQ_Services />
      <Footer />
    </div>
  );
};

export default Services;