// src/lib/emails/templates/contact.tsx
import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { EmailHeading } from "../components/heading";
import { InfoTable } from "../components/info-table";
import { GoldButton } from "../components/gold-button";
import type { ContactFormData } from "../types";

export const ContactInstituteEmail = ({
  name,
  email,
  phone,
  subject,
  message,
}: ContactFormData) => (
  <EmailLayout preview={`New message from ${name}`}>
    <EmailHeading>New Contact Message</EmailHeading>
    <InfoTable
      data={[
        ["Name", name],
        ["Email", email],
        ["Phone", phone ?? "—"],
        ["Subject", subject],
      ]}
    />
    <Text style={subHeading}>Message</Text>
    <Text style={messageStyle}>{message}</Text>
    <GoldButton href={`mailto:${email}`}>Reply to {name}</GoldButton>
  </EmailLayout>
);

const subHeading = {
  fontSize: "12px",
  fontWeight: 600,
  color: "#6B7280",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  marginBottom: "8px",
};

const messageStyle = {
  fontSize: "13px",
  color: "#374151",
  lineHeight: "1.7",
  backgroundColor: "#F9FAFB",
  padding: "12px",
  borderLeft: "3px solid #D4921A",
  marginBottom: "24px",
};
