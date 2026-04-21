// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const goneUrls = [
  "/missing-page",
  "/sample-page",
  "/home",
  "/hello-world",
  "/category/uncategorized",
  "/feed",
  "/environmental-risk-assessment",
  "/blog",
];

const goneHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>410 Gone | Geo Petroleum</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800&display=swap"
    rel="stylesheet"
  />
  <style>
    :root {
      --color-primary: #00a651;
      --color-secondary: #1e1e1e;
      --color-muted: #6b7280;
    }
    * { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; }
    body {
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      color: #2c2c2c;
      background: linear-gradient(to bottom, #ffffff 0%, #f5f7f6 50%, #e6efe9 100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      text-align: center;
    }
    .wrap { max-width: 48rem; }
    h1 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      color: var(--color-primary);
      font-size: clamp(6rem, 18vw, 15rem);
      line-height: 1;
      letter-spacing: -0.02em;
      margin: 0;
      text-shadow: 0 6px 10px rgba(0, 166, 81, 0.25);
    }
    h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      color: var(--color-secondary);
      font-size: clamp(1.75rem, 4vw, 3rem);
      margin: 0.5rem 0 0;
    }
    p {
      color: var(--color-muted);
      font-size: clamp(1rem, 1.5vw, 1.25rem);
      margin: 1rem auto 0;
      max-width: 36rem;
    }
    a.btn {
      display: inline-block;
      margin-top: 2rem;
      padding: 0.75rem 1.75rem;
      border-radius: 9999px;
      background: var(--color-primary);
      color: #ffffff;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-decoration: none;
      box-shadow: 0 4px 10px rgba(0, 166, 81, 0.25);
      transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
    }
    a.btn:hover {
      background: #008a43;
      box-shadow: 0 6px 14px rgba(0, 166, 81, 0.35);
      transform: scale(1.03);
    }
    footer {
      margin-top: 5rem;
      color: var(--color-muted);
      font-size: 0.875rem;
    }
  </style>
</head>
<body>
  <main class="wrap">
    <h1>410</h1>
    <h2>Gone</h2>
    <p>This page has been permanently removed and is no longer available.</p>
    <a class="btn" href="/">RETURN TO HOMEPAGE</a>
  </main>
  <footer>&copy; ${new Date().getFullYear()} Geo Petroleum. All rights reserved.</footer>
</body>
</html>`;

export function middleware(request: NextRequest) {
  if (goneUrls.includes(request.nextUrl.pathname)) {
    return new NextResponse(goneHtml, {
      status: 410,
      headers: { "Content-Type": "text/html" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/missing-page",
    "/sample-page",
    "/home",
    "/hello-world",
    "/category/uncategorized",
    "/feed",
    "/environmental-risk-assessment",
    "/blog",
  ],
};
