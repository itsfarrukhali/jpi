# Data Management Guide

## Overview

All core content data is stored in `src/data/` directory. These files serve as the **single source of truth** for dynamic content across the website. This guide explains how to add, edit, or remove data safely.

---

## File Structure

```
src/data/
├── admissions.ts      # Admission criteria, fees, documents, eligibility
├── departments.ts     # Department information, HOD details, labs, courses
├── programs.ts        # Program details, curriculum, careers
└── news.ts           # News items, events, announcements
```

---

## 1. Admissions Data (`src/data/admissions.ts`)

### Purpose

Manages all admission-related content including eligibility criteria, fee structure, required documents, and application process.

### Key Interfaces

#### `EligibilityCriteria`

```typescript
{
  program: string;              // e.g., "DAE 1st Year (All Technologies)"
  qualification: string[];      // Array of required qualifications
  minMarks: string;             // Minimum percentage required
  maxAgeMorning: string;        // Age limit for morning program
  maxAgeEvening: string;        // Age limit for evening program
}
```

#### `RequiredDocument`

```typescript
{
  id: string; // Unique ID: "doc-01", "doc-02", etc.
  label: string; // Display name of document
  detail: string; // Detailed description or requirement
}
```

#### `FeeStructure`

```typescript
{
  year: string; // "1st Year", "2nd Year", "3rd Year"
  admissionFee: string; // Fee amount or "—" if N/A
  tuitionFee: string; // Tuition fee amount
  totalFee: string; // Sum of all fees
}
```

#### `OtherCharge`

```typescript
{
  item: string; // Service/document name
  normal: string; // Normal processing fee (or "—")
  urgent: string; // Urgent processing fee (or "—")
  duplicate: string; // Duplicate copy fee (or "—")
}
```

### How to Edit

**Add a new eligibility criterion:**

```typescript
eligibilityCriteria.push({
  program: "Your Program Name",
  qualification: ["Requirement 1", "Requirement 2"],
  minMarks: "45%",
  maxAgeMorning: "35 years",
  maxAgeEvening: "45 years",
});
```

**Add a required document:**

```typescript
requiredDocuments.push({
  id: "doc-08", // Increment from last ID
  label: "Document Name",
  detail: "Description of what is needed",
});
```

**Update fee structure:**

- Modify the `year` property if needed
- Update `admissionFee`, `tuitionFee` as strings with "Rs. " prefix
- Keep format consistent with existing entries

---

## 2. Departments Data (`src/data/departments.ts`)

### Purpose

Central repository for all department information, displayed on department pages and home page.

### Key Interface: `Department`

```typescript
{
  slug: "civil" | "electrical" | "mechanical" | "software";
  name: string;                 // Short name: "Civil Technology"
  fullName: string;             // Full name: "Department of Civil Technology"
  hod: string;                  // Head of Department name
  hodPhoto: string;             // Path to HOD photo: "/tech/civil.png"
  hodMessage: string;           // HOD's welcome/motivational message
  color: string;                // Hex color code: "#C8521A"
  icon: string;                 // Icon name from lucide-react: "building", "zap"
  image: string;                // Department cover image path
  courses: string[];            // Array of course names
  students: number;             // Total enrolled students
  description: string;          // Department description (1-2 sentences)
  labs: string[];               // Lab names with equipment details
  galleryImages: string[];      // Array of image URLs for gallery
}
```

### Critical Rules for Editing

⚠️ **IMPORTANT**:

- **slug** must be unique and URL-safe (only lowercase letters and hyphens)
- **slug** is used in routes, changing it will break links
- **hodPhoto** should use local paths from `/public/tech/` instead of external URLs
- **color** must be a valid hex color code

### How to Add a Department

```typescript
const departments: Department[] = [
  // ... existing departments ...
  {
    slug: "chemical", // UNIQUE and URL-safe
    name: "Chemical Technology",
    fullName: "Department of Chemical Technology",
    hod: "Dr. Ahmed Khan",
    hodPhoto: "/tech/chemical.png", // Use local files
    hodMessage: "Our department prepares...",
    color: "#4CAF50", // Green color
    icon: "beaker", // Lucide icon name
    image: "/tech/chemical-banner.png",
    courses: [
      "Applied Chemistry",
      "Process Engineering",
      "Safety Management",
      // Add more courses
    ],
    students: 150,
    description:
      "Trains students in chemical manufacturing and process management.",
    labs: [
      "Chemistry Lab — Reactors, Distillation Units",
      "Analysis Lab — Spectrophotometers, Chromatography",
      // Add more labs
    ],
    galleryImages: Array.from(
      { length: 6 },
      (_, i) => `https://picsum.photos/600/400?random=${100 + i}`,
    ),
  },
];
```

### How to Edit Existing Department

1. Find the department by `slug`
2. Update the relevant properties
3. For images: use `/public/tech/image-name.png` format
4. For gallery: use external URLs or local paths

---

## 3. Programs Data (`src/data/programs.ts`)

### Purpose

Defines all academic programs (DAE, Certifications, Short Courses, JEC) with curriculum, eligibility, and career information.

### Key Interface: `Program`

```typescript
{
  id: string;                    // Unique ID: "dae-civil", "cert-welding"
  name: string;                  // Full program name
  shortName: string;             // Short name for display
  duration: string;              // "3 Years (6 Semesters)"
  seats: number;                 // Number of available seats
  eligibility: string;           // Eligibility description
  description: string;           // 1-2 sentence overview
  icon: string;                  // Lucide icon name
  tag: "DAE" | "CERT" | "SHORT" | "JEC";
  category: "dae" | "certifications" | "short-courses" | "jec";
  subjects: {
    year: string;               // "1st Year", "2nd Year"
    items: string[];            // Subject names
  }[];
  careers: string[];            // Possible job roles
}
```

### How to Add a Program

```typescript
const daePrograms: Program[] = [
  // ... existing programs ...
  {
    id: "dae-chemical",
    name: "Diploma of Associate Engineer — Chemical Technology",
    shortName: "DAE Chemical Technology",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Train students in chemical manufacturing and process control.",
    icon: "beaker",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Chemistry",
          "Chemical Engineering Basics",
          "Lab Techniques",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Process Engineering",
          "Industrial Safety",
          "Chemical Analysis",
        ],
      },
      {
        year: "3rd Year",
        items: ["Project Management", "Manufacturing", "Professional Practice"],
      },
    ],
    careers: [
      "Process Engineer",
      "Chemical Technician",
      "Quality Control Officer",
    ],
  },
];
```

---

## 4. News Data (`src/data/news.ts`)

### Purpose

Manages news items, events, and announcements displayed on home page and news section.

### Key Interface: `NewsItem`

```typescript
{
  id: string; // Unique ID: "news-1", "event-5"
  title: string; // News headline
  excerpt: string; // Short summary (1-2 sentences)
  content: string; // Full article content
  date: string; // Date in "YYYY-MM-DD" format
  category: "news" | "event" | "announcement";
  image: string; // Image URL or local path
  slug: string; // URL-safe slug (kebab-case)
}
```

### Critical Rules

⚠️ **IMPORTANT**:

- **Home page shows only the FIRST 3 items** — keep latest entries at the top
- **id and slug must be unique** across all news items
- **date format must be "YYYY-MM-DD"** (ISO format)
- Reorder array, don't delete old entries (keep archive)

### How to Add News

```typescript
export const newsItems: NewsItem[] = [
  {
    id: "news-latest", // UNIQUE ID
    title: "Latest News Headline",
    excerpt: "Short summary visible on home page.",
    content: "Full article content with more details.",
    date: "2025-05-06", // YYYY-MM-DD format
    category: "announcement", // "news", "event", or "announcement"
    image: "https://picsum.photos/800/500?random=100",
    slug: "latest-news-headline", // UNIQUE and URL-safe (lowercase, hyphens)
  },
  // ... other items ...
];
```

### How to Update Existing News

1. Find the item by `id`
2. Edit `content`, `excerpt`, `date` as needed
3. Don't change `id` or `slug` (breaks links)
4. Keep `date` in "YYYY-MM-DD" format
5. Publish by moving to top of array

---

## Best Practices

### ✅ DO

- Use meaningful, descriptive names
- Keep slugs lowercase and hyphenated (e.g., `dae-civil-technology`)
- Use local image paths `/public/...` for consistency
- Add comments when data is temporary or for special handling
- Update related files if you add new categories
- Follow the existing format exactly (indentation, spacing)
- Test changes locally before deploying

### ❌ DON'T

- Change existing `id` or `slug` values (breaks references)
- Use spaces or special characters in slugs
- Mix local and external image URLs in the same section
- Add HTML/JSX in text fields (keep data simple)
- Leave blank required fields (use "—" if N/A)
- Commit without testing data structure integrity

---

## Common Tasks

### Update Admission Fees

1. Open `src/data/admissions.ts`
2. Find `feeStructure` array
3. Update the `totalFee` string
4. Keep format: `"Rs. XXXXX"`

### Add Department to Home Page

1. Add new entry to `departments` in `src/data/departments.ts`
2. Department automatically appears in:
   - Home page "Our Departments" section
   - About page
   - Department list pages

### Publish News on Home Page

1. Add new item to top of `newsItems` array in `src/data/news.ts`
2. First 3 items auto-display on home page
3. All items visible on `/news` page

### Change Department HOD Message

1. Open `src/data/departments.ts`
2. Find department by `slug`
3. Update `hodMessage` property
4. Changes appear on department detail page

---

## Related Files

When making changes to data, check these component files that consume the data:

| Data File        | Used By                     | Location                                          |
| ---------------- | --------------------------- | ------------------------------------------------- |
| `admissions.ts`  | Admission pages             | `/src/app/admissions/**`                          |
| `departments.ts` | Department pages, Home page | `/src/app/admissions/**`, `/src/components/home/` |
| `programs.ts`    | Program pages, Home page    | `/src/app/programs/**`, `/src/components/home/`   |
| `news.ts`        | News section                | `/src/components/home/NewsSection.tsx`            |

---

## Questions?

If you're unsure about:

- **Image paths**: Check `/public` folder structure
- **Icon names**: Visit [lucide.dev](https://lucide.dev)
- **Data integrity**: Search for imports in components folder
- **Formatting**: Match existing entries exactly
