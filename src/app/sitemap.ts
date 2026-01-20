import type { MetadataRoute } from 'next'

export const revalidate = 86400

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.geopetroleum.com'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/environmental-risk-assessment`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/environmental-compliance-solutions`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/canopy-imaging-solutions`,
      lastModified: new Date(),
    },
  ]
}
