"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function BlogsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://www.geopetroleum.com#blog",
        "name": "Geo Petroleum Blog",
        "url": "https://www.geopetroleum.com/blogs",
        "description":
          "Expert insights, compliance updates, and petroleum industry trends from Geo Petroleum — helping fuel retailers, contractors, and environmental professionals stay informed.",
        "publisher": {
          "@type": "Organization",
          "name": "Geo Petroleum",
          "url": "https://www.geopetroleum.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.geopetroleum.com/logos/components/Geo-Petroleum.webp"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.geopetroleum.com/blogs"
        }
      }
    ]
  };

  return <SchemaMarkup id="blogs-schema" data={schema} />;
}
