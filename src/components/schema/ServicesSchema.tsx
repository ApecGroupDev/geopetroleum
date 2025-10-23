"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://geopetroleum.com#localbusiness",
        "name": "Geo Petroleum",
        "url": "https://geopetroleum.com/services/",
        "telephone": "000-000-0000",
        "email": "info@geopetroleum.com",
        "description": "Geo Petroleum provides complete environmental operations and petroleum services including consulting, compliance management, canopy imaging, and fuel tank manufacturing. Based in Houston, TX, serving Texas and the Southeast.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "505 Garden Oaks Blvd",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "postalCode": "77018",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "Place", "name": "Houston" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Southeast USA" }
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "08:00",
          "closes": "17:00"
        },
        "memberOf": [
          {
            "@type": "Organization",
            "name": "Petroleum Equipment Institute (PEI)",
            "sameAs": "https://pei.org/"
          },
          {
            "@type": "Organization",
            "name": "Texas Food & Fuel Association",
            "sameAs": "https://www.tffa.com/"
          },
          {
            "@type": "Organization",
            "name": "Greater Houston Retailers Cooperative Association (GHRA)",
            "sameAs": "https://www.ghraonline.com/"
          }
        ],
        "serviceType": "Environmental Operations and Petroleum Services",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Geo Petroleum Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Environmental Risk Assessment",
                "description": "Site evaluation, testing, and risk mitigation to prevent environmental hazards and maintain compliance."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Environmental Compliance Solutions",
                "description": "Permitting, testing, and documentation to meet EPA, TCEQ, and state-level petroleum regulations."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Canopy Imaging Solutions",
                "description": "Design, fabrication, and installation of branded canopies and lighting systems for fuel stations."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Fuel Tanks Manufacturing",
                "description": "Custom manufacturing and installation of aboveground and underground fuel tanks built to EPA and UL standards."
              }
            }
          ]
        }
      }
    ]
  };

  return <SchemaMarkup id="services-schema" data={schema} />;
}
