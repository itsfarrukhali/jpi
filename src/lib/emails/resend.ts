// src/lib/emails/resend.ts
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM = process.env.EMAIL_FROM ?? "info@jpikhi.edu.pk";
export const EMAIL_TO = process.env.EMAIL_TO ?? "info@jpikhi.edu.pk";
export const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";
