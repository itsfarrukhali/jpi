// src/app/api/send-attachment/route.ts
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
    let attachments: EmailAttachment[] | undefined;

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      to = form.get("to")?.toString();
      subject = form.get("subject")?.toString();
      htmlContent = form.get("htmlContent")?.toString();

      attachments = [];
      for (const entry of form.entries()) {
        const [key, value] = entry as [string, FormDataEntryValue];
        if (value instanceof File) {
          // convert File to Buffer and capture mime type
          const buf = Buffer.from(await value.arrayBuffer());
          attachments.push({
            filename: value.name,
            content: buf,
            contentType: value.type || undefined,
          });
        } else if (key === "attachments" && typeof value === "string") {
          // allow JSON-encoded attachments field
          try {
            const parsed = JSON.parse(value) as unknown;
            if (Array.isArray(parsed)) {
              // coerce items to EmailAttachment if they have filename
              for (const item of parsed) {
                if (
                  item &&
                  typeof item === "object" &&
                  "filename" in (item as File)
                ) {
                  const it = item as EmailAttachment;
                  attachments.push(it);
                }
              }
            }
          } catch {
            // ignore parse errors
          }
        }
      }
    } else {
      const body: AttachmentRequest = await request.json();
      to = body.to;
      subject = body.subject;
      htmlContent = body.htmlContent;
      attachments = body.attachments;
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

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 },
      );
    }

    // Send email with attachments (attachments may be Buffers or base64 strings)
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [to],
      subject,
      html: htmlContent,
      attachments: attachments ?? undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, data: { id: data?.id } });
  } catch (error) {
    console.error("Send attachment route error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
