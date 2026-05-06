/**
 * PROGRAMS DATA FILE
 *
 * This file contains all programs offered by the institute:
 * - DAE programs (3-year diplomas)
 * - Certificate courses
 * - Short courses
 * - Special programs
 *
 * Each program has:
 * - Name and description
 * - Duration and number of seats
 * - Subject list by year
 * - Career options after graduation
 *
 * EDIT THIS FILE TO CHANGE:
 * ✅ Program details
 * ✅ Course subjects
 * ✅ Career options
 * ✅ Program eligibility
 *
 * READ FIRST: SIMPLE_GUIDE.md
 */

/**
 * Academic program information type definition
 *
 * IMPORTANT FIELDS:
 * - id: Unique identifier (e.g., "dae-civil", "cert-welding"). Must be unique!
 * - tag: Program category ("DAE", "CERT", "SHORT", "JEC") for UI display
 * - category: Technical category ("dae", "certifications", "short-courses", "jec") for routing
 * - subjects: Array of curriculum by year. Each year has items array with subject names
 * - careers: Possible job positions graduates can pursue
 */
export type Program = {
  id: string; // Unique identifier: "dae-civil"
  name: string; // Full program name
  shortName: string; // Short name for display
  duration: string; // e.g., "3 Years (6 Semesters)"
  seats: number; // Total seats available
  eligibility: string; // Eligibility requirement
  description: string; // 1-2 sentence overview
  icon: string; // Lucide icon name
  tag: "DAE" | "CERT" | "SHORT" | "JEC";
  category: "dae" | "certifications" | "short-courses" | "jec";
  subjects: { year: string; items: string[] }[];
  careers: string[];
};

/**
 * HOW TO ORGANIZE DATA:
 *
 * This file is organized into sections by program type:
 * 1. daePrograms - All DAE programs (3 year diplomas)
 * 2. certificationPrograms - Certificate courses
 * 3. shortCourses - Short-term skill courses
 * 4. jecPrograms - Special JEC programs
 *
 * Then all programs are combined in final export
 */

/**
 * ALL DAE PROGRAMS
 *
 * DAE (Diploma of Associate Engineering) - 3 year, 6 semester programs
 *
 * HOW TO ADD DAE PROGRAM:
 * 1. Create new Program object with unique id (e.g., "dae-chemical")
 * 2. Tag must be "DAE", category must be "dae"
 * 3. Include curriculum for all 3 years
 * 4. List realistic career paths
 * 5. Add to daePrograms array
 *
 * HOW TO EDIT CURRICULUM:
 * 1. Find program by id
 * 2. Update subjects array
 * 3. Keep years labeled "1st Year", "2nd Year", "3rd Year"
 * 4. Each year must have items array with subject names
 */
const daePrograms: Program[] = [
  {
    id: "dae-civil",
    name: "Diploma of Associate Engineering — Civil Technology",
    shortName: "DAE Civil Technology",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Covers structural design, surveying, construction materials, road & building construction.",
    icon: "building",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Applied Physics",
          "Communication Skills",
          "Engineering Drawing",
          "Building Materials",
          "Surveying-I",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Structural Analysis",
          "Concrete Technology",
          "Surveying-II",
          "Soil Mechanics",
          "Hydraulics",
          "Estimation & Costing",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Steel Structures",
          "Road Construction",
          "Water Supply & Sanitation",
          "Construction Management",
          "Professional Ethics",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Junior Civil Engineer",
      "Site Supervisor",
      "Surveyor",
      "CAD Draughtsman",
      "Construction Inspector",
    ],
  },
  {
    id: "dae-electrical",
    name: "Diploma of Associate Engineering — Electrical Technology",
    shortName: "DAE Electrical Technology",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Covers electrical circuits, power systems, industrial electronics, and automation.",
    icon: "zap",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Applied Physics",
          "Communication Skills",
          "Engineering Drawing",
          "Basic Electricity",
          "Electronic Components",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "AC/DC Circuits",
          "Digital Electronics",
          "Industrial Electronics",
          "Electric Machines-I",
          "Power Systems",
          "PLC Basics",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Electric Machines-II",
          "Power Electronics",
          "Industrial Automation",
          "Electrical Installations",
          "Energy Management",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Electrical Engineer (Jr.)",
      "Industrial Electrician",
      "PLC Programmer",
      "Power Plant Technician",
      "Maintenance Engineer",
    ],
  },
  {
    id: "dae-mechanical",
    name: "Diploma of Associate Engineering — Mechanical Technology",
    shortName: "DAE Mechanical Technology",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Covers machine design, manufacturing processes, thermodynamics, and CNC machining.",
    icon: "settings",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Applied Physics",
          "Communication Skills",
          "Engineering Drawing",
          "Workshop Technology",
          "Material Science",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Machine Design",
          "Manufacturing Processes",
          "Thermodynamics",
          "Fluid Mechanics",
          "Metrology",
          "CAD/CAM Basics",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "CNC Machining",
          "Heat Treatment",
          "Refrigeration & AC",
          "Industrial Management",
          "Quality Control",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Mechanical Engineer (Jr.)",
      "CNC Operator",
      "Maintenance Technician",
      "HVAC Technician",
      "Production Supervisor",
    ],
  },
  {
    id: "dae-electronics",
    name: "Diploma of Associate Engineering — Electronics Technology",
    shortName: "DAE Electronics Technology",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Covers analog & digital electronics, microcontrollers, communication systems, and embedded design.",
    icon: "cpu",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Applied Physics",
          "Communication Skills",
          "Engineering Drawing",
          "Basic Electronics",
          "Electronic Components",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Analog Circuits",
          "Digital Electronics",
          "Microcontrollers",
          "Communication Systems",
          "Instrumentation",
          "PCB Design",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Embedded Systems",
          "Industrial Electronics",
          "Power Electronics",
          "Telecommunication",
          "Maintenance & Repair",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Electronics Technician",
      "Embedded Systems Developer",
      "Telecom Technician",
      "Instrumentation Engineer",
      "PCB Designer",
    ],
  },
  {
    id: "dae-software",
    name: "Diploma of Associate Engineering — Software Technology",
    shortName: "DAE Software Technology",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    eligibility: "Matriculation (Science/Computer) with minimum 45% marks",
    description:
      "Covers programming fundamentals, software engineering, web & mobile app development, and database systems.",
    icon: "code",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Communication Skills",
          "Programming Fundamentals",
          "Digital Logic Design",
          "Computer Architecture",
          "Office Automation",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Object Oriented Programming",
          "Data Structures & Algorithms",
          "Database Management Systems",
          "Web Technologies",
          "Operating Systems",
          "Software Engineering Basics",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Advanced Web Development",
          "Mobile Application Development",
          "Software Project Management",
          "Information Security",
          "Professional Practices",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Software Developer",
      "Web Developer",
      "Mobile App Developer",
      "Database Administrator",
      "IT Support Engineer",
    ],
  },
  {
    id: "dae-cit",
    name: "Diploma of Associate Engineering — Computer Information Technology",
    shortName: "DAE Computer Information Technology",
    duration: "3 Years (6 Semesters)",
    seats: 60,
    eligibility: "Matriculation (Science/Computer) with minimum 45% marks",
    description:
      "Covers networking, cybersecurity, cloud computing, IT infrastructure, and system administration.",
    icon: "network",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Communication Skills",
          "Computer Fundamentals",
          "Programming Basics",
          "Digital Electronics",
          "IT Essentials",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Computer Networks",
          "Network Administration",
          "Cybersecurity Fundamentals",
          "Database Systems",
          "Web Development",
          "Linux Administration",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Cloud Computing",
          "Advanced Networking",
          "Ethical Hacking",
          "IT Project Management",
          "Disaster Recovery",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Network Administrator",
      "System Administrator",
      "Cybersecurity Analyst",
      "IT Support Specialist",
      "Cloud Support Engineer",
    ],
  },
  {
    id: "dae-refrigeration",
    name: "Diploma of Associate Engineering — Refrigeration & Air Conditioning Technology",
    shortName: "DAE Refrigeration & AC Technology",
    duration: "3 Years (6 Semesters)",
    seats: 45,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Covers HVAC systems, refrigeration cycles, thermal engineering, and building climate control.",
    icon: "thermometer",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Applied Physics",
          "Communication Skills",
          "Engineering Drawing",
          "Basic Thermodynamics",
          "Workshop Practice",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Refrigeration Principles",
          "Air Conditioning Systems",
          "Heat Transfer",
          "Fluid Mechanics",
          "Electrical Controls",
          "HVAC Design Basics",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Advanced HVAC Systems",
          "Cold Storage Design",
          "Building Automation",
          "Energy Management",
          "Maintenance & Troubleshooting",
          "Project Work",
        ],
      },
    ],
    careers: [
      "HVAC Technician",
      "Refrigeration Engineer",
      "Building Services Engineer",
      "Cold Storage Supervisor",
      "Maintenance Engineer",
    ],
  },
  {
    id: "dae-chemical",
    name: "Diploma of Associate Engineering — Chemical Technology",
    shortName: "DAE Chemical Technology",
    duration: "3 Years (6 Semesters)",
    seats: 45,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Covers chemical processes, instrumentation, process control, and chemical plant operations.",
    icon: "flask",
    tag: "DAE",
    category: "dae",
    subjects: [
      {
        year: "1st Year",
        items: [
          "Applied Mathematics",
          "Applied Physics",
          "Communication Skills",
          "Human Anatomy & Physiology",
          "Basic Electronics",
          "Medical Terminology",
        ],
      },
      {
        year: "2nd Year",
        items: [
          "Chemical Processes",
          "Instrumentation",
          "Process Control",
          "Chemical Plant Operations",
          "Safety & Environmental Management",
          "Quality Assurance",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Advanced Chemical Processes",
          "Process Simulation",
          "Equipment Maintenance",
          "Plant Management",
          "Regulatory Standards",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Chemical Engineer",
      "Process Engineer",
      "Quality Control Technician",
      "Safety Officer",
      "Healthcare Technology Specialist",
    ],
  },
];

const certificationPrograms: Program[] = [
  {
    id: "cert-physiotherapy",
    name: "Diploma in Physiotherapy Technicians",
    shortName: "Physiotherapy Technicians",
    duration: "2 Years",
    seats: 30,
    eligibility: "Matric Science | Age Limit: 35 Years",
    description:
      "Comprehensive training in physical therapy, patient rehabilitation, exercise therapy, and advanced rehabilitation techniques.",
    icon: "heart-pulse",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Physical Therapy Fundamentals",
          "Patient Care & Rehabilitation",
          "Exercise Therapy",
          "Biomechanical Analysis",
          "Advance Rehabilitation Tech",
        ],
      },
    ],
    careers: [
      "Physiotherapy Technician",
      "Rehabilitation Assistant",
      "Sports Therapy Assistant",
      "Hospital Physiotherapy Dept.",
      "Private Clinic Practitioner",
    ],
  },
  {
    id: "cert-nursing",
    name: "Nursing Assistant",
    shortName: "Nursing Assistant",
    duration: "1 Year",
    seats: 35,
    eligibility: "Matric Science | Age Limit: 35 Years",
    description:
      "Training in vital signs monitoring, patient care, medical protocols, and electronic health records for diverse populations.",
    icon: "stethoscope",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Vital Signs",
          "Patient Care",
          "Medical Protocols",
          "Electronic Health Records",
          "Care for Diverse Populations",
        ],
      },
    ],
    careers: [
      "Nursing Assistant",
      "Patient Care Technician",
      "Hospital Ward Assistant",
      "Home Healthcare Provider",
      "Clinic Assistant",
    ],
  },
  {
    id: "cert-lab-technician",
    name: "Laboratory Technicians",
    shortName: "Laboratory Technicians",
    duration: "1 Year",
    seats: 30,
    eligibility: "Matric Science | Age Limit: 35 Years",
    description:
      "Hands-on training in microscopy, sample analysis, bioinformatics, hematology, microbiology, and molecular diagnostics.",
    icon: "microscope",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Microscopy & Testing",
          "Sample Analysis",
          "Bioinformatics",
          "Hematology",
          "Microbiology",
          "Molecular Diagnostics",
        ],
      },
    ],
    careers: [
      "Laboratory Technician",
      "Medical Lab Assistant",
      "Pathology Lab Technician",
      "Research Assistant",
      "Diagnostic Center Technician",
    ],
  },
  {
    id: "cert-phlebotomy",
    name: "Phlebotomy",
    shortName: "Phlebotomy",
    duration: "6 Months",
    seats: 25,
    eligibility: "Matric Science | Age Limit: 35 Years",
    description:
      "Specialized training in venipuncture techniques, safety protocols, specialized testing, and quality control procedures.",
    icon: "syringe",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Venipuncture Techniques",
          "Safety Protocols",
          "Specialized Testing",
          "Quality Control",
        ],
      },
    ],
    careers: [
      "Phlebotomist",
      "Blood Collection Specialist",
      "Laboratory Assistant",
      "Hospital Technician",
      "Diagnostic Center Staff",
    ],
  },
];

const shortCourses: Program[] = [
  // ─── Artificial Intelligence ───────────────────────
  {
    id: "sc-ai",
    name: "Diploma in Artificial Intelligence",
    shortName: "Artificial Intelligence",
    duration: "1 Year",
    seats: 25,
    eligibility:
      "Matric / Intermediate | Diploma Holders, Job Seekers & Professionals",
    description:
      "Comprehensive AI training covering machine learning, deep learning, Python programming, and real-world AI projects.",
    icon: "brain",
    tag: "SHORT",
    category: "short-courses",
    subjects: [
      {
        year: "Course Modules",
        items: [
          "Introduction to AI",
          "Machine Learning Basics",
          "Python Programming",
          "Data Science Fundamentals",
          "Deep Learning",
          "Computer Vision & NLP",
          "AI Projects & Case Studies",
        ],
      },
    ],
    careers: [
      "AI/ML Engineer",
      "Data Scientist",
      "Python Developer",
      "Computer Vision Engineer",
      "NLP Specialist",
      "AI Research Assistant",
    ],
  },

  // ─── Skilled Trades ────────────────────────────────
  {
    id: "sc-welding",
    name: "Welding & Fabrication",
    shortName: "Welding & Fabrication",
    duration: "3 Months",
    seats: 20,
    eligibility: "8th Class pass",
    description:
      "MIG, TIG, Arc welding and metal fabrication techniques with hands-on workshop practice.",
    icon: "flame",
    tag: "SHORT",
    category: "short-courses",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Arc Welding",
          "MIG Welding",
          "TIG Welding",
          "Metal Cutting",
          "Fabrication Techniques",
          "Safety Standards",
        ],
      },
    ],
    careers: ["Welder", "Fabricator", "Pipeline Welder", "Metal Worker"],
  },
  {
    id: "sc-electrician",
    name: "Domestic & Industrial Electrician",
    shortName: "Electrician",
    duration: "3 Months",
    seats: 25,
    eligibility: "8th Class pass",
    description:
      "Domestic wiring, industrial electrical systems, safety protocols, and electrical installations.",
    icon: "lightbulb",
    tag: "SHORT",
    category: "short-courses",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Basic Electricity",
          "House Wiring",
          "Industrial Wiring",
          "Safety Standards",
          "Meters & Testing",
          "Fault Finding",
          "Practical Workshop",
        ],
      },
    ],
    careers: [
      "Electrician",
      "Wiring Contractor",
      "Maintenance Worker",
      "Industrial Electrician",
    ],
  },
  {
    id: "sc-plumbing",
    name: "Plumbing & Sanitation",
    shortName: "Plumbing & Sanitation",
    duration: "3 Months",
    seats: 20,
    eligibility: "8th Class pass",
    description:
      "Pipe fitting, sanitation systems, water supply installation, and maintenance techniques.",
    icon: "droplets",
    tag: "SHORT",
    category: "short-courses",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Pipe Types & Fittings",
          "Water Supply Systems",
          "Drainage Systems",
          "Sanitary Fixtures",
          "Maintenance & Repair",
          "Practical Workshop",
        ],
      },
    ],
    careers: [
      "Plumber",
      "Sanitation Worker",
      "Pipe Fitter",
      "Maintenance Technician",
    ],
  },
  {
    id: "sc-it",
    name: "IT Fundamentals & Office Automation",
    shortName: "IT Fundamentals",
    duration: "2 Months",
    seats: 30,
    eligibility: "Matric pass",
    description:
      "Computer basics, MS Office suite, internet usage, and digital literacy for office environments.",
    icon: "laptop",
    tag: "SHORT",
    category: "short-courses",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Computer Basics",
          "Windows OS",
          "MS Word",
          "MS Excel",
          "PowerPoint",
          "Internet & Email",
          "Digital Safety",
        ],
      },
    ],
    careers: [
      "Office Assistant",
      "Data Entry Operator",
      "Receptionist",
      "Computer Operator",
    ],
  },
];

const jecPrograms: Program[] = [
  {
    id: "jec-autocad",
    name: "Professional AutoCAD 2D & 3D — Mechanical / Civil Drawing Course",
    shortName: "AutoCAD 2D & 3D",
    duration: "2 Months",
    seats: 25,
    eligibility: "Matric pass | No age limit | Both male & female",
    description:
      "Master professional 2D and 3D drafting skills for mechanical and civil engineering. Learn plan, elevation, section drawings, 3D modeling, and rendering.",
    icon: "pencil-ruler",
    tag: "JEC",
    category: "jec",
    subjects: [
      {
        year: "AutoCAD 2D",
        items: ["Plan, Elevation, Section & all 2D Drawings"],
      },
      {
        year: "AutoCAD 3D",
        items: ["3D Modeling, Rendering & Professional Designing"],
      },
      {
        year: "Manual Drafting",
        items: ["Manual Methods in Engineering Drawing"],
      },
      {
        year: "Mechanical Drawing",
        items: ["Basic Mechanical Drawing Will Also Be Taught"],
      },
    ],
    careers: [
      "CAD Operator",
      "Draughtsman",
      "Mechanical Drafter",
      "Civil Drafter",
      "Freelance CAD Designer",
      "Architectural Assistant",
    ],
  },
];

export const allPrograms: Program[] = [
  ...daePrograms,
  ...certificationPrograms,
  ...shortCourses,
  ...jecPrograms,
];

export { daePrograms, certificationPrograms, shortCourses, jecPrograms };
