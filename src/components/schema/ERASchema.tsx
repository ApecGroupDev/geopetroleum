"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ERASchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://geopetroleum.com#localbusiness",
        "name": "Geo Petroleum",
        "url": "https://geopetroleum.com/environmental-risk-assessment",
        "telephone": "000-000-0000",
        "email": "info@geopetroleum.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://geopetroleum.com/logo.png"
        },
        "description":
          "Environmental risk assessment services for petroleum and industrial sites in Houston, TX. Soil testing, tank evaluation, and compliance reporting to prevent contamination and ensure safety.",
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
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://geopetroleum.com/environmental-risk-assessment"
        }
      },
      {
        "@type": "Service",
        "@id": "https://geopetroleum.com#environmentalRiskAssessment",
        "serviceType": "Environmental Risk Assessment",
        "provider": {
          "@id": "https://geopetroleum.com#localbusiness"
        },
        "areaServed": [
          { "@type": "Place", "name": "Houston" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Southeast USA" }
        ],
        "description":
          "Professional environmental risk assessments for petroleum operations — including soil testing, groundwater monitoring, tank integrity evaluation, and corrective action planning."
      },
      {
        "@type": "FAQPage",
        "@id": "https://geopetroleum.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is an environmental risk assessment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "An environmental risk assessment identifies and evaluates environmental hazards such as leaks, contamination, and compliance risks to prevent costly damage."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle both aboveground and underground tanks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — Geo Petroleum evaluates USTs and ASTs for safety, corrosion, and leak prevention per EPA and TCEQ standards."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide environmental site assessments?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we offer Phase I and II environmental site assessments to evaluate property conditions before purchase or development."
            }
          },
          {
            "@type": "Question",
            "name": "Are your consultants based in Houston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — our certified environmental consultants in Houston provide local expertise, ensuring compliance with all Texas and federal regulations."
            }
          }
        ]
      }
    ]
  };

  return <SchemaMarkup id="era-schema" data={schema} />;
}
