# Project Overview

Geo Petroleum is a corporate/marketing website for a petroleum company. It serves as the digital front door for the business, showcasing their services, blogs, career opportunities, and providing contact channels for potential clients and partners.

The primary goal of this project is to present a professional, fast, and accessible web presence for Geo Petroleum, making it easy for visitors to learn about the company and get in touch.

# Tech Stack

* **Next.js (App Router)**: The core React framework used for server-rendered and statically generated pages, providing excellent performance and SEO.
* **React 19**: The UI library used for building interactive components.
* **Tailwind CSS v4**: Utility-first CSS framework for rapid UI styling and responsive design.
* **TypeScript**: Used for static type checking to improve code quality and developer experience.
* **Framer Motion**: Used for smooth, declarative animations across the site.
* **Lucide React & React Social Icons**: For lightweight, customizable SVG icons.

# Getting Started

### Prerequisites

* Node.js (v20+ recommended)
* npm, yarn, pnpm, or bun

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Environment Variables

Currently, the project does not require any environment variables to run locally. If API integrations (like form submissions or analytics) are added, create a `.env.local` file at the root.

### Running locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build commands

To create an optimized production build:

```bash
npm run build
```

### Deployment commands

To test the production build locally:

```bash
npm run start
```

# Project Structure

* `src/app/` → Next.js App Router. Contains all the pages (`home`, `services`, `contact`, `blogs`, `careers`, etc.).
* `src/components/` → Reusable UI components (e.g., `header.tsx`, `footer.tsx`, `faq.tsx`, `mainContactForm.tsx`).
* `src/middleware.ts` → Next.js edge middleware. Currently used to handle 410 Gone redirects for obsolete URLs (e.g., legacy WordPress routes).
* `public/` → Static assets like images and icons.

# Database

* **Provider**: None
* **Main models/tables**: Not applicable
* **Important relationships**: Not applicable

*Note: This is currently a static marketing site. Form submissions (like Contact or Careers) would typically be sent to a third-party service or a separate backend API.*

# Authentication

* **How authentication works**: None
* **User roles and permissions**: Not applicable (public-facing site only).

# Key Features

### Contact Form & Careers Form
* **Purpose**: Allows users to send inquiries and apply for jobs.
* **Important files**: `src/components/mainContactForm.tsx`, `src/components/careersForm.tsx`
* **How it works**: Client-side React components that capture user input. (Note: Ensure you check where the form submission is currently routed—often to a service like Resend, Formspree, or an internal API).

### Services & Blogs Pages
* **Purpose**: Displays the company's offerings and industry insights.
* **Important files**: `src/app/services/`, `src/app/blogs/`
* **How it works**: Statically rendered pages providing fast load times and good SEO for content.

### Legacy URL Handling
* **Purpose**: Preserves SEO by properly redirecting or dropping old URLs from a previous site version.
* **Important files**: `src/middleware.ts`
* **How it works**: Intercepts requests to known obsolete URLs (like `/feed` or `/category/uncategorized`) and returns a custom 410 Gone response.

# Third-Party Services

* **Vercel Analytics (`@vercel/analytics`)**: Used for privacy-friendly, real-time traffic insights and visitor tracking.

# Deployment

* **Hosting provider**: Vercel (Recommended)
* **Environment setup**: Connect the GitHub repository to a Vercel project. The default Next.js settings will automatically configure the build commands.
* **Production deployment process**: Pushing to the `main` branch will automatically trigger a production build and deployment on Vercel.

# Common Tasks

### Add a page
Create a new folder inside `src/app/` with the desired route name, and add a `page.tsx` file inside it.
Example: `src/app/about/page.tsx` will be accessible at `/about`.

### Add a database model
Currently not applicable. If a database is introduced, consider setting up an ORM like Prisma and creating a `prisma/schema.prisma` file.

### Add an API route
Create a `route.ts` file inside a folder in `src/app/api/`.
Example: `src/app/api/contact/route.ts` will handle requests to `/api/contact`.

### Deploy changes
Commit your code and push to the `main` branch. If using Vercel, it will auto-deploy.

# Known Issues & Technical Debt

* **Form Submissions**: Verify if the `mainContactForm.tsx` and `careersForm.tsx` are actually connected to a backend or if they are just UI placeholders.
* **Static Content**: Blog posts and services might be hardcoded. Consider integrating a Headless CMS (like Sanity or Contentful) if the marketing team needs to update content frequently without developer intervention.

# Notes for Future Developers

* **Important design decisions**: The site relies heavily on Tailwind CSS for styling and Framer Motion for micro-interactions. Keep animations subtle and professional.
* **Middleware**: Be careful when adding new routes. Check `src/middleware.ts` to ensure your new route doesn't clash with the legacy `goneUrls` list.
* **Areas that need refactoring**: As the site grows, consider extracting shared UI elements (like buttons and inputs) into a dedicated UI library (e.g., shadcn/ui) within `src/components/ui/` rather than keeping everything in the root `components` folder.
