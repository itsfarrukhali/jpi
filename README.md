# JPI (Jinnah Polytechnic Institute) Website

A modern, fully-documented Next.js website for Jinnah Polytechnic Institute with simplified content management for non-technical users.

**Repository**: [itsfarrukhali/jpi](https://github.com/itsfarrukhali/jpi)

---

## 🎯 Quick Start

### For Non-Technical Users (Content Editors)

**Start here**: Read [START_HERE.md](START_HERE.md) (2 minutes)

Then follow [SIMPLE_GUIDE.md](SIMPLE_GUIDE.md) for step-by-step instructions on how to:

- ✅ Change news on home page
- ✅ Update admission fees
- ✅ Modify department information
- ✅ Add new programs
- ✅ Update important dates
- ✅ Change contact information
- ✅ Reorder home page sections

**No coding knowledge required!**

### For Developers

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

### For Non-Technical Users (Content Editors)

All documentation is **simplified and easy to follow**:

| Document                                                 | Purpose                          | Read Time |
| -------------------------------------------------------- | -------------------------------- | --------- |
| [START_HERE.md](START_HERE.md)                           | Quick introduction & overview    | 2 min     |
| [SIMPLE_GUIDE.md](SIMPLE_GUIDE.md)                       | Main guide with 7 tasks          | 5 min     |
| [QUICK_START.md](QUICK_START.md)                         | Quick reference for common tasks | 3 min     |
| [FOR_NON_TECHNICAL_USERS.md](FOR_NON_TECHNICAL_USERS.md) | Complete overview                | 2 min     |
| [DOCUMENTATION_STRUCTURE.md](DOCUMENTATION_STRUCTURE.md) | Visual guide to all docs         | 3 min     |

**👉 Start with [START_HERE.md](START_HERE.md)**

### For Developers

| Document                                         | Purpose                         |
| ------------------------------------------------ | ------------------------------- |
| [DATA_GUIDE.md](DATA_GUIDE.md)                   | Data files & database structure |
| [PAGE_GUIDE.md](PAGE_GUIDE.md)                   | Page organization & routing     |
| [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)       | Component structure & patterns  |
| [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md) | Master index & reference        |

---

## 🎯 What Can Be Changed

### Easy (No Technical Knowledge)

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

✅ **Simplified documentation** for non-technical users
✅ **7 step-by-step guides** for common tasks
✅ **Complete data files** with all content
✅ **Responsive design** (mobile, tablet, desktop)
✅ **SEO optimization**
✅ **Performance optimized**
✅ **Accessibility features**
✅ **Clean, maintainable code**

---

## 📞 Support

**For non-technical users**: See [SIMPLE_GUIDE.md](SIMPLE_GUIDE.md) troubleshooting section

**For developers**: Refer to [DATA_GUIDE.md](DATA_GUIDE.md), [PAGE_GUIDE.md](PAGE_GUIDE.md), [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)

---

## 📄 License

This project is maintained for Jinnah Polytechnic Institute.

---

## 🎉 Ready to Get Started?

👉 **[Read START_HERE.md](START_HERE.md)** (takes 2 minutes)

Then go to [SIMPLE_GUIDE.md](SIMPLE_GUIDE.md) for full instructions!
