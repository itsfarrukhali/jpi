// src/app/api/careers/route.ts
import { NextResponse } from "next/server";
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

/**
 * Helper function to process CV file from FormData
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

  const buffer = Buffer.from(await cvEntry.arrayBuffer());
  return {
    filename: cvEntry.name || "cv.pdf",
    content: buffer,
    contentType: cvEntry.type || "application/pdf",
  };
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
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 },
      );
    }

    // Process CV attachment if provided
    let attachment: EmailAttachment | undefined;
    try {
      attachment = await processCVAttachment(formData.get("cv"));
    } catch (fileError) {
      const errorMessage =
        fileError instanceof Error ? fileError.message : "Invalid CV file";
      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 400 },
      );
    }

    const emailResult = await handleCareerEmail(result.data, attachment);

    if (!emailResult.success) {
      const errorMessage = emailResult.error;

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers route error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 },
    );
  }
}
