import type { csitTechnologies } from "./csit";

type CSITSlug = (typeof csitTechnologies)[number]["slug"];

export type CSITTechnologyDetail = {
  slug: CSITSlug;
  name: string;
  introduction: string;
  overview: string[];
  labs: { name: string; description: string }[];
  labNote?: string;
};

export const csitDepartmentPrograms: CSITTechnologyDetail[] = [
  {
    slug: "dae-software",
    name: "Software Technology",
    introduction: "Software Technology develops the foundations of application development, programming, databases, and software engineering through a three-year DAE program.",
    overview: [
      "Study programming fundamentals, object-oriented development, data structures, and database systems.",
      "Develop practical skills in web and mobile applications, software testing, and project development.",
      "Combine classroom study with practical assignments and project work, with annual SBTE examinations.",
    ],
    labs: [
      { name: "Software Development Lab", description: "Computer workstations with Windows/Linux, code editors, compilers, and development tools." },
      { name: "Web & Mobile Development Lab", description: "Web development tools, application emulators, browsers, and software testing tools." },
      { name: "Database Lab", description: "Database design, SQL practice, and application-database integration." },
    ],
  },
  {
    slug: "dae-cit",
    name: "Computer Information Technology",
    introduction: "Computer Information Technology combines computer systems, programming, networking, and IT support. Students develop an understanding of both hardware and software in a three-year DAE program.",
    overview: [
      "Build foundations in computer hardware, programming, databases, and operating systems.",
      "Study computer networks, system administration, and IT infrastructure through theory and practical work.",
      "Develop troubleshooting and technical support skills through assignments and projects, with annual SBTE examinations.",
    ],
    labs: [
      { name: "Programming Lab", description: "Computer workstations, code editors, compilers, and programming tools." },
      { name: "Networking Lab", description: "Routers, switches, network cabling, and network configuration exercises." },
      { name: "Hardware & Computer Systems Lab", description: "Computer hardware, components, and tools for assembly and troubleshooting practice." },
      { name: "Server & Systems Facilities", description: "Linux administration, server configuration, and introductory cloud-computing exercises." },
    ],
  },
  {
    slug: "dae-ai",
    name: "Artificial Intelligence Technology",
    introduction: "Artificial Intelligence Technology introduces programming, data analysis, and intelligent applications. The three-year DAE progresses from computing foundations to machine learning, computer vision, language processing, and applied AI projects.",
    overview: [
      "First year covers programming, digital logic, data structures, Python-based AI, and database management.",
      "Second year introduces computer vision, R programming, machine learning, deep learning, language processing, and data science.",
      "Third year covers generative AI, cloud computing, AI in cyber security, IoT and robotics, and capstone project work. SBTE examinations are held annually.",
    ],
    labs: [
      { name: "AI Computing Lab", description: "Standard desktop PCs with Python, Jupyter Notebook, and introductory data-analysis and machine-learning tools." },
      { name: "Data & Computer Vision Practice", description: "Small teaching datasets, sample images, and basic camera/webcam exercises for data analysis and image processing." },
      { name: "AI Project Facilities", description: "Code editors, database tools, and local project environments for small AI applications and capstone work." },
    ],
    labNote: "Standard teaching-lab setup; specific equipment and software availability should be confirmed with the department.",
  },
  {
    slug: "dae-cyber-security",
    name: "Cyber Security and Networks Technology",
    introduction: "Cyber Security and Networks Technology develops foundations in computer networks, operating systems, and information security. The three-year DAE focuses on protecting systems, understanding security risks, and responding to incidents.",
    overview: [
      "First year develops foundations in information technology, programming, computer networks, and cyber security.",
      "Second year covers operating systems, network and database security, vulnerability assessment, and authorized security testing.",
      "Third year includes cyber defense, digital forensics, incident response, application security, malware analysis, cyber law, and a final-year project. SBTE examinations are held annually.",
    ],
    labs: [
      { name: "Networking Practice Lab", description: "Standard PCs, basic routers and switches, LAN cabling, and network-simulation software for networking exercises." },
      { name: "Cyber Security Practice Environment", description: "Isolated virtual machines with Windows/Linux and packet-analysis tools such as Wireshark for supervised, authorized exercises." },
      { name: "Digital Forensics & Project Practice", description: "Sample disk images, system logs, and introductory analysis tools for incident-response exercises and project work." },
    ],
    labNote: "Standard teaching-lab setup; specific equipment and software availability should be confirmed with the department. Security exercises must stay within authorized, isolated environments.",
  },
];
