/**
 * CENTRALIZED FEES DATA FILE
 * 
 * All fee structures for all program categories:
 * 1. DAE Programs (3 Years)
 * 2. DAE Artificial Intelligence (3 Years)
 * 3. Health Care / Medical Diploma Certifications (2 Years, 1 Year, 6 Months)
 * 4. Certifications
 * 5. Jinnah Center of Excellence (JCE / JEC Short Courses)
 */

export interface ProgramFeeRow {
  label: string;
  duration?: string;
  admissionFee?: string;
  tuitionFee?: string;
  examFee?: string;
  otherFee?: string;
  totalFee: string;
  discountedFee?: string;
  notes?: string;
}

export interface PaymentInstallment {
  installment: string; // e.g. "1st Payment (at Admission)", "2nd Payment", etc.
  regularAmount: string;
  discountedAmount: string; // 50% Discounted Rate
}

export interface MedicalFeeSchedule {
  programId: string;
  title: string;
  duration: string; // "2 Years", "1 Year", "6 Months"
  paymentMonthsText: string; // "In Eight Months", "In Four Months"
  totalRegular: string;
  totalDiscounted: string;
  installments: PaymentInstallment[];
  notes: string[];
}

export interface CategoryFeeStructure {
  id: string;
  categoryKey: "dae" | "dae-ai" | "diploma-certifications" | "certifications" | "short-courses" | "jce" | "jec";
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  headers: string[];
  rows: ProgramFeeRow[];
  notes: string[];
}

// ─── DAE GENERAL ─────────────────────────────────────
export const daeFeeStructure: CategoryFeeStructure = {
  id: "dae-fees",
  categoryKey: "dae",
  title: "DAE Programs Fee Structure",
  subtitle: "3-Year Diploma of Associate Engineer (Civil, Electrical, Mechanical, Electronics, Software, CIT, RAC, Chemical)",
  badge: "DAE (3 Years)",
  badgeColor: "bg-blue-700 text-white",
  headers: ["Year", "Admission Fee", "Tuition Fee", "Total Fee"],
  rows: [
    {
      label: "1st Year",
      admissionFee: "Rs. 20,000",
      tuitionFee: "Rs. 40,000",
      totalFee: "Rs. 60,000",
    },
    {
      label: "2nd Year",
      admissionFee: "—",
      tuitionFee: "Rs. 40,000",
      totalFee: "Rs. 40,000",
    },
    {
      label: "3rd Year",
      admissionFee: "—",
      tuitionFee: "Rs. 40,000",
      totalFee: "Rs. 40,000",
    },
  ],
  notes: [
    "Admission Fee is a one-time non-refundable charge paid at initial enrollment.",
    "Tuition fee is payable in easy monthly or semester-wise installments.",
    "SBTE examination and registration fees are charged separately as per Board directives.",
    "Applies to all morning and evening DAE technologies.",
  ],
};

// ─── DAE ARTIFICIAL INTELLIGENCE ─────────────────────
export const daeAiFeeStructure: CategoryFeeStructure = {
  id: "dae-ai-fees",
  categoryKey: "dae-ai",
  title: "DAE Artificial Intelligence Fee Structure",
  subtitle: "3-Year Diploma of Associate Engineer in Artificial Intelligence Technology — SBTE Affiliated",
  badge: "DAE AI (3 Years)",
  badgeColor: "bg-indigo-700 text-white",
  headers: ["Year", "Admission Fee", "Tuition Fee", "Total Fee"],
  rows: [
    {
      label: "1st Year",
      admissionFee: "Rs. 20,000",
      tuitionFee: "Rs. 48,000",
      totalFee: "Rs. 68,000",
    },
    {
      label: "2nd Year",
      admissionFee: "—",
      tuitionFee: "Rs. 48,000",
      totalFee: "Rs. 48,000",
    },
    {
      label: "3rd Year",
      admissionFee: "—",
      tuitionFee: "Rs. 48,000",
      totalFee: "Rs. 48,000",
    },
  ],
  notes: [
    "Includes specialized AI lab access, GPU compute environment, Python, Machine Learning & Computer Vision toolkits.",
    "Admission Fee is a one-time non-refundable charge paid at initial enrollment.",
    "Tuition fee is payable in easy monthly or semester-wise installments.",
  ],
};

// ─── MEDICAL / HEALTHCARE DETAILED SCHEDULES ─────────

export const medical2YearsFeeSchedule: MedicalFeeSchedule = {
  programId: "cert-physiotherapy",
  title: "2-Year Medical Diploma (Physiotherapy Technicians)",
  duration: "2 Years",
  paymentMonthsText: "Fee Payment Schedule (In Eight Months Per Year)",
  totalRegular: "Rs. 244,000 / Year",
  totalDiscounted: "Rs. 122,000 / Year (50% Discount)",
  installments: [
    { installment: "1- First Payment (at Admission)", regularAmount: "Rs. 107,500", discountedAmount: "Rs. 53,750" },
    { installment: "2- Second Payment", regularAmount: "Rs. 19,500", discountedAmount: "Rs. 9,750" },
    { installment: "3- Third Payment", regularAmount: "Rs. 19,500", discountedAmount: "Rs. 9,750" },
    { installment: "4- Fourth Payment", regularAmount: "Rs. 19,500", discountedAmount: "Rs. 9,750" },
    { installment: "5- Fifth Payment", regularAmount: "Rs. 19,500", discountedAmount: "Rs. 9,750" },
    { installment: "6- Sixth Payment", regularAmount: "Rs. 19,500", discountedAmount: "Rs. 9,750" },
    { installment: "7- Seventh Payment", regularAmount: "Rs. 19,500", discountedAmount: "Rs. 9,750" },
    { installment: "8- Eighth Payment", regularAmount: "Rs. 19,500", discountedAmount: "Rs. 9,750" },
  ],
  notes: [
    "Admission Form Fee Rs. 1,000 is excluded.",
    "Fee due date will be 10th day of every month.",
    "Rs. 500 Penalty will be imposed after due date.",
    "Tuition Fee Payment Schedule is same in second year.",
  ],
};

export const medical1YearFeeSchedule: MedicalFeeSchedule = {
  programId: "cert-nursing-lab",
  title: "1-Year Medical Diplomas (Nursing Assistant & Laboratory Technicians)",
  duration: "1 Year",
  paymentMonthsText: "Fee Payment Schedule (In Eight Months)",
  totalRegular: "Rs. 232,000",
  totalDiscounted: "Rs. 116,000 (50% Discount)",
  installments: [
    { installment: "1- First Payment (at Admission)", regularAmount: "Rs. 106,000", discountedAmount: "Rs. 53,000" },
    { installment: "2- Second Payment", regularAmount: "Rs. 18,000", discountedAmount: "Rs. 9,000" },
    { installment: "3- Third Payment", regularAmount: "Rs. 18,000", discountedAmount: "Rs. 9,000" },
    { installment: "4- Fourth Payment", regularAmount: "Rs. 18,000", discountedAmount: "Rs. 9,000" },
    { installment: "5- Fifth Payment", regularAmount: "Rs. 18,000", discountedAmount: "Rs. 9,000" },
    { installment: "6- Sixth Payment", regularAmount: "Rs. 18,000", discountedAmount: "Rs. 9,000" },
    { installment: "7- Seventh Payment", regularAmount: "Rs. 18,000", discountedAmount: "Rs. 9,000" },
    { installment: "8- Eighth Payment", regularAmount: "Rs. 18,000", discountedAmount: "Rs. 9,000" },
  ],
  notes: [
    "Admission Form Fee Rs. 1,000 is excluded.",
    "Fee due date will be 10th day of every month.",
    "Rs. 500 Penalty will be imposed after due date.",
  ],
};

export const medical6MonthsFeeSchedule: MedicalFeeSchedule = {
  programId: "cert-phlebotomy",
  title: "6-Month Medical Certification (Phlebotomy)",
  duration: "6 Months",
  paymentMonthsText: "Fee Payment Schedule (In Four Months)",
  totalRegular: "Rs. 152,000",
  totalDiscounted: "Rs. 76,000 (50% Discount)",
  installments: [
    { installment: "1- First Payment (at Admission)", regularAmount: "Rs. 104,000", discountedAmount: "Rs. 52,000" },
    { installment: "2- Second Payment", regularAmount: "Rs. 16,000", discountedAmount: "Rs. 8,000" },
    { installment: "3- Third Payment", regularAmount: "Rs. 16,000", discountedAmount: "Rs. 8,000" },
    { installment: "4- Fourth Payment", regularAmount: "Rs. 16,000", discountedAmount: "Rs. 8,000" },
  ],
  notes: [
    "Admission Form Fee Rs. 1,000 is excluded.",
    "Fee due date will be 10th day of every month.",
    "Rs. 500 Penalty will be imposed after due date.",
  ],
};

export const allMedicalFeeSchedules: MedicalFeeSchedule[] = [
  medical2YearsFeeSchedule,
  medical1YearFeeSchedule,
  medical6MonthsFeeSchedule,
];

// ─── DIPLOMA CERTIFICATIONS (HEALTH CARE OVERVIEW) ────
export const diplomaCertificationsFeeStructure: CategoryFeeStructure = {
  id: "diploma-certifications-fees",
  categoryKey: "diploma-certifications",
  title: "Diploma Certifications (Health Care Technology)",
  subtitle: "Jinnah Health Care Technology Programs affiliated with SBTE — Special 50% Scholarship Discount Available.",
  badge: "Health Care Diplomas",
  badgeColor: "bg-emerald-700 text-white",
  headers: ["Program Name", "Duration", "Standard Fee", "50% Discount Package", "Payment Schedule"],
  rows: [
    {
      label: "Diploma in Physiotherapy Technicians",
      duration: "2 Years",
      admissionFee: "Rs. 244,000/yr",
      totalFee: "Rs. 122,000/yr",
      notes: "8 Installments (Rs. 53,750 + 7 × Rs. 9,750)",
    },
    {
      label: "Nursing Assistant",
      duration: "1 Year",
      admissionFee: "Rs. 232,000",
      totalFee: "Rs. 116,000",
      notes: "8 Installments (Rs. 53,000 + 7 × Rs. 9,000)",
    },
    {
      label: "Laboratory Technicians",
      duration: "1 Year",
      admissionFee: "Rs. 232,000",
      totalFee: "Rs. 116,000",
      notes: "8 Installments (Rs. 53,000 + 7 × Rs. 9,000)",
    },
    {
      label: "Phlebotomy",
      duration: "6 Months",
      admissionFee: "Rs. 152,000",
      totalFee: "Rs. 76,000",
      notes: "4 Installments (Rs. 52,000 + 3 × Rs. 8,000)",
    },
  ],
  notes: [
    "Admission Form Fee Rs. 1,000 is excluded.",
    "Fee due date is the 10th day of every month. Rs. 500 Penalty will be imposed after due date.",
    "Practical lab material and clinical clinical posting charges included.",
  ],
};

// ─── CERTIFICATIONS ──────────────────────────────────
export const certificationsFeeStructure: CategoryFeeStructure = {
  id: "certifications-fees",
  categoryKey: "certifications",
  title: "Professional Certifications",
  subtitle: "Short-term hands-on skill certification courses for students & working professionals.",
  badge: "Certifications",
  badgeColor: "bg-amber-600 text-white",
  headers: ["Certification Course", "Duration", "Standard Fee", "50% Discount Package", "Installments"],
  rows: [
    {
      label: "Phlebotomy Certification",
      duration: "6 Months",
      admissionFee: "Rs. 152,000",
      totalFee: "Rs. 76,000",
      notes: "4 Installments (Rs. 52,000 + 3 × Rs. 8,000)",
    },
    {
      label: "Specialized Technical Certificate",
      duration: "3 Months",
      admissionFee: "Rs. 60,000",
      totalFee: "Rs. 30,000",
      notes: "Monthly Installments available",
    },
  ],
  notes: [
    "Certificates awarded upon successful completion of hands-on assessment.",
    "Special discount available for current JPI students.",
  ],
};

// ─── JINNAH CENTER OF EXCELLENCE (SHORT COURSES) ─────
export const jceFeeStructure: CategoryFeeStructure = {
  id: "jce-fees",
  categoryKey: "short-courses",
  title: "Jinnah Center of Excellence (JCE & JEC Short Courses)",
  subtitle: "Hands-on Practical Technical & Skill Training Courses.",
  badge: "JCE / Short Courses",
  badgeColor: "bg-purple-700 text-white",
  headers: ["Course Name", "Duration", "Admission / Reg", "Course Fee (Per Month)", "Total Fee"],
  rows: [
    {
      label: "Workshop Machinist (Lathe, Milling, Workshop)",
      duration: "2 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 10,000",
    },
    {
      label: "Industrial Automation (PLC, SCADA, Sensors)",
      duration: "1 Month",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 5,000",
    },
    {
      label: "Office Automation (MS Office, Productivity)",
      duration: "2 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 10,000",
    },
    {
      label: "Web Development (HTML, CSS, JS, React)",
      duration: "2 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 10,000",
    },
    {
      label: "Digital Marketing & Social Media",
      duration: "2 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 10,000",
    },
    {
      label: "Advanced Welding Technology",
      duration: "2 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 10,000",
    },
    {
      label: "Professional AutoCAD 2D & 3D (JEC)",
      duration: "2 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 3,000",
      totalFee: "Rs. 6,000",
    },
    {
      label: "Refrigeration Repairing & AC Installation",
      duration: "2 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 10,000",
    },
    {
      label: "English Language",
      duration: "3 Months",
      admissionFee: "Rs. 500",
      tuitionFee: "Rs. 5,000",
      totalFee: "Rs. 15,000",
    },
  ],
  notes: [
    "Note: Registration fee is paid one time (Rs. 500).",
    "Total Fee excludes one-time Admission / Registration fee.",
    "Classes offered in Morning, Afternoon, and Weekend batches.",
    "Includes hands-on practical lab training and course completion certificate.",
  ],
};

export const allCategoryFeeStructures: CategoryFeeStructure[] = [
  daeFeeStructure,
  daeAiFeeStructure,
  diplomaCertificationsFeeStructure,
  certificationsFeeStructure,
  jceFeeStructure,
];

export function getMedicalFeeSchedule(programId: string): MedicalFeeSchedule | null {
  if (programId === "cert-physiotherapy") return medical2YearsFeeSchedule;
  if (programId === "cert-nursing" || programId === "cert-lab-technician") return medical1YearFeeSchedule;
  if (programId === "cert-phlebotomy") return medical6MonthsFeeSchedule;
  return null;
}

export function getFeeStructureForProgram(programId: string, category: string, tag: string): CategoryFeeStructure {
  // If Artificial Intelligence program
  if (programId === "dae-ai" || programId === "sc-ai" || programId.includes("ai")) {
    return daeAiFeeStructure;
  }
  // If DAE program or tag is DAE
  if (tag === "DAE" || category === "dae" || programId.startsWith("dae-")) {
    return daeFeeStructure;
  }
  // If Diploma Certifications or category is diploma-certifications
  if (category === "diploma-certifications" || programId === "cert-physiotherapy" || programId === "cert-nursing" || programId === "cert-lab-technician") {
    return diplomaCertificationsFeeStructure;
  }
  // If JCE / JEC / short courses
  if (tag === "SHORT" || tag === "JEC" || category === "short-courses" || category === "jec" || programId.startsWith("sc-") || programId.startsWith("jec-")) {
    return jceFeeStructure;
  }
  // Certifications
  return certificationsFeeStructure;
}
