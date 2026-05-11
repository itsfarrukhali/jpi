// src/app/api/newsletter/route.ts
import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validations/email";
import { handleNewsletterSubscription } from "@/lib/emails/send-emails";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = newsletterSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    const emailResult = await handleNewsletterSubscription(result.data.email);

    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: emailResult.error },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter route error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 },
    );
  }
}
