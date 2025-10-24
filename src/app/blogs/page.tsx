import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import CTASection from "@/components/cta";
import ServicesSchema from "@/components/schema/ServicesSchema";

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
      <CTASection />
      <Footer />
    </div>
  );
};

export default Blogs;