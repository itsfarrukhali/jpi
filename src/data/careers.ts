// src/data/careers.ts
export const currentOpenings = [
  {
    id: "job-01",
    title: "Senior Instructor — Mechanical Technology",
    department: "Department of Mechanical Technology",
    type: "Full-Time",
    qualification:
      "B.E / B.Tech (Mechanical) with 3+ years teaching experience",
    description:
      "We are looking for an experienced Mechanical Technology instructor to teach DAE students and manage workshop sessions.",
    responsibilities: [
      "Deliver lectures and practical sessions as per SBTE curriculum",
      "Supervise CNC, welding, and machine shop labs",
      "Prepare lesson plans and assessment materials",
      "Mentor students for final year projects",
      "Participate in departmental and QEC meetings",
    ],
  },
  {
    id: "job-02",
    title: "Instructor — Computer Information Technology",
    department: "Department of CIT",
    type: "Full-Time",
    qualification: "BS / MS (Computer Science / IT) with 2+ years experience",
    description:
      "Join our CIT department to teach networking, programming, and cybersecurity to DAE students.",
    responsibilities: [
      "Teach programming, networking, and cybersecurity courses",
      "Manage computer labs and network infrastructure",
      "Guide students in hackathons and IT competitions",
      "Develop course materials and assessments",
      "Stay updated with industry trends and technologies",
    ],
  },
  {
    id: "job-03",
    title: "Lab Assistant — Electrical Technology",
    department: "Department of Electrical Technology",
    type: "Full-Time",
    qualification: "DAE (Electrical) with 1+ year lab experience",
    description:
      "Support the Electrical Technology department in managing labs and assisting students during practical sessions.",
    responsibilities: [
      "Prepare and maintain electrical lab equipment",
      "Assist instructors during practical sessions",
      "Ensure lab safety protocols are followed",
      "Maintain inventory of components and tools",
      "Help students with project work",
    ],
  },
  {
    id: "job-04",
    title: "Admission Officer",
    department: "Admission Department",
    type: "Full-Time",
    qualification:
      "Bachelors degree with 2+ years in student admissions or counseling",
    description:
      "Manage student admissions, guide prospective students, and handle admission-related inquiries.",
    responsibilities: [
      "Process admission applications and verify documents",
      "Counsel prospective students and parents about programs",
      "Maintain student records and admission data",
      "Coordinate with SBTE for registration matters",
      "Organize admission drives and open house events",
    ],
  },
  {
    id: "job-05",
    title: "Visiting Faculty — English & Communication",
    department: "General Studies",
    type: "Part-Time / Visiting",
    qualification: "MA English / Linguistics with teaching experience",
    description:
      "Teach Communication Skills and English to DAE students across all technology departments.",
    responsibilities: [
      "Deliver Communication Skills lectures as per curriculum",
      "Improve students' spoken and written English",
      "Conduct presentations and group discussion sessions",
      "Evaluate assignments and examinations",
      "Provide feedback for student improvement",
    ],
  },
  {
    id: "general",
    title: "General / Open Application",
    department: "All Departments",
    type: "Open",
    qualification: "As per position requirements",
    description: "Submit a general application for future openings.",
    responsibilities: [],
  },
];

export function getJobTitle(id: string): string {
  const job = currentOpenings.find((j) => j.id === id);
  return job?.title ?? id; // fallback
}
