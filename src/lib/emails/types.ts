export interface AdmissionInquiryData {
  studentName: string;
  fatherName: string;
  email: string;
  phone: string;
  program: string;
  technology?: string;
  shift?: string;
  message?: string;
}

export interface CareersApplicationData {
  applicantName: string;
  email: string;
  phone: string;
  position: string;
  qualification: string;
  experience: string;
  coverLetter?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NewsletterSubscriptionData {
  email: string;
}
