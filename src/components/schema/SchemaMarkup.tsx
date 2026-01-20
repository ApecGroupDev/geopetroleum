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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default SchemaMarkup;
