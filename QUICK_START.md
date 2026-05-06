# Quick Start Guide - Easy Editing

**This guide is for anyone who wants to change website content - no coding skills needed!**

---

## 🎯 Pick What You Want to Change

Click on your task below to see simple step-by-step instructions.

---

## 1. 📰 Change or Add News/Announcements

**What it does**: Changes the news post on the home page

**Steps**:

**Step 1**: Open the file named `src/data/news.ts`

- Look in the left side panel
- Find the folder named `src`
- Click on folder named `data`
- Click on file `news.ts`

**Step 2**: Find where it says `{` (start of a news item)

- Look for the section that has `title: "Something"`
- This is one news article

**Step 3**: Edit the text

- Find the line: `title: "Old Title"`
- Change it to: `title: "Your New Title"`
- Find the line: `excerpt: "Old summary"`
- Change it to: `excerpt: "Your summary (1-2 sentences)"`
- Find the line: `content: "Old story"`
- Change it to: `content: "Your full story"`

**Step 4**: Update the date

- Find: `date: "2025-05-06"`
- Change to today's date (format: YYYY-MM-DD, like "2025-05-07")

**Step 5**: Save

- Press **Ctrl + S** on your keyboard
- Wait 3 seconds
- Check the website - it updates automatically!

✅ **Done!** Your news is now on the website.

---

## 2. 💰 Update Admission Fees

**What it does**: Changes the fee amounts on the admissions page

**Steps**:

**Step 1**: Open `src/data/admissions.ts`

**Step 2**: Find the section with `feeStructure:`

**Step 3**: You'll see:

```
year: "1st Year",
admissionFee: "Rs. 14,000",
tuitionFee: "Rs. 30,000",
totalFee: "Rs. 44,000",
```

**Step 4**: Change the numbers:

- `14,000` → your new admission fee
- `30,000` → your new tuition fee
- `44,000` → the sum of both (14,000 + 30,000 = 44,000)

**Step 5**: Save (Ctrl + S)

✅ **Done!** All pages with fees update automatically.

---

## 3. 🏛️ Change Department Information

**What it does**: Updates information about Civil, Electrical, Mechanical, or other departments

**Steps**:

**Step 1**: Open `src/data/departments.ts`

**Step 2**: Find your department:

- Search for `name: "Civil Technology"` (or your department name)
- Use Ctrl+F to find it quickly

**Step 3**: You can change:

- `hod: "Mr. Name"` → Head of Department's name
- `hodMessage: "Welcome message..."` → Their message (1-2 paragraphs)
- Courses in the list
- Description

**Step 4**: Edit the text you want to change

**Step 5**: Save (Ctrl + S)

✅ **Done!** Department page updates instantly.

---

## 4. 📚 Add a New Program/Course

**What it does**: Adds a new program option (like a new DAE program)

**Steps**:

**Step 1**: Open `src/data/programs.ts`

**Step 2**: Find a program similar to what you want to add

- Copy the entire block (from `{` to `}`)

**Step 3**: Paste it at the end of the list

**Step 4**: Change:

- `id: "dae-civil"` → `id: "dae-newname"` (use unique name)
- `name: "Civil Technology"` → your program name
- `shortName: "DAE Civil"` → short version of name
- Course names in the list
- Career options in the list

**Step 5**: Save (Ctrl + S)

✅ **Done!** New program appears on website.

---

## 5. 📄 Update Admission Dates

**What it does**: Changes important dates (application deadline, test date, etc.)

**Steps**:

**Step 1**: Open `src/data/admissions.ts`

**Step 2**: Find the section with `keyDates:`

**Step 3**: You'll see:

```
{ label: "Application Opens", date: "March 1, 2025" },
{ label: "Application Deadline", date: "April 30, 2025" },
```

**Step 4**: Change the dates:

- `"March 1, 2025"` → new date (month day, year format)

**Step 5**: Save (Ctrl + S)

✅ **Done!** Dates update on website.

---

## 6. 🎨 Change Home Page Layout/Order

**What it does**: Reorders sections on the home page (move news up, departments down, etc.)

**Steps**:

**Step 1**: Open `src/app/page.tsx`

**Step 2**: Find the part with components (they look like):

```
<HeroCarousel />
<AboutUs />
<NewsSection />
```

**Step 3**: To reorder:

- Cut a line (Ctrl+X)
- Paste it in a new position (Ctrl+V)

**Step 4**: Save (Ctrl + S)

✅ **Done!** Home page order changes.

---

## 7. 🔗 Update Contact Information

**Where to find it**: Contact phone, email, address

**Steps**:

**Step 1**: Open `src/data/admissions.ts`

**Step 2**: Find the section with `admissionContact`

**Step 3**: Change:

- Phone number
- Email address
- Office address
- Office hours

**Step 4**: Save (Ctrl + S)

✅ **Done!**

---

## ⚠️ CRITICAL RULES - READ CAREFULLY!

### ❌ DON'T TOUCH THESE:

- `{` and `}` curly brackets
- `[` and `]` square brackets
- `,` commas at the end of lines
- Text like `id:` or `name:`
- Indentation (spacing at the beginning of lines)

### ✅ YOU CAN CHANGE THESE:

- Text inside `"quotation marks"` ← This is your content
- Numbers like `14000` ← Your fees, numbers
- Dates like `2025-05-06`
- Anything inside quotation marks!

---

## 🔍 How to Find Text

**Use Find (Ctrl+F)**:

1. Press **Ctrl + F** on your keyboard
2. Type the text you're looking for
3. It highlights where it is
4. Click on it and edit
5. Press **Escape** to close find

---

## 💡 Quick Copy-Paste Formats

### For News Article:

```
{
  id: "news-unique-name",
  title: "Your Title Here",
  excerpt: "Short summary here",
  content: "Full article text here",
  date: "2025-05-06",
  category: "news",
  image: "https://picsum.photos/800/500?random=1",
  slug: "your-title-slug"
}
```

### For Fee Entry:

```
{
  year: "1st Year",
  admissionFee: "Rs. 14,000",
  tuitionFee: "Rs. 30,000",
  totalFee: "Rs. 44,000",
}
```

### For Date Entry:

```
{ label: "Application Opens", date: "March 1, 2025" },
```

---

## 🆘 If Something Goes Wrong

### "The website looks broken"

**Fix**:

1. Look for red lines under your text (errors)
2. Check for missing commas or quotation marks
3. Undo your changes: **Ctrl + Z**
4. Try again

### "I can't find the text"

**Fix**:

1. Use **Ctrl + F** to search
2. Type a few words from what you're looking for
3. It will show you where it is

### "Changes didn't appear"

**Fix**:

1. Make sure you **saved** (Ctrl + S) - you should see the file name without a dot
2. Refresh your browser: **F5** or **Ctrl + R**
3. Wait 5 seconds

### "I made a mistake"

**Fix**:

1. Press **Ctrl + Z** to undo
2. Or close the file without saving
3. All changes revert

---

## ✅ Checklist

Before you start editing:

- [ ] I know what I want to change
- [ ] I found the correct file
- [ ] I found the text to change
- [ ] I'm only changing text in quotation marks `"like this"`
- [ ] I won't delete or move commas, brackets, or braces
- [ ] I will save when done (Ctrl + S)

---

## 📚 File Locations (Easy Reminder)

| What to change         | File                      |
| ---------------------- | ------------------------- |
| News articles          | `src/data/news.ts`        |
| Fees, dates, documents | `src/data/admissions.ts`  |
| Departments            | `src/data/departments.ts` |
| Programs/courses       | `src/data/programs.ts`    |
| Home page order        | `src/app/page.tsx`        |

---

## 🎉 You're Ready!

1. Pick what you want to change (see numbers 1-7 above)
2. Follow the steps
3. Save your changes
4. Done! ✅

**It's really that simple.** No coding knowledge needed!

Have questions? Look at the rule section or find an example above.

---

### 🏛️ Update Department Information

**File**: [src/data/departments.ts](src/data/departments.ts)

**Steps**:

1. Open `src/data/departments.ts`
2. Find department by slug (e.g., "civil")
3. Update fields:
   - `hodMessage` → HOD's message
   - `courses` → List of courses
   - `labs` → Laboratory descriptions
   - `description` → Department overview
4. Save file

**Important**: Don't change `slug` (breaks links)

**See**: [DATA_GUIDE.md](DATA_GUIDE.md#2-departments-data) for full details

---

### 📚 Add/Edit Academic Programs

**File**: [src/data/programs.ts](src/data/programs.ts)

**Steps**:

1. Open `src/data/programs.ts`
2. Find program section (DAE, Certificates, etc.)
3. Add new program object OR edit existing one
4. Update curriculum (`subjects` array)
5. Update career prospects (`careers` array)
6. Save file

**See**: [DATA_GUIDE.md](DATA_GUIDE.md#3-programs-data) for details

---

### 🎨 Change Homepage Section

**File**: [src/app/page.tsx](src/app/page.tsx)

**Steps**:

1. Open `src/app/page.tsx`
2. Find the component you want to change
3. To reorder: cut/paste components
4. To edit section data: modify the imported component file
5. Save file - changes appear on refresh

**See**: [PAGE_GUIDE.md](PAGE_GUIDE.md) for page structure

---

### 🔄 Modify a Reusable Component

**Files**: `src/components/home/*.tsx` or `src/components/shared/*.tsx`

**Steps**:

1. Find component file in `src/components/`
2. Edit styling (Tailwind classes) or data
3. If data is imported from `src/data/`: edit the data file instead
4. Save file

**See**: [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md) for details

---

### 📄 Create a New Page

**Example**: Create `/programs/new-program` page

**Steps**:

1. Create folder: `src/app/programs/new-program/`
2. Create file: `src/app/programs/new-program/page.tsx`
3. Use template from [PAGE_GUIDE.md](PAGE_GUIDE.md#how-to-create-a-new-page)
4. Add navigation link pointing to new page
5. Update breadcrumbs to match route

**See**: [PAGE_GUIDE.md](PAGE_GUIDE.md#how-to-create-a-new-page)

---

### 🔗 Update Navigation Links

**Files**:

- Header: [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx)
- Footer: [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

**Steps**:

1. Open the layout component
2. Find the links array
3. Add/edit/remove link objects
4. Save file

---

### 🖼️ Change Hero Image on Page

**File**: Page file (e.g., [src/app/admissions/page.tsx](src/app/admissions/page.tsx))

**Steps**:

1. Find `<PageHero imageUrl="..."` component
2. Change URL to new image
3. Best practices:
   - Use `/public/...` for local images
   - Use `picsum.photos` for placeholders
   - Optimal size: 1600×500px

**See**: [PAGE_GUIDE.md](PAGE_GUIDE.md#change-hero-section-image)

---

### ✏️ Update Page Title/Metadata

**File**: The page file (e.g., [src/app/about-us/page.tsx](src/app/about-us/page.tsx))

**Steps**:

1. Find `export const metadata` at top of file
2. Update `title` and `description`
3. Save file

**Impact**: Changes browser tab, Google results, social sharing

---

## 📁 File Organization Quick Reference

```
📦 Project Structure
├── 📄 DATA_GUIDE.md              ← Read for data modifications
├── 📄 PAGE_GUIDE.md              ← Read for page modifications
├── 📄 COMPONENTS_GUIDE.md        ← Read for component modifications
├── 📄 QUICK_START.md             ← You are here
│
├── src/
│   ├── app/                      ← All pages and routing
│   │   ├── page.tsx              ← Home page
│   │   ├── layout.tsx            ← Root layout (applies everywhere)
│   │   ├── admissions/
│   │   ├── programs/
│   │   └── about-us/
│   │
│   ├── components/               ← Reusable components
│   │   ├── home/                 ← Home page specific (HeroCarousel, etc.)
│   │   ├── layout/               ← Header, Footer, Navigation
│   │   ├── shared/               ← Shared components (PageHero, Cards, etc.)
│   │   └── ui/                   ← UI primitives
│   │
│   └── data/                     ← All data (single source of truth)
│       ├── admissions.ts         ← Fees, eligibility, documents
│       ├── departments.ts        ← Department info, HOD details
│       ├── programs.ts           ← Academic programs, curriculum
│       └── news.ts               ← News items, events
│
└── public/                       ← Static images and files
    ├── tech/                     ← Department images
    ├── programs/                 ← Program images
    └── ...
```

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Visit http://localhost:3000
# Changes auto-reload - just edit and save!

# Build for production
npm run build

# Check for errors
npm run lint
```

---

## 🎓 Common Tasks & Guides

| Task                   | File                      | Guide                                                          |
| ---------------------- | ------------------------- | -------------------------------------------------------------- |
| Add/edit news items    | `src/data/news.ts`        | [DATA_GUIDE.md](DATA_GUIDE.md#4-news-data)                     |
| Update fees/costs      | `src/data/admissions.ts`  | [DATA_GUIDE.md](DATA_GUIDE.md#1-admissions-data)               |
| Change department info | `src/data/departments.ts` | [DATA_GUIDE.md](DATA_GUIDE.md#2-departments-data)              |
| Add programs           | `src/data/programs.ts`    | [DATA_GUIDE.md](DATA_GUIDE.md#3-programs-data)                 |
| Reorder homepage       | `src/app/page.tsx`        | [PAGE_GUIDE.md](PAGE_GUIDE.md)                                 |
| Create new page        | `src/app/new-section/`    | [PAGE_GUIDE.md](PAGE_GUIDE.md#how-to-create-a-new-page)        |
| Style component        | `src/components/`         | [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)                     |
| Update header/footer   | `src/components/layout/`  | [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md#2-layout-components) |

---

## ⚠️ Critical DO's and DON'Ts

### ✅ DO

- Read the relevant guide (DATA_GUIDE, PAGE_GUIDE, COMPONENTS_GUIDE) before editing
- Keep `id` and `slug` values unique
- Use format: `"YYYY-MM-DD"` for dates
- Use local images from `/public/` when possible
- Test changes locally: `npm run dev`
- Save file to trigger auto-reload
- Keep comments up to date

### ❌ DON'T

- Change existing `id` or `slug` values (breaks references)
- Mix local and external image URLs
- Hardcode content (use data files instead)
- Delete old news items (keep archive)
- Commit code without testing
- Use spaces in slugs (use hyphens)
- Forget to restart dev server after package changes

---

## 🐛 Troubleshooting

### Page doesn't show new data

- Save file (`Ctrl+S`)
- Check for console errors
- Browser hard-refresh (`Ctrl+Shift+R`)

### Image not displaying

- Check path is correct: `/public/folder/image.png`
- Verify file exists in `/public` folder
- Try absolute path from root

### Changes not appearing

- Restart dev server: `npm run dev`
- Clear browser cache
- Check if file was saved

### Styling looks wrong

- Verify Tailwind class names (no typos)
- Check parent container not blocking styles
- Hard refresh browser

---

## 📞 Need Help?

### Understanding the codebase:

1. **Data questions**: See [DATA_GUIDE.md](DATA_GUIDE.md)
2. **Page structure**: See [PAGE_GUIDE.md](PAGE_GUIDE.md)
3. **Components**: See [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)
4. **Specific file**: Check comments at top of file

### Common issues:

- Check relevant guide above
- Look at existing similar entries (follow their format)
- Ask more experienced team member

---

## 📚 Extended Guides

For detailed information:

- **[DATA_GUIDE.md](DATA_GUIDE.md)** - Complete data file editing guide
- **[PAGE_GUIDE.md](PAGE_GUIDE.md)** - Page structure and creation
- **[COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md)** - Component modification
- **[README.md](README.md)** - Project overview

---

**Happy editing! Good luck! 🎉**
