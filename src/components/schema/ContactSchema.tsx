"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ContactPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://geopetroleum.com/contact#contactpage",
    "mainEntity": {
      "@type": "Organization",
      "@id": "https://geopetroleum.com#organization",
      "name": "Geo Petroleum",
      "url": "https://geopetroleum.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "(000) 000-0000",
        "contactType": "Customer Service",
        "areaServed": ["US-TX", "Southeast USA"],
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "505 Garden Oaks Blvd",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "postalCode": "77018",
        "addressCountry": "US"
      },
      "description":
        "Contact Geo Petroleum, a trusted petroleum services company based in Houston, TX. We provide environmental risk assessments, compliance, canopy design, and fuel tank manufacturing across Texas and the Southeast."
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://geopetroleum.com/contact"
    }
  };

  return <SchemaMarkup id="contact-page-schema" data={schema} />;
}
