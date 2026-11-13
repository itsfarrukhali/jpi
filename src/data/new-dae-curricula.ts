import type { ProgramCurriculum, ProgramCourse } from "../types/programs";

type Row = [code: string, name: string, hours: number, theory: number, practical: number, credits: number];
type Year = { rows: Row[]; published: [number, number, number, number] };

// Transcribed from the supplied schemes. Marks were not supplied; zero values
// are storage placeholders and are never displayed as an official mark scheme.
function curriculum(years: Year[]): ProgramCurriculum {
  const zeroMarks = () => ({ theory: 0, practical: 0, total: 0 });
  const result = years.map(({ rows, published }, index) => ({
    year: index + 1,
    courses: rows.map(([code, name, totalHours, theory, practical, creditHours]): ProgramCourse => ({
      code, name, totalHours, contactHours: { theory, practical }, creditHours, marks: zeroMarks(),
    })),
    total: { totalHours: published[0], contactHours: { theory: published[1], practical: published[2] }, creditHours: published[3], marks: zeroMarks() },
  }));
  return {
    marksAvailable: false,
    notes: ["Three-year annual system. SBTE conducts examinations for each year.", "Figures are transcribed from the supplied scheme of studies. Printed totals are retained where they differ from the sum of individual rows; confirm discrepancies with the department. Marks distribution was not supplied."],
    years: result,
    grandTotal: result.reduce((sum, year) => ({
      totalHours: (sum.totalHours ?? 0) + (year.total.totalHours ?? 0),
      contactHours: { theory: sum.contactHours.theory + year.total.contactHours.theory, practical: sum.contactHours.practical + year.total.contactHours.practical },
      creditHours: sum.creditHours + year.total.creditHours,
      marks: zeroMarks(),
    }), { totalHours: 0, contactHours: { theory: 0, practical: 0 }, creditHours: 0, marks: zeroMarks() }),
  };
}

export const aiCurriculum = curriculum([
  { published: [1088, 16, 21, 23], rows: [
    ["Gen 111", "Islamiat and Pak Studies", 32, 1, 0, 1],
    ["TTQ-111 / Civic-111", "Tarjumat-ul-Quran / Civics", 32, 1, 0, 1],
    ["Eng 112", "English", 64, 2, 0, 2],
    ["Math 123", "Applied Mathematics", 96, 3, 0, 3],
    ["Phy 132", "Applied Physics", 128, 1, 3, 2],
    ["CIT 101", "Occupational Health Safety & Environment", 32, 1, 0, 1],
    ["CIT 113", "Introduction to Computer Programming", 160, 2, 3, 3],
    ["MTR 272", "Digital Logic & Design (DLD)", 128, 1, 3, 2],
    ["AI 101", "Data Structure and Algorithm", 160, 2, 3, 3],
    ["AI 102", "Introduction to AI (Using Python)", 160, 1, 6, 3],
    ["AI 103", "Database Management System", 128, 1, 3, 2],
  ] },
  { published: [1152, 14, 21, 21], rows: [
    ["Gen 201", "Islamiat and Pak Studies", 32, 1, 0, 1],
    ["TTQ-211 / Civic-211", "Tarjumat-ul-Quran / Civics", 32, 1, 0, 1],
    ["Math 212", "Applied Mathematics-II", 96, 3, 0, 3],
    ["MGM 211", "Business Communication", 32, 1, 0, 1],
    ["Ch 132", "Applied Chemistry", 128, 1, 3, 2],
    ["AI 201", "Computer Vision & Image Processing", 128, 1, 3, 2],
    ["AI 202", "R Programming", 128, 1, 3, 2],
    ["AI 203", "Machine Learning & Deep Learning", 160, 2, 3, 3],
    ["AI 204", "Natural Language Processing", 128, 1, 3, 2],
    ["AI 205", "Data Science & Business Intelligence", 128, 2, 3, 3],
    ["AI 206", "Final Year Capstone Project", 192, 0, 3, 1],
  ] },
  { published: [1216, 13, 21, 20], rows: [
    ["Gen 301", "Islamiat and Pak Studies", 32, 1, 0, 1],
    ["ENG 311", "Technical Report Writing", 32, 1, 0, 1],
    ["MGTE 331", "Management & Entrepreneurship", 64, 2, 0, 2],
    ["AI 301", "AI in Cyber Security", 128, 2, 3, 3],
    ["AI 302", "Cloud Computing", 128, 1, 3, 2],
    ["AI 303", "Generative AI", 128, 1, 3, 2],
    ["AI 304", "Internet Application Development", 128, 1, 3, 2],
    ["AI 305", "AI in IOT & Robotic", 128, 1, 3, 2],
    ["AI 306", "Agentive AI", 128, 1, 3, 2],
    ["AI 307", "Project Management", 128, 2, 0, 2],
    ["AI 308", "Final Capstone Project II with Industry Collab", 192, 0, 3, 1],
  ] },
]);

export const cyberCurriculum = curriculum([
  { published: [1120, 17, 18, 23], rows: [
    ["Gen 111", "Islamiat and Pak Studies", 32, 1, 0, 1],
    ["TTQ/CIVIC 121", "Tarjumat-ul-Quran / Civics", 32, 1, 0, 1],
    ["Eng 132", "English", 64, 2, 0, 2],
    ["Math 143", "Applied Mathematics-I", 96, 3, 0, 3],
    ["Ch 152", "Applied Chemistry", 128, 1, 3, 2],
    ["OHSE 161", "Occupational Health Safety and Environment", 32, 1, 0, 1],
    ["CS 112", "Introduction to Information Technology", 128, 1, 3, 2],
    ["CS 124", "Cyber Security Fundamentals", 192, 3, 3, 4],
    ["CS 134", "Programming Languages", 256, 2, 6, 4],
    ["CS 143", "Computer Networks", 160, 2, 3, 3],
  ] },
  { published: [1536, 14, 21, 21], rows: [
    ["Gen 211", "Islamiat and Pak Studies", 32, 1, 0, 1],
    ["TTQ/CIVIC 221", "Tarjumat-ul-Quran / Civics", 32, 1, 0, 1],
    ["Phy 232", "Applied Physics", 128, 1, 3, 2],
    ["Math 243", "Applied Mathematics-II", 96, 3, 0, 3],
    ["Mgt 251", "Business Communication", 32, 1, 0, 1],
    ["CS 213", "Operating Systems", 160, 2, 3, 3],
    ["CS 224", "Network Security Concepts", 256, 2, 6, 4],
    ["CS 233", "Database Security", 160, 2, 3, 3],
    ["CS 243", "Vulnerability Assessment and Penetration Testing (VAPT)", 224, 1, 6, 3],
  ] },
  { published: [1216, 13, 24, 22], rows: [
    ["Gen 311", "Islamiat and Pak Studies", 32, 1, 0, 1],
    ["Eng 321", "Technical Report Writing", 32, 1, 0, 1],
    ["ME 332", "Management & Entrepreneurship", 64, 2, 0, 2],
    ["CS 314", "Cyber Defense Monitoring and Analysis", 256, 2, 6, 4],
    ["CS 323", "Digital Forensics & Incident Response", 160, 2, 3, 3],
    ["CS 333", "Application Security", 160, 2, 3, 3],
    ["CS 344", "Malware Analysis", 256, 2, 6, 4],
    ["CS 354", "Cyber Laws, Ethics & Governance", 64, 2, 0, 2],
    ["CS 362", "Final Year Project", 192, 0, 6, 2],
  ] },
]);
