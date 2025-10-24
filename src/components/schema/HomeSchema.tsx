"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://geopetroleum.com#website",
        "url": "https://geopetroleum.com",
        "name": "Geo Petroleum",
        "publisher": { "@id": "https://geopetroleum.com#organization" },
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": "https://geopetroleum.com#organization",
        "name": "Geo Petroleum",
        "url": "https://geopetroleum.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://geopetroleum.com/logo.png"
        },
        "sameAs": [
          "https://www.linkedin.com/company/geopetroleum",
          "https://www.facebook.com/geopetroleum"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://geopetroleum.com#localbusiness",
        "name": "Geo Petroleum",
        "url": "https://geopetroleum.com",
        "telephone": "000-000-0000",
        "email": "info@geopetroleum.com",
        "description":
          "Houston-based petroleum and environmental company offering risk assessment, compliance, canopy imaging, and fuel tank manufacturing across Texas and the Southeast.",
        "logo": {
          "@type": "ImageObject",
          "url": "https://geopetroleum.com/logo.png"
        },
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
        "slogan":
          "One-Stop-Shop for All Your Petroleum & Environmental Solutions",
        "foundingDate": "2000",
        "missionStatement":
          "Delivering safe, compliant, and cost-effective petroleum and environmental services across Texas and the Southeast.",
        "sameAs": [
          "https://www.linkedin.com/company/geopetroleum",
          "https://www.facebook.com/geopetroleum"
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://geopetroleum.com"
        }
      },
      {
        "@type": "Service",
        "@id": "https://geopetroleum.com#petroleumService",
        "serviceType": "Petroleum and Environmental Solutions",
        "provider": { "@id": "https://geopetroleum.com#localbusiness" },
        "areaServed": [
          { "@type": "Place", "name": "Houston" },
          { "@type": "Place", "name": "Texas" },
          { "@type": "Place", "name": "Southeast USA" }
        ],
        "description":
          "Comprehensive petroleum and environmental services — from risk assessment and compliance management to canopy imaging and tank fabrication.",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://geopetroleum.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://geopetroleum.com#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who do you serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "We serve fuel retailers, distributors, fleet operators, municipalities, and industrial clients across Texas and the Southeast."
            }
          },
          {
            "@type": "Question",
            "name": "Are you one of Houston’s leading environmental companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes — Geo Petroleum is recognized among top Houston environmental companies, known for innovation, safety, and reliability."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer environmental services outside Houston?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Absolutely — we offer comprehensive environmental services in Texas and neighboring states, providing inspection, compliance, and remediation expertise."
            }
          }
        ],
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://geopetroleum.com"
        }
      }
    ]
  };

  return <SchemaMarkup id="home-schema" data={schema} />;
}
