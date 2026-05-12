// src/app/api/send-attachment/route.ts
/**
 * Generic email attachment endpoint
 * Follows Resend official documentation for sending emails with attachments
 * @see https://resend.com/docs/send-with-attachments
 */
import { NextResponse } from "next/server";
import { resend, EMAIL_FROM } from "@/lib/emails/resend";
import type { EmailAttachment } from "@/lib/emails/send-emails";

interface AttachmentRequest {
  to: string;
  subject: string;
  htmlContent: string;
  attachments?: EmailAttachment[];
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";

    let to: string | undefined;
    let subject: string | undefined;
    let htmlContent: string | undefined;
    let attachments: EmailAttachment[] = [];

    // Handle multipart/form-data
    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      to = form.get("to")?.toString();
      subject = form.get("subject")?.toString();
      htmlContent = form.get("htmlContent")?.toString();

      // Process file attachments
      for (const [key, value] of form.entries()) {
        if (value instanceof File && value.size > 0) {
          const buf = Buffer.from(await value.arrayBuffer());
          attachments.push({
            filename: value.name || `file-${key}`,
            content: buf.toString("base64"),
          });
          console.log(
            `[Send Attachment] Processing file: ${value.name} (${(buf.length / 1024).toFixed(2)}KB)`,
          );
        }
      }
    } else {
      // Handle JSON request
      const body: AttachmentRequest = await request.json();
      to = body.to;
      subject = body.subject;
      htmlContent = body.htmlContent;
      attachments = body.attachments || [];
    }

    // Validate required fields
    if (!to || !subject || !htmlContent) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: to, subject, htmlContent",
        },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 },
      );
    }

    console.log(
      `[Send Attachment] Sending email to ${to} with ${attachments.length} attachment(s)`,
    );

    // Send email with attachments using Resend API
    const emailPayload: Parameters<typeof resend.emails.send>[0] = {
      from: EMAIL_FROM,
      to: [to],
      subject,
      html: htmlContent,
    };

    // Only add attachments if they exist
    if (attachments.length > 0) {
      emailPayload.attachments = attachments;
    }

    const { data, error } = await resend.emails.send(emailPayload);

    if (error) {
      console.error("[Send Attachment] Resend error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    console.log("[Send Attachment] Email sent successfully:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("[Send Attachment] Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
