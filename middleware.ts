// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const goneUrls = [
  '/missing-page',
  '/sample-page',
  '/home',
  '/hello-world',
  '/category/uncategorized',
  '/feed',
]

const goneHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>410 Gone</title>
  <style>
    body {
      font-family: 'Metropolis', sans-serif;
      background: #D1D5DB;
      color: #333;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      text-align: center;
    }
    h1 {
      font-size: 5rem;
      margin-bottom: 1rem;
      color: #c62931;
    }
    p {
      font-size: 2rem;
    }
  </style>
</head>
<body>
  <h1>410 Gone</h1>
  <p>Sorry, this page is permanently removed.</p>
</body>
</html>
`

export function middleware(request: NextRequest) {
  if (goneUrls.includes(request.nextUrl.pathname)) {
    return new NextResponse(goneHtml, {
      status: 410,
      headers: { 'Content-Type': 'text/html' },
    })
  }
  return NextResponse.next()
}

export const config = {
  matcher: goneUrls,
}
