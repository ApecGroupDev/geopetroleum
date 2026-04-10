"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function CareersSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.geopetroleum.com/careers#webpage",
        "url": "https://www.geopetroleum.com/careers",
        "name": "Environmental Compliance Jobs | Careers at Geo Petroleum",
        "description":
          "Explore environmental compliance jobs and petroleum careers at Geo Petroleum in Houston — build your future with training, safety, and real growth.",
        "isPartOf": { "@id": "https://www.geopetroleum.com#website" },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geopetroleum.com/careers"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://www.geopetroleum.com#organization",
        "name": "Geo Petroleum",
        "url": "https://www.geopetroleum.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.geopetroleum.com/logos/components/Geo-Petroleum.webp"
        }
      }
    ]
  };

  return <SchemaMarkup id="careers-schema" data={schema} />;
}
