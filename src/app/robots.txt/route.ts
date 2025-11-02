// app/robots.txt/route.ts
import { NextResponse } from 'next/server'

export function GET() {
  const body = `
User-agent: *
Disallow: /cgi-bin/
Disallow: /admin/
Disallow: /login
Disallow: /register
Disallow: /cart
Disallow: /checkout
Disallow: /*?*
Allow: /

Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.geopetroleum.com'}/sitemap.xml
  `.trim()

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
