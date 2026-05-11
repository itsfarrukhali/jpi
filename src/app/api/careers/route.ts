// src/app/api/careers/route.ts
import { NextResponse } from "next/server";
import { careersSchema } from "@/lib/validations/email";
import { handleCareerEmail } from "@/lib/emails/send-emails";
import type { EmailAttachment } from "@/lib/emails/send-emails";
import type { CareersApplicationData } from "@/lib/emails/types";

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

    // CV — optional, attach karo agar mila
    let attachment: EmailAttachment | undefined;
    const cvEntry = formData.get("cv");

    const isUploadFile =
      typeof cvEntry === "object" &&
      cvEntry !== null &&
      "arrayBuffer" in cvEntry &&
      "size" in cvEntry &&
      typeof (cvEntry as { arrayBuffer?: unknown }).arrayBuffer === "function";

    if (isUploadFile && (cvEntry as File).size > 0) {
      // Size check — 5MB limit
      if ((cvEntry as File).size > 5 * 1024 * 1024) {
        return NextResponse.json(
          { success: false, error: "CV file must be under 5MB" },
          { status: 400 },
        );
      }

      const file = cvEntry as File;
      const buffer = Buffer.from(await file.arrayBuffer());
      attachment = {
        filename: file.name || "cv.pdf",
        content: buffer,
        contentType: file.type || "application/pdf",
      };
    }

    const emailResult = await handleCareerEmail(result.data, attachment);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: emailResult.error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers route error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
