import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { getAuthAdmin, forbidden, unauthorized } from "@/lib/auth/server";

type SignableValue = string | number | boolean | string[];

function canManageFolder(
  admin: NonNullable<Awaited<ReturnType<typeof getAuthAdmin>>>,
  folder: string,
) {
  const contentType = folder.startsWith("jpi/careers")
    ? "CAREERS"
    : folder.startsWith("jpi/programs")
      ? "PROGRAMS"
      : "NEWS";
  return (
    admin.role === "SUPER_ADMIN" ||
    (admin.role === "ADMIN" &&
      ["READ_WRITE", "FULL_ACCESS"].includes(admin.permission) &&
      (admin.permission === "FULL_ACCESS" ||
        admin.manageContent.includes(contentType)))
  );
}

function signParams(params: Record<string, SignableValue>, secret: string) {
  const payload = Object.entries(params)
    .filter(([, value]) => value !== "" && value !== undefined)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `${key}=${Array.isArray(value) ? value.join(",") : value}`)
    .join("&");

  return createHash("sha1").update(`${payload}${secret}`).digest("hex");
}

export async function POST(request: Request) {
  const admin = await getAuthAdmin();
  if (!admin) return unauthorized();

  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  if (!apiSecret) {
    return NextResponse.json(
      { error: "Cloudinary is not configured" },
      { status: 503 },
    );
  }

  const body = (await request.json()) as {
    paramsToSign?: Record<string, SignableValue>;
  };
  const paramsToSign = body.paramsToSign;
  const folder = paramsToSign?.folder;

  const allowedFolder =
    typeof folder === "string" &&
    (folder.startsWith("jpi/news") ||
      folder.startsWith("jpi/careers") ||
      folder.startsWith("jpi/programs"));

  if (!paramsToSign || !allowedFolder) {
    return NextResponse.json({ error: "Invalid upload parameters" }, { status: 400 });
  }
  if (!canManageFolder(admin, folder)) return forbidden();

  return NextResponse.json({ signature: signParams(paramsToSign, apiSecret) });
}
