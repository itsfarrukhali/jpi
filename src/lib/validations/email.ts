import { z } from "zod";

const phonePattern = /^[+()\d\s-]+$/;

export const emailAddressSchema = z
  .email("Email is invalid")
  .trim()
  .toLowerCase();

export const phoneNumberSchema = z
  .string()
  .trim()
  .min(1, "Phone number is required")
  .regex(phonePattern, "Phone number can only contain digits, spaces, +, -, and brackets")
  .refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }, "Enter a valid phone number");

const optionalPhoneNumberSchema = z.preprocess(
  (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
  phoneNumberSchema.optional(),
);

export const admissionSchema = z.object({
  studentName: z.string().min(2, "Name is required"),
  fatherName: z.string().min(2, "Father name is required"),
  email: emailAddressSchema,
  phone: phoneNumberSchema,
  program: z.string().min(1, "Please select a program"),
  technology: z.string().optional(),
  shift: z.string().optional(),
  message: z.string().optional(),
});

export const careersSchema = z.object({
  applicantName: z.string().min(2, "Name is required"),
  email: emailAddressSchema,
  phone: phoneNumberSchema,
  position: z.string().min(1, "Position is required"),
  qualification: z.string().min(2, "Qualification is required"),
  experience: z.string().min(1, "Experience is required"),
  coverLetter: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: emailAddressSchema,
  phone: optionalPhoneNumberSchema,
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: emailAddressSchema,
});
