import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import CTASection from "@/components/cta";
import ECSSchema from "@/components/schema/ECSSchema";
import Hero_ECS from "./sections/hero_ECS";
import Intro_ECS from "./sections/intro_ECS";
import Choose_ECS from "./sections/choose_ECS";
import Services_ECS from "./sections/services_ECS";
import Testimonial_ECS from "./sections/testimonials_ECS";
import FAQ_ECS from "./sections/faq_ECS";

export const metadata: Metadata = {
  title: "Environmental Compliance Solutions | Houston Experts",
  description: "Geo Petroleum delivers expert environmental compliance solutions in Houston — inspections, permitting, and testing to keep your business safe and certified.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.geopetroleum.com/environmental-compliance-solutions',
  },
};

const Services: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <ECSSchema />
      <Header />
      <Hero_ECS />
      <Intro_ECS />
      <Choose_ECS />
      <Services_ECS />
      <CTASection />
      <Testimonial_ECS />
      <FAQ_ECS />
      <Footer />
    </div>
  );
};

export default Services;