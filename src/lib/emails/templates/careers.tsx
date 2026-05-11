// src/lib/emails/templates/careers.tsx
import { Text } from "@react-email/components";
import { EmailLayout } from "../components/email-layout";
import { EmailHeading } from "../components/heading";
import { InfoTable } from "../components/info-table";
import type { CareersApplicationData } from "../types";

type CareersEmailProps = CareersApplicationData & { attachmentName?: string };

export const CareersApplicationEmail = ({
  applicantName,
  email,
  phone,
  position,
  qualification,
  experience,
  coverLetter,
  attachmentName,
}: CareersEmailProps) => (
  <EmailLayout preview={`New job application from ${applicantName}`}>
    <EmailHeading>New Job Application</EmailHeading>
    <InfoTable
      data={[
        ["Applicant", applicantName],
        ["Email", email],
        ["Phone", phone],
        ["Position", position],
        ["Qualification", qualification],
        ["Experience", experience],
        ...(attachmentName
          ? [["Attachment", attachmentName] as [string, string]]
          : ([] as [string, string][])),
      ]}
    />
    {coverLetter && (
      <>
        <Text style={subHeading}>Cover Letter</Text>
        <Text style={messageStyle}>{coverLetter}</Text>
      </>
    )}
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
