"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.geopetroleum.com/contact#contactpage",
    mainEntity: {
      "@type": "Organization",
      "@id": "https://www.geopetroleum.com#organization",
      name: "Geo Petroleum",
      url: "https://www.geopetroleum.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "844-GEO-4040",
        contactType: "Customer Service",
        areaServed: ["US-TX", "Southeast USA"],
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "40 Lyerly Street",
        addressLocality: "Houston",
        addressRegion: "TX",
        postalCode: "77022",
        addressCountry: "US",
      },
      description:
        "Contact Geo Petroleum, a trusted petroleum services company based in Houston, TX. We provide environmental risk assessments, compliance, canopy design, and fuel tank manufacturing across Texas and the Southeast.",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.geopetroleum.com/contact",
    },
  };

  return <SchemaMarkup id="contact-page-schema" data={schema} />;
}
