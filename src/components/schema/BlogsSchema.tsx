"use client";
import SchemaMarkup from "./SchemaMarkup";

export default function BlogsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": "https://geopetroleum.com#blog",
        "name": "Geo Petroleum Blog",
        "url": "https://geopetroleum.com/blogs",
        "description":
          "Expert insights, compliance updates, and petroleum industry trends from Geo Petroleum — helping fuel retailers, contractors, and environmental professionals stay informed.",
        "publisher": {
          "@type": "Organization",
          "name": "Geo Petroleum",
          "url": "https://geopetroleum.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://geopetroleum.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://geopetroleum.com/blogs"
        }
      }
    ]
  };

  return <SchemaMarkup id="blogs-schema" data={schema} />;
}
