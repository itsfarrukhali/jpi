// src/lib/emails/templates/attachment-notification.tsx
import * as React from "react";

interface AttachmentNotificationEmailProps {
  recipientName?: string;
  subject: string;
  message: string;
  attachmentName: string;
  attachmentCount: number;
  instituteEmail?: string;
}

export const AttachmentNotificationEmail = ({
  recipientName = "User",
  subject,
  message,
  attachmentName,
  attachmentCount = 1,
  instituteEmail = "info@jpikhi.edu.pk",
}: AttachmentNotificationEmailProps) => (
  <div
    style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6, color: "#333" }}
  >
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      {/* Header */}
      <div
        style={{
          marginBottom: "30px",
          paddingBottom: "20px",
          borderBottom: "2px solid #0066cc",
        }}
      >
        <h1 style={{ margin: 0, color: "#0066cc", fontSize: "28px" }}>
          JPI - Document Notification
        </h1>
      </div>

      {/* Greeting */}
      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "16px", marginBottom: "10px" }}>
          Dear {recipientName},
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          marginBottom: "30px",
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <h2 style={{ color: "#0066cc", marginTop: 0 }}>{subject}</h2>
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.8",
            whiteSpace: "pre-wrap",
          }}
        >
          {message}
        </p>
      </div>

      {/* Attachment Info */}
      <div
        style={{
          marginBottom: "30px",
          backgroundColor: "#e8f4f8",
          padding: "15px",
          borderLeft: "4px solid #0066cc",
          borderRadius: "3px",
        }}
      >
        <p
          style={{ margin: "0 0 10px 0", fontWeight: "bold", color: "#0066cc" }}
        >
          📎 Attachment Information
        </p>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          <strong>File:</strong> {attachmentName}
        </p>
        <p style={{ margin: "5px 0", fontSize: "14px" }}>
          <strong>Total Attachments:</strong> {attachmentCount}
        </p>
        <p style={{ margin: "5px 0", fontSize: "13px", color: "#666" }}>
          Please review the attached file(s) for important information.
        </p>
      </div>

      {/* Action Items / Next Steps */}
      <div style={{ marginBottom: "30px" }}>
        <p style={{ fontSize: "14px", color: "#666" }}>
          If you have any questions or need further assistance, please
          don&apos;t hesitate to reach out to us.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          paddingTop: "20px",
          marginTop: "30px",
          fontSize: "12px",
          color: "#666",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          <strong>Jinnah Polytechnic Institute (JPI)</strong>
        </p>
        <p style={{ margin: "5px 0" }}>
          Email:{" "}
          <a
            href={`mailto:${instituteEmail}`}
            style={{ color: "#0066cc", textDecoration: "none" }}
          >
            {instituteEmail}
          </a>
        </p>
        <p style={{ margin: "5px 0", marginTop: "15px", color: "#999" }}>
          © {new Date().getFullYear()} Jinnah Polytechnic Institute. All rights
          reserved.
        </p>
      </div>
    </div>
  </div>
);
