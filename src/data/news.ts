/**
 * NEWS & EVENTS DATA FILE
 *
 * This file contains all news, events, and announcements:
 * - News articles about the institute
 * - Upcoming events
 * - Important announcements
 * - Industrial visits and activities
 *
 * IMPORTANT:
 * ⚠️ The HOME PAGE shows only the FIRST 3 items
 * ⚠️ Put newest items at the TOP to display on home page
 * ⚠️ Don't delete old items - keep them at the bottom
 *
 * EDIT THIS FILE TO CHANGE:
 * ✅ News on home page
 * ✅ Event announcements
 * ✅ Important notices
 *
 * READ FIRST: SIMPLE_GUIDE.md
 */

/**
 * News item information type definition
 *
 * IMPORTANT RULES:
 * - id: MUST be globally unique (e.g., "news-1", "event-5", "ann-2")
 * - slug: URL-safe identifier in kebab-case, MUST be unique
 * - date: MUST be in "YYYY-MM-DD" ISO format (e.g., "2025-05-06")
 * - category: One of "news", "event", "announcement" (no typos!)
 *
 * HOW id AND slug ARE USED:
 * - id: React key in loops, data tracking
 * - slug: URL routing (news-page/slug-name)
 * - Changing either breaks links/keys - don't do it!
 */
export type NewsItem = {
  id: string; // Unique ID: "news-1", "event-5"
  title: string; // Headline
  excerpt: string; // Short summary (1-2 sentences) - shows on home
  content: string; // Full article text
  date: string; // "YYYY-MM-DD" format (ISO standard)
  category: "news" | "event" | "announcement";
  image: string; // Image URL or local path
  slug: string; // URL slug: "my-news-title" (kebab-case)
};

/**
 * ALL NEWS ITEMS
 *
 * ⚠️ CRITICAL: Home page shows ONLY items 0, 1, and 2 (first 3)
 * Therefore: Always put newest items at the TOP of this array
 *
 * HOW TO PUBLISH NEWS ON HOME PAGE:
 * 1. Add new NewsItem object with all fields filled
 * 2. Place it at the TOP of the array (before all others)
 * 3. It automatically appears on home page within minutes
 * 4. Use ANY unique id and slug (e.g., "news-latest" or "ann-2025-05-06")
 * 5. Date must be in "YYYY-MM-DD" format
 * 6. category must be: "news", "event", or "announcement"
 *
 * HOW TO HIDE OLD NEWS FROM HOME:
 * Simply move it down in the array. Only first 3 display on home.
 * Moved items still visible on full news page.
 *
 * HOW TO EDIT EXISTING NEWS:
 * 1. Find by id or slug
 * 2. Update content, excerpt, or date
 * 3. NEVER change id or slug (breaks references)
 * 4. Keep date format: "YYYY-MM-DD"
 *
 * DATE FORMAT EXAMPLES:
 * ✅ Correct: "2025-05-06", "2025-03-15", "2025-12-25"
 * ❌ Wrong: "May 6, 2025", "06-05-2025", "2025/05/06"
 */
export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Admissions Open for 2025-26 Academic Session",
    excerpt:
      "JPI announces admissions for DAE programs in Civil, Electrical, Mechanical, and Computer Technology. Limited seats available.",
    content:
      "Jinnah Polytechnic Institute is pleased to announce that admissions for the academic session 2025-26 are now open. Students who have passed Matriculation (Science) with minimum 45% marks are eligible to apply for the 3-year Diploma of Associate Engineer programs.",
    date: "2025-03-01",
    category: "announcement",
    image: "https://picsum.photos/800/500?random=10",
    slug: "admissions-open-2025-26",
  },
  {
    id: "news-2",
    title: "63rd Annual Convocation Ceremony 2024",
    excerpt:
      "JPI celebrates the graduation of 250+ DAE students with a grand convocation ceremony. Chief guest awards gold medals to top achievers.",
    content:
      "Jinnah Polytechnic Institute held its 63rd Annual Convocation Ceremony on March 15, 2024. Over 250 graduating students from Civil, Electrical, Electronics, Mechanical, CIT, and Refrigeration & Air Conditioning departments received their diplomas. Gold medals were awarded to top-performing students by the chief guest, Chairman of Sindh Technical Education Board.",
    date: "2025-03-15",
    category: "event",
    image: "https://picsum.photos/800/500?random=20",
    slug: "63rd-annual-convocation-ceremony-2024",
  },
  {
    id: "news-3",
    title: "Industrial Visit to Engro Fertilizers Plant",
    excerpt:
      "DAE Chemical & Mechanical students visit Engro Fertilizers for hands-on industrial exposure and learning.",
    content:
      "Students of DAE Chemical and Mechanical Technology visited the Engro Fertilizers plant in Daharki for a 2-day industrial tour. The visit included a detailed walkthrough of the ammonia and urea production units, safety protocols briefing, and a Q&A session with plant engineers. Such visits bridge the gap between classroom theory and industrial practice.",
    date: "2025-02-20",
    category: "event",
    image: "https://picsum.photos/800/500?random=21",
    slug: "industrial-visit-engro-fertilizers-2025",
  },
  {
    id: "news-4",
    title: "Industrial Visit to Pakistan Steel Mills",
    excerpt:
      "Electrical & Electronics Technology students explore Pakistan Steel Mills for practical understanding of industrial automation.",
    content:
      "Final-year students of Electrical and Electronics Technology departments visited Pakistan Steel Mills in Karachi. The students observed the steel manufacturing process, electrical substations, motor control centers, and PLC-based automation systems. The visit was coordinated by the Industry-Academia Linkage Cell of JPI.",
    date: "2025-01-25",
    category: "event",
    image: "https://picsum.photos/800/500?random=22",
    slug: "industrial-visit-pakistan-steel-mills-2025",
  },
  {
    id: "news-5",
    title: "Independence Day Celebrations & Naat Competition",
    excerpt:
      "JPI celebrates Pakistan's 78th Independence Day with flag hoisting, national songs, speeches, and an inspiring Naat competition.",
    content:
      "Jinnah Polytechnic Institute celebrated Pakistan's 78th Independence Day with great zeal and fervor. The day began with a flag hoisting ceremony by the Principal, followed by the national anthem. Students delivered passionate speeches on the importance of freedom and the role of youth in nation-building. The highlight of the event was the annual Naat Competition, where 25 students presented beautiful naats, with the top three receiving cash prizes and certificates.",
    date: "2025-08-14",
    category: "event",
    image: "https://picsum.photos/800/500?random=23",
    slug: "independence-day-naat-competition-2025",
  },
  {
    id: "news-6",
    title: "Guest Lecture: Future of Artificial Intelligence in Engineering",
    excerpt:
      "Dr. Asif Mahmood, AI researcher at NED University, delivers an inspiring guest lecture on AI applications in engineering fields.",
    content:
      "The Co-Curricular Activities Committee organized a guest lecture on 'The Future of Artificial Intelligence in Engineering' delivered by Dr. Asif Mahmood, a renowned AI researcher from NED University. The lecture covered AI applications in civil engineering (structural analysis), electrical engineering (smart grids), and software development (machine learning). Over 300 students attended the session, which concluded with an interactive Q&A.",
    date: "2025-02-10",
    category: "event",
    image: "https://picsum.photos/800/500?random=24",
    slug: "guest-lecture-ai-engineering-2025",
  },
  {
    id: "news-7",
    title: "Guest Lecture: Entrepreneurship & Startup Culture",
    excerpt:
      "Mr. Faisal Qureshi, founder of TechVentures Pakistan, shares insights on launching tech startups with DAE students.",
    content:
      "The Entrepreneurship Development Cell of JPI invited Mr. Faisal Qureshi, founder of TechVentures Pakistan, for a guest lecture on 'Entrepreneurship & Startup Culture in Pakistan'. He shared his journey of building a successful tech company, discussed funding opportunities for young entrepreneurs, and encouraged DAE students to think beyond traditional jobs. Three JPI alumni who run their own businesses also shared their success stories.",
    date: "2025-01-15",
    category: "event",
    image: "https://picsum.photos/800/500?random=25",
    slug: "guest-lecture-entrepreneurship-2025",
  },
  {
    id: "news-8",
    title: "Inter-Departmental Sports Gala 2025",
    excerpt:
      "JPI's annual sports gala features cricket, football, badminton, and athletics competitions with enthusiastic student participation.",
    content:
      "The Annual Inter-Departmental Sports Gala 2025 was held at the JPI Sports Complex from February 1-5. Students from all six departments competed in cricket, football, badminton, table tennis, and athletics events. The Civil Technology department won the overall championship trophy, while Electrical Technology secured the runner-up position. Individual medals were awarded to outstanding athletes in track and field events.",
    date: "2025-02-05",
    category: "event",
    image: "https://picsum.photos/800/500?random=26",
    slug: "inter-departmental-sports-gala-2025",
  },
  {
    id: "news-9",
    title: "Civil Technology: Survey Camp & Field Training",
    excerpt:
      "Civil Technology students complete a week-long survey camp, mastering theodolite, total station, and leveling techniques.",
    content:
      "The Department of Civil Technology organized a week-long survey camp at the JPI campus and surrounding areas. Students gained hands-on experience with modern surveying equipment including digital theodolite, total station, auto level, and GPS devices. They performed topographic surveys, contour mapping, and road alignment exercises. The camp concluded with a viva examination and project report submission evaluated by faculty members.",
    date: "2025-03-10",
    category: "news",
    image: "https://picsum.photos/800/500?random=27",
    slug: "civil-technology-survey-camp-2025",
  },
  {
    id: "news-10",
    title: "Electrical Technology: PLC & Automation Workshop",
    excerpt:
      "Electrical Technology department conducts a 3-day workshop on PLC programming, SCADA systems, and industrial automation.",
    content:
      "The Department of Electrical Technology organized a 3-day workshop on 'PLC Programming and Industrial Automation' in collaboration with Siemens Pakistan. Students learned ladder logic programming, HMI design, SCADA system configuration, and troubleshooting techniques. Each participant received a certificate and a resource kit containing simulation software and project guides for further practice.",
    date: "2025-02-22",
    category: "news",
    image: "https://picsum.photos/800/500?random=28",
    slug: "electrical-technology-plc-automation-workshop-2025",
  },
  {
    id: "news-11",
    title:
      "Electronics Technology: PCB Design & Fabrication Project Exhibition",
    excerpt:
      "Electronics students showcase custom-designed PCBs for real-world applications including home automation and robotics.",
    content:
      "The Department of Electronics Technology hosted its annual Project Exhibition where students displayed custom-designed Printed Circuit Boards (PCBs) for various applications. Projects included a home automation system using Arduino, a digital weather station, a robotic arm with gesture control, and an IoT-based energy monitoring system. Industry professionals from local electronics firms evaluated the projects and offered internship opportunities to top teams.",
    date: "2025-03-05",
    category: "news",
    image: "https://picsum.photos/800/500?random=29",
    slug: "electronics-technology-pcb-exhibition-2025",
  },
  {
    id: "news-12",
    title: "CIT & Software Technology: Hackathon 2025",
    excerpt:
      "Computer Information Technology students compete in a 24-hour hackathon, building innovative software solutions.",
    content:
      "The Department of Computer Information Technology & Software Technology organized a 24-hour Hackathon where 40 teams of students developed software solutions for real-world problems. Winning projects included a campus management mobile app, an attendance system using facial recognition, and an e-commerce platform for local artisans. The top three teams received cash prizes and mentorship from senior software engineers at Techlogix Pakistan.",
    date: "2025-01-28",
    category: "event",
    image: "https://picsum.photos/800/500?random=30",
    slug: "cit-software-technology-hackathon-2025",
  },
  {
    id: "news-13",
    title: "Refrigeration & Air Conditioning: HVAC System Design Competition",
    excerpt:
      "RAC Technology students design and present energy-efficient HVAC systems for commercial buildings.",
    content:
      "The Department of Refrigeration & Air Conditioning Technology conducted an HVAC System Design Competition where students presented energy-efficient heating, ventilation, and air conditioning designs for a hypothetical 5-story commercial building. Projects were judged on cooling load calculations, duct design, energy efficiency ratings, and cost-effectiveness. The winning team's design achieved a 30% energy saving compared to conventional systems.",
    date: "2025-02-18",
    category: "event",
    image: "https://picsum.photos/800/500?random=31",
    slug: "rac-hvac-design-competition-2025",
  },
  {
    id: "news-14",
    title: "JPI Wins Best Technical Institute Award 2024",
    excerpt:
      "Anjuman-e-Islamia Trust honours JPI with the Best Technical Institute Award at the annual education gala in Karachi.",
    content:
      "Jinnah Polytechnic Institute was honoured with the Best Technical Institute Award 2024 at the Annual Education Excellence Gala organized by the Anjuman-e-Islamia Trust. The award recognizes JPI's outstanding contribution to technical education in Karachi.",
    date: "2025-02-15",
    category: "news",
    image: "https://picsum.photos/800/500?random=11",
    slug: "jpi-wins-best-technical-institute-2024",
  },
  {
    id: "news-15",
    title: "New Computer Lab Inaugurated with 50 Workstations",
    excerpt:
      "JPI upgrades its Computer Technology department with a brand-new lab featuring the latest hardware and software.",
    content:
      "JPI has inaugurated a state-of-the-art computer lab featuring 50 modern workstations with the latest processors and software tools. The lab will support DAE Computer Technology students as well as short course participants.",
    date: "2025-01-20",
    category: "news",
    image: "https://picsum.photos/800/500?random=13",
    slug: "new-computer-lab-inaugurated",
  },
  {
    id: "news-16",
    title: "Merit Scholarships Awarded to 45 Students",
    excerpt:
      "Anjuman-e-Islamia Trust grants merit-based scholarships to 45 outstanding students across all DAE programs.",
    content:
      "In a ceremony held at the JPI auditorium, the Anjuman-e-Islamia Trust awarded merit-based scholarships to 45 outstanding students from across all six DAE programs. The scholarships cover full tuition fees for the remaining academic years. Additionally, 15 need-based scholarships were granted to deserving students from low-income families.",
    date: "2025-01-10",
    category: "announcement",
    image: "https://picsum.photos/800/500?random=14",
    slug: "merit-scholarships-awarded-45-students",
  },
];
