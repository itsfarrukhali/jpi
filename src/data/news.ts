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
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: "news" | "event" | "announcement" | "seminar";
  image: string;
  pdfUrl?: string;
  slug: string;
  galleryImages?: string[];
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
    id: "ann-2025-01",
    title: "Admit Card Collection – SBTE Exams (3rd Year Regular 2023–2024)",
    excerpt:
      "3rd Year Morning & Evening students must collect their admit cards from the Registration & Examination Counter. Bring student ID.",
    content:
      "All students of 3rd Year Morning & Evening (Regular Session 2023–2024) are hereby informed that the Admit Cards for SBTE Examinations have been issued.\n\n" +
      "Students are directed to collect their admit cards from the Registration and Examination Office/Counter during office hours.\n\n" +
      "Kindly ensure to bring your student ID card while collecting the admit card.\n\n" +
      "Note: Entry to the examination hall will not be permitted without a valid admit card.\n\n" +
      "For any queries, please contact the Registration Office.\n\n" +
      "Administration\njpikhi.edu.pk",
    date: "2026-05-14",
    category: "announcement",
    image: "/brand/notice-thumb.png",
    slug: "admit-card-collection-sbte-2025",
  },

  // ─── Notice 2: Date Sheet with PDF ──────────────────
  {
    id: "ann-2025-02",
    title: "SBTE Date Sheet 2025 – 3rd Year Regular",
    excerpt:
      "The SBTE date sheet for 3rd Year (Regular) examinations has been published. Download the PDF.",
    content:
      "The Sindh Board of Technical Education (SBTE) has issued the date sheet for the upcoming 3rd Year Diploma examinations. Students can view and download the complete schedule from the link below.",
    date: "2026-05-14",
    category: "announcement",
    image: "/brand/notice-thumb.png",
    pdfUrl: "/pdfs/date-sheet-3rd-year.pdf",
    slug: "sbte-date-sheet-3rd-year",
  },
  {
    id: "ann-2025-03",
    title: "Admissions Open – Physiotherapy Technician Diploma",
    excerpt:
      "Start your career in healthcare with a 2-Year Diploma in Physiotherapy Technician program at Jinnah Polytechnic Institute Karachi.",
    content:
      "Admissions are open for the 2-Year Diploma in Physiotherapy Technician at Jinnah Polytechnic Institute Karachi. This program is designed to provide professional training in patient care, rehabilitation, exercise therapy, and advanced physiotherapy techniques. The course is affiliated with S.B.T.E and includes experienced faculty, practical training, and career-oriented learning. Students will gain hands-on skills required for working in hospitals and healthcare centers. Limited seats are available, and students are encouraged to apply early.",
    date: "2025-06-01",
    category: "announcement",
    image: "/news-events/admissions/physio.jpg",
    slug: "physiotherapy-technician-diploma-admissions-2025",
    pdfUrl: "/pdfs/physio-admission-2026.pdf",
  },
  {
    id: "ann-2025-04",
    title: "Admissions Open – Nursing Assistant Program",
    excerpt:
      "Join the 1-Year Nursing Assistant Program and build a strong foundation in healthcare services and patient care.",
    content:
      "Admissions are open for the 1-Year Nursing Assistant Program at Jinnah Polytechnic Institute Karachi. This course provides practical knowledge in vital signs monitoring, patient care, medical protocols, electronic health records, and care for diverse populations. Students receive hands-on clinical training, expert guidance, and certification upon completion. The program is ideal for individuals aiming to enter the healthcare sector with strong career growth opportunities. Limited seats are available.",
    date: "2025-06-01",
    category: "announcement",
    image: "/news-events/admissions/nursing.jpg",
    slug: "nursing-assistant-program-admissions-2025",
    pdfUrl: "/pdfs/nursing-admission-2026.pdf",
  },
  {
    id: "ann-2025-05",
    title: "Admissions Open – AutoCAD Professional Course",
    excerpt:
      "Learn AutoCAD 2D, 3D, Mechanical & Civil Drawing with a 2-Month professional course in Karachi.",
    content:
      "Admissions are open for the Professional AutoCAD Course at Jinnah Polytechnic Institute Karachi. This 2-month course covers AutoCAD 2D drafting, 3D modeling, mechanical and civil drawing, manual drafting techniques, and professional design skills. The course is suitable for beginners and students who want to build freelancing or technical design careers. Classes are held on Sundays only from 10:00 AM to 1:00 PM. Limited seats available.",
    date: "2025-06-01",
    category: "announcement",
    image: "/news-events/admissions/autocad.jpg",
    slug: "autocad-professional-course-admissions-2025",
    pdfUrl: "/pdfs/autocad-admission-2026.pdf",
  },
  {
    id: "ann-2025-06",
    title: "Admissions Open – Artificial Intelligence Diploma",
    excerpt:
      "Start your tech career with a 1-Year Diploma in Artificial Intelligence with Python, Machine Learning, and real-world projects.",
    content:
      "Admissions are open for the 1-Year Diploma in Artificial Intelligence at Jinnah Polytechnic Institute Karachi. This program is designed to provide hands-on training in Python programming, machine learning, data science, and AI-based projects. Students will gain practical experience through real-world applications, internships, and career guidance. Scholarships up to 50% are available for eligible students. The course is suitable for Matric, Intermediate, and professionals seeking skill advancement.",
    date: "2025-06-01",
    category: "announcement",
    image: "/news-events/admissions/ai.jpg",
    slug: "artificial-intelligence-diploma-admissions-2025",
    pdfUrl: "/pdfs/ai-admission-2026.pdf",
  },
  {
    id: "ann-2025-07",
    title: "Admissions Open – Jinnah Healthcare Technology Programs",
    excerpt:
      "Diploma programs in Physiotherapy, Nursing, Laboratory Technician, and Phlebotomy with practical healthcare training.",
    content:
      "Jinnah Polytechnic Institute Karachi is offering admissions in multiple healthcare diploma programs including Physiotherapy Technician (2 Years), Nursing Assistant (1 Year), Laboratory Technician (1 Year), and Phlebotomy (6 Months). These programs are designed with practical training, modern lab facilities, and real-world medical skills. Students from Matric Science backgrounds can apply. Limited seats available with a 50% discount offer for selected programs.",
    date: "2025-06-01",
    category: "announcement",
    image: "/news-events/admissions/healthcare.jpg",
    slug: "healthcare-diploma-programs-admissions-2025",
    pdfUrl: "/pdfs/healthcare-admission-2026.pdf",
  },
  {
    id: "ann-2025-08",
    title: "Admissions Open – Technical Diploma Programs",
    excerpt:
      "Apply for multiple 2–3 year technical diplomas in Computer, Mechanical, Electrical, Civil, and Software Technology.",
    content:
      "Admissions are open for various technical diploma programs at Jinnah Polytechnic Institute Karachi. Programs include Computer Information Technology (CIT), Mechanical Technology, Electrical Technology, Civil Technology, Refrigeration & Air Conditioning Technology (RACT), Software Technology, Electronics Technology, and Chemical Technology. These programs are designed for Matric and Intermediate students with a focus on practical training, technical skills, and career development in engineering and IT fields.",
    date: "2025-06-01",
    category: "announcement",
    image: "/news-events/admissions/diplomas.jpg",
    slug: "technical-diploma-programs-admissions-2025",
    pdfUrl: "/pdfs/diplomas-admission-2026.pdf",
  },
  {
    id: "news-2",
    title: "Annual Convocation Ceremony 2025",
    excerpt:
      "JPI celebrates the graduation of 300+ DAE students with a memorable convocation. 55 moments captured..",
    content:
      "Jinnah Polytechnic Institute held its 64th Annual Convocation Ceremony on [Date]. Over 300 graduating students from all DAE departments received their diplomas. The chief guest awarded gold medals to top achievers. A complete photo gallery is available.",
    date: "2025-11-16",
    category: "event",
    image: "/news-events/convo-2025/48.JPG",
    slug: "64th-annual-convocation-2025",
    galleryImages: Array.from(
      { length: 55 },
      (_, i) => `/news-events/convo-2025/${i + 1}.JPG`,
    ),
  },
  {
    id: "news-3",
    title: "Educational Visit to HVAC System at International Expo 2026",
    excerpt:
      "R.A.C.T Department students explored modern HVAC technologies during an educational visit to International Expo 2026 at Expo Center Karachi.",
    content:
      "On 14 February 2026, the R.A.C.T Department conducted an educational visit to the HVAC System showcased at International Expo 2026, held at Expo Center Karachi. The visit provided students with valuable practical insights into modern heating, ventilation, and air conditioning systems, enhancing their understanding of industry standards, emerging technologies, and real-world applications. Such exposure plays a vital role in preparing students for professional and technical excellence.",
    date: "2026-02-14",
    category: "event",
    image: "/news-events/ract-visit-expo/1.jpg",
    slug: "hvac-visit-international-expo-2026",
    galleryImages: Array.from(
      { length: 5 },
      (_, i) => `/news-events/ract-visit-expo/${i + 1}.jpg`,
    ),
  },
  {
    id: "news-4",
    title:
      "Educational Visit to F&M Pvt. Ltd. Soil & Material Testing Laboratory",
    excerpt:
      "Civil Department students gained practical exposure to soil and construction material testing at F&M Pvt. Ltd.",
    content:
      "On 12 February 2026, the Civil Department conducted an educational visit to F&M Pvt. Ltd. (Soil & Material Testing Laboratory). The visit offered students valuable hands-on exposure to advanced soil and construction material testing procedures, enhancing their practical knowledge and bridging the gap between theory and real-world engineering practices. Such industry visits are essential in shaping skilled, confident, and future-ready professionals.",
    date: "2026-02-12",
    category: "event",
    image: "/news-events/civil-visit-fm/1.jpg",
    slug: "civil-visit-fm-soil-material-testing-2026",
    galleryImages: Array.from(
      { length: 5 },
      (_, i) => `/news-events/civil-visit-fm/${i + 1}.jpg`,
    ),
  },
  {
    id: "news-5",
    title: "Educational Visit to Meezan Bank Head Office",
    excerpt:
      "R.A.C.T Department students explored real-time HVAC systems during an educational visit to Meezan Bank Head Office.",
    content:
      "On 11th February 2026, the R.A.C.T Department had the privilege of visiting Meezan Bank Head Office, gaining valuable insight into real-time HVAC systems within a professional corporate setting. During the visit, Engr. Akhter Zafar presented a souvenir shield to Mr. Riaz Ahmed (Head of Administration, Procurement, Branch Expansion & Insurance / GM) as a token of appreciation and gratitude. The visit served as an inspiring experience that successfully bridged academic knowledge with practical industry exposure.",
    date: "2026-02-11",
    category: "event",
    image: "/news-events/ract-visit-mbl/1.jpg",
    slug: "ract-visit-meezan-bank-head-office-2026",
    galleryImages: Array.from(
      { length: 4 },
      (_, i) => `/news-events/ract-visit-mbl/${i + 1}.jpg`,
    ),
  },
  {
    id: "news-6",
    title: "Awareness Session on APO Vision 2025 & Innovation-Led Productivity",
    excerpt:
      "National Productivity Organization conducted an awareness session to educate students on productivity, quality improvement, and innovation-led growth.",
    content:
      "An awareness session on 'APO Vision 2025, Inclusive, Innovation-led Productivity' was conducted on 23rd January 2026 at 10:00 AM by Mr. Muazam Ali, Incharge NPO Regional Office Karachi, National Productivity Organization (NPO), Ministry of Industries & Production, Government of Pakistan. The session aimed to create awareness among students about the importance of productivity enhancement, quality improvement, and innovation-driven practices for professional and industrial growth. Students gained valuable insights into modern productivity approaches and their role in national development.",
    date: "2026-01-23",
    category: "seminar",
    image: "/news-events/npo-seminar/1.jpg",
    slug: "apo-vision-2025-awareness-session-2026",
    galleryImages: Array.from(
      { length: 3 },
      (_, i) => `/news-events/npo-seminar/${i + 1}.jpg`,
    ),
  },
  {
    id: "news-7",
    title: "Alhaj Riyaz Uddin Ahmed Sports Week 2026",
    excerpt:
      "Jinnah Polytechnic Institute celebrated an exciting Sports Week featuring inter-technology tournaments in cricket, badminton, table tennis, and race competitions.",
    content:
      "Jinnah Polytechnic Institute successfully organized the Alhaj Riyaz Uddin Ahmed Sports Week 2026, bringing together students from different technologies in a series of exciting inter-technology tournaments. The event featured the Wajeeh Uddin Ahmed Inter Technology Cricket Tournament, Fasih Uddin Inter Technology Badminton Tournament, Muhammad Uzair Siddiqui Inter Technology Table Tennis Tournament, and Razi Uddin Ahmed Inter Technology Race Competition.\n\nThroughout the week, students displayed outstanding teamwork, discipline, sportsmanship, and competitive spirit during trials and final matches. The cricket tournament witnessed thrilling performances from all participating teams, with Civil, RACT, Electrical, and CIT departments qualifying for the semi-finals. After an intense final match, the Electrical Department emerged as the cricket champions.\n\nIn badminton, table tennis, and race competitions, students competed with passion and determination, making every event highly energetic and memorable. The Civil Technology Department achieved remarkable success by winning all three tournaments, while the Electrical Technology Department secured the runner-up position with strong overall performances.\n\nThe Sports Week concluded with a grand Award Ceremony that began with Tilawat-e-Quran and Naat-e-Nabvi, followed by inspiring speeches from Chancellor Wajeeh Uddin Ahmed and special guest Capt. Balban Sabir. Students and teams were honored for their dedication, hard work, and sportsmanship. With exceptional performances across multiple events, the Civil Department proudly emerged as the overall winner of Alhaj Riyaz Uddin Ahmed Sports Week 2026.\n\nThe event not only promoted healthy competition and physical fitness but also strengthened unity, confidence, and leadership among students, making Sports Week 2026 a truly unforgettable experience.",
    date: "2026-01-10",
    category: "event",
    image: "/news-events/sports-week/1.jpg",
    slug: "alhaj-riyaz-uddin-ahmed-sports-week-2026",
    galleryImages: Array.from(
      { length: 21 },
      (_, i) => `/news-events/sports-week/${i + 1}.jpg`,
    ),
  },
  {
    id: "news-8",
    title: "Open House 2025 Highlights",
    excerpt:
      "A vibrant Open House featuring project demos, food stalls, and a free medical camp showcasing student talent and teamwork.",
    content:
      "Here’s a look back at our amazing Open House 2025! The event brought together students, faculty, and guests to celebrate innovation and creativity. Visitors explored brilliant project demonstrations from different departments, enjoyed a variety of food stalls, and benefited from a free medical camp arranged on campus. Every corner of the event reflected passion, skill, and teamwork, making it a memorable experience for everyone involved.",
    date: "2025-11-04",
    category: "event",
    image: "/news-events/open-house-2025/1.jpg",
    slug: "open-house-2025-highlights",
    galleryImages: Array.from(
      { length: 10 },
      (_, i) => `/news-events/open-house-2025/${i + 1}.jpg`,
    ),
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
  {
    id: "news-17",
    title: "64th Annual Convocation Ceremony 2025",
    excerpt:
      "JPI celebrates the graduation of 300+ DAE students with a memorable convocation. 55 moments captured.",
    content:
      "Jinnah Polytechnic Institute held its 64th Annual Convocation Ceremony on [Date]. Over 300 graduating students from all DAE departments received their diplomas. The chief guest awarded gold medals to top achievers. A complete photo gallery is available.",
    date: "2025-05-01",
    category: "event",
    image: "/news-events/convo-2025/48.JPG",
    slug: "64th-annual-convocation-2025",
    galleryImages: Array.from(
      { length: 55 },
      (_, i) => `/news-events/convo-2025/${i + 1}.JPG`,
    ),
  },
];
