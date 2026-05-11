// src/lib/emails/templates/admissions.tsx
import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { EmailHeading } from "../components/heading";
import { InfoTable } from "../components/info-table";
import { GoldButton } from "../components/gold-button";
import type { AdmissionInquiryData } from "../types";

export const AdmissionInquiryEmail = ({
  studentName,
  fatherName,
  email,
  phone,
  program,
  technology,
  shift,
  message,
}: AdmissionInquiryData) => (
  <EmailLayout preview={`New admission inquiry from ${studentName}`}>
    <EmailHeading>New Admission Inquiry</EmailHeading>
    <InfoTable
      data={[
        ["Full Name", studentName],
        ["Father/Guardian", fatherName],
        ["Email", email],
        ["Phone", phone],
        ["Program", program],
        ...(technology
          ? ([["Technology", technology]] as [string, string][])
          : []),
        ...(shift ? ([["Shift", shift]] as [string, string][]) : []),
      ]}
    />
    {message && (
      <>
        <Text style={subHeading}>Additional Message</Text>
        <Text style={messageStyle}>{message}</Text>
      </>
    )}
    <GoldButton href={`mailto:${email}`}>Reply to {studentName}</GoldButton>
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
