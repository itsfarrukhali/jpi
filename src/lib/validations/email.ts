import { z } from "zod";

export const admissionSchema = z.object({
  studentName: z.string().min(2, "Name is required"),
  fatherName: z.string().min(2, "Father name is required"),
  email: z.email("Email is invalid"),
  phone: z.string().min(10, "Valid phone number required"),
  program: z.string().min(1, "Please select a program"),
  technology: z.string().optional(),
  shift: z.string().optional(),
  message: z.string().optional(),
});

export const careersSchema = z.object({
  applicantName: z.string().min(2, "Name is required"),
  email: z.email("Email is invalid"),
  phone: z.string().min(10, "Valid phone number required"),
  position: z.string().min(1, "Position is required"),
  qualification: z.string().min(2, "Qualification is required"),
  experience: z.string().min(1, "Experience is required"),
  coverLetter: z.string().optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Email is invalid"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const newsletterSchema = z.object({
  email: z.email("Email is invalid"),
});
