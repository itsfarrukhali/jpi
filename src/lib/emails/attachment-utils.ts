// src/lib/emails/attachment-utils.ts
import fs from "fs";

export interface AttachmentConfig {
  filename: string;
  content?: string; // base64 encoded
  path?: string; // URL to remote file
  contentId?: string; // for inline images (CID)
}

/**
 * Convert a local file to base64 encoded attachment
 * @param filePath - Absolute path to the file
 * @param filename - Name for the attachment
 * @returns Attachment config with base64 content
 */
export function createAttachmentFromFile(
  filePath: string,
  filename: string,
): AttachmentConfig {
  try {
    const fileContent = fs.readFileSync(filePath);
    const base64Content = fileContent.toString("base64");
    return {
      filename,
      content: base64Content,
    };
  } catch (error) {
    throw new Error(`Failed to read file at ${filePath}: ${error}`);
  }
}

/**
 * Create attachment from remote file URL
 * @param url - URL to the remote file
 * @param filename - Name for the attachment
 * @returns Attachment config with path
 */
export function createAttachmentFromUrl(
  url: string,
  filename: string,
): AttachmentConfig {
  return {
    filename,
    path: url,
  };
}

/**
 * Create attachment from base64 content
 * @param base64Content - Base64 encoded file content
 * @param filename - Name for the attachment
 * @returns Attachment config
 */
export function createAttachmentFromBase64(
  base64Content: string,
  filename: string,
): AttachmentConfig {
  return {
    filename,
    content: base64Content,
  };
}

/**
 * Create an inline image attachment with CID (Content ID)
 * Useful for embedding images in email body: <img src="cid:image-id" />
 * @param url - URL to the image or base64 content
 * @param filename - Name for the attachment
 * @param contentId - CID to reference in HTML (e.g., "logo-image")
 * @returns Attachment config with contentId
 */
export function createInlineImageAttachment(
  urlOrBase64: string,
  filename: string,
  contentId: string,
): AttachmentConfig {
  // Determine if it's a URL or base64
  const isUrl =
    urlOrBase64.startsWith("http://") || urlOrBase64.startsWith("https://");

  if (isUrl) {
    return {
      filename,
      path: urlOrBase64,
      contentId,
    };
  } else {
    return {
      filename,
      content: urlOrBase64,
      contentId,
    };
  }
}

/**
 * Validate attachment file size (per Resend's 40MB limit)
 * @param sizeInBytes - File size in bytes
 * @returns true if valid, false otherwise
 */
export function isValidAttachmentSize(sizeInBytes: number): boolean {
  const MAX_SIZE_MB = 40;
  const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
  return sizeInBytes <= MAX_SIZE_BYTES;
}

/**
 * Get file size in bytes from file path
 * @param filePath - Absolute path to the file
 * @returns File size in bytes
 */
export function getFileSizeInBytes(filePath: string): number {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    throw new Error(`Failed to get file size: ${error}`);
  }
}

/**
 * Validate total attachment size across multiple attachments
 * @param attachments - Array of attachment configs
 * @returns true if total size is valid, false otherwise
 */
export function isTotalAttachmentSizeValid(
  attachments: AttachmentConfig[],
): boolean {
  const MAX_TOTAL_SIZE_MB = 40;
  const MAX_TOTAL_SIZE_BYTES = MAX_TOTAL_SIZE_MB * 1024 * 1024;

  let totalSize = 0;
  for (const attachment of attachments) {
    if (attachment.content) {
      // Rough estimation: base64 content is ~33% larger than binary
      const estimatedSize = (attachment.content.length / 4) * 3;
      totalSize += estimatedSize;
    }
  }

  return totalSize <= MAX_TOTAL_SIZE_BYTES;
}
