# JPI (Jinnah Polytechnic Institute) Website

A modern, fully-documented Next.js website for Jinnah Polytechnic Institute with simplified content management for non-technical users.

**Repository**: [itsfarrukhali/jpi](https://github.com/itsfarrukhali/jpi)

---

## 🎯 Quick Start

1. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

3. Edit files and the page auto-updates

This project uses [Next.js](https://nextjs.org) with [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/).

---

## 📚 Documentation

| Document                       | Purpose                         |
| ------------------------------ | ------------------------------- |
| [DATA_GUIDE.md](DATA_GUIDE.md) | Data files & database structure |

## 🎯 What Can Be Changed

- ✅ News articles (add, edit, publish)
- ✅ Admission fees & dates
- ✅ Department information & HOD messages
- ✅ Program descriptions & courses
- ✅ Contact information
- ✅ Reorder home page sections

### Medium (Basic Understanding)

- ✅ Add new departments
- ✅ Add new programs
- ✅ Update course lists
- ✅ Change home page component order

### Not Supported (Requires Developer)

- ❌ Change colors/design
- ❌ Add new features
- ❌ Modify page layout structure
- ❌ Change navigation menus
- ❌ Database/backend changes

---

## 📁 Content Files (What to Edit)

All content is stored in **`src/data/`** directory:

```
src/data/
├── admissions.ts    # Fees, eligibility, dates, documents
├── departments.ts   # Department info, HOD details, courses
├── programs.ts      # Program details, curriculum, careers
└── news.ts         # News items, events, announcements
```

**That's all you need to edit!** No code knowledge required.

### How to Edit

1. Open one of the `src/data/*.ts` files
2. Change the text inside quotation marks
3. Don't worry about code structure
4. Save (Ctrl+S)
5. Changes appear on website automatically

---

## 🏗️ Project Structure

### Pages (in `src/app/`)

- `page.tsx` - Home page
- `admissions/page.tsx` - Admissions overview
- `admissions/fee-structure/page.tsx` - Fee details
- `admissions/how-to-apply/page.tsx` - Application process
- `admissions/merit/page.tsx` - Merit information
- `admissions/apply-now/page.tsx` - Application form
- `programs/dae/page.tsx` - DAE programs
- `programs/certifications/page.tsx` - Certificates
- `programs/short-courses/page.tsx` - Short courses
- `programs/jec/page.tsx` - JEC programs
- `about-us/page.tsx` - About page & departments
- Various department detail pages

### Components (in `src/components/`)

- `home/` - Home page sections (Hero, News, Departments, etc.)
- `layout/` - Header, Footer, Navigation
- `shared/` - Reusable components (Cards, Breadcrumb, etc.)
- `ui/` - UI primitives (Button, etc.)

### Data (in `src/data/`)

- `admissions.ts` - Admission data
- `departments.ts` - Department data
- `programs.ts` - Program data
- `news.ts` - News items

---

## 🔧 Technical Stack

- **Framework**: [Next.js 15+](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React 19+](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Optimized with Next.js font optimization

---

## 📝 Home Page Component Order

The home page (`src/app/page.tsx`) displays components in this order:

1. `HeroCarousel` - Main banner
2. `AboutUs` - Institute introduction
3. `AccreditationStrip` - Recognition logos
4. `ProgramsOverview` - Program cards
5. `WhyJPI` - Strengths
6. `AdmissionSteps` - Application flow
7. `DepartmentsGrid` - Departments
8. `NewsSection` - Latest news (first 3 items only)
9. `LatestUpdates` - Announcements
10. `CTABanner` - Call to action

To reorder: Edit component order in `src/app/page.tsx`

---

## 🔍 SEO

All pages include:

- Meta titles and descriptions
- Keywords
- Canonical URLs
- Robots directives
- Open Graph metadata (social sharing)
- Twitter card metadata

SEO is optimized for search engines and social sharing.

---

## 💾 Deployment

Deploy on [Vercel](https://vercel.com) (recommended):

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on every push
4. Website updates automatically

Changes are live within 1-2 minutes.

---

## ✅ What's Included

✅ **Complete data files** with all content
✅ **Responsive design** (mobile, tablet, desktop)
✅ **SEO optimization**
✅ **Performance optimized**
✅ **Accessibility features**
✅ **Clean, maintainable code**

---

## 📞 Support

Refer to [DATA_GUIDE.md](DATA_GUIDE.md)

---

## 📄 License

This project is maintained for Jinnah Polytechnic Institute.

---

## **Project Introduction**

JPI (Jinnah Polytechnic Institute) is a content-driven informational website built to make institute content easy to manage for non-technical users while providing a modern, accessible, and SEO-friendly public site. The project is implemented as a Next.js application using TypeScript, React, and Tailwind CSS. Content is data-driven and stored in `src/data/*` to allow editors to update site content without touching React code.

## **Work Completed (Timeline)**

The following is a concise timeline of the work completed so far (dates taken from git history):

- 2026-05-05 — Created the landing page and initial configuration (commit: a256e7d)
- 2026-05-05 — Added carousel images for the homepage hero (commit: b368171)
- 2026-05-06 — Added program pages: Certifications, DAE, JEC, Short Courses, and About Us pages (commits: 6cc26b4, 3c6402d)
- 2026-05-06 — Navigation and content fixes: updated breadcrumb links, added Principal's Message page, corrected Navbar and Footer links (commits: 0bd0452, 3c6402d)
- 2026-05-06 — Admissions pages: Merit, Apply Now improvements (forms and submission feedback), and detailed admissions information (commits: 3029e0f, 922ba97)
- 2026-05-06 — Program refactor and curriculum updates: renamed and reorganized programs (e.g., Biomedical → Chemical Technology), added Physiotherapy and Nursing Assistant, enhanced course details across various certifications and short courses (commit: 94ec8d2)

Each listed milestone links to the relevant commits in the repository history; for more detail, run `git log --pretty=format:"%ad | %h | %s" --date=short` locally.

## **What We Built (Summary)**

- A responsive, accessible website with an App Router-based Next.js layout.
- Data-driven content model: content is stored in `src/data/*.ts` (admissions, departments, programs, news).
- Reusable components in `src/components/` for home sections, layout (Navbar, Footer), and shared UI (ProgramCard, DepartmentCard, PageHero).
- SEO and social metadata implemented per page for better discoverability.
- Simple content editing workflow for non-technical users: modify `src/data` files and save.

## **How We Achieved the Goals**

- Architecture: Next.js (App Router) + TypeScript for strong typing and predictable routing.
- Styling: Tailwind CSS for utility-first styling and rapid layout changes.
- Component-driven design: small, focused components in `src/components/` so sections can be reordered or reused.
- Data-first content: editors update `src/data/*.ts` to change content without touching components.
- Accessibility & SEO: pages include meta, canonical links, and semantic HTML for better indexing and usability.

## **Key Files & Where To Edit Content**

- Admissions content: [src/data/admissions.ts](src/data/admissions.ts)
- Departments: [src/data/departments.ts](src/data/departments.ts)
- Programs: [src/data/programs.ts](src/data/programs.ts)
- News & updates: [src/data/news.ts](src/data/news.ts)
- Home page layout and component order: [src/app/page.tsx](src/app/page.tsx#L1)
- Home components: [src/components/home](src/components/home)
- Shared components: [src/components/shared](src/components/shared)
