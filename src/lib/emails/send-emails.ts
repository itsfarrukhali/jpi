// src/lib/emails/send-emails.ts

import { resend, EMAIL_FROM, EMAIL_TO } from "@/lib/emails/resend";
import { AdmissionInquiryEmail } from "@/lib/emails/templates/admissions";
import { CareersApplicationEmail } from "@/lib/emails/templates/careers";
import { ContactInstituteEmail } from "@/lib/emails/templates/contact";
import { ContactUserEmail } from "@/lib/emails/templates/contact-confirmation";
import { NewsletterWelcomeEmail } from "@/lib/emails/templates/newsletter";
import { AttachmentNotificationEmail } from "@/lib/emails/templates/attachment-notification";
import type {
  AdmissionInquiryData,
  CareersApplicationData,
  ContactFormData,
} from "@/lib/emails/types";

/**
 * Email attachment compatible with Resend API
 * @see https://resend.com/docs/send-with-attachments
 */
export type EmailAttachment = {
  filename: string;
  content: string; // Must be base64-encoded string
};

export type EmailResult =
  | { success: true; id?: string }
  | { success: false; error: string };

export async function sendToInstitute(
  subject: string,
  react: React.ReactElement,
  attachments?: EmailAttachment[],
): Promise<EmailResult> {
  try {
    const emailPayload: Parameters<typeof resend.emails.send>[0] = {
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      subject,
      react,
    };

    // Only include attachments if they exist
    if (attachments && attachments.length > 0) {
      emailPayload.attachments = attachments;
      console.log(
        `[Careers Email] Sending with ${attachments.length} attachment(s):`,
        attachments.map((a) => ({
          filename: a.filename,
          size: a.content.length,
        })),
      );
    }

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error("[Careers Email] Resend error:", error);
      return { success: false, error: error.message };
    }

    console.log("[Careers Email] Sent successfully:", data?.id);
    return { success: true, id: data?.id };
  } catch (err) {
    const errorMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("[Careers Email] Exception:", errorMsg);
    return { success: false, error: errorMsg };
  }
}

// Internal helper — user email
export async function sendToUser(
  to: string,
  subject: string,
  react: React.ReactElement,
): Promise<EmailResult> {
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
export async function handleContactEmail(
  data: ContactFormData,
): Promise<EmailResult> {
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
export async function handleAdmissionEmail(
  data: AdmissionInquiryData,
): Promise<EmailResult> {
  return sendToInstitute(
    `New Admission Inquiry: ${data.studentName}`,
    AdmissionInquiryEmail(data),
  );
}

// Careers
export async function handleCareerEmail(
  data: CareersApplicationData,
  attachment?: EmailAttachment,
): Promise<EmailResult> {
  const attachments = attachment ? [attachment] : undefined;

  // Pass attachment filename into the template so the email body shows it
  const attachmentName = attachment?.filename;
  return sendToInstitute(
    `Job Application: ${data.position} — ${data.applicantName}`,
    CareersApplicationEmail({ ...data, attachmentName }),
    attachments,
  );
}

// Newsletter
export async function handleNewsletterSubscription(
  email: string,
): Promise<EmailResult> {
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

/**
 * Send email with attachments to user
 * @param to - Recipient email address
 * @param subject - Email subject
 * @param react - React component for email body
 * @param attachments - Array of attachments
 */
export async function sendToUserWithAttachments(
  to: string,
  subject: string,
  react: React.ReactElement,
  attachments?: EmailAttachment[],
): Promise<EmailResult> {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: [to],
    subject,
    react,
    attachments,
  });
  if (error) return { success: false, error: error.message };
  return { success: true };
}

/**
 * Send notification email with attachment details
 * @param to - Recipient email address
 * @param subject - Email subject
 * @param message - Email message
 * @param attachmentName - Name of the attachment
 * @param attachmentCount - Number of attachments
 * @param attachments - Array of attachments to include
 */
export async function sendAttachmentNotification(
  to: string,
  subject: string,
  message: string,
  attachmentName: string,
  attachmentCount: number = 1,
  attachments?: EmailAttachment[],
): Promise<EmailResult> {
  const { error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: [to],
    subject,
    react: AttachmentNotificationEmail({
      recipientName: to.split("@")[0],
      subject,
      message,
      attachmentName,
      attachmentCount,
      instituteEmail: EMAIL_FROM.match(/[^<]+(?=>)/)?.[0] || EMAIL_FROM,
    }),
    attachments,
  });
  if (error) return { success: false, error: error.message };
  return { success: true };
}
