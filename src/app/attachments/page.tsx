// src/app/attachments/page.tsx
"use client";

/**
 * Email with Attachments Example
 *
 * Demonstrates how to send emails with file attachments.
 * Supports both URL-based and base64-encoded attachments.
 *
 * Key concepts:
 * - Attachments can be URLs or base64 content
 * - Maximum total attachment size is 40MB
 * - Cannot use attachments with batch.send()
 *
 * @see https://resend.com/docs/send-with-attachments
 */

import { useState } from "react";

interface AttachmentFormData {
  to: string;
  subject: string;
  attachmentType: "url" | "file";
  attachmentUrl?: string;
  attachmentFile?: File;
  htmlContent: string;
}

export default function AttachmentsPage() {
  const [formData, setFormData] = useState<AttachmentFormData>({
    to: "delivered@resend.dev",
    subject: "Document with Attachment",
    attachmentType: "url",
    attachmentUrl: "https://resend.com/static/sample/invoice.pdf",
    htmlContent: "<p>Please find your document attached below.</p>",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    data?: string;
    error?: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({
      ...prev,
      attachmentFile: file,
    }));
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        // Extract base64 from data URL
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      let attachments:
        | Array<{
            filename: string;
            content?: string;
            path?: string;
          }>
        | undefined;

      // Prepare attachment based on type
      if (formData.attachmentType === "url" && formData.attachmentUrl) {
        attachments = [
          {
            filename: "document.pdf",
            path: formData.attachmentUrl,
          },
        ];
      } else if (
        formData.attachmentType === "file" &&
        formData.attachmentFile
      ) {
        const base64Content = await fileToBase64(formData.attachmentFile);
        attachments = [
          {
            filename: formData.attachmentFile.name,
            content: base64Content,
          },
        ];
      }

      const response = await fetch("/api/send-attachment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: formData.to,
          subject: formData.subject,
          htmlContent: formData.htmlContent,
          attachments,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setResult({ error: data.error || "Failed to send email" });
      } else {
        setResult({ data: JSON.stringify(data) });
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setResult({ error: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Email with Attachments</h1>
        <p className="text-gray-600">
          Send emails with file attachments (URL or uploaded file).
        </p>
      </div>

      {/* Demo Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg border border-gray-200"
      >
        <div>
          <label htmlFor="to" className="block text-sm font-medium mb-1">
            To
          </label>
          <input
            id="to"
            type="email"
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Attachment Type
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="attachmentType"
                value="url"
                checked={formData.attachmentType === "url"}
                onChange={handleInputChange}
                className="mr-2"
              />
              From URL
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="attachmentType"
                value="file"
                checked={formData.attachmentType === "file"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Upload File
            </label>
          </div>
        </div>

        {formData.attachmentType === "url" && (
          <div>
            <label
              htmlFor="attachmentUrl"
              className="block text-sm font-medium mb-1"
            >
              Attachment URL
            </label>
            <input
              id="attachmentUrl"
              type="url"
              name="attachmentUrl"
              value={formData.attachmentUrl || ""}
              onChange={handleInputChange}
              placeholder="https://example.com/document.pdf"
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
            />
          </div>
        )}

        {formData.attachmentType === "file" && (
          <div>
            <label
              htmlFor="attachmentFile"
              className="block text-sm font-medium mb-1"
            >
              Upload File
            </label>
            <input
              id="attachmentFile"
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
            />
            {formData.attachmentFile && (
              <p className="text-sm text-gray-600 mt-1">
                Selected: {formData.attachmentFile.name} (
                {(formData.attachmentFile.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>
        )}

        <div>
          <label
            htmlFor="htmlContent"
            className="block text-sm font-medium mb-1"
          >
            Email Content (HTML)
          </label>
          <textarea
            id="htmlContent"
            name="htmlContent"
            value={formData.htmlContent}
            onChange={handleInputChange}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-black"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-900 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Email with Attachment"}
        </button>
      </form>

      {/* Info Box */}
      <div className="mt-8 p-4 rounded-lg bg-blue-50 border border-blue-200">
        <h3 className="font-medium mb-2">Attachment Details</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• Max total attachment size: 40MB</li>
          <li>• Supports URL-based and local file attachments</li>
          <li>• Base64 encoded for local files</li>
          <li>• Cannot use attachments with batch.send()</li>
        </ul>
      </div>

      {/* Results Display */}
      {result && (
        <div className="mt-8 p-4 rounded-lg border">
          {result.error ? (
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <h3 className="font-medium text-red-800">Error</h3>
              <p className="text-red-700 text-sm">{result.error}</p>
            </div>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <h3 className="font-medium text-green-800">
                Email Sent Successfully!
              </h3>
              {result.data && (
                <p className="text-green-700 text-sm">
                  Message ID: {result.data}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Code Examples */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Code Examples</h2>

        <div className="space-y-6">
          {/* Example 1: URL Attachment */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">
              Example 1: Remote File Attachment
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-xs">
              {`import { resend } from '@/lib/emails/resend';

await resend.emails.send({
  from: 'info@jpikhi.edu.pk',
  to: ['user@example.com'],
  subject: 'Your Invoice',
  html: '<p>Please find your invoice attached.</p>',
  attachments: [
    {
      filename: 'invoice.pdf',
      path: 'https://example.com/invoices/123.pdf',
    },
  ],
});`}
            </pre>
          </div>

          {/* Example 2: Base64 Attachment */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">
              Example 2: Local File Attachment
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-xs">
              {`import { resend } from '@/lib/emails/resend';
import fs from 'fs';

const filepath = './documents/invoice.pdf';
const attachment = fs.readFileSync(filepath).toString('base64');

await resend.emails.send({
  from: 'info@jpikhi.edu.pk',
  to: ['user@example.com'],
  subject: 'Your Invoice',
  html: '<p>Please find your invoice attached.</p>',
  attachments: [
    {
      filename: 'invoice.pdf',
      content: attachment,
    },
  ],
});`}
            </pre>
          </div>

          {/* Example 3: Inline Image */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">
              Example 3: Inline Image (CID)
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-xs">
              {`import { resend } from '@/lib/emails/resend';

await resend.emails.send({
  from: 'info@jpikhi.edu.pk',
  to: ['user@example.com'],
  subject: 'Welcome to JPI',
  html: '<img src="cid:logo-image" /><p>Welcome!</p>',
  attachments: [
    {
      filename: 'logo.png',
      path: 'https://example.com/logo.png',
      contentId: 'logo-image',
    },
  ],
});`}
            </pre>
          </div>

          {/* Example 4: Using Utility Functions */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold mb-2">
              Example 4: Using Attachment Utilities
            </h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded overflow-x-auto text-xs">
              {`import { 
  createAttachmentFromFile,
  createAttachmentFromUrl,
  createInlineImageAttachment 
} from '@/lib/emails/attachment-utils';

// From local file
const fileAttachment = createAttachmentFromFile(
  './documents/report.pdf',
  'report.pdf'
);

// From URL
const urlAttachment = createAttachmentFromUrl(
  'https://example.com/invoice.pdf',
  'invoice.pdf'
);

// Inline image
const logoAttachment = createInlineImageAttachment(
  'https://example.com/logo.png',
  'logo.png',
  'logo-image'
);

await resend.emails.send({
  from: 'info@jpikhi.edu.pk',
  to: ['user@example.com'],
  subject: 'Documents',
  html: '<img src="cid:logo-image" /><p>Your documents</p>',
  attachments: [fileAttachment, logoAttachment],
});`}
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
