// src/app/api/admissions/route.ts
import { NextResponse } from "next/server";
import { admissionSchema } from "@/lib/validations/email";
import { handleAdmissionEmail } from "@/lib/emails/send-emails";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = admissionSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data" },
        { status: 400 },
      );
    }

    const emailResult = await handleAdmissionEmail(result.data);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: emailResult.error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admissions route error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
