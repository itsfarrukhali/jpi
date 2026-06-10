"use client";

import { CldUploadWidget } from "next-cloudinary";
import type { CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { Loader2, Upload } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type UploadKind = "image" | "pdf";

interface CloudinaryUploadButtonProps {
  accept: UploadKind;
  folder: string;
  multiple?: boolean;
  onUpload: (url: string) => void;
}

function isUploadInfo(info: unknown): info is CloudinaryUploadWidgetInfo {
  return typeof info === "object" && info !== null && "secure_url" in info;
}

export function CloudinaryUploadButton({
  accept,
  folder,
  multiple = false,
  onUpload,
}: CloudinaryUploadButtonProps) {
  const isPdf = accept === "pdf";
  const isConfigured = Boolean(
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME &&
    process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  );

  if (!isConfigured) {
    return (
      <Button
        type="button"
        variant="outline"
        disabled
        title="Configure the Cloudinary environment variables to enable uploads"
      >
        <Upload />
        Cloudinary not configured
      </Button>
    );
  }

  return (
    <CldUploadWidget
      signatureEndpoint="/api/admin/cloudinary/sign"
      options={{
        folder: `jpi/${folder}`,
        multiple,
        maxFiles: multiple ? 100 : 1,
        resourceType: "image",
        clientAllowedFormats: isPdf
          ? ["pdf"]
          : ["jpg", "jpeg", "png", "webp", "avif"],
        maxFileSize: isPdf ? 15_000_000 : undefined,
        maxImageWidth: isPdf ? undefined : 2560,
        maxImageHeight: isPdf ? undefined : 2560,
        validateMaxWidthHeight: false,
        sources: ["local", "url", "camera"],
      }}
      onSuccess={(result) => {
        if (isUploadInfo(result.info)) {
          onUpload(result.info.secure_url);
        }
      }}
      onError={() => toast.error("Media upload failed")}
    >
      {({ open, isLoading }) => (
        <Button
          type="button"
          variant="outline"
          disabled={isLoading}
          onClick={() => open()}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : <Upload />}
          Upload {isPdf ? "PDF" : "image"}
        </Button>
      )}
    </CldUploadWidget>
  );
}
