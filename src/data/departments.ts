export type Department = {
  slug: "civil" | "electrical" | "mechanical" | "software";
  name: string;
  fullName: string;
  hod: string;
  hodPhoto: string;
  hodMessage: string;
  color: string;
  icon: string;
  image: string;
  courses: string[];
  students: number;
  description: string;
  labs: string[];
  galleryImages: string[];
};

// Source of truth for "Our Departments" section and department detail pages.
// Editing tips:
// 1) Add a new object in this array to add a new department card.
// 2) Keep slug unique and URL-safe because it is used in routes/links.
// 3) Prefer local image paths from /public/tech for image, hodPhoto, galleryImages.
export const departments: Department[] = [
  {
    slug: "civil",
    name: "Civil Technology",
    fullName: "Department of Civil Technology",
    hod: "Mr. SYed Ansar Ahmed Rizvi",
    hodPhoto: "/tech/civil.png",
    hodMessage:
      "The Civil Technology Department at JPI has produced hundreds of skilled engineers who contribute to Pakistan's infrastructure. Our survey lab and construction workshop give students hands-on experience that sets them apart in the industry.",
    color: "#C8521A",
    icon: "building",
    image: "/tech/civil.png",
    courses: [
      "Applied Mathematics",
      "Engineering Drawing",
      "Surveying I & II",
      "Concrete Technology",
      "Structural Analysis",
      "Road Construction",
      "Water Supply & Sanitation",
      "Estimation & Costing",
      "Construction Management",
    ],
    students: 180,
    description:
      "The Department of Civil Technology prepares students for careers in construction, infrastructure, and environmental engineering through a rigorous 3-year DAE program.",
    labs: [
      "Survey Lab — Total Stations, GPS, Theodolites",
      "Material Testing Lab — Compression Machine, Soil Apparatus",
      "CAD Drawing Lab — 30 Workstations, AutoCAD 2024, Civil 3D",
      "Concrete Lab — Slump Cone, Cube Molds, Curing Tanks",
    ],
    galleryImages: Array.from(
      { length: 6 },
      (_, i) => `https://picsum.photos/600/400?random=${40 + i}`,
    ),
  },
  {
    slug: "electrical",
    name: "Electrical Technology",
    fullName: "Department of Electrical Technology",
    hod: "Mr. Mansoor Ahmed",
    hodPhoto: "https://picsum.photos/200/200?random=12",
    hodMessage:
      "In today's world, electrical engineers are the backbone of every industry. Our department is equipped with modern PLC labs, power electronics benches, and electrical machine test rigs that prepare students for real industrial environments.",
    color: "#1A3F7A",
    icon: "zap",
    image: "/tech/electrical.png",
    courses: [
      "Basic Electricity",
      "Electronic Components",
      "AC/DC Circuits",
      "Digital Electronics",
      "Industrial Electronics",
      "Electric Machines I & II",
      "Power Systems",
      "PLC & Industrial Automation",
      "Energy Management",
    ],
    students: 180,
    description:
      "The Department of Electrical Technology offers comprehensive training in power systems, industrial electronics, and automation.",
    labs: [
      "PLC & Automation Lab — Siemens S7-300, Allen-Bradley PLCs, SCADA",
      "Power Systems Lab — Transformers, 3-Phase Panels, Power Analyzers",
      "Electronics Lab — Oscilloscopes, Function Generators, Soldering Stations",
      "Electrical Machines Lab — AC/DC Motors, Generators, Control Panels",
    ],
    galleryImages: Array.from(
      { length: 6 },
      (_, i) => `https://picsum.photos/600/400?random=${50 + i}`,
    ),
  },
  {
    slug: "mechanical",
    name: "Mechanical Technology",
    fullName: "Department of Mechanical Technology",
    hod: "Engr. Mehdi Hassan",
    hodPhoto: "https://picsum.photos/200/200?random=13",
    hodMessage:
      "Mechanical technology is the foundation of manufacturing. Our department combines traditional machining skills with modern CNC and CAD/CAM technologies to produce graduates ready for Pakistan's growing industrial sector.",
    color: "#D4921A",
    icon: "settings",
    image: "/tech/mechanical.png",
    courses: [
      "Workshop Technology",
      "Material Science",
      "Machine Design",
      "Manufacturing Processes",
      "Thermodynamics",
      "Fluid Mechanics",
      "CNC Machining",
      "Refrigeration & AC",
      "Quality Control",
    ],
    students: 180,
    description:
      "The Department of Mechanical Technology trains students in manufacturing processes, machine design, and thermal engineering.",
    labs: [
      "Machine Shop — Lathe, Milling, Drilling, Grinding Machines",
      "CNC Lab — CNC Lathe, CNC Milling, CAD/CAM Software",
      "Thermodynamics Lab — Heat Exchanger, Refrigeration Trainer, AC Unit",
      "Welding Shop — MIG, TIG, Arc Welding Equipment",
    ],
    galleryImages: Array.from(
      { length: 6 },
      (_, i) => `https://picsum.photos/600/400?random=${60 + i}`,
    ),
  },
  {
    slug: "software",
    name: "Software Technology",
    fullName: "Department of Software Technology",
    hod: "Mr. Saifullah Ali Khan",
    hodPhoto: "https://picsum.photos/200/200?random=14",
    hodMessage:
      "The digital revolution demands skilled technologists. Our Software Technology program equips students with real-world programming, networking, and development skills to thrive in Pakistan's rapidly growing tech economy.",
    color: "#1A3F7A",
    icon: "monitor",
    image: "/tech/software.png",
    courses: [
      "C# Programming",
      "Digital Logic",
      "Data Structures",
      "OOP with Java",
      "Database Management",
      "Computer Networks",
      "Web Development",
      "Cybersecurity",
      "Mobile App Development",
    ],
    students: 180,
    description:
      "The Department of Software Technology provides cutting-edge training in software development, networking, and cybersecurity.",
    labs: [
      "Programming Lab — 50 Core i7 PCs, VS Code, MySQL, Cisco Packet Tracer",
      "Networking Lab — Cisco Routers & Switches, Network Racks, Firewalls",
      "Multimedia Lab — iMacs, Adobe Creative Suite, Drawing Tablets",
      "Server Room — Linux Servers, Cloud Lab Environment",
    ],
    galleryImages: Array.from(
      { length: 6 },
      (_, i) => `https://picsum.photos/600/400?random=${70 + i}`,
    ),
  },
];
