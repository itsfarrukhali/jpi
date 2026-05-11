// src/lib/emails/send-emails.ts

import { resend, EMAIL_FROM, EMAIL_TO } from "@/lib/emails/resend";
import { AdmissionInquiryEmail } from "@/lib/emails/templates/admissions";
import { CareersApplicationEmail } from "@/lib/emails/templates/careers";
import { ContactInstituteEmail } from "@/lib/emails/templates/contact";
import { ContactUserEmail } from "@/lib/emails/templates/contact-confirmation";
import { NewsletterWelcomeEmail } from "@/lib/emails/templates/newsletter";
import type {
  AdmissionInquiryData,
  CareersApplicationData,
  ContactFormData,
} from "@/lib/emails/types";

// Internal helper — institute email
export type EmailAttachment = {
  filename: string;
  content: string | Buffer;
  contentType?: string;
};

export async function sendToInstitute(
  subject: string,
  react: React.ReactElement,
  attachments?: EmailAttachment[],
) {
  const { data, error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: [EMAIL_TO],
    subject,
    react,
    attachments,
  });
  if (error) return { success: false, error: error.message };
  return { success: true, id: data?.id };
}

// Internal helper — user email
export async function sendToUser(
  to: string,
  subject: string,
  react: React.ReactElement,
) {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: [to],
    subject,
    react,
  });
  if (error) return { success: false, error: error.message };
  return { success: true };
}

// Contact
export async function handleContactEmail(data: ContactFormData) {
  const inst = await sendToInstitute(
    `Contact: ${data.subject}`,
    ContactInstituteEmail(data),
  );
  if (!inst.success) return inst;

  // User confirmation — non-blocking
  sendToUser(
    data.email,
    "Thank you for your message — JPI",
    ContactUserEmail({ name: data.name }),
  ).catch(console.error);

  return { success: true };
}

// Admissions
export async function handleAdmissionEmail(data: AdmissionInquiryData) {
  return sendToInstitute(
    `New Admission Inquiry: ${data.studentName}`,
    AdmissionInquiryEmail(data),
  );
}

// Careers
export async function handleCareerEmail(
  data: CareersApplicationData,
  attachment?: EmailAttachment,
) {
  const attachments = attachment ? [attachment] : undefined;

  return sendToInstitute(
    `Job Application: ${data.position} — ${data.applicantName}`,
    CareersApplicationEmail(data),
    attachments,
  );
}

// Newsletter
export async function handleNewsletterSubscription(email: string) {
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (audienceId) {
    try {
      await resend.contacts.create({
        email,
        audienceId,
        unsubscribed: false,
      });
    } catch (err) {
      console.error("Audience add failed:", err);
      // non-blocking — welcome email phir bhi bhejo
    }
  }

  return sendToUser(
    email,
    "Welcome to JPI Newsletter",
    NewsletterWelcomeEmail({ email }),
  );
}
