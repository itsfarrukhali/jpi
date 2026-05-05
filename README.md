This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Landing Page Documentation

The home page is assembled in this file:

- `src/app/page.tsx`

Current component order on the landing page:

1. `HeroCarousel` - Main hero banner and primary message
2. `AboutUs` - Institute introduction and trust context
3. `AccreditationStrip` - NAVTTC, STEVTA, and SBTE recognition logos
4. `ProgramsOverview` - Program cards and quick access links
5. `WhyJPI` - Core strengths and value proposition
6. `AdmissionSteps` - Student application flow
7. `DepartmentsGrid` - Academic departments section
8. `NewsSection` - Latest news and events preview
9. `LatestUpdates` - Academic alerts (date sheets, results, notices)
10. `CTABanner` - Final conversion block

Home component locations:

- `src/components/home/HeroCarousel.tsx`
- `src/components/home/AboutUs.tsx`
- `src/components/home/AccreditationStrip.tsx`
- `src/components/home/ProgramsOverview.tsx`
- `src/components/home/WhyJPI.tsx`
- `src/components/home/AdmissionSteps.tsx`
- `src/components/home/DepartmentsGrid.tsx`
- `src/components/home/NewsSection.tsx`
- `src/components/home/LatestUpdates.tsx`
- `src/components/home/CTABanner.tsx`

### Editing Guide

- To reorder landing sections: update JSX order in `src/app/page.tsx`.
- To update affiliation logos and labels: edit `recognitions` in `src/components/home/AccreditationStrip.tsx`.
- To update exam/results announcements: edit `updates` in `src/components/home/LatestUpdates.tsx`.
- To improve homepage SEO: update `metadata` in `src/app/page.tsx`.

### Content Guide: Programs, Carousel, Departments, News & Events

Use this section to update real production data in the main landing page blocks.

#### 1) Our Programs

- File: `src/components/home/ProgramsOverview.tsx`
- Data source in file: `programs` array
- Update these fields per card:
  - `image`: local path in `/public/programs/...`
  - `name`: card title
  - `desc`: short description (1 to 2 lines)
  - `href`: valid internal route (for example `/programs/dae`)
- To add a new program card: append a new object in `programs`.

#### 2) Hero Carousel

- File: `src/components/home/HeroCarousel.tsx`
- Data source in file: `slides` array
- Update these fields per slide:
  - `badge`, `title`, `subtitle`, `tag`
  - `cta`: internal route for Learn More button
  - `image`: recommended local image path from `/public/...`
- Rules:
  - Keep each `id` unique.
  - Keep `tag` aligned with `tagColors` map or add new color key.

#### 3) Our Departments

- Card section file: `src/components/home/DepartmentsGrid.tsx`
- Actual data source: `src/data/departments.ts`
- Update department object fields:
  - `slug`, `name`, `fullName`, `description`
  - `hod`, `hodPhoto`, `hodMessage`
  - `image`, `courses`, `labs`, `galleryImages`
- Rules:
  - Keep `slug` unique and URL-safe.
  - Prefer local files in `/public/tech` instead of random image URLs.

#### 4) News & Events

- Section file: `src/components/home/NewsSection.tsx`
- Actual data source: `src/data/news.ts`
- Update each item fields:
  - `id`, `title`, `excerpt`, `content`
  - `date` in `YYYY-MM-DD`
  - `category` as one of: `news`, `event`, `announcement`
  - `image`, `slug`
- Important:
  - Home page shows the first 3 items only.
  - Keep latest items at the top of `newsItems` array.
  - Keep `id` and `slug` unique.

### SEO Implemented for Home Page

The home page metadata currently includes:

- title and description
- keywords
- canonical URL
- robots indexing rules
- Open Graph metadata for social sharing
- Twitter card metadata

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
