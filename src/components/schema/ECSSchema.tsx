"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function ECSSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://geopetroleum.com#localbusiness",
        "name": "Geo Petroleum",
        "url": "https://geopetroleum.com/environmental-compliance-solutions",
        "telephone": "000-000-0000",
        "email": "info@geopetroleum.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://geopetroleum.com/logo.png"
        },
        "description":
          "Environmental compliance solutions for petroleum sites in Houston, TX — including inspections, testing, permitting, and spill prevention. Trusted by fuel retailers and industrial clients across Texas.",
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
          "@id": "https://geopetroleum.com/environmental-compliance-solutions"
        }
      },
      {
        "@type": "Service",
        "@id": "https://geopetroleum.com#environmentalComplianceService",
        "serviceType": "Environmental Compliance Solutions",
        "provider": {
          "@id": "https://geopetroleum.com#localbusiness"
        },
        "areaServed": [
          { "@type": "Place", "name": "Houston" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Southeast USA" }
        ],
        "description":
          "Full-service environmental compliance management for petroleum businesses — inspections, testing, documentation, permitting, and remediation."
      },
      {
        "@type": "FAQPage",
        "@id": "https://geopetroleum.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who do you serve with your environmental compliance services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We work with fuel retailers, fleet operators, distributors, and industrial clients throughout Houston and the Southeast."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle all compliance paperwork and permitting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — we manage all reports, permits, and documentation so your site stays 100% compliant and inspection-ready."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide spill prevention and response?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely. We create prevention systems, emergency response plans, and cleanup strategies for fast recovery."
            }
          },
          {
            "@type": "Question",
            "name": "Are your services specific to Texas regulations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — our Houston-based experts know TCEQ, EPA, and local compliance standards inside and out."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer testing for underground and aboveground tanks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — our certified technicians perform full UST and AST testing, including leak detection and integrity evaluations."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Geo Petroleum different from other environmental companies in Houston, TX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Unlike most environmental companies in Houston, TX, Geo Petroleum offers full-service compliance management, tank testing, and remediation under one trusted provider."
            }
          }
        ]
      }
    ]
  };

  return <SchemaMarkup id="ecs-schema" data={schema} />;
}
