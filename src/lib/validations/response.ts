import type { ZodError } from "zod";

export function validationErrorResponse(error: ZodError) {
  const fieldErrors = error.flatten().fieldErrors;
  const message = error.issues[0]?.message ?? "Invalid form data";

  return {
    success: false,
    error: message,
    fieldErrors,
  };
}
