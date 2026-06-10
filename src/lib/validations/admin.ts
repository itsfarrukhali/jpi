import { z } from "zod";

export const adminCreateSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be less than 30 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    ),
  name: z.string().min(2, "Name is required"),
  email: z.email("Valid email required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  designation: z
    .enum([
      "PRINCIPAL",
      "VICE_PRINCIPAL",
      "HEAD_OF_DEPARTMENT",
      "ADMINISTRATOR",
    ])
    .optional(),
  role: z.enum(["SUPER_ADMIN", "ADMIN"]).optional(),
  permission: z.enum(["READ_ONLY", "READ_WRITE", "FULL_ACCESS"]).optional(),
  manageContent: z
    .array(
      z.enum([
        "NEWS",
        "PROGRAMS",
        "CAREERS",
        "DEPARTMENTS",
        "COURSES",
        "WEBSITE_SETTINGS",
      ]),
    )
    .optional(),
});

export const adminUpdateSchema = z.object({
  name: z.string().min(2, "Name is required").optional(),
  email: z.email("Valid email required").optional(),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(30)
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores",
    )
    .optional(),
  designation: z
    .enum([
      "PRINCIPAL",
      "VICE_PRINCIPAL",
      "HEAD_OF_DEPARTMENT",
      "ADMINISTRATOR",
    ])
    .optional(),
  role: z.enum(["SUPER_ADMIN", "ADMIN"]).optional(),
  permission: z.enum(["READ_ONLY", "READ_WRITE", "FULL_ACCESS"]).optional(),
  manageContent: z
    .array(
      z.enum([
        "NEWS",
        "PROGRAMS",
        "CAREERS",
        "DEPARTMENTS",
        "COURSES",
        "WEBSITE_SETTINGS",
      ]),
    )
    .optional(),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, "Current password is required"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export const resetPasswordSchema = z.object({
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export type AdminCreateInput = z.infer<typeof adminCreateSchema>;
export type AdminUpdateInput = z.infer<typeof adminUpdateSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
