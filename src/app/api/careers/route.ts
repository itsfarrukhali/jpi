// src/app/api/careers/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { careersSchema } from "@/lib/validations/email";
import { handleCareerEmail } from "@/lib/emails/send-emails";
import type { EmailAttachment } from "@/lib/emails/send-emails";
import type { CareersApplicationData } from "@/lib/emails/types";

/**
 * Type guard to check if a FormDataEntryValue is a File
 */
function isFile(value: FormDataEntryValue): value is File {
  return (
    value instanceof File &&
    "size" in value &&
    "type" in value &&
    "arrayBuffer" in value &&
    typeof value.arrayBuffer === "function"
  );
}

export async function GET() {
  const openings = await prisma.jobOpening.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ data: openings });
}

/**
 * Helper function to process CV file from FormData
 * Converts file to base64-encoded attachment compatible with Resend API
 * @see https://resend.com/docs/send-with-attachments
 */
async function processCVAttachment(
  cvEntry: FormDataEntryValue | null,
): Promise<EmailAttachment | undefined> {
  if (!cvEntry || !isFile(cvEntry) || cvEntry.size === 0) {
    return undefined;
  }

  const CV_MAX_SIZE = 5 * 1024 * 1024; // 5MB
  if (cvEntry.size > CV_MAX_SIZE) {
    throw new Error(
      `CV file must be under 5MB (current: ${(cvEntry.size / 1024 / 1024).toFixed(2)}MB)`,
    );
  }
  if (
    cvEntry.type !== "application/pdf" ||
    !cvEntry.name.toLowerCase().endsWith(".pdf")
  ) {
    throw new Error("CV must be a PDF file");
  }

  const buffer = Buffer.from(await cvEntry.arrayBuffer());
  if (buffer.subarray(0, 5).toString("ascii") !== "%PDF-") {
    throw new Error("CV file content is not a valid PDF");
  }
  const base64Content = buffer.toString("base64");

  const attachment: EmailAttachment = {
    filename: cvEntry.name || "cv.pdf",
    content: base64Content,
    contentType: cvEntry.type || "application/pdf",
  };

  console.log(
    `[Careers Upload] Processing attachment: ${attachment.filename} (${(buffer.length / 1024).toFixed(2)}KB -> base64)`,
  );

  return attachment;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const raw: CareersApplicationData = {
      applicantName: formData.get("fullName")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      position: formData.get("position")?.toString() ?? "",
      qualification: formData.get("qualification")?.toString() ?? "",
      experience: formData.get("experience")?.toString() ?? "",
      coverLetter: formData.get("coverLetter")?.toString() || undefined,
    };

    const result = careersSchema.safeParse(raw);

    if (!result.success) {
      console.error("[Careers API] Validation failed:", result.error.flatten());
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 },
      );
    }

    console.log(
      `[Careers API] Processing application from ${raw.applicantName} for ${raw.position}`,
    );

    const opening = await prisma.jobOpening.findFirst({
      where: { id: raw.position, published: true },
      select: { title: true },
    });
    const jobTitle = opening?.title ?? "General / Open Application";

    // Process CV attachment if provided
    let attachment: EmailAttachment | undefined;
    try {
      attachment = await processCVAttachment(formData.get("cv"));
      if (attachment) {
        console.log(`[Careers API] Attachment ready: ${attachment.filename}`);
      } else {
        console.log("[Careers API] No attachment provided");
      }
    } catch (fileError) {
      const errorMessage =
        fileError instanceof Error ? fileError.message : "Invalid CV file";
      console.error("[Careers API] File processing error:", errorMessage);
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 400 },
      );
    }

    const emailResult = await handleCareerEmail(
      { ...result.data, jobTitle },
      attachment,
    );

    if (!emailResult.success) {
      console.error("[Careers API] Email sending failed:", emailResult.error);
      return NextResponse.json(
        { success: false, error: emailResult.error },
        { status: 500 },
      );
    }

    console.log("[Careers API] Application submitted successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Careers API] Unexpected error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
