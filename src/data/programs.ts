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
    id: "dae-biomedical",
    name: "Diploma of Associate Engineering — Bio-Medical Technology",
    shortName: "DAE Bio-Medical Technology",
    duration: "3 Years (6 Semesters)",
    seats: 45,
    eligibility: "Matriculation (Science) with minimum 45% marks",
    description:
      "Covers medical equipment, instrumentation, hospital technology management, and biomedical systems.",
    icon: "heart-pulse",
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
          "Biomedical Instrumentation",
          "Medical Imaging Systems",
          "Clinical Laboratory Equipment",
          "Digital Electronics",
          "Microcontrollers",
          "Hospital Safety",
        ],
      },
      {
        year: "3rd Year",
        items: [
          "Advanced Medical Equipment",
          "Therapeutic Devices",
          "Equipment Maintenance",
          "Hospital Management",
          "Regulatory Standards",
          "Project Work",
        ],
      },
    ],
    careers: [
      "Biomedical Technician",
      "Hospital Equipment Manager",
      "Medical Device Support",
      "Clinical Engineer Assistant",
      "Healthcare Technology Specialist",
    ],
  },
];

const certificationPrograms: Program[] = [
  {
    id: "cert-autocad",
    name: "AutoCAD Professional",
    shortName: "AutoCAD Pro",
    duration: "3 Months",
    seats: 30,
    eligibility: "Matric pass",
    description:
      "2D and 3D drafting, architectural and mechanical drawings using AutoCAD.",
    icon: "pencil-ruler",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "AutoCAD Interface",
          "2D Drawing",
          "3D Modeling",
          "Architectural Drafting",
          "Mechanical Drafting",
          "Project",
        ],
      },
    ],
    careers: ["CAD Operator", "Draughtsman", "Architectural Assistant"],
  },
  {
    id: "cert-plc",
    name: "PLC & Industrial Automation",
    shortName: "PLC Automation",
    duration: "3 Months",
    seats: 25,
    eligibility: "Matric Science / DAE",
    description:
      "Programmable Logic Controllers, SCADA, and industrial automation systems.",
    icon: "cpu",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "PLC Basics",
          "Ladder Logic",
          "SCADA Systems",
          "HMI Programming",
          "Industrial Networks",
          "Project",
        ],
      },
    ],
    careers: [
      "PLC Programmer",
      "Automation Technician",
      "Control Systems Engineer",
    ],
  },
  {
    id: "cert-web",
    name: "Full Stack Web Development",
    shortName: "Web Development",
    duration: "6 Months",
    seats: 30,
    eligibility: "Matric pass (computer knowledge preferred)",
    description:
      "HTML, CSS, JavaScript, React, Node.js, and deployment — from zero to employable.",
    icon: "code",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "HTML & CSS",
          "JavaScript ES6+",
          "React.js",
          "Node.js & Express",
          "MongoDB",
          "Deployment & DevOps",
        ],
      },
    ],
    careers: [
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
  },
  {
    id: "cert-networking",
    name: "Cisco Networking (CCNA Prep)",
    shortName: "Networking",
    duration: "4 Months",
    seats: 25,
    eligibility: "Matric pass",
    description:
      "Networking fundamentals, routing, switching, and security aligned with CCNA objectives.",
    icon: "network",
    tag: "CERT",
    category: "certifications",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Network Fundamentals",
          "IP Addressing",
          "Routing Protocols",
          "Switching",
          "Network Security",
          "Troubleshooting",
        ],
      },
    ],
    careers: ["Network Administrator", "IT Support", "Systems Engineer"],
  },
];

const shortCourses: Program[] = [
  {
    id: "sc-welding",
    name: "Welding & Fabrication",
    shortName: "Welding",
    duration: "3 Months",
    seats: 20,
    eligibility: "8th Class pass",
    description: "MIG, TIG, Arc welding and metal fabrication techniques.",
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
          "Fabrication",
          "Safety",
        ],
      },
    ],
    careers: ["Welder", "Fabricator", "Pipeline Welder"],
  },
  {
    id: "sc-electrician",
    name: "Domestic Electrician",
    shortName: "Electrician",
    duration: "3 Months",
    seats: 25,
    eligibility: "8th Class pass",
    description:
      "Domestic wiring, safety, and electrical installations for homes and offices.",
    icon: "lightbulb",
    tag: "SHORT",
    category: "short-courses",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Basic Electricity",
          "House Wiring",
          "Safety Standards",
          "Meters & Testing",
          "Fault Finding",
          "Practical",
        ],
      },
    ],
    careers: ["Electrician", "Wiring Contractor", "Maintenance Worker"],
  },
  {
    id: "sc-plumbing",
    name: "Plumbing & Sanitation",
    shortName: "Plumbing",
    duration: "3 Months",
    seats: 20,
    eligibility: "8th Class pass",
    description:
      "Pipe fitting, sanitation systems, and water supply installation.",
    icon: "droplets",
    tag: "SHORT",
    category: "short-courses",
    subjects: [
      {
        year: "Curriculum",
        items: [
          "Pipe Types & Fittings",
          "Water Supply",
          "Drainage Systems",
          "Sanitary Fixtures",
          "Maintenance",
          "Practical",
        ],
      },
    ],
    careers: ["Plumber", "Sanitation Worker", "Pipe Fitter"],
  },
  {
    id: "sc-it",
    name: "IT Fundamentals",
    shortName: "IT Basics",
    duration: "2 Months",
    seats: 30,
    eligibility: "Matric pass",
    description:
      "Computer basics, MS Office, internet use, and digital literacy.",
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
          "Internet & Email",
          "Digital Safety",
        ],
      },
    ],
    careers: ["Office Assistant", "Data Entry Operator", "Receptionist"],
  },
];

const jecPrograms: Program[] = [
  {
    id: "jec-academic",
    name: "JEC — Academic Excellence",
    shortName: "Academic Excellence",
    duration: "Annual Award",
    seats: 10,
    eligibility: "Top 10% students by GPA",
    description:
      "Recognising outstanding academic performance across all DAE programs.",
    icon: "award",
    tag: "JEC",
    category: "jec",
    subjects: [
      {
        year: "Criteria",
        items: [
          "GPA above 3.5",
          "No failing grades",
          "Full attendance",
          "Character certificate",
          "Faculty recommendation",
        ],
      },
    ],
    careers: [
      "Merit scholarships",
      "Industry internships",
      "Letter of distinction",
    ],
  },
  {
    id: "jec-cocurricular",
    name: "JEC — Co-curricular Achievement",
    shortName: "Co-curricular Achievement",
    duration: "Annual Award",
    seats: 5,
    eligibility: "Students with outstanding co-curricular participation",
    description:
      "Honouring students who excel in sports, arts, community service, and leadership.",
    icon: "trophy",
    tag: "JEC",
    category: "jec",
    subjects: [
      {
        year: "Criteria",
        items: [
          "National/provincial level participation",
          "Club leadership",
          "Community service hours",
          "Sports achievement",
          "Arts contribution",
        ],
      },
    ],
    careers: [
      "Certificate of merit",
      "Scholarship consideration",
      "Alumni recognition",
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
