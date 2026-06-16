const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneAllowedPattern = /^[+()\d\s-]+$/;

export function getEmailError(value: string, required = true) {
  const email = value.trim();
  if (!email) return required ? "Email address is required." : "";
  return emailPattern.test(email) ? "" : "Enter a valid email address.";
}

export function getPhoneError(value: string, required = true) {
  const phone = value.trim();
  if (!phone) return required ? "Phone number is required." : "";
  if (!phoneAllowedPattern.test(phone)) {
    return "Phone number can only contain digits, spaces, +, -, and brackets.";
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) {
    return "Enter a valid phone number with 10 to 15 digits.";
  }

  return "";
}

export function hasErrors(errors: Record<string, string | undefined>) {
  return Object.values(errors).some(Boolean);
}
