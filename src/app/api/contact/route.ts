// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/email";
import { handleContactEmail } from "@/lib/emails/send-emails";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 },
      );
    }

    const emailResult = await handleContactEmail(result.data);

    if (!emailResult.success) {
      const errorMessage =
        "error" in emailResult && typeof emailResult.error === "string"
          ? emailResult.error
          : "Failed to send email";

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
