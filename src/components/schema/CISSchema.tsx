"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function CISSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Geo Petroleum",
        "url": "https://geopetroleum.com/fuel-station-canopy",
        "telephone": "(000) 000-0000",
        "description":
          "Fuel station canopy solutions including custom design, fabrication, branding, LED lighting, and installation. Serving Houston, TX, and the Southeast region.",
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
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Fuel Station Canopy Imaging Solutions",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Geo Petroleum"
        },
        "areaServed": [
          { "@type": "Place", "name": "Houston" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Southeast USA" }
        ],
        "description":
          "Full-service fuel station canopy solutions including design, fabrication, LED lighting, installation, and refurbishment for gas stations and petroleum sites."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you handle both design and installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — Geo Petroleum provides full-service canopy design, fabrication, and on-site installation for fuel stations."
            }
          },
          {
            "@type": "Question",
            "name": "Can you refurbish or update an existing canopy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely. We offer canopy refurbishment, rebranding, and modernization to give your site a fresh, compliant look."
            }
          },
          {
            "@type": "Question",
            "name": "Are your materials weather- and UV-resistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — our canopies use durable, UV-resistant materials designed to withstand harsh Texas conditions while maintaining color and performance."
            }
          },
          {
            "@type": "Question",
            "name": "Can you integrate lighting or digital signage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — Geo Petroleum specializes in LED canopy lighting and digital display integration to enhance visibility and attract customers."
            }
          }
        ]
      }
    ]
  };

  return <SchemaMarkup id="cis-schema" data={schema} />;
}
