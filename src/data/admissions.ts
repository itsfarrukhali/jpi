/**
 * ADMISSIONS DATA FILE
 *
 * This file contains all admission information:
 * - Eligibility (who can apply)
 * - Fees (how much it costs)
 * - Required documents (what to submit)
 * - Important dates (deadlines)
 * - Other charges (certificates, etc.)
 *
 * EDIT THIS FILE TO CHANGE:
 * ✅ Admission fees
 * ✅ Important dates
 * ✅ Eligibility requirements
 * ✅ Required documents
 *
 * READ FIRST: SIMPLE_GUIDE.md
 */

// ─── Types ───────────────────────────────────────────

export interface EligibilityCriteria {
  program: string;
  qualification: string[];
  minMarks: string;
  maxAgeMorning: string;
  maxAgeEvening: string;
}

export interface RequiredDocument {
  id: string;
  label: string;
  detail: string;
}

export interface DisqualificationRule {
  id: string;
  rule: string;
}

export interface FeeStructure {
  year: string;
  admissionFee: string;
  tuitionFee: string;
  totalFee: string;
}

export interface OtherCharge {
  item: string;
  normal: string;
  urgent: string;
  duplicate: string;
}

export interface FeeRefundPolicy {
  percentage: string;
  description: string;
  timeline: string;
}

export interface KeyDate {
  label: string;
  date: string;
}

export interface SelectionStep {
  step: string;
  description: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "date" | "file";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
}

// ─── Eligibility Criteria ────────────────────────────

export const eligibilityCriteria: EligibilityCriteria[] = [
  {
    program: "DAE 1st Year (All Technologies)",
    qualification: [
      "Matric Science with Physics, Chemistry & Mathematics — passing percentage as prescribed by SBTE/STEVTA",
      "Technical Matric from an institution duly registered and recognized by SBTE/STEVTA",
    ],
    minMarks: "As prescribed by SBTE/STEVTA",
    maxAgeMorning: "35 years",
    maxAgeEvening: "45 years",
  },
  {
    program: "DAE Direct 2nd Year",
    qualification: [
      "Matric Science + 1st Year DAE from SBTE-recognized institution",
    ],
    minMarks: "As prescribed by SBTE/STEVTA",
    maxAgeMorning: "35 years",
    maxAgeEvening: "45 years",
  },
];

// ─── Required Documents ──────────────────────────────

export const requiredDocuments: RequiredDocument[] = [
  {
    id: "doc-01",
    label: "Matriculation Certificate / Provisional",
    detail: "From concerned Board/Institution, showing date of birth",
  },
  {
    id: "doc-02",
    label: "Marks Sheet",
    detail: "Matric Technical/Science or equivalent",
  },
  {
    id: "doc-03",
    label: "CNIC or B-Form",
    detail: "Candidate's own identification document",
  },
  {
    id: "doc-04",
    label: "Father's / Guardian's CNIC",
    detail: "Required if candidate submits B-Form",
  },
  {
    id: "doc-05",
    label: "Five Recent Photographs",
    detail: '1½" × 1½" passport-size',
  },
  {
    id: "doc-06",
    label: "College Leaving Certificate",
    detail: "If applicable from previous institution",
  },
  {
    id: "doc-07",
    label: "Original Migration Certificate",
    detail: "From relevant Board (Not required for Matric TSC by SBTE)",
  },
];

// ─── Disqualification Rules ──────────────────────────

export const disqualificationRules: DisqualificationRule[] = [
  {
    id: "d-01",
    rule: "Any attempt to influence directly or indirectly for admission shall render the candidate disqualified.",
  },
  {
    id: "d-02",
    rule: "Incomplete or vague entries, alterations, or erasing on the application form will result in outright rejection.",
  },
  {
    id: "d-03",
    rule: "If any furnished information is found incorrect or suppressed, the candidate is liable to be expelled from the Institute.",
  },
];

// ─── Fee Structure ───────────────────────────────────

export const feeStructure: FeeStructure[] = [
  {
    year: "1st Year",
    admissionFee: "Rs. 14,000",
    tuitionFee: "Rs. 30,000",
    totalFee: "Rs. 44,000",
  },
  {
    year: "2nd Year",
    admissionFee: "—",
    tuitionFee: "Rs. 30,000",
    totalFee: "Rs. 30,000",
  },
  {
    year: "3rd Year",
    admissionFee: "—",
    tuitionFee: "Rs. 30,000",
    totalFee: "Rs. 30,000",
  },
];

// ─── Fee Refund Policy ───────────────────────────────

export const feeRefundPolicy: FeeRefundPolicy[] = [
  {
    percentage: "100%",
    description: "Full Refund",
    timeline: "Within 7 days from the date of deposition of fee",
  },
  {
    percentage: "50%",
    description: "Half Refund",
    timeline: "8th to 15th day from the date of deposition of fee",
  },
  {
    percentage: "0%",
    description: "No Refund",
    timeline: "16th day onwards from the date of deposition of fee",
  },
];

// ─── Other Charges ───────────────────────────────────

export const otherCharges: OtherCharge[] = [
  {
    item: "SBTE Registration Card",
    normal: "150",
    urgent: "—",
    duplicate: "200",
  },
  {
    item: "Student Identity Card",
    normal: "—",
    urgent: "—",
    duplicate: "200",
  },
  {
    item: "Provisional Certificate",
    normal: "—",
    urgent: "1,000",
    duplicate: "1,500",
  },
  {
    item: "Practical Scrutiny (Per Subject)",
    normal: "300",
    urgent: "600",
    duplicate: "—",
  },
  {
    item: "Change of Technology/Shift (before SBTE Reg.)",
    normal: "3,000",
    urgent: "—",
    duplicate: "—",
  },
  {
    item: "Bonafide Certificate",
    normal: "300",
    urgent: "600",
    duplicate: "—",
  },
  {
    item: "English Proficiency Certificate",
    normal: "300",
    urgent: "600",
    duplicate: "—",
  },
  {
    item: "Recommendation Letter",
    normal: "750",
    urgent: "1,000",
    duplicate: "—",
  },
  {
    item: "Internship Letter",
    normal: "300",
    urgent: "600",
    duplicate: "—",
  },
  {
    item: "Mark Sheet",
    normal: "—",
    urgent: "—",
    duplicate: "100",
  },
  {
    item: "SBTE Registration Form",
    normal: "150",
    urgent: "—",
    duplicate: "200",
  },
  {
    item: "Theory Scrutiny (Per Subject)",
    normal: "200",
    urgent: "500",
    duplicate: "—",
  },
  {
    item: "Other Certificate",
    normal: "500",
    urgent: "1,000",
    duplicate: "—",
  },
  {
    item: "Prospectus Fee",
    normal: "1,000",
    urgent: "—",
    duplicate: "—",
  },
  {
    item: "Uniform",
    normal: "1,000",
    urgent: "—",
    duplicate: "—",
  },
  {
    item: "Appearance Certificate",
    normal: "300",
    urgent: "600",
    duplicate: "—",
  },
  {
    item: "Hope Certificate",
    normal: "300",
    urgent: "600",
    duplicate: "—",
  },
  {
    item: "Verification of Documents (JPI/SBTE)",
    normal: "2,000",
    urgent: "3,000",
    duplicate: "—",
  },
  {
    item: "Admit Card",
    normal: "—",
    urgent: "100",
    duplicate: "—",
  },
  {
    item: "Attestation (Original Documents)",
    normal: "200",
    urgent: "500",
    duplicate: "—",
  },
];

// ─── Key Dates ───────────────────────────────────────

export const keyDates: KeyDate[] = [
  { label: "Application Opens", date: "March 1, 2025" },
  { label: "Application Deadline", date: "April 30, 2025" },
  { label: "Entry Test", date: "May 15, 2025" },
  { label: "Merit List Published", date: "May 25, 2025" },
  { label: "Fee Submission Deadline", date: "June 5, 2025" },
  { label: "Classes Begin", date: "July 1, 2025" },
];

// ─── Admission Procedure ──────────────────────────────

export const admissionProcedure: string[] = [
  "Admission forms for D.A.E are available through the specified Counter of the Admission Department on payment of a nominal fee.",
  "Admission form duly filled along with the requisite documents by the candidates is required to be submitted in the Admission Department of the Institute on a prescribed date.",
  "Copies of all requisite documents shall be attached with the admission form at the time of submission.",
];

// ─── Selection Procedure ─────────────────────────────

export const selectionProcedure: SelectionStep[] = [
  {
    step: "Initial Scrutiny",
    description:
      "The Admission Committee scrutinizes all forms in accordance with the policy laid down for initial selection.",
  },
  {
    step: "Interview",
    description:
      "Initially selected candidates will be interviewed by the Admission Committee for final selection and allocation of suitable technology.",
  },
  {
    step: "Final Selection",
    description:
      "The list of finally selected candidates shall be displayed on the Institute's notice board.",
  },
];

// ─── Contact Info ────────────────────────────────────

export const admissionContact = {
  address: "ST-1, Nazimabad-5, Karachi 74600",
  phone: "+92 21 3661 XXXX",
  email: "admissions@jpi.edu.pk",
  officeHours: "Monday – Friday, 9:00 AM – 4:00 PM",
};

// ─── Payment Notes ───────────────────────────────────

export const paymentNotes: string[] = [
  "Fee shall be deposited in the authorized bank of the Institute through challan issued by the Admission Department.",
  "No fee shall be paid in cash to any Institute official.",
  "Fee in CASH is strictly prohibited in JPI.",
  "Fee may be revised as per requirement of the Institute without any prior notice.",
  "Students must pay fee within the prescribed date; late fee shall be charged as per Institute policy.",
  "Only 2nd year and 3rd year fees are applicable on candidates who get admission in DAE Direct 2nd Year Program.",
];

// ─── Important Notes ─────────────────────────────────

export const importantNotes: string[] = [
  "Maximum age for Morning Program is 35 years at the time of admission.",
  "Maximum age for Evening Program is 45 years at the time of admission.",
  "Admission of selected candidates is subject to being medically fit.",
  "The Principal / Executive Director, being Chairman of the Admission Committee, is the final authority in all admission matters.",
  "Seats are allocated based on candidate's preference, merit, and availability in the chosen technology.",
  "Candidates who do not meet the minimum eligibility criteria as prescribed by SBTE/STEVTA will not be considered.",
];

// ─── DAE Technologies List ───────────────────────────

export const daeTechnologies: string[] = [
  "Civil Technology",
  "Electrical Technology",
  "Mechanical Technology",
  "Electronics Technology",
  "Software Technology",
  "Computer Information Technology (CIT)",
  "Refrigeration & Air Conditioning Technology",
  "Bio-Medical Technology",
];

// ─── Application Form Fields ─────────────────────────

export const applicationFormFields: FormField[] = [
  {
    name: "fullName",
    label: "Full Name (as per Matric Certificate)",
    type: "text",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    name: "fatherName",
    label: "Father's / Guardian's Name",
    type: "text",
    placeholder: "Enter father's full name",
    required: true,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "example@email.com",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "03XX-XXXXXXX",
    required: true,
  },
  {
    name: "cnic",
    label: "CNIC / B-Form Number",
    type: "text",
    placeholder: "XXXXX-XXXXXXX-X",
    required: true,
  },
  {
    name: "dob",
    label: "Date of Birth",
    type: "date",
    required: true,
  },
  {
    name: "residence",
    label: "Residential Address",
    type: "textarea",
    placeholder: "Enter your complete address",
    required: true,
    rows: 3,
  },
  {
    name: "qualification",
    label: "Highest Qualification",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select qualification" },
      { value: "matric-science", label: "Matric Science" },
      { value: "matric-technical", label: "Matric Technical" },
      { value: "matric-computer", label: "Matric Computer Science" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "matricMarks",
    label: "Matriculation Marks (%)",
    type: "text",
    placeholder: "Enter percentage",
    required: true,
  },
  {
    name: "program",
    label: "Program Applying For",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select program" },
      { value: "dae-1st-year", label: "DAE 1st Year" },
    ],
  },
  {
    name: "technology",
    label: "Preferred Technology",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select technology" },
      ...daeTechnologies.map((tech) => ({
        value: tech.toLowerCase().replace(/\s+/g, "-"),
        label: tech,
      })),
    ],
  },
  {
    name: "shift",
    label: "Preferred Shift",
    type: "select",
    required: true,
    options: [
      { value: "", label: "Select shift" },
      { value: "morning", label: "Morning" },
      { value: "evening", label: "Evening" },
    ],
  },
  {
    name: "message",
    label: "Additional Message (Optional)",
    type: "textarea",
    placeholder: "Any additional information...",
    rows: 3,
  },
];
