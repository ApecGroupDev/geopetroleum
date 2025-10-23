"use client";

import React from "react";

interface SchemaMarkupProps {
  id?: string;
  data: Record<string, unknown> | Record<string, unknown>[];
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ id, data }) => {
  return (
    <script
      id={id}
      type="application/ld+json"
      // Safely stringify your schema (Next.js needs this for structured data)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default SchemaMarkup;
