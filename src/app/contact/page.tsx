import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Hero_Contact from "./sections/hero_contact";
import Intro_Contact from "./sections/intro_contact";
import Overview_Contact from "./sections/overview_contact";
import OfficeProcess_Contact from "./sections/officeProcess_contact";
import Choose_Contact from "./sections/choose_contact";
import CTASection from "@/components/cta";

export const metadata: Metadata = {
  title: "Contact Petroleum Services Company | Geo Petroleum",
  description: "Get in touch with Geo Petroleum — a trusted petroleum services company in Houston. Request quotes, consultations, or expert support for your project today.",
  robots: 'index,follow',
  alternates: {
    canonical: 'https://www.geopetroleum.com/contact',
  },
};

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col'>
      < Header />
      <Hero_Contact />
      <Intro_Contact />
      <Overview_Contact />
      <OfficeProcess_Contact />
      <CTASection />
      <Choose_Contact />
      <Footer />
    </div>
  );
};

export default Contact;